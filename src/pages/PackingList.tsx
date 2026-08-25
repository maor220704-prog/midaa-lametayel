import { useState } from "react";
import { cities } from "../data/cities";
import { baseItems, cityPackingSections, type PackingItem } from "../data/packingList";

const STORAGE_KEY = "packing-checked";

function loadChecked(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveChecked(checked: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  } catch {
    // localStorage can be unavailable (private mode, quota) - checking off
    // items still works for the current session, it just won't persist.
  }
}

interface ItemRowProps {
  item: PackingItem;
  checked: boolean;
  onToggle: (id: string) => void;
}

function ItemRow({ item, checked, onToggle }: ItemRowProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(item.id)}
      aria-pressed={checked}
      className="flex w-full items-start gap-3 border-b border-outline-variant py-2.5 text-right last:border-b-0"
    >
      <span className={`mt-0.5 shrink-0 packing-check ${checked ? "packing-check--checked" : ""}`} />
      <span
        className={`text-[14.5px] leading-relaxed ${
          checked ? "text-on-surface-variant line-through" : "text-on-surface"
        }`}
      >
        {item.text}
        {item.why && <span className="mt-0.5 block text-xs text-on-surface-variant">{item.why}</span>}
      </span>
    </button>
  );
}

/** Which card (the base list, or a given city) an item id belongs to - used
 * to know which card should pop when that item gets checked. */
function sectionOf(id: string): string {
  if (baseItems.some((i) => i.id === id)) return "base";
  return cityPackingSections.find((s) => s.items.some((i) => i.id === id))?.cityId ?? "";
}

export default function PackingList() {
  const [checked, setChecked] = useState<Set<string>>(loadChecked);
  const [pulsingSection, setPulsingSection] = useState<string | null>(null);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      const willCheck = !next.has(id);
      if (willCheck) {
        next.add(id);
        setPulsingSection(sectionOf(id));
      } else {
        next.delete(id);
      }
      saveChecked(next);
      return next;
    });
  };

  const clearPulse = (section: string) => setPulsingSection((current) => (current === section ? null : current));

  const cityName = (cityId: string) => cities.find((c) => c.id === cityId)?.name ?? cityId;

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 border-b border-outline-variant bg-background/95 px-4 pb-4 pt-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary">רשימת ציוד</h1>
        <p className="mt-1 text-base text-on-surface-variant">מה כדאי לארוז - כללי ולפי המסלול</p>
      </header>

      <main className="px-4 py-5">
        <section>
          <h2 className="mb-2 text-base font-bold text-on-surface">בסיס לכל הטיול</h2>
          <div
            className={`packing-card ${pulsingSection === "base" ? "packing-card--pulse" : ""}`}
            onAnimationEnd={() => clearPulse("base")}
          >
            <div className="packing-card__content">
              <div className="rounded-2xl bg-secondary-container px-4 py-1">
                {baseItems.map((item) => (
                  <ItemRow key={item.id} item={item} checked={checked.has(item.id)} onToggle={toggle} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-base font-bold text-on-surface">לפי המסלול</h2>
          <div className="flex flex-col gap-5">
            {cityPackingSections.map((section) => (
              <div
                key={section.cityId}
                className={`packing-card ${pulsingSection === section.cityId ? "packing-card--pulse" : ""}`}
                onAnimationEnd={() => clearPulse(section.cityId)}
              >
                <div className="packing-card__content">
                  <div className="flex items-baseline justify-between px-0.5 pb-1.5">
                    <span className="text-[15px] font-bold text-on-surface">{cityName(section.cityId)}</span>
                    <span className="text-xs text-on-surface-variant">{section.dates}</span>
                  </div>
                  <p className="px-0.5 pb-2 text-sm leading-relaxed text-on-surface-variant">{section.weather}</p>

                  {section.highlight && (
                    <div className="mb-2 flex gap-2 rounded-xl bg-tertiary-container px-3 py-2 text-sm leading-relaxed text-on-tertiary-container">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-on-tertiary-container" />
                      <span>
                        <strong className="font-bold">{section.highlight.title}</strong> {section.highlight.text}
                      </span>
                    </div>
                  )}

                  <div className="rounded-2xl bg-secondary-container px-4 py-1">
                    {section.items.map((item) => (
                      <ItemRow key={item.id} item={item} checked={checked.has(item.id)} onToggle={toggle} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
