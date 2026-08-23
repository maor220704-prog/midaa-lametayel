import type { CityContent } from "../../types";

const MICHELIN_LIST_SOURCE = "https://www.phuket101.net/phuket-michelin-guide-list/";

export const phuket: CityContent = {
  city: {
    id: "phuket",
    name: "פוקט",
    country: "thailand",
    generalInfo:
      "פוקט היא האי הגדול בתאילנד, ולפי הגרסה המקובלת ביותר שמה מקורו במילה המלאית \"בוקיט\", שפירושה גבעה - כך נראה האי מרחוק בזכות שדרת הגבעות המיוערות שעוברת לכל אורכו. בעבר נקרא האי בפי הסוחרים האירופים \"ג'ונק סיילון\", עיוות של השם המלאי טאנג'ונג סאלאנג, ורק כשמרכז המנהל עבר לעיירת כרייה פנימית בשם פוקט אימץ האי את שמו הנוכחי. הכלכלה ההיסטורית נשענה על מכרות בדיל, שמשכו גלי הגירה של פועלים סינים-הוקיאן שהתחתנו עם נשים תאיות מקומיות ויצרו את קהילת ה\"באבא\" הפרנקנית הייחודית - מיזוג שניכר עד היום באדריכלות הסינו-פורטוגזית של העיר העתיקה ובמטבח המקומי. סביב הגבעות הפנימיות משתרעים חופי החול הלבן שהפכו את פוקט ליעד התיירותי המוביל של תאילנד.",
  },
  places: [
    {
      id: "go-benz",
      cityId: "phuket",
      category: "restaurant",
      name: "גו בנז",
      nameLatin: "Go Benz",
      description:
        "דוכן אטריות ודייסת אורז ותיק בעיר העתיקה, עם כוכב ביב גורמה של מישלן חמש שנים ברציפות - כולל מדריך 2026. מתמחה במרק חזיר מתובל ואטריות אורז מגולגלות, נפתח רק בערב ורוב המנות אוזלות עד סופו.",
      sources: [
        MICHELIN_LIST_SOURCE,
        "https://www.phuket101.net/ko-benz-phuket/",
      ],
    },
    {
      id: "one-chun",
      cityId: "phuket",
      category: "restaurant",
      name: "וואן צ'ון",
      nameLatin: "One Chun Cafe & Restaurant",
      description:
        "מסעדה משפחתית ותיקה ברחוב תפקסטרי בעיר העתיקה, עם כוכב ביב גורמה של מישלן חמש שנים ברציפות, המתמחה במטבח דרום-תאילנדי מלא ופחות מוכר לתיירים. המקום קטן ומתמלא במהירות, כדאי להגיע מוקדם.",
      sources: [
        MICHELIN_LIST_SOURCE,
        "https://www.phuket101.net/one-chun-restaurant/",
      ],
    },
    {
      id: "kopitiam-by-wilai",
      cityId: "phuket",
      category: "restaurant",
      name: "קופיטיאם ביי וילאי",
      nameLatin: "Kopitiam by Wilai",
      description:
        "בית קפה-מסעדה נוסטלגי ברחוב תלנג ההיסטורי, ששמו פירושו \"בית קפה\" בהוקיאן-מלאית - מגיש מתכונים משפחתיים איקוניים כמו מרק עצמות חזיר בק קוט טה ופאד תאי בסגנון פוקטי חריף. תמיד עמוס, ולעיתים יש רשימת המתנה.",
      sources: [
        "https://www.fodors.com/world/asia/thailand/phuket-and-the-andaman-coast/restaurants/reviews/kopitiam-by-wilai-588644",
        "https://daniaexperiences.com/2025/01/07/review-kopitiam-by-wilai-cafe-thalang-road-phuket-thailand/",
      ],
    },
    {
      id: "baan-rim-pa",
      cityId: "phuket",
      category: "restaurant",
      name: "באן רים פה",
      nameLatin: "Baan Rim Pa",
      description:
        "מסעדת מטבח מלכותי תאילנדי ותיקה על צוק מעל מפרץ פאטונג, עם נגינת פסנתר חיה מדי ערב לצד נוף השקיעה על הים. מומלץ להזמין מקום מראש ולהגיע מוקדם בשביל השולחנות עם הנוף הטוב ביותר.",
      sources: [
        "https://www.fodors.com/world/asia/thailand/phuket-and-the-andaman-coast/restaurants/reviews/baan-rim-pa-433186",
        "https://www.tripadvisor.com/Restaurant_Review-g297930-d1073248-Reviews-Baan_Rim_Pa-Patong_Kathu_Phuket.html",
      ],
    },
    {
      id: "big-buddha-phuket",
      cityId: "phuket",
      category: "attraction",
      name: "הבודהה הגדול",
      nameLatin: "Phuket Big Buddha",
      description:
        "פסל בודהה עשוי בטון ומצופה שיש בורמזי לבן, בגובה 45 מטר על גבעת נאקרד - אחד הסמלים המזוהים ביותר עם האי, שנראה למרחקים מחלקים גדולים ממנו. הפסל נסגר לכשנה וחצי בעקבות מפולת אדמה ב-2024, ונפתח מחדש בתחילת 2026.",
      sources: [
        "https://www.phuket101.net/phuket-big-buddha/",
        "https://en.wikipedia.org/wiki/Phuket_Big_Buddha",
      ],
    },
    {
      id: "wat-chalong",
      cityId: "phuket",
      category: "attraction",
      name: "וואט צ'לונג",
      nameLatin: "Wat Chalong",
      description:
        "המקדש החשוב והמבוקר ביותר בפוקט, ובו פסלי הזהב של שני הנזירים לואנג פו צ'אם ולואנג פו צ'ואנג - שהפכו את המנזר למקלט ובית חולים שדה בזמן מרד הכורים הסינים ב-1876, וזכו להערצת התושבים המקומיים עד היום.",
      sources: [
        "https://blog.bangkokair.com/en/wat-chalong-temple-phuket/",
        "https://en.wikipedia.org/wiki/Wat_Chalong",
      ],
    },
    {
      id: "thai-hua-museum",
      cityId: "phuket",
      category: "attraction",
      name: "מוזיאון תאי הואה",
      nameLatin: "Thai Hua Museum",
      description:
        "מוזיאון בבניין סינו-פורטוגזי מ-1934 שהיה בית הספר הסיני הראשון בפוקט, ומציג בשלושה-עשר חדרים את סיפור מהגרי הכרייה הסינים, קהילת הבאבא הייחודית והאדריכלות המקומית - מבוא נעים לסיור בעיר העתיקה שסביבו.",
      sources: [
        "https://www.phuket101.net/thai-hua-museum/",
        "https://www.phuket.net/things-to-do/sightseeing/museums/phuket-thai-hua-museum/",
      ],
    },
    {
      id: "promthep-cape",
      cityId: "phuket",
      category: "scenic",
      name: "כף פרומטפ",
      nameLatin: "Promthep Cape",
      description:
        "כף סלעים בקצה הדרומי של האי, הנחשב לתצפית השקיעה הפופולרית ביותר בפוקט - עם נוף פתוח לים אנדמן ולאיים הסמוכים. כדאי להגיע כשעה לפני השקיעה כדי למצוא חניה ומקום תצפית נוח.",
      sources: ["https://www.phuket101.net/promthep-cape/"],
    },
    {
      id: "karon-viewpoint",
      cityId: "phuket",
      category: "scenic",
      name: "תצפית קארון (תצפית שלושת החופים)",
      nameLatin: "Karon Viewpoint",
      description:
        "תצפית חינמית שמגלה שלושה חופים בבת אחת - קטה נוי הקרוב מתחת, קטה עם אי הסרטנים הקטן מולו, וקארון המשתרך למרחוק. השם התאי המקומי, קו סאם האד, פירושו פשוט \"גבעת שלושת החופים\".",
      sources: [
        "https://www.phuket101.net/karon-viewpoint/",
        "https://www.jamiesphuketblog.com/2011/02/phuket-viewpoint.html",
      ],
    },
    {
      id: "freedom-beach",
      cityId: "phuket",
      category: "scenic",
      name: "פרידום ביץ'",
      nameLatin: "Freedom Beach",
      description:
        "חוף מבודד באורך כ-300 מטר בתוך מפרץ קטן מדרום לפאטונג, נגיש בעיקר בסירת לונגטייל או ברגל דרך שביל ג'ונגל קצר - ולכן נשאר שקט ופחות עמוס מחופי האי הראשיים.",
      sources: [
        "https://www.holidify.com/places/phuket/freedom-beach-sightseeing-124567.html",
        "https://www.phuket101.net/freedom-beach/",
      ],
    },
    {
      id: "lard-yai-walking-street",
      cityId: "phuket",
      category: "market",
      name: "לארד יאי (שוק רחוב ההולכים)",
      nameLatin: "Lard Yai Walking Street",
      description:
        "רחוב תלנג ההיסטורי בעיר העתיקה נסגר לתנועה מדי יום ראשון והופך לשוק רחוב תוסס על רקע הבניינים הסינו-פורטוגזיים - דוכני אוכל רחוב, אמנים ונגנים. פתוח מ-16:00 עד 22:00.",
      sources: [
        "https://www.phuket101.net/phuket-walking-street/",
        "https://www.jamiesphuketblog.com/2014/06/sunday-walking-street-market-lard-yai.html",
      ],
    },
    {
      id: "chillva-market",
      cityId: "phuket",
      category: "market",
      name: "שוק צ'ילבה",
      nameLatin: "Chillva Market",
      description:
        "שוק לילה מקומי וטרנדי בעיר פוקט, פתוח בין חמישי לשבת בשעות הערב - דוכני אוכל יצירתיים, בגדים וינטג' ומוזיקה חיה, עם קהל שמורכב בעיקר מתושבים מקומיים ופחות תיירים מהשווקים הגדולים באי.",
      sources: [
        "https://www.tripadvisor.com/Attraction_Review-g1215781-d11741144-Reviews-Chillva_Market-Phuket_Town_Phuket.html",
        "https://kamalabeachestate.com/chillva-market-phuket/",
      ],
    },
    {
      id: "peranakan-baba-heritage",
      cityId: "phuket",
      category: "special",
      name: "מורשת הבאבא-פרנקן בעיר העתיקה",
      nameLatin: "Phuket Old Town",
      description:
        "פוקט היא היעד המובהק בתאילנד למורשת הבאבא-פרנקן - צאצאי מהגרים סינים-הוקיאן שהתחתנו עם נשים תאיות בעידן הכרייה. המיזוג ניכר באדריכלות הסינו-פורטוגזית של העיר העתיקה ובמנות ייחודיות כמו מו הונג (חזיר מבושל בתבלינים) ואו-טאו (פשטידת צדפות).",
      sources: [
        "https://www.windowonphuket.com/features/228/peranakan-traditions-in-phuket",
        "https://www.nationalgeographic.com/travel/article/paid-content-phuket-thailand-cultural-fusion-forges-connection",
      ],
    },
    {
      id: "phuket-vegetarian-festival",
      cityId: "phuket",
      category: "special",
      name: "פסטיבל הצמחונות של פוקט",
      nameLatin: "Jui Tui Shrine",
      description:
        "אירוע דתי-תרבותי ייחודי לפוקט: תשעה ימים בספטמבר-אוקטובר (לפי הלוח הירחי הסיני) של טיהור, תהלוכות וניקוב גוף קיצוני, לזכר תשעת קיסרי השמיים. מרכז הטקסים הוא מקדש ג'וי טוי העתיק בעיר פוקט - כדאי לבדוק מראש את תאריכי השנה הספציפית, כי הם משתנים משנה לשנה.",
      sources: [
        "https://www.phuket101.net/phuket-vegetarian-festival/",
        "https://www.phuket101.net/jui-tui-shrine-in-phuket-town/",
      ],
    },
  ],
  warnings: [
    {
      id: "jet-ski-damage-scam",
      cityId: "phuket",
      text: "השכרת אופנועי ים היא ההונאה הנפוצה ביותר באי - בעלי הציוד טוענים לנזק שלא נגרם על ידכם ודורשים תשלום מזומן גבוה, לעיתים תוך החזקת הדרכון כערובה. יש לצלם את כלי הרכב מכל זווית לפני היציאה, ולא להשאיר דרכון כפיקדון - רק מזומן או חסימת אשראי.",
    },
    {
      id: "taxi-tuk-tuk-overcharging",
      cityId: "phuket",
      text: "מוניות וטוק-טוק בפוקט פועלים לפי תעריפים קבועים גבוהים ולא לפי מונה, ונהגים מקבלים לעיתים עמלה מחנויות תכשיטים וחייטים שאליהם הם מפנים תיירים. יש לתאם מחיר מראש או להשתמש באפליקציית Grab, ולהתעלם מהצעות ל\"עצירה קצרה בחנות מומלצת\".",
    },
    {
      id: "rip-current-red-flag",
      cityId: "phuket",
      text: "דגל אדום או שחור על חוף בפוקט משמעו איסור כניסה מוחלט למים, גם למי שמרגיש שחיין חזק - האי רואה כ-30 עד 50 מקרי טביעה בשנה, רבים בעונת הגשמים (מאי-אוקטובר) כשזרמים חוזרים חזקים. יש לכבד את הדגלים ולא להיכנס למים כשהם מונפים.",
    },
    {
      id: "scooter-license-insurance",
      cityId: "phuket",
      text: "שכירת קטנוע נפוצה בפוקט, אך נהיגה בלי רישיון בינלאומי (IDP) עם היתר לאופנועים עלולה לפסול את כיסוי ביטוח הנסיעות במקרה של תאונה. יש להוציא רישיון בינלאומי לפני היציאה מהארץ (אי אפשר להנפיק אותו בתאילנד) ולחבוש קסדה תמיד.",
    },
  ],
  phrases: [],
};
