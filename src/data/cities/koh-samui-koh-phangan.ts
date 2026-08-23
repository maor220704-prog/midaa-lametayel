import type { CityContent } from "../../types";

const RESTAURANT_SOURCE = "https://biglittletravels.com/best-restaurants-in-koh-samui/";
const ATTRACTION_SOURCE =
  "https://theculturetrip.com/asia/thailand/articles/10-must-visit-attractions-in-koh-samui-thailand";

export const kohSamuiKohPhangan: CityContent = {
  city: {
    id: "koh-samui-koh-phangan",
    name: "קו סמוי / קו פנגן",
    country: "thailand",
    generalInfo:
      "קו סמוי היא איי החוף השלישי בגודלו בתאילנד, וההתיישבות בה מתועדת עוד לפני יותר מ-1,500 שנה - המתיישבים הראשונים היו כנראה דייגים מחצי האי המלאי ומדרום סין. מקור השם \"סמוי\" אינו ודאי: לפי גרסה אחת הוא מגיע ממילה מלאית שמשמעותה \"מקלט בטוח\", לפי אחרת מעץ מקומי שגדל באי, ולפי גרסה שלישית ממילה סינית (האינאנית) שפירושה בערך \"אי ראשון\" או \"חוף יפה\" - כפי שהאי נראה לסוחרים שהגיעו אליו ראשון בדרכם לתאילנד. עד שנות ה-80 של המאה ה-20 היה זה יעד נידח יחסית, עד שתרמילאים גילו את חופיו הבתוליים והפכו אותו בהדרגה ליעד תיירותי מוביל. גם היום ניכר באי המזג המיוחד שנוצר ממפגש בין המסורת התאית, מורשת הסוחרים הסינים, והפיתוח התיירותי המודרני. קו פנגן, האי השכן, מוכר בעיקר בזכות מסיבות הירח המלא המפורסמות שלו.",
  },
  places: [
    {
      id: "sa-being-lae",
      cityId: "koh-samui-koh-phangan",
      category: "restaurant",
      name: "סה ביינג לה",
      nameLatin: "Sa Being Lae",
      description:
        "מסעדת פירות ים משפחתית ותיקה שפועלת מאז 1990, עם קשרים ישירים לדייגים מקומיים - הדגים ופירות הים מגיעים טריים מהסירה מדי יום, במחירים הוגנים יחסית לאזור.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "two-fishes-samui",
      cityId: "koh-samui-koh-phangan",
      category: "restaurant",
      name: "טו פישס סאמוי",
      nameLatin: "2 Fishes Samui",
      description:
        "מסעדה איטלקית בכפר הדייגים הציורי בופוט, המשלבת פירות ים טריים מקומיים עם מטבח איטלקי - אווירה נעימה ולא רשמית.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "kob-thai",
      cityId: "koh-samui-koh-phangan",
      category: "restaurant",
      name: "קוב תאי",
      nameLatin: "Kob Thai",
      description:
        "מסעדה בחוף ליימאי המגישה את קלאסיקות המטבח התאילנדי - ממנות פירות ים ועד סלטים חריפים - עם שירות אדיב ומחירים סבירים.",
      sources: [RESTAURANT_SOURCE],
    },
    {
      id: "wat-phra-yai-big-buddha",
      cityId: "koh-samui-koh-phangan",
      category: "attraction",
      name: "הבודהה הגדול",
      nameLatin: "Wat Phra Yai Big Buddha",
      description:
        "פסל בודהה מוזהב בגובה 12 מטר, הנראה למרחקים ומהווה את אחד הסמלים המזוהים ביותר עם קו סמוי. המקדש מחובר לאי הראשי בגשר קצר, וניתן לטפס עד לרגלי הפסל.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "wat-plai-laem",
      cityId: "koh-samui-koh-phangan",
      category: "attraction",
      name: "וואט פלאי לאם",
      nameLatin: "Wat Plai Laem",
      description:
        "מקדש ססגוני וקצת מפתיע על החוף הצפון-מזרחי של האי, הכולל פסל ענק של גואנין (אלת החמלה) עם 18 זרועות, הניצב מעל בריכה מלאה בדגים.",
      sources: [ATTRACTION_SOURCE],
    },
    {
      id: "na-mueang-waterfalls",
      cityId: "koh-samui-koh-phangan",
      category: "attraction",
      name: "מפלי נא מואנג",
      nameLatin: "Na Mueang Waterfalls",
      description:
        "שני מפלי מים טבעיים יפים בתוך האי, שניתן להגיע אליהם בטיול הליכה קצר יחסית - אפשרות נעימה לבריכת מים מתוקים וצל בין עצי הג'ונגל, הרחק מהחופים ההומים.",
      sources: [ATTRACTION_SOURCE],
    },
  ],
  warnings: [
    {
      id: "jet-ski-damage-claims",
      cityId: "koh-samui-koh-phangan",
      text: "השכרת אופנועי ים - יש לצלם ולתעד את כל כלי הרכב לפני הנסיעה (כולל שריטות קיימות), כדי להימנע מטענות כוזבות על נזק בסוף ההשכרה. לא להשאיר דרכון כפיקדון - רק פיקדון במזומן או חסימת אשראי.",
    },
    {
      id: "taxi-songthaew-price",
      cityId: "koh-samui-koh-phangan",
      text: "יש לתאם מחיר מראש עם נהגי מוניות וסונגטהאו (מוניות משותפות) לפני העלייה לרכב, ולהעדיף הזמנה דרך אפליקציה כשאפשר.",
    },
    {
      id: "isolated-beaches-at-night",
      cityId: "koh-samui-koh-phangan",
      text: "מומלץ להימנע מחופים מבודדים ומהליכה לבד בשעות מאוחרות בלילה.",
    },
  ],
  phrases: [
    {
      id: "th-slang-tasty-koh-samui",
      language: "thai",
      phrase: "หรอย (roi)",
      meaning: "טעים",
      cityId: "koh-samui-koh-phangan",
    },
    {
      id: "th-slang-speak-koh-samui",
      language: "thai",
      phrase: "แหลง (laeng)",
      meaning: "לדבר",
      cityId: "koh-samui-koh-phangan",
    },
  ],
};
