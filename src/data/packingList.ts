import type { CityId } from "../types";

/**
 * Feature 3.12 (PRD.md) - climate-aware packing checklist.
 *
 * Every claim about climate/weather here is general, documented seasonal
 * knowledge for September (not a live forecast - see PRD.md 3.10/3.12) and,
 * where it references a specific activity, is grounded in that city's real
 * content in `src/data/cities/*.ts`. No item was invented to pad out a list -
 * see the research notes this was built from for what was deliberately left
 * out (e.g. no temple dress-code items, no repeated raincoat entries).
 *
 * `id` is the localStorage key for each item's checked state - once shipped,
 * ids must stay stable. Never reuse or reassign an id to a different item.
 */

export interface PackingItem {
  id: string;
  text: string;
  /** Optional one-line reason, shown as a smaller line under the item text. */
  why?: string;
}

export interface CityPackingSection {
  cityId: CityId;
  /** Short date range as shown to the user, e.g. "9-12/9". */
  dates: string;
  /** One-line general climate note for this city/date window. */
  weather: string;
  items: PackingItem[];
  /** A distinctly-styled callout, currently only used for Hoi An's lantern festival. */
  highlight?: {
    title: string;
    text: string;
  };
}

export const baseItems: PackingItem[] = [
  { id: "base-passport", text: "דרכון + צילום נפרד שמור בנפרד" },
  {
    id: "base-visa",
    text: "מסמך אישור הוויזה לוייטנאם",
    why: "מודפס או שמור בטלפון - נדרש מראש לפני הטיסה",
  },
  {
    id: "base-flight-hotel",
    text: "פרטי הטיסות והמלונות",
    why: "מודפס או שמור לצפייה בלי אינטרנט",
  },
  {
    id: "base-cash",
    text: "מעט מזומן בדולרים",
    why: "שימושי בנחיתה לפני שמחליפים למטבע מקומי",
  },
  { id: "base-power-bank", text: "מטען נייד (פאוור בנק)" },
  {
    id: "base-adapter",
    text: "מתאם שקע אוניברסלי",
    why: "מתאים גם לוייטנאם וגם לתאילנד",
  },
  {
    id: "base-raincoat",
    text: "מעיל גשם קל ומתקפל",
    why: "שווה לכל הטיול - פירוט מתי הכי רלוונטי בכל עיר למטה",
  },
  { id: "base-meds", text: "תרופות אישיות + עותק מרשם" },
  { id: "base-insurance", text: "ביטוח נסיעות - פרטי הפוליסה נגישים" },
];

