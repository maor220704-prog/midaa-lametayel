import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cities } from "../data/cities";
import { placesByCity, warningsByCity } from "../data/cities/index";
import { isCityId, type Category, type CityId } from "../types";
import Icon from "../components/Icon";
import PlaceCard from "../components/PlaceCard";
import CityHeroCarousel from "../components/CityHeroCarousel";

type TabKey = "info" | "food" | "see" | "shop" | "special" | "warnings";

/**
 * Tabs are a grouping of categories, not a mirror of them. Six chips wrap to
 * two rows at 375px and stay fully visible; one chip per category would be
 * eight, which forces a horizontal scroll that hides half of them.
 * Re-grouping later is an edit here, not a data migration.
 */
const TAB_GROUPS: {
  key: TabKey;
  label: string;
  icon: string;
  categories: Category[];
}[] = [
  { key: "info", label: "מידע כללי", icon: "info", categories: [] },
  { key: "food", label: "מסעדות", icon: "restaurant", categories: ["restaurant"] },
  { key: "see", label: "אטרקציות", icon: "tour", categories: ["attraction", "scenic"] },
  { key: "shop", label: "שווקים", icon: "storefront", categories: ["market", "tailor"] },
  { key: "special", label: "מיוחדים", icon: "auto_awesome", categories: ["special"] },
  { key: "warnings", label: "אזהרות", icon: "warning", categories: [] },
];

export default function CityPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find((c) => c.id === cityId);

  const validId: CityId | undefined = isCityId(cityId) ? cityId : undefined;
  const places = validId ? placesByCity[validId] : [];
  const warnings = validId ? warningsByCity[validId] : [];

  const placesFor = (categories: Category[]) =>
    places.filter((p) => categories.includes(p.category));

  const isCityPopulated = !!city?.generalInfo || places.length > 0;

  const sections = TAB_GROUPS.map((tab) => {
    const items = placesFor(tab.categories);
    let hasContent: boolean;
    if (tab.key === "info") hasContent = !!city?.generalInfo;
    // The warnings tab stays visible for any populated city and shows a
    // reassuring empty state, rather than vanishing (design.md section 6).
    else if (tab.key === "warnings") hasContent = isCityPopulated;
    else hasContent = items.length > 0;
    return { ...tab, items, hasContent };
  });

  const availableSections = sections.filter((s) => s.hasContent);

  const [activeTab, setActiveTab] = useState<TabKey | null>(
    availableSections[0]?.key ?? null
  );
  const currentTab = availableSections.some((s) => s.key === activeTab)
    ? activeTab
    : availableSections[0]?.key ?? null;

  const current = availableSections.find((s) => s.key === currentTab);

  if (!city) {
    return (
      <div className="min-h-screen bg-background px-4 py-6">
        <Link to="/" className="text-on-surface-variant">
          <Icon name="arrow_forward" className="align-middle" /> חזרה לרשימת הערים
        </Link>
        <p className="mt-6 text-on-surface-variant">העיר לא נמצאה.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CityHeroCarousel city={city} places={places} />

      <header className="header-elevated sticky top-0 z-10 bg-primary px-4 pb-3 pt-6 text-on-primary">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-on-primary/10"
              aria-label="חזרה לרשימת הערים"
            >
              <Icon name="arrow_forward" />
            </Link>
            <h1 className="text-xl font-bold">{city.name}</h1>
          </div>

          {/* Bottom NavBar is hidden on city pages (design.md section 5, note
              24/08/2026), so this is the only way back to the dictionary
              from here - small and muted, on purpose, so it doesn't compete
              with the city name or the tabs below. */}
          <Link
            to="/dictionary"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-on-primary/70 transition-colors active:bg-on-primary/10"
            aria-label="מילון ביטויים"
          >
            <Icon name="translate" className="text-[20px]" />
          </Link>
        </div>

        {availableSections.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {availableSections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveTab(s.key)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  currentTab === s.key
                    ? "tab-chip-active"
                    : "bg-on-primary/15 text-on-primary"
                }`}
              >
                <Icon name={s.icon} className="text-[18px]" />
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="px-4 py-5">
        {availableSections.length === 0 ? (
          <p className="text-on-surface-variant">אין עדיין מידע לעיר הזאת.</p>
        ) : currentTab === "info" ? (
          <p className="leading-relaxed text-on-surface">{city.generalInfo}</p>
        ) : currentTab === "warnings" ? (
          warnings.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {warnings.map((w) => (
                <li
                  key={w.id}
                  className="flex gap-3 rounded-xl border border-error/20 bg-error-container p-4"
                >
                  <Icon name="gpp_maybe" className="mt-0.5 shrink-0 text-on-error-container" />
                  <p className="leading-relaxed text-on-error-container">{w.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-on-surface-variant">אין אזהרות מיוחדות לעיר זו.</p>
          )
        ) : (
          <ul className="flex flex-col gap-3">
            {current?.items.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                // Only worth a badge when the list actually mixes categories.
                // A tab where every item is an attraction does not need every
                // card labelled "attraction".
                showCategory={
                  new Set(current.items.map((p) => p.category)).size > 1
                }
              />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
