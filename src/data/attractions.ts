import { cityContents } from "./cities/index";

/** Compatibility shim: the shape CityPage still consumes. */
export interface Attraction {
  name: string;
  description: string;
}

const byCity: Record<string, Attraction[]> = {};

for (const content of cityContents) {
  byCity[content.city.id] = content.places
    .filter((p) => p.category === "attraction")
    .map((p) => ({ name: p.name, description: p.description }));
}

export const attractionsByCity: Record<string, Attraction[]> = byCity;
