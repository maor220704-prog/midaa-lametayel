import { useState } from "react";
import { phrases, type PhraseLanguage } from "../data/phrases";
import { cities } from "../data/cities";
import Icon from "../components/Icon";

const languageLabel: Record<PhraseLanguage, string> = {
  vietnamese: "וייטנאמית",
  thai: "תאית",
};

export default function Dictionary() {
  const [language, setLanguage] = useState<PhraseLanguage>("vietnamese");

  const languagePhrases = phrases.filter((p) => p.language === language);
  const generalPhrases = languagePhrases.filter((p) => !p.cityId);
  const slangPhrases = languagePhrases.filter((p) => p.cityId);

  const cityName = (cityId: string) => cities.find((c) => c.id === cityId)?.name ?? cityId;

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-10 border-b border-outline-variant bg-background/95 px-4 pb-4 pt-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-primary">מילון ביטויים</h1>
        <p className="mt-1 text-base text-on-surface-variant">
          מילים וביטויים שימושיים שיעזרו לכם להתמצא ולהזמין אוכל.
        </p>

        <div className="mt-4 flex gap-2 overflow-x-auto">
          {(Object.keys(languageLabel) as PhraseLanguage[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                language === lang
                  ? "bg-primary-container text-on-primary-container"
                  : "border border-outline-variant bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {languageLabel[lang]}
            </button>
          ))}
        </div>
      </header>

      <main className="px-4 py-5">
        {languagePhrases.length === 0 ? (
          <p className="text-on-surface-variant">אין עדיין ביטויים לשפה זו.</p>
        ) : (
          <>
            <ul className="flex flex-col gap-3">
              {generalPhrases.map((p, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-surface p-4 shadow-[0_4px_20px_0_rgba(83,99,77,0.08)]"
                >
                  <p className="text-lg font-semibold text-on-surface">{p.phrase}</p>
                  <p className="mt-1 text-on-surface-variant">{p.meaning}</p>
                </li>
              ))}
            </ul>

            {slangPhrases.length > 0 && (
              <>
                <div className="mt-6 flex items-center gap-2">
                  <Icon name="local_fire_department" className="text-tertiary" />
                  <h2 className="text-lg font-semibold text-on-surface">סלנג לפי עיר</h2>
                </div>
                <ul className="mt-3 flex flex-col gap-3">
                  {slangPhrases.map((p, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-outline-variant bg-surface-container-low p-4"
                    >
                      <span className="inline-block rounded-full bg-tertiary-container px-2.5 py-0.5 text-xs font-medium text-on-tertiary-container">
                        {cityName(p.cityId!)}
                      </span>
                      <p className="mt-2 text-lg font-semibold text-on-surface">{p.phrase}</p>
                      <p className="mt-1 text-on-surface-variant">{p.meaning}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
