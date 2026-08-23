import type { CityContent } from "../../types";

const RESTAURANT_SOURCE =
  "https://guide.michelin.com/en/best-of/best-places-to-eat-in-hanoi-s-old-quarter";
const ATTRACTION_SOURCE =
  "https://vinwonders.com/en/wonderpedia/news/hanoi-old-quarter-map-a-comprehensive-travelers-guide/";

export const hanoi: CityContent = {
  city: {
    id: "hanoi",
    name: "האנוי",
    country: "vietnam",
    generalInfo:
      "האנוי היא בירת וייטנאם, ועל פי המסורת נוסדה כבירה עוד ב-1010 בשם \"טהאנג לונג\", כך שמדובר בעיר עם היסטוריה של כמעט אלף שנה. הלב הפועם שלה הוא הרובע העתיק (\"36 הרחובות\"), שבו כל רחוב נקרא במקור על שם הסחורה שנמכרה בו - למשל רחוב המשי, רחוב הכסף או רחוב הבמבוק - ורבים מהם עדיין שומרים על אותה התמחות עד היום. מה שהופך את האנוי למיוחדת הוא הניגוד הבולט בין הרובע העתיק הצפוף, עם הבתים הצרים והאדריכלות הצרפתית-קולוניאלית, לבין עיר מודרנית ותוססת שמתפתחת סביבו.",
  },
  places: [
    {
      id: "cha-ca-thang-long",
      cityId: "hanoi",
      category: "restaurant",
      name: "צ'ה קה טהאנג לונג",
      nameLatin: "Chả Cá Thăng Long",
      description:
        "מסעדה איקונית ברובע העתיק שפועלת כבר יותר מ-30 שנה, ומתמחה במנה אחת בלבד - צ'ה קה, דג צלוי על גחלים המוגש עם שמיר, בוטנים ואטריות.",
      sources: [
        RESTAURANT_SOURCE,
        "https://guide.michelin.com/sg/en/ha-noi/ha-noi_2974158/restaurant/cha-ca-thang-long",
      ],
    },
    {
      id: "bun-cha-ta",
      cityId: "hanoi",
      category: "restaurant",
      name: "בון צ'ה טה",
      nameLatin: "Bún Chả Ta",
      description:
        "אחת הכתובות המוכרות ביותר לבון צ'ה - פרוסות בשר חזיר צלויות על גחלים, מוגשות עם אטריות אורז קרות, ירק טרי ורוטב מתוק-חמצמץ. מנה שאובמה אכל בהאנוי והפכה מפורסמת עוד יותר.",
      sources: [
        RESTAURANT_SOURCE,
        "https://guide.michelin.com/us/en/ha-noi/ha-noi_2974158/restaurant/bun-cha-ta-nguyen-huu-huan-street",
      ],
    },
    {
      id: "giang-cafe",
      cityId: "hanoi",
      category: "restaurant",
      name: "קפה ג'אנג",
      nameLatin: "Giang Café",
      description:
        "בית הקפה שבו הומצא \"קפה הביצה\" המפורסם - קפה חם עם קצף חלמון ביצה מתוק וקרמי. עצירת חובה לקינוח או הפסקה קטנה תוך כדי סיור ברובע העתיק.",
      sources: [RESTAURANT_SOURCE, "https://asiamystika.com/blog/cafe-giang"],
    },
    {
      id: "hoan-kiem-lake",
      cityId: "hanoi",
      category: "attraction",
      name: "אגם הואן קיים",
      nameLatin: "Hoan Kiem Lake",
      description:
        "האגם המרכזי והמוכר ביותר בהאנוי, עם מגדל הצב הקטן במרכזו ומקדש נגוק סון שאליו מגיעים דרך גשר אדום ציורי. מקום נעים לטיול רגלי, בעיקר בשעות הבוקר או הערב.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "st-joseph-cathedral",
      cityId: "hanoi",
      category: "attraction",
      name: "קתדרלת סנט ג'וזף",
      nameLatin: "St. Joseph Cathedral",
      description:
        "קתדרלה ניאו-גותית מרשימה מ-1886, שנבנתה בתקופת השלטון הקולוניאלי הצרפתי ומזכירה במראה שלה את נוטרדאם בפריז. ממוקמת בלב הרובע העתיק.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "hanoi-train-street",
      cityId: "hanoi",
      category: "attraction",
      name: "רחוב הרכבת",
      nameLatin: "Hanoi Train Street",
      description:
        "אחד המקומות המיוחדים בהאנוי - מסילת רכבת שעוברת ממש בין קירות הבתים ובתי הקפה. אפשר לשבת בקפה צמוד למסילה ולראות את הרכבת חולפת במרחק של מטרים ספורים.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "dong-xuan-market",
      cityId: "hanoi",
      category: "market",
      name: "שוק דונג סואן",
      nameLatin: "Dong Xuan Market",
      description:
        "השוק המקורה הגדול ביותר בהאנוי, שהוקם בשלהי המאה ה-19 ופרוס על שלושה קומות של בגדים, בדים, אלקטרוניקה ומזכרות. בסופי שבוע נפתח לצדו גם שוק לילה ברחובות הסמוכים, עם מאות דוכנים ומופעי זמר עממי.",
      sources: [
        "https://www.bestpricetravel.com/travel-guide/dong-xuan-market.html",
        "https://www.tripadvisor.com/Attraction_Review-g293924-d311057-Reviews-Dong_Xuan_Market-Hanoi.html",
      ],
    },
    {
      id: "chuong-tailor",
      cityId: "hanoi",
      category: "tailor",
      name: "צ'אונג טיילור",
      nameLatin: "Chuong Tailor",
      description:
        "בית חייטות ותיק שנוסד ב-1968, שמייסדו הוכרז כ\"אמן תפירה\" מטעם מועצת המדינה הווייטנאמית. מתמחים בחליפות בהזמנה אישית עם מדידה מלאה, וזמן ההשלמה הרגיל הוא כשלושה עד ארבעה ימים.",
      sources: [
        "https://www.bestpricetravel.com/travel-guide/tailor-in-hanoi-4022.html",
        "https://www.tripadvisor.com/Attraction_Review-g293924-d10962096-Reviews-Chuong_Tailor-Hanoi.html",
      ],
    },
    {
      id: "cong-caphe",
      cityId: "hanoi",
      category: "special",
      name: "קונג קפה",
      nameLatin: "Cộng Cà Phê",
      description:
        "רשת בתי קפה וייטנאמית שנוסדה ב-2007 בהאנוי בהשראה נוסטלגית לתקופת הקיצוב הסוציאליסטית, עם עיצוב ירוק-זית ומדים צבאיים לצוות. מוכרת בעיקר בזכות קפה הקוקוס הקר שהומצא בה, וכיום מונה למעלה מ-100 סניפים בשלוש יבשות.",
      sources: [
        "https://en.wikipedia.org/wiki/C%E1%BB%99ng_C%C3%A0_Ph%C3%AA",
        "https://wander-lush.org/best-cafes-in-hanoi-vietnam-cong/",
      ],
    },
    {
      id: "ho-tay-lake",
      cityId: "hanoi",
      category: "scenic",
      name: "אגם הו טיי",
      nameLatin: "Ho Tay (West Lake)",
      description:
        "האגם הגדול ביותר בהאנוי, ולחופיו יושבת פאגודת טרן קווק העתיקה - המקדש הבודהיסטי הוותיק בעיר. שעת השקיעה על שדרת טהאן נין נחשבת לזמן הכי יפה לבקר, הרחק מההמולה של המרכז ההיסטורי.",
      sources: ["https://www.excursionmania.com/ttd/3603/west-lake-tay-ho-district-blg-3603"],
    },
  ],
  warnings: [
    {
      id: "taxi-scams",
      cityId: "hanoi",
      text: "מוניות מזויפות ומונים מתוקנים - במיוחד בשדה התעופה נוי בי ובאזורי תיירות. מומלץ להשתמש באפליקציית Grab או בחברות מוניות מוכרות, ולוודא שהמונה פועל לפני שהנסיעה מתחילה.",
    },
    {
      id: "pickpockets",
      cityId: "hanoi",
      text: "כייסות וחטיפת תיקים נפוצות באזורים הומי תיירים, בעיקר ברובע העתיק - כדאי לשמור על תיקים וחפצי ערך קרוב לגוף.",
    },
    {
      id: "friendly-stranger-scam",
      cityId: "hanoi",
      text: "זרים ידידותיים במיוחד שמזמינים לחנות, בית תה או חברת טיולים של \"קרוב משפחה\" - לרוב זו הובלה למקום עם מחירים מנופחים. עדיף לא להיגרר.",
    },
  ],
  phrases: [
    {
      id: "vi-slang-pig-hanoi",
      language: "vietnamese",
      phrase: "lợn",
      meaning: "חזיר",
      cityId: "hanoi",
    },
    {
      id: "vi-slang-bowl-hanoi",
      language: "vietnamese",
      phrase: "bát",
      meaning: "קערה",
      cityId: "hanoi",
    },
    {
      id: "vi-slang-hat-hanoi",
      language: "vietnamese",
      phrase: "mũ",
      meaning: "כובע",
      cityId: "hanoi",
    },
  ],
};