/** In itinerary order, matching CITY_IDS. */
export const cityPackingSections: CityPackingSection[] = [
  {
    cityId: "hanoi",
    dates: "9-12/9",
    weather: "חם ולח, עם ימי גשם מדי פעם - טוב שמעיל הגשם מהרשימה הכללית יהיה נגיש.",
    items: [
      { id: "hanoi-clothes", text: "בגדים דקים ומתייבשים מהר" },
      {
        id: "hanoi-shoes",
        text: "נעליים נוחות להליכה",
        why: "הרובע העתיק ואגם הואן קיים נחווים ברגל",
      },
    ],
  },
  {
    cityId: "ha-long-bay",
    dates: "12-13/9, קרוז לילה",
    weather: "לילה על סיפון ספינה - נעים ביום, קצת קריר בערב על המים.",
    items: [
      { id: "ha-long-bay-warm-layer", text: "שכבה חמה קלה לערב על הסיפון" },
      {
        id: "ha-long-bay-seasick-pills",
        text: "כדורים למניעת מחלת ים",
        why: "הים לפעמים פחות רגוע בעונה הזאת",
      },
      {
        id: "ha-long-bay-dry-bag",
        text: "שקית אטומה למים לטלפון/ארנק",
        why: "קיאק במערת לואון",
      },
    ],
  },
  {
    cityId: "phu-quoc",
    dates: "13-18/9",
    weather:
      "העיר הגשומה ביותר מבין ערי וייטנאם במסלול - הגשם נוטה לרדת בהתפרצויות קצרות אחר הצהריים, כשהבקרים נשארים יבשים יחסית.",
    items: [
      {
        id: "phu-quoc-sunscreen",
        text: "קרם הגנה עמיד למים",
        why: "יום שיט, ספארי או פארק שעשועים בשמש מלאה",
      },
      { id: "phu-quoc-hat", text: "כובע רחב שוליים" },
      {
        id: "phu-quoc-swim",
        text: "בגד ים ומגבת מתייבשת מהר",
        why: "חוף סאו וסנרקול בארכיפלג האן טוי",
      },
      { id: "phu-quoc-water-shoes", text: "נעלי מים או סנדלים לחוף" },
      { id: "phu-quoc-water-bottle", text: "בקבוק מים לשימוש חוזר" },
      {
        id: "phu-quoc-daypack",
        text: "תיק גב קטן ליום מלא בחוץ",
        why: "ימי סיור שלמים בוינפרל ספארי וב-VinWonders",
      },
    ],
  },
  {
    cityId: "ho-chi-minh-city",
    dates: "18-22/9",
    weather:
      "חם, לח וגשום - הגשם נוטה לרדת בהתפרצויות קצרות וחזקות אחר הצהריים, אז שווה שמעיל הגשם מהרשימה הכללית יהיה בהישג יד.",
    items: [
      { id: "ho-chi-minh-city-clothes", text: "בגדים קלים ומתייבשים מהר" },
      {
        id: "ho-chi-minh-city-shoes",
        text: "נעליים נוחות להליכה",
        why: "רחוב נגוין הווה, שוק בן תאן ושוק בין טאי נחווים ברגל",
      },
      {
        id: "ho-chi-minh-city-bag",
        text: "תיק צמוד לגוף עם סגירה",
        why: "כדאי בפרט סביב שוק בן תאן - אזור שמוכר בכייסות",
      },
      {
        id: "ho-chi-minh-city-dry-bag",
        text: "שקית אטומה למים לטלפון וארנק",
        why: "גשם עונתי שיורד בהתפרצויות פתאומיות",
      },
      {
        id: "ho-chi-minh-city-cash-pouch",
        text: "כיס קטן ומסודר למזומן",
        why: "עוזר לספור בנחת ולזהות שטרות בקלות",
      },
    ],
  },
  {
    cityId: "da-nang",
    dates: "22-26/9",
    weather:
      "חם ולח, עם תחילת עונת הטייפונים של החוף המרכזי - שווה לוודא שמעיל הגשם מהרשימה הכללית נגיש, וגשם יכול לבוא בהתפרצויות קצרות אחר הצהריים.",
    items: [
      { id: "da-nang-clothes", text: "בגדים קלים ומתייבשים מהר" },
      {
        id: "da-nang-shoes",
        text: "נעלי הליכה נוחות",
        why: "המדרגות התלולות בהרי השיש וטיילת סון טרה",
      },
      {
        id: "da-nang-swimsuit",
        text: "בגד ים וקרם הגנה ידידותי לשוניות",
        why: "חוף מיי קיי",
      },
      {
        id: "da-nang-water-shoes",
        text: "נעלי מים או סנדלים לחוף",
        why: "חוף מיי קיי - שימו לב לדגלי אזהרה על זרמים",
      },
      {
        id: "da-nang-repellent",
        text: "תרסיס נגד יתושים",
        why: "חצי האי סון טרה הוא שמורת טבע מיוערת",
      },
    ],
  },
  {
    cityId: "hoi-an",
    dates: "22-26/9",
    weather: "חם ולח, עם ימי גשם - כדאי להיות מוכנים.",
    highlight: {
      title: "24/9 - ליל פסטיבל הפנסים!",
      text: "ליל ירח מלא, מכבים חלק מהתאורה ברובע העתיק לכבודו. כדאי פנס ראש קטן או פנס טלפון טעון.",
    },
    items: [
      {
        id: "hoi-an-repellent",
        text: "תרסיס נגד יתושים",
        why: "כפר הירקות טרא קווה, טיולי ערב",
      },
      { id: "hoi-an-swimsuit", text: "בגד ים", why: "חוף אן באנג" },
    ],
  },
  {
    cityId: "phuket",
    dates: "אחרי 26/9",
    weather:
      "חם ולח מאוד, וזה החודש הכי גשום בשנה שם - שווה לוודא שמעיל הגשם מהרשימה הכללית עמיד יותר, לא רק דק וקליל.",
    items: [
      {
        id: "phuket-swimsuit",
        text: "בגד ים + נעלי מים",
        why: "חופים, אבל שימו לב לדגלי אזהרה על הזרמים",
      },
    ],
  },
];
