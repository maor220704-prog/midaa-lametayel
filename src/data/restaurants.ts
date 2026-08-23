import { cityContents } from "./cities/index";

/** Compatibility shim: the shape CityPage still consumes. */
export interface Restaurant {
  name: string;
  description: string;
}

const byCity: Record<string, Restaurant[]> = {};

for (const content of cityContents) {
  byCity[content.city.id] = content.places
    .filter((p) => p.category === "restaurant")
    .map((p) => ({ name: p.name, description: p.description }));
}

export const restaurantsByCity: Record<string, Restaurant[]> = byCity;
