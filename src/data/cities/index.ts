import type { City, CityContent, CityId, Phrase, Place, Warning } from "../../types";

import { hanoi } from "./hanoi";
import { haLongBay } from "./ha-long-bay";
import { sapa } from "./sapa";
import { ninhBinh } from "./ninh-binh";
import { hoiAn } from "./hoi-an";
import { daNang } from "./da-nang";
import { hue } from "./hue";
import { dalat } from "./dalat";
import { muiNe } from "./mui-ne";
import { nhaTrang } from "./nha-trang";
import { hoChiMinhCity } from "./ho-chi-minh-city";
import { phuQuoc } from "./phu-quoc";
import { bangkok } from "./bangkok";
import { chiangMai } from "./chiang-mai";
import { pai } from "./pai";
import { kohSamuiKohPhangan } from "./koh-samui-koh-phangan";
import { phuket } from "./phuket";
import { krabi } from "./krabi";

/** In CITY_IDS order: Vietnam first, then Thailand. */
export const cityContents: CityContent[] = [
  // Vietnam
  hanoi,
  haLongBay,
  sapa,
  ninhBinh,
  hoiAn,
  daNang,
  hue,
  dalat,
  muiNe,
  nhaTrang,
  hoChiMinhCity,
  phuQuoc,
  // Thailand
  bangkok,
  chiangMai,
  pai,
  kohSamuiKohPhangan,
  phuket,
  krabi,
];

export const cities: City[] = cityContents.map((c) => c.city);

/**
 * The lookup maps are built once, at module load, so every page read is an
 * O(1) synchronous property access instead of a filter over every place.
 * Every CityId is covered because there is exactly one content file per id.
 */
const placesIndex = {} as Record<CityId, Place[]>;
const warningsIndex = {} as Record<CityId, Warning[]>;

const allPlaces: Place[] = [];
const allWarnings: Warning[] = [];
const allCityPhrases: Phrase[] = [];

for (const content of cityContents) {
  placesIndex[content.city.id] = content.places;
  warningsIndex[content.city.id] = content.warnings;
  allPlaces.push(...content.places);
  allWarnings.push(...content.warnings);
  allCityPhrases.push(...content.phrases);
}

export const places: Place[] = allPlaces;
export const warnings: Warning[] = allWarnings;
/** Every city-specific slang phrase, flattened. General phrases live in ../phrases. */
export const cityPhrases: Phrase[] = allCityPhrases;

export const placesByCity: Record<CityId, Place[]> = placesIndex;
export const warningsByCity: Record<CityId, Warning[]> = warningsIndex;
