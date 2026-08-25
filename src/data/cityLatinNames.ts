import type { CityId } from "../types";

/**
 * The Latin/English city name used to build a Google Maps search query
 * (`${place.nameLatin}, ${CITY_LATIN_NAMES[place.cityId]}`). Kept separate
 * from `City.name`, which is the Hebrew name shown in the UI - this map
 * exists purely so the nav button has a real, unambiguous place to search
 * for, without ever needing to store coordinates (see docs/CONTENT-GUIDE.md
 * rule 5: coordinates are never invented, and the map link is built from
 * nameLatin + city instead).
 */
export const CITY_LATIN_NAMES: Record<CityId, string> = {
  hanoi: "Hanoi, Vietnam",
  "ha-long-bay": "Ha Long Bay, Vietnam",
  "phu-quoc": "Phu Quoc, Vietnam",
  "ho-chi-minh-city": "Ho Chi Minh City, Vietnam",
  "da-nang": "Da Nang, Vietnam",
  "hoi-an": "Hoi An, Vietnam",
  phuket: "Phuket, Thailand",
};
