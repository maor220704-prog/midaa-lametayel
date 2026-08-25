#!/usr/bin/env node
/**
 * One-time (re-runnable) pipeline that sourced the Phase 6 city/place photos.
 *
 * For every entry in the manifest below it:
 *  1. Looks the photo up on Unsplash's public photo-detail endpoint (the same
 *     one unsplash.com itself calls) to get a verified images.unsplash.com
 *     URL plus photographer/attribution data.
 *  2. Refuses anything marked "premium"/"plus" (Unsplash+) - only the free
 *     license is in scope here - or anything not actually served from
 *     images.unsplash.com.
 *  3. Downloads it, compresses to WebP with sharp, and writes it into
 *     src/assets/images/ so Vite hashes it for cache-busting.
 *  4. Writes docs/IMAGE-CREDITS.md from the collected attribution data.
 *
 * Run manually: node scripts/fetch-source-images.mjs
 * Safe to re-run - it just re-downloads and overwrites the same files.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = join(ROOT, "src", "assets", "images");
const CREDITS_PATH = join(ROOT, "docs", "IMAGE-CREDITS.md");

/** city photo width ~1100px / q78, place photo width ~760px / q72 - both land near 40-100KB. */
const MANIFEST = [
  { file: "hanoi.webp", id: "blxGpzeEU0s", kind: "city", city: "האנוי", width: 1100 },
  { file: "hanoi-hoan-kiem-lake.webp", id: "EGXezZS3aGQ", kind: "place", city: "האנוי", place: "אגם הואן קיים", width: 760 },
  { file: "hanoi-train-street.webp", id: "EKFPwbPkDec", kind: "place", city: "האנוי", place: "רחוב הרכבת", width: 760 },
  { file: "hanoi-st-joseph-cathedral.webp", id: "NgbZELCsWks", kind: "place", city: "האנוי", place: "קתדרלת סנט ג'וזף", width: 760 },
  { file: "hanoi-ho-tay-lake.webp", id: "VzuWVdGKczY", kind: "place", city: "האנוי", place: "אגם הו טיי", width: 760 },

  { file: "ha-long-bay.webp", id: "wPquuVxGqBc", kind: "city", city: "הא לונג ביי", width: 1100 },
  { file: "ha-long-bay-ti-top-island.webp", id: "uUFv68dvLDM", kind: "place", city: "הא לונג ביי", place: "אי טי טופ", width: 760 },
  { file: "ha-long-bay-sung-sot-cave.webp", id: "SIxLSGT4yhM", kind: "place", city: "הא לונג ביי", place: "מערת סונג סוט", width: 760 },
  { file: "ha-long-bay-cua-van-floating-village.webp", id: "J0zEPcX9Nxw", kind: "place", city: "הא לונג ביי", place: "הכפר הצף קואה ואן", width: 760 },

  { file: "phu-quoc.webp", id: "3wqun2PnZqo", kind: "city", city: "פו קווק", width: 1100 },
  { file: "phu-quoc-sao-beach.webp", id: "r6CIzamxaek", kind: "place", city: "פו קווק", place: "חוף סאו", width: 760 },
  { file: "phu-quoc-hon-thom-cable-car.webp", id: "YIb2vJVZnPQ", kind: "place", city: "פו קווק", place: "הרכבל להון תום", width: 760 },
  { file: "phu-quoc-long-beach.webp", id: "2fhd8aZTn38", kind: "place", city: "פו קווק", place: "החוף הארוך", width: 760 },

  { file: "ho-chi-minh-city.webp", id: "kxftUsMi8us", kind: "city", city: "הו צ'י מין סיטי", width: 1100 },
  { file: "ho-chi-minh-city-independence-palace.webp", id: "NuIBQduatNQ", kind: "place", city: "הו צ'י מין סיטי", place: "ארמון העצמאות", width: 760 },
  { file: "ho-chi-minh-city-central-post-office.webp", id: "3N6qvQEAH_c", kind: "place", city: "הו צ'י מין סיטי", place: "בית הדואר המרכזי", width: 760 },
  { file: "ho-chi-minh-city-bitexco-skydeck.webp", id: "Iaf_zFhiKRM", kind: "place", city: "הו צ'י מין סיטי", place: "מגדל ביטקסקו", width: 760 },

  { file: "da-nang.webp", id: "6Oy-fhKD7Y4", kind: "city", city: "דה נאנג", width: 1100 },
  { file: "da-nang-golden-bridge.webp", id: "0e-ius7wupA", kind: "place", city: "דה נאנג", place: "באנה הילס וגשר הזהב", width: 760 },
  { file: "da-nang-marble-mountains.webp", id: "NZqFj9W1ccU", kind: "place", city: "דה נאנג", place: "הרי השיש", width: 760 },
  { file: "da-nang-my-khe-beach.webp", id: "TT43xdSizJ8", kind: "place", city: "דה נאנג", place: "חוף מי קה", width: 760 },
  { file: "da-nang-dragon-bridge-fire-show.webp", id: "NsUrkNKt-kY", kind: "place", city: "דה נאנג", place: "מופע האש של גשר הדרקון", width: 760 },

  { file: "hoi-an.webp", id: "mYNGbkIBIGM", kind: "city", city: "הוֹיאן", width: 1100 },
  { file: "hoi-an-japanese-covered-bridge.webp", id: "ULxMnptFxT8", kind: "place", city: "הוֹיאן", place: "הגשר היפני המכוסה", width: 760 },
  { file: "hoi-an-an-bang-beach.webp", id: "kun-lfBEDCM", kind: "place", city: "הוֹיאן", place: "חוף אן באנג", width: 760 },
  { file: "hoi-an-cam-thanh-basket-boat.webp", id: "54033V0YFYU", kind: "place", city: "הוֹיאן", place: "שיט בסירת הסל של קאם טהאן", width: 760 },
  { file: "hoi-an-tra-que-village.webp", id: "ITLDhj6c5Bk", kind: "place", city: "הוֹיאן", place: "כפר הירקות טרא קווה", width: 760 },

  { file: "phuket.webp", id: "7pEPjI1rJKA", kind: "city", city: "פוקט", width: 1100 },
  { file: "phuket-big-buddha.webp", id: "q8cKhznDHtY", kind: "place", city: "פוקט", place: "הבודהה הגדול", width: 760 },
  { file: "phuket-promthep-cape.webp", id: "zDLQ8PWTa54", kind: "place", city: "פוקט", place: "כף פרומטפ", width: 760 },
  { file: "phuket-karon-viewpoint.webp", id: "yNH7orMyqUk", kind: "place", city: "פוקט", place: "תצפית קארון", width: 760 },
  { file: "phuket-wat-chalong.webp", id: "epS0eVO3ozA", kind: "place", city: "פוקט", place: "וואט צ'לונג", width: 760 },
];

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  const credits = [];

  for (const item of MANIFEST) {
    const detailRes = await fetch(`https://unsplash.com/napi/photos/${item.id}`, {
      headers: { Accept: "application/json" },
    });
    const r = await detailRes.json();

    if (r.premium || r.plus) {
      console.error("SKIP (Unsplash+/premium, not free-licensed):", item.file);
      continue;
    }
    if (!r.urls.raw.startsWith("https://images.unsplash.com/")) {
      console.error("SKIP (not served from images.unsplash.com):", item.file, r.urls.raw);
      continue;
    }

    const dlUrl = `${r.urls.raw}&fm=jpg&q=90&w=${item.width}&fit=max`;
    const imgRes = await fetch(dlUrl);
    if (!imgRes.ok) {
      console.error("DOWNLOAD FAILED:", item.file, imgRes.status);
      continue;
    }
    const buf = Buffer.from(await imgRes.arrayBuffer());

    const quality = item.kind === "city" ? 78 : 72;
    const webpBuf = await sharp(buf)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
    await writeFile(join(IMAGES_DIR, item.file), webpBuf);

    console.log(`OK ${item.file}  ${(webpBuf.length / 1024).toFixed(0)}KB  by ${r.user.name}`);

    credits.push({
      ...item,
      description: r.alt_description || r.description || "",
      photographer: r.user.name,
      photographerUrl: `${r.user.links.html}?utm_source=midaa_lametayel&utm_medium=referral`,
      photoUrl: `${r.links.html}?utm_source=midaa_lametayel&utm_medium=referral`,
    });
  }

  await writeFile(CREDITS_PATH, renderCredits(credits));
  console.log(`\nDone. ${credits.length}/${MANIFEST.length} images written to ${IMAGES_DIR}`);
  console.log(`Credits written to ${CREDITS_PATH}`);
}

function renderCredits(credits) {
  const lines = [
    "# קרדיטים לתמונות",
    "",
    "כל התמונות באפליקציה מקורן ב-Unsplash, ברישיון Unsplash (חופשי לשימוש מסחרי,",
    "לא נדרש קרדיט חוקית - אך נשמר כאן כנוהג טוב). נטענות תמיד מהאפליקציה עצמה",
    "(src/assets/images/), לעולם לא מ-CDN חיצוני - ראו design.md סעיף 9.",
    "",
    "נוצר על ידי `scripts/fetch-source-images.mjs`. להוספת תמונה חדשה - הוסיפו",
    "שורה למניפסט בסקריפט והריצו אותו מחדש.",
    "",
    "| קובץ | עיר | מקום | צלם/ת | קישור לתמונה |",
    "|---|---|---|---|---|",
  ];
  for (const c of credits) {
    lines.push(
      `| \`${c.file}\` | ${c.city} | ${c.place ?? "(תמונת עיר)"} | [${c.photographer}](${c.photographerUrl}) | [Unsplash](${c.photoUrl}) |`
    );
  }
  lines.push("");
  return lines.join("\n");
}

main();
