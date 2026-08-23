import type { CityContent } from "../../types";

const RESTAURANT_SOURCE = "https://www.eatingthaifood.com/best-restaurants-in-bangkok/";
const ATTRACTION_SOURCE = "https://www.kkday.com/en/blog/89300/best-things-to-do-bangkok";

export const bangkok: CityContent = {
  city: {
    id: "bangkok",
    name: "בנגקוק",
    country: "thailand",
    generalInfo:
      "השם \"בנגקוק\" מקורו כנראה בשם כפר קטן שהיה במקום, \"באנג מקוק\" (\"כפר שזיפי הבר\"), עוד לפני שהעיר נבנתה. בשפה התאית עצמה שמה הרשמי של העיר הוא \"קרונג טהפ\" - קיצור של שם טקסי ארוך במיוחד, שנכנס לספר השיאים של גינס כשם המקום הארוך בעולם, ומשמעותו בערך \"עיר המלאכים, העיר הגדולה\". בנגקוק הפכה לבירת תאילנד ב-1782, כשהמלך ראמה הראשון העביר את הבירה מתונבורי לגדה המזרחית של נהר צ'או פראיה. בתחילת דרכה נבנתה העיר סביב רשת ענפה של תעלות מים ולא כבישים, מה שהעניק לה את הכינוי \"ונציה של המזרח\" - וגם היום, לצד הכבישים הסואנים וגורדי השחקים, אפשר עדיין למצוא שווקים צפים ושכונות שמתנהלות על פני המים.",
  },
  places: [
    {
      id: "raan-jay-fai",
      cityId: "bangkok",
      category: "restaurant",
      name: "ראן ג'יי פיי",
      nameLatin: "Raan Jay Fai",
      description:
        "דוכן רחוב מפורסם בעולם עם כוכב מישלן, המנוהל על ידי שפית ותיקה שמבשלת על מחבת פחמים בודדת - ידועה בעיקר בזכות האומלט עם סרטן ומרק אטריות. יש להגיע מוקדם, יש תור.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "jay-oh",
      cityId: "bangkok",
      category: "restaurant",
      name: "ג'יי אוה",
      nameLatin: "Jay Oh",
      description:
        "מסעדה פשוטה וצנועה ליד אוניברסיטת צ'ולאלונגקורן, מוכרת ממדריך מישלן, המתמחה במרק אטריות \"מאמה\" חריף עם תוספות נדיבות של פירות ים ובשר.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "the-local",
      cityId: "bangkok",
      category: "restaurant",
      name: "דה לוקאל",
      nameLatin: "The Local",
      description:
        "מסעדה שמתמקדת באוכל תאילנדי מסורתי ואותנטי, עם דגש על מנות מדרום תאילנד שקשה למצוא במקומות תיירותיים יותר - אווירה נעימה ותפריט מגוון.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "grand-palace",
      cityId: "bangkok",
      category: "attraction",
      name: "הארמון הגדול ומקדש הבודהה האזמרגדי",
      nameLatin: "Grand Palace",
      description:
        "האתר המפורסם והמבוקר ביותר בבנגקוק - מתחם ארמון מלכותי מרשים המשלב את מקדש הבודהה האזמרגדי, פסל הבודהה החשוב ביותר בתאילנד. יש קוד לבוש מחמיר (כתפיים וברכיים מכוסות).",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "wat-pho",
      cityId: "bangkok",
      category: "attraction",
      name: "וואט פו",
      nameLatin: "Wat Pho",
      description:
        "מקדש ענק המפורסם בזכות פסל הבודהה השוכב באורך 46 מטר, מצופה זהב. נמצא בסמוך לארמון הגדול, ונחשב לאחד המקדשים העתיקים והחשובים בעיר.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "wat-arun",
      cityId: "bangkok",
      category: "attraction",
      name: "וואט ארון (מקדש השחר)",
      nameLatin: "Wat Arun",
      description:
        "מקדש מרשים על גדת נהר צ'או פראיה, עם מגדל מרכזי מעוטר בחרסינה שניתן לטפס עליו - הנוף מהפסגה, בעיקר בשקיעה, נחשב לאחד היפים בעיר.",
      sources: [ATTRACTION_SOURCE],
    },
  ],
  warnings: [
    {
      id: "taxi-meter-refusal",
      cityId: "bangkok",
      text: "נהגי מונית שמסרבים להפעיל את המונה - יש לעמוד על תשלום לפי מונה, או להשתמש באפליקציית Grab להזמנת נסיעה.",
    },
    {
      id: "closed-attraction-scam",
      cityId: "bangkok",
      text: "אנשים שיטענו שאתר תיירותי (כמו הארמון הגדול) \"סגור היום\" ויציעו הסעה חלופית בטוק-טוק - כמעט תמיד זו הובלה לחנות תכשיטים או חייטים עם מחירים מנופחים. כדאי להתעלם ולבדוק שעות פתיחה בעצמכם מראש.",
    },
    {
      id: "atm-safety",
      cityId: "bangkok",
      text: "עדיף למשוך כסף מכספומטים בתוך סניפי בנק, קניונים או מלונות, ולא מכספומטים בודדים ברחוב.",
    },
  ],
  phrases: [
    {
      id: "th-slang-tasty-bangkok",
      language: "thai",
      phrase: "อร่อย (a-roi)",
      meaning: "טעים",
      cityId: "bangkok",
    },
    {
      id: "th-slang-speak-bangkok",
      language: "thai",
      phrase: "พูด (phuut)",
      meaning: "לדבר",
      cityId: "bangkok",
    },
  ],
};
