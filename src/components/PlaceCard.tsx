import Icon from "./Icon";
import type { Category, Place } from "../types";
import { CITY_LATIN_NAMES } from "../data/cityLatinNames";

/**
 * Shown as a small badge only when a tab mixes categories, so the reader can
 * tell an attraction from a scenic spot inside the same list.
 */
const categoryLabel: Record<Category, string> = {
  restaurant: "מסעדה",
  attraction: "אטרקציה",
  scenic: "מקום יפה",
  market: "שוק",
  tailor: "חנות תפירה",
  special: "מיוחד",
};

interface PlaceCardProps {
  place: Place;
  /** Set when the surrounding tab shows more than one category. */
  showCategory?: boolean;
}

/**
 * Builds a Google Maps search link from the place's Latin name and city -
 * never from coordinates (see docs/CONTENT-GUIDE.md rule 5: coordinates are
 * never invented, so the nav button is always built from text instead).
 */
function buildMapsUrl(place: Place): string {
  const query = place.mapQuery ?? `${place.nameLatin}, ${CITY_LATIN_NAMES[place.cityId]}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function PlaceCard({ place, showCategory }: PlaceCardProps) {
  const mapsUrl = buildMapsUrl(place);

  return (
    <li className="rounded-xl bg-surface p-4 shadow-[0_8px_20px_-4px_rgba(115,121,113,0.12)]">
      {showCategory && (
        <span className="mb-2 inline-block rounded-full bg-secondary-container px-2.5 py-0.5 text-xs font-medium text-on-secondary-container">
          {categoryLabel[place.category]}
        </span>
      )}

      <p className="text-lg font-semibold text-on-surface">{place.name}</p>

      {/* The Latin name is what you type into a map or show to a taxi driver
          when the navigation button cannot open. */}
      <p dir="ltr" className="mt-0.5 text-right text-sm text-on-surface-variant/70">
        {place.nameLatin}
      </p>

      <p className="mt-2 leading-relaxed text-on-surface-variant">{place.description}</p>

      {place.image && (
        <img src={place.image} alt={place.name} className="mt-3 h-auto w-full rounded-lg" />
      )}

      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-halo inline-flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-95"
        >
          <Icon name="map" className="text-sm" />
          פתח בניווט
        </a>

        {place.infoUrl && (
          <a
            href={place.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-halo inline-flex items-center gap-1 rounded-full border border-outline-variant px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary active:scale-95"
          >
            <Icon name="info" className="text-sm" />
            מידע נוסף
          </a>
        )}
      </div>
    </li>
  );
}
