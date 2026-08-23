import { cityContents } from "./cities/index";

/** Compatibility shim: CityPage still renders warnings as plain strings. */
const byCity: Record<string, string[]> = {};

for (const content of cityContents) {
  byCity[content.city.id] = content.warnings.map((w) => w.text);
}

export const warningsByCity: Record<string, string[]> = byCity;
