import { useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "../data/cities";
import type { Country } from "../types";
import Icon from "../components/Icon";

const countryLabel: Record<Country, string> = {
  vietnam: "וייטנאם",
  thailand: "תאילנד",
};

const cardAccents = [
  { bg: "bg-primary-container", icon: "text-on-primary-container" },
  { bg: "bg-secondary-container", icon: "text-on-secondary-container" },
  { bg: "bg-tertiary-container", icon: "text-on-tertiary-container" },
];

export default function CityList() {
  const [country, setCountry] = useState<Country>("vietnam");
  const list = cities.filter((c) => c.country === country);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 border-b border-outline-variant bg-background/95 px-4 pb-4 pt-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary">מידע למטייל</h1>
        <p className="mt-1 text-base text-on-surface-variant">לאן תרצו לטוס?</p>

        <div className="mt-4 flex gap-1 rounded-full bg-surface-container-high p-1">
          {(Object.keys(countryLabel) as Country[]).map((key) => (
            <button
              key={key}
              onClick={() => setCountry(key)}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                country === key
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant"
              }`}
            >
              {countryLabel[key]}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 px-4 py-4">
        {list.map((city, i) => (
          <Link
            key={city.id}
            to={`/city/${city.id}`}
            className="overflow-hidden rounded-xl bg-surface shadow-[0_8px_20px_-4px_rgba(115,121,113,0.15)] transition-transform active:scale-95"
          >
            <div className={`flex h-24 items-center justify-center ${cardAccents[i % cardAccents.length].bg}`}>
              <Icon name="location_on" filled className={`text-4xl ${cardAccents[i % cardAccents.length].icon}`} />
            </div>
            <div className="p-3">
              <h2 className="font-semibold text-on-surface">{city.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
