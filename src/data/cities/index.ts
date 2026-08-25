import type { City, CityContent, CityId, Phrase, Place, Warning } from "../../types";

import { hanoi } from "./hanoi";
import { haLongBay } from "./ha-long-bay";
import { phuQuoc } from "./phu-quoc";
import { hoChiMinhCity } from "./ho-chi-minh-city";
import { daNang } from "./da-nang";
import { hoiAn } from "./hoi-an";
import { phuket } from "./phuket";

/**
 * In CITY_IDS order: the 7 cities actually on the trip itinerary.
 * The other 11 cities originally proposed in PRD.md section 9 were removed
 * in the Phase 6 expansion (24/08/2026) - see the note there.
 */
export const cityContents: CityContent[] = [
  // Vietnam
  hanoi,
  haLongBay,
  phuQuoc,
  hoChiMinhCity,
  daNang,
  hoiAn,
  // Thailand
  phuket,
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
