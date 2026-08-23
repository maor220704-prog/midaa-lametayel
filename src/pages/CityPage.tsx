import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cities } from "../data/cities";
import { restaurantsByCity } from "../data/restaurants";
import { attractionsByCity } from "../data/attractions";
import { warningsByCity } from "../data/warnings";
import Icon from "../components/Icon";

type SectionKey = "info" | "restaurants" | "attractions" | "warnings";

const sectionIcons: Record<SectionKey, string> = {
  info: "info",
  restaurants: "restaurant",
  attractions: "tour",
  warnings: "warning",
};

export default function CityPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find((c) => c.id === cityId);
  const restaurants = cityId ? restaurantsByCity[cityId] ?? [] : [];
  const attractions = cityId ? attractionsByCity[cityId] ?? [] : [];
  const warnings = cityId ? warningsByCity[cityId] ?? [] : [];

  const isCityPopulated = !!city?.generalInfo || restaurants.length > 0 || attractions.length > 0;

  const sections: { key: SectionKey; label: string; hasContent: boolean }[] = [
    { key: "info", label: "מידע כללי", hasContent: !!city?.generalInfo },
    { key: "restaurants", label: "מסעדות", hasContent: restaurants.length > 0 },
    { key: "attractions", label: "אטרקציות", hasContent: attractions.length > 0 },
    { key: "warnings", label: "אזהרות", hasContent: isCityPopulated },
  ];
  const availableSections = sections.filter((s) => s.hasContent);

  const [activeTab, setActiveTab] = useState<SectionKey | null>(
    availableSections[0]?.key ?? null
  );
  const currentTab = availableSections.some((s) => s.key === activeTab)
    ? activeTab
    : availableSections[0]?.key ?? null;

  if (!city) {
    return (
      <div className="min-h-screen bg-background px-4 py-6 pb-24">
        <Link to="/" className="text-on-surface-variant">
          <Icon name="arrow_forward" className="align-middle" /> חזרה לרשימת הערים
        </Link>
        <p className="mt-6 text-on-surface-variant">העיר לא נמצאה.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 bg-primary px-4 pb-3 pt-6 text-on-primary shadow-sm">
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

        {availableSections.length > 0 && (
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {availableSections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveTab(s.key)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  currentTab === s.key
                    ? "bg-on-primary text-primary"
                    : "bg-on-primary/15 text-on-primary"
                }`}
              >
                <Icon name={sectionIcons[s.key]} className="text-[18px]" />
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="px-4 py-5">
        {availableSections.length === 0 ? (
          <p className="text-on-surface-variant">אין עדיין מידע לעיר הזאת.</p>
        ) : (
          <>
            {currentTab === "info" && (
              <p className="leading-relaxed text-on-surface">{city.generalInfo}</p>
            )}

            {currentTab === "restaurants" && (
              <ul className="flex flex-col gap-3">
                {restaurants.map((r) => (
                  <li
                    key={r.name}
                    className="rounded-xl bg-surface p-4 shadow-[0_8px_20px_-4px_rgba(115,121,113,0.12)]"
                  >
                    <p className="text-lg font-semibold text-on-surface">{r.name}</p>
                    <p className="mt-1 leading-relaxed text-on-surface-variant">{r.description}</p>
                  </li>
                ))}
              </ul>
            )}

            {currentTab === "attractions" && (
              <ul className="flex flex-col gap-3">
                {attractions.map((a) => (
                  <li
                    key={a.name}
                    className="rounded-xl bg-surface p-4 shadow-[0_8px_20px_-4px_rgba(115,121,113,0.12)]"
                  >
                    <p className="text-lg font-semibold text-on-surface">{a.name}</p>
                    <p className="mt-1 leading-relaxed text-on-surface-variant">{a.description}</p>
                  </li>
                ))}
              </ul>
            )}

            {currentTab === "warnings" &&
              (warnings.length > 0 ? (
                <ul className="flex flex-col gap-3">
                  {warnings.map((w, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-xl border border-error/20 bg-error-container p-4"
                    >
                      <Icon name="gpp_maybe" className="mt-0.5 shrink-0 text-on-error-container" />
                      <p className="leading-relaxed text-on-error-container">{w}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-on-surface-variant">אין אזהרות מיוחדות לעיר זו.</p>
              ))}
          </>
        )}
      </main>
    </div>
  );
}
