#!/usr/bin/env node
/**
 * Mechanical content checks for src/data/cities/*.ts
 *
 * Catches the drift that matters when many agents write content in parallel:
 * a missing source, a Latin name that leaked into the Hebrew field, a duplicate
 * id, an invented-looking description. Run it manually:
 *
 *   node scripts/check-content.mjs
 *
 * It parses the files as text on purpose - no build step, no dependencies, so it
 * still works when the project does not compile.
 *
 * The rules it enforces come from docs/CONTENT-GUIDE.md and PRD.md section 15.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = join(ROOT, "src", "data", "cities");

const MIN_WORDS = 12;
const MAX_WORDS = 90;
const MIN_INFO_WORDS = 50;
const MAX_INFO_WORDS = 160;

const errors = [];
const warnings = [];

const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

/** Grabs the string literal value of `field: "..."` starting at a given offset. */
function fieldValue(block, field) {
  const m = block.match(
    new RegExp(`\\b${field}\\s*:\\s*(?:\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`)
  );
  return m ? m[1] : undefined;
}

function countWords(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Splits the `places: [ ... ]` array into one text block per object.
 * Brace-depth scan rather than a regex, so nested objects (coords) are safe.
 */
function objectBlocks(source, arrayName) {
  const start = source.indexOf(`${arrayName}:`);
  if (start === -1) return [];
  const open = source.indexOf("[", start);
  if (open === -1) return [];

  const blocks = [];
  let depth = 0;
  let objStart = -1;
  let inString = false;
  let quote = "";

  for (let i = open; i < source.length; i++) {
    const ch = source[i];
    const prev = source[i - 1];

    if (inString) {
      if (ch === quote && prev !== "\\") inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      quote = ch;
      continue;
    }
    if (ch === "]" && depth === 0) break;
    if (ch === "{") {
      if (depth === 0) objStart = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && objStart !== -1) {
        blocks.push(source.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }
  return blocks;
}

/**
 * Content files may hoist a repeated URL into a const and reference it from
 * several `sources` arrays. Collect those so the source check resolves them
 * instead of reporting a false "cites no source".
 */
function collectUrlConsts(source) {
  const map = new Map();
  const re = /(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*string\s*)?=\s*(?:\n\s*)?"(https?:\/\/[^"]+)"/g;
  let m;
  while ((m = re.exec(source)) !== null) map.set(m[1], m[2]);
  return map;
}

/** Every URL a `sources: [...]` array resolves to, inline or via a const. */
function resolveSources(rawList, urlConsts) {
  const urls = rawList.match(/https?:\/\/[^"'\s,]+/g) || [];
  const idents = rawList.match(/[A-Za-z_$][\w$]*/g) || [];
  for (const id of idents) {
    const url = urlConsts.get(id);
    if (url) urls.push(url);
  }
  return [...new Set(urls)];
}

const VALID_CATEGORIES = new Set([
  "restaurant",
  "attraction",
  "scenic",
  "market",
  "tailor",
  "special",
]);

/** Latin letters appearing in a field that must be Hebrew transliteration. */
const LATIN_RUN = /[A-Za-z]{3,}/;

const allPhraseIds = new Map();

async function checkFile(fileName) {
  const source = await readFile(join(CONTENT_DIR, fileName), "utf8");
  const file = basename(fileName);
  const cityId = file.replace(/\.ts$/, "");
  const urlConsts = collectUrlConsts(source);

  const places = objectBlocks(source, "places");
  const warningBlocks = objectBlocks(source, "warnings");
  const phraseBlocks = objectBlocks(source, "phrases");

  // ---- city.generalInfo ----
  const info = fieldValue(source, "generalInfo");
  if (info) {
    const w = countWords(info);
    if (w < MIN_INFO_WORDS || w > MAX_INFO_WORDS) {
      warn(file, `generalInfo is ${w} words (expected ${MIN_INFO_WORDS}-${MAX_INFO_WORDS})`);
    }
  } else if (places.length > 0) {
    warn(file, "has places but no generalInfo");
  }

  // ---- places ----
  const placeIds = new Set();
  for (const block of places) {
    const id = fieldValue(block, "id");
    const name = fieldValue(block, "name");
    const nameLatin = fieldValue(block, "nameLatin");
    const description = fieldValue(block, "description");
    const category = fieldValue(block, "category");
    const label = id || name || "(unnamed place)";

    if (!id) err(file, `place missing id: ${(name || block.slice(0, 60)).trim()}`);
    else if (placeIds.has(id)) err(file, `duplicate place id "${id}"`);
    else placeIds.add(id);

    if (!name) err(file, `place "${label}" missing name`);
    else if (LATIN_RUN.test(name)) {
      err(file, `place "${label}" has Latin script in the Hebrew name field: "${name}"`);
    }

    if (!nameLatin) err(file, `place "${label}" missing nameLatin (needed for the map link)`);

    if (!category) err(file, `place "${label}" missing category`);
    else if (!VALID_CATEGORIES.has(category)) {
      err(file, `place "${label}" has unknown category "${category}"`);
    }

    if (!description) {
      err(file, `place "${label}" missing description`);
    } else {
      const w = countWords(description);
      if (w < MIN_WORDS) warn(file, `place "${label}" description is only ${w} words`);
      if (w > MAX_WORDS) warn(file, `place "${label}" description is ${w} words (max ${MAX_WORDS})`);
    }

    // The anti-fabrication rule: no source, no entry.
    const sourcesMatch = block.match(/sources\s*:\s*\[([\s\S]*?)\]/);
    if (!sourcesMatch) {
      err(file, `place "${label}" has no sources array`);
    } else {
      const urls = resolveSources(sourcesMatch[1], urlConsts);
      if (urls.length === 0) err(file, `place "${label}" cites no source URL`);
      // Businesses can close; institutions cannot. Two sources for the former.
      if (
        urls.length < 2 &&
        (category === "restaurant" || category === "tailor")
      ) {
        warn(
          file,
          `place "${label}" is a ${category} with only ${urls.length} source (guide asks for 2)`
        );
      }
    }

    if (/\bcoords\s*:/.test(block)) {
      warn(file, `place "${label}" declares coords - confirm these were read from a real map, never estimated`);
    }
  }

  // ---- warnings ----
  const warningIds = new Set();
  for (const block of warningBlocks) {
    const id = fieldValue(block, "id");
    const text = fieldValue(block, "text");
    if (!id) err(file, "warning missing id");
    else if (warningIds.has(id)) err(file, `duplicate warning id "${id}"`);
    else warningIds.add(id);
    if (!text) err(file, `warning "${id || "?"}" missing text`);
  }

  // ---- phrases (ids must be unique across ALL files) ----
  for (const block of phraseBlocks) {
    const id = fieldValue(block, "id");
    if (!id) {
      err(file, "phrase missing id");
      continue;
    }
    if (allPhraseIds.has(id)) {
      err(file, `phrase id "${id}" already used in ${allPhraseIds.get(id)}`);
    } else {
      allPhraseIds.set(id, file);
    }
  }

  return { cityId, places: places.length, warnings: warningBlocks.length, hasInfo: Boolean(info) };
}

const files = (await readdir(CONTENT_DIR))
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .sort();

if (files.length === 0) {
  console.error(`No city content files found in ${CONTENT_DIR}`);
  process.exit(1);
}

const summary = [];
for (const f of files) summary.push(await checkFile(f));

const populated = summary.filter((s) => s.places > 0);
const empty = summary.filter((s) => s.places === 0);

console.log(`\nScanned ${files.length} city files.`);
console.log(`  with content: ${populated.length}`);
console.log(`  still empty:  ${empty.length}${empty.length ? "  (" + empty.map((s) => s.cityId).join(", ") + ")" : ""}`);
console.log(`  total places: ${summary.reduce((n, s) => n + s.places, 0)}`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(`  x ${e}`);
  console.log("");
  process.exit(1);
}

console.log("\nAll content checks passed.\n");
