import { useEffect, useState } from "react";
import type { City, Place } from "../types";

const ROTATE_MS = 4500;

interface HeroImage {
  src: string;
  alt: string;
}

interface CityHeroCarouselProps {
  city: City;
  places: Place[];
}

/**
 * Auto-rotating photo strip at the very top of a city page: the city's own
 * image plus every place image already present in the data (design.md
 * section 7, "חריג נוסף" dated 24/08/2026). Consumes existing `image`
 * fields only - never fetches or invents anything, so it works fully
 * offline like the rest of the app.
 */
export default function CityHeroCarousel({ city, places }: CityHeroCarouselProps) {
  const images: HeroImage[] = [];
  const seen = new Set<string>();

  if (city.image) {
    images.push({ src: city.image, alt: city.name });
    seen.add(city.image);
  }
  for (const place of places) {
    if (place.image && !seen.has(place.image)) {
      images.push({ src: place.image, alt: place.name });
      seen.add(place.image);
    }
  }

  const [index, setIndex] = useState(0);
  const multiple = images.length > 1;

  useEffect(() => {
    if (!multiple) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [multiple, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative h-52 w-full overflow-hidden bg-surface-container">
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {multiple && (
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
          {images.map((img, i) => (
            <span
              key={img.src}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-on-primary" : "bg-on-primary/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
