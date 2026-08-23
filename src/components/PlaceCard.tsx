import type { Category, Place } from "../types";

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

export default function PlaceCard({ place, showCategory }: PlaceCardProps) {
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
    </li>
  );
}
