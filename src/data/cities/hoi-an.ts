import type { CityContent } from "../../types";

const RESTAURANT_SOURCE = "https://intentionaltravelers.com/best-food-in-hoi-an-restaurants/";
const ATTRACTION_SOURCE =
  "https://www.getyourguide.com/explorer/hoi-an-ttd831/landmarks-in-hoi-an/";

export const hoiAn: CityContent = {
  city: {
    id: "hoi-an",
    name: "הוֹיאן",
    country: "vietnam",
    generalInfo:
      "הוֹיאן היא עיירת נמל עתיקה שההיסטוריה שלה משתרעת על פני יותר מ-2,000 שנה, ובין המאות ה-15 וה-19 שימשה כאחד מנמלי המסחר הבינלאומיים החשובים באסיה. כיום היא מוכרזת כאתר מורשת עולמית של אונסק\"ו, ומוכרת בכינוי \"העיר הצהובה\" - שכן כמעט כל הבתים העתיקים במרכז ההיסטורי צבועים באותו גוון צהוב אופייני. הסמל המזוהה ביותר עם העיר הוא הפנסים הצבעוניים שתלויים בכל רחוב, מסורת שהחלה עוד במאות ה-16-17 בהשראת סוחרים סיניים ויפניים. אחת לחודש, בליל הירח המלא, מכבים בעיר העתיקה את האורות החשמליים ומדליקים אלפי פנסים - פסטיבל שהפך לאחד המשיכות המרכזיות של המקום.",
  },
  places: [
    {
      id: "morning-glory",
      cityId: "hoi-an",
      category: "restaurant",
      name: "מורנינג גלורי",
      nameLatin: "Morning Glory",
      description:
        "מהמסעדות המוכרות והאהובות בהוֹיאן, בניהול השפית המקומית מיס וי, המגישה מטבח וייטנאמי מסורתי עם ירקות טריים מהאזור - כולל קאו לאו וספרינג רולס לבנים.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "thanh-cao-lau",
      cityId: "hoi-an",
      category: "restaurant",
      name: "טהאן קאו לאו",
      nameLatin: "Thanh Cao Lầu",
      description:
        "מסעדה מקומית ותיקה שנחשבת לאחת הכתובות האותנטיות ביותר למנת קאו לאו - אטריות עבות ייחודיות להוֹיאן, המבושלות במים מהבארות העתיקות של העיר.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "cargo-club",
      cityId: "hoi-an",
      category: "restaurant",
      name: "קארגו קלאב",
      nameLatin: "Cargo Club",
      description:
        "בית קפה ומסעדה עם מרפסת פתוחה ונוף לעיר העתיקה ולנהר, מוכר בעיקר בזכות הקינוחים בסגנון צרפתי - אופציה נעימה להפסקת קפה או ארוחת ערב רגועה.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "japanese-covered-bridge",
      cityId: "hoi-an",
      category: "attraction",
      name: "הגשר היפני המכוסה",
      nameLatin: "Japanese Covered Bridge",
      description:
        "סמל העיר וההיסטוריה שלה - גשר להולכי רגל בלבד שנבנה במאה ה-17 על ידי הקהילה היפנית שהתגוררה בהוֹיאן. אחד המבנים הצילומים ביותר בעיר העתיקה.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "phuc-kien-assembly-hall",
      cityId: "hoi-an",
      category: "attraction",
      name: "אולם הכינוסים הפוקיאני",
      nameLatin: "Phuc Kien Assembly Hall",
      description:
        "הגדול והמפואר מבין אולמות הכינוסים הסיניים ההיסטוריים בהוֹיאן, עם שערי כניסה מעוטרים וחצרות פנימיות - אחד המבנים הבולטים באתר המורשת העולמית של העיר.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "tra-que-vegetable-village",
      cityId: "hoi-an",
      category: "attraction",
      name: "כפר הירקות טרא קווה",
      nameLatin: "Tra Que Vegetable Village",
      description:
        "כפר חקלאי קטן מחוץ לעיר העתיקה, שבו ניתן לפגוש חקלאים מקומיים, לטעום ירקות טריים ואפילו להתנסות בעבודה בגינה - הפסקה כפרית ורגועה מהתיירות של המרכז ההיסטורי.",
      sources: [ATTRACTION_SOURCE],
    },
  ],
  warnings: [
    {
      id: "unreliable-tailors",
      cityId: "hoi-an",
      text: "חייטים לא אמינים - הוֹיאן מפורסמת בבגדים בהזמנה אישית, אבל יש חנויות עם בדים באיכות נמוכה ומחירי פיתיון. כדאי לעבוד רק עם חייטים מומלצים עם ביקורות אמיתיות.",
    },
    {
      id: "xe-om-price",
      cityId: "hoi-an",
      text: "יש לתאם מחיר מראש עם נהגי אופנוע-מונית (Xe Om) לפני תחילת הנסיעה - לא לסמוך על תשלום בסוף.",
    },
    {
      id: "bracelet-scam",
      cityId: "hoi-an",
      text: "זהירות מ\"מתנת\" צמיד שמישהו קושר על היד ברחוב \"במתנה\" ולבסוף דורש תשלום עבורו.",
    },
  ],
  phrases: [
    {
      id: "vi-slang-pig-hoi-an",
      language: "vietnamese",
      phrase: "heo",
      meaning: "חזיר",
      cityId: "hoi-an",
    },
    {
      id: "vi-slang-bowl-hoi-an",
      language: "vietnamese",
      phrase: "tô / chén",
      meaning: "קערה",
      cityId: "hoi-an",
    },
    {
      id: "vi-slang-hat-hoi-an",
      language: "vietnamese",
      phrase: "nón",
      meaning: "כובע",
      cityId: "hoi-an",
    },
  ],
};
