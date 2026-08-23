import type { CityContent } from "../../types";

export const hoChiMinhCity: CityContent = {
  city: {
    id: "ho-chi-minh-city",
    name: "הו צ'י מין סיטי (סייגון)",
    country: "vietnam",
    generalInfo:
      "הו צ'י מין סיטי, שרוב התושבים עדיין מכנים בשמה הישן סייגון, היא העיר הגדולה והתוססת ביותר בווייטנאם ומרכזה הכלכלי. מקור השם \"סייגון\" שנוי במחלוקת, אך משוער שהוא קשור לנהר המקומי ולעצי הכותנה (או הקוקוס) שגדלו על גדותיו, והשם תועד לראשונה במאות ה-17-18. הצרפתים שכבשו את העיר במאה ה-19 אימצו את השם ובנו סביבו רובע קולוניאלי מהודר. ב-1975, עם איחוד וייטנאם תחת השלטון הקומוניסטי, שונה שמה הרשמי לכבודו של הו צ'י מין - אך ברחוב ובפי התושבים ממשיך השם סייגון לחיות לצד השם הרשמי. העיר בנויה כפסיפס של רבעים (דיסטריקטים) סביב נהר סייגון, כשמרכזה ההיסטורי (דיסטריקט 1) שוזר יחד בניינים קולוניאליים צרפתיים, שווקים סואנים וגורדי שחקים מנצנצים.",
  },
  places: [
    {
      id: "banh-mi-huynh-hoa",
      cityId: "ho-chi-minh-city",
      category: "restaurant",
      name: "באן מי הוין הואה",
      nameLatin: "Bánh Mì Huỳnh Hoa",
      description:
        "מוסד ברחוב לה טהי ריאנג שפועל מאז 1989, ונחשב לכתובת המפורסמת ביותר בסייגון לבאן מי - הכריך הווייטנאמי. כל כריך מורכב מ-13 מרכיבים שונים, ולכן התור בחוץ הוא חלק קבוע מהחוויה.",
      sources: [
        "https://vietcetera.com/en/banh-mi-huynh-hoa-how-100k-and-35-years-built-a-saigon-icon",
        "https://danielfooddiary.com/2024/02/26/banhmihuynhhoa/",
      ],
    },
    {
      id: "pho-2000",
      cityId: "ho-chi-minh-city",
      category: "restaurant",
      name: "פו 2000",
      nameLatin: "Phở 2000",
      description:
        "מסעדת פו במרחק צעדים ספורים משוק בן טהאן, שהתפרסמה אחרי שהנשיא לשעבר ביל קלינטון אכל בה במהלך ביקורו ההיסטורי בווייטנאם ב-2000. עדיין פועלת ומגישה פו קלאסי לתיירים ולמקומיים כאחד.",
      sources: [
        "https://www.vietnam.vn/en/quan-pho-ngay-trung-tam-tp-hcm-tung-don-tong-thong-my-bill-clinton-gio-ra-sao",
        "https://www.tripadvisor.com/Restaurant_Review-g293925-d1122861-Reviews-PHO_2000-Ho_Chi_Minh_City.html",
      ],
    },
    {
      id: "banh-xeo-46a",
      cityId: "ho-chi-minh-city",
      category: "restaurant",
      name: "באן שאו 46A",
      nameLatin: "Bánh Xèo 46A",
      description:
        "פועלת מ-1945 בסמטה שקטה, וזוכה להכרה כתפריט מומלץ במדריך מישלן. מתמחה בבאן שאו - חביתת אורז וכורכום פריכה במילוי חזיר ושרימפס, המטוגנת עדיין על גחלים ומוגשת עם ירק טרי לעטיפה.",
      sources: [
        "https://migrationology.com/banh-xeo-46a-saigon/",
        "https://www.tripadvisor.com/Restaurant_Review-g293925-d1122087-Reviews-Banh_Xeo_46A-Ho_Chi_Minh_City.html",
      ],
    },
    {
      id: "quan-an-ngon",
      cityId: "ho-chi-minh-city",
      category: "restaurant",
      name: "קוואן אן נגון",
      nameLatin: "Quán Ăn Ngon",
      description:
        "מסעדה מרווחת עם מטבח פתוח, במרחק שני רחובות מארמון העצמאות, שמרכזת תחת קורת גג אחת מנות רחוב ממגוון אזורים בווייטנאם. תפריט דו-לשוני ותור בשעות השיא - כדאי להזמין מקום מראש.",
      sources: [
        "https://www.vietnamonline.com/restaurant/ho-chi-minh-city/quan-an-ngon-restaurant.html",
        "https://www.tripadvisor.com.my/Restaurant_Review-g293925-d1949058-Reviews-Quan_An_Ngon-Ho_Chi_Minh_City.html",
      ],
    },
    {
      id: "independence-palace",
      cityId: "ho-chi-minh-city",
      category: "attraction",
      name: "ארמון העצמאות",
      nameLatin: "Independence Palace (Reunification Palace)",
      description:
        "הארמון שבו הסתיימה מלחמת וייטנאם ב-30 באפריל 1975, כשטנק צבא הצפון פרץ את שעריו. שימורו כפי שהיה באותו יום - כולל חדר המפקדה והבונקר התת-קרקעי - הופך אותו לאתר היסטורי ולא רק לבניין מרשים.",
      sources: [
        "https://viet-go.com/en/attractions/independence-palace-saigon-guide",
        "https://vietnamupr.com/guide-to-independence-palace-war-remnants-museum.html",
      ],
    },
    {
      id: "war-remnants-museum",
      cityId: "ho-chi-minh-city",
      category: "attraction",
      name: "מוזיאון שרידי המלחמה",
      nameLatin: "War Remnants Museum",
      description:
        "מוזיאון שנפתח ב-1975 ושונה שמו ב-1993, המציג כלי נשק, תצלומים ועדויות ממלחמת וייטנאם מנקודת המבט הווייטנאמית. תערוכה מטלטלת ולא מתאימה לילדים קטנים, אך חוויה משמעותית למי שרוצה להבין את ההיסטוריה של המדינה.",
      sources: [
        "https://silverlandhotels.com/war-remnants-museum-ho-chi-minh-travel-guide/",
        "https://www.lonelyplanet.com/vietnam/ho-chi-minh-city/attractions/war-remnants-museum/a/poi-sig/403144/357884",
      ],
    },
    {
      id: "saigon-central-post-office",
      cityId: "ho-chi-minh-city",
      category: "attraction",
      name: "בית הדואר המרכזי של סייגון",
      nameLatin: "Saigon Central Post Office",
      description:
        "בניין קולוניאלי מרשים שנבנה בין 1886 ל-1891 בשילוב סגנון אירופאי ומזרח-אסייתי, עם שעון גדול שיובא מפריז מעל הכניסה. עדיין משמש כסניף דואר פעיל, ונמצא בצמוד לקתדרלת נוטרדאם של סייגון.",
      sources: [
        "https://vietcetera.com/en/the-saigon-central-post-office-inside-a-130-year-old-landmark-in-saigon",
        "https://www.atlasobscura.com/places/saigon-central-post-office",
      ],
    },
    {
      id: "bitexco-skydeck",
      cityId: "ho-chi-minh-city",
      category: "scenic",
      name: "מגדל ביטקסקו (סקיידק)",
      nameLatin: "Bitexco Financial Tower Skydeck",
      description:
        "מגדל 68 קומות בצורת ניצן לוטוס, עם מגדף מסוק בולט בצדו. קומת התצפית ה-49 מציעה נוף 360 מעלות על העיר ועל נהר סייגון, ובעיקר יפה לקראת שקיעה כשהעיר מתחילה להידלק באורות.",
      sources: [
        "https://jackfruitadventure.com/bitexco-financial-tower-skydeck-ultimate-visiting-guide/",
        "https://www.klook.com/en-US/activity/5496-saigon-skydeck-bitexco-financial-tower-admission-ticket-ho-chi-minh-city/",
      ],
    },
    {
      id: "nguyen-hue-walking-street",
      cityId: "ho-chi-minh-city",
      category: "scenic",
      name: "רחוב ההולכים רגל נגוין הואה",
      nameLatin: "Nguyen Hue Walking Street",
      description:
        "שדרה להולכי רגל באורך 720 מטר, שהייתה במקור תעלה ונפתחה כרחוב הולכי רגל ב-2015. במרכזה מזרקה בצורת לוטוס עם מופעי מים ואור בלילה, ובשעות הערב היא הופכת למרחב מפגש תוסס למשפחות ולבני נוער.",
      sources: [
        "https://www.vietnamairlines.com/us/en/plan-book/travel/travel-guide/nguyen-hue-walking-street",
        "https://www.tripadvisor.com/Attraction_Review-g293925-d8290115-Reviews-Nguyen_Hue_Street-Ho_Chi_Minh_City.html",
      ],
    },
    {
      id: "ben-thanh-market",
      cityId: "ho-chi-minh-city",
      category: "market",
      name: "שוק בן טהאן",
      nameLatin: "Ben Thanh Market",
      description:
        "השוק המזוהה ביותר עם סייגון, שנבנה ב-1914 בתקופה הקולוניאלית וניכר במגדל השעון ובחזית הצהובה-אוקר שלו. אלפי דוכנים למזון, בגדים ומזכרות, ומקום טוב להתמקח - אבל גם יעד מוכר לכייסים ולתיירי-יתר.",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/ben-thanh-market-a-prominent-landmark-of-the-bustling-ho-chi-minh-city/",
        "https://oxalisadventure.com/ben-thanh-market-ho-chi-minh-city/",
      ],
    },
    {
      id: "binh-tay-market",
      cityId: "ho-chi-minh-city",
      category: "market",
      name: "שוק בין טאי",
      nameLatin: "Binh Tay Market",
      description:
        "השוק הסיטונאי הגדול בלב צ'ולון, הרובע הסיני של סייגון, שנבנה בסוף שנות ה-1920 בידי סוחר סיני-וייטנאמי אמיד. פחות מיועד לתיירים משוק בן טהאן ולכן חווית קנייה אותנטית יותר, עם אדריכלות עם השפעות סיניות.",
      sources: [
        "https://localvietnam.com/blog/binh-tay-market/",
        "https://www.vietnamairlines.com/us/en/plan-book/travel/travel-guide/binh-tay-market",
      ],
    },
    {
      id: "bui-vien-walking-street",
      cityId: "ho-chi-minh-city",
      category: "special",
      name: "רחוב בוי וויין",
      nameLatin: "Bui Vien Walking Street",
      description:
        "רחוב הבאקפקרים של סייגון, שהוכרז רשמית כרחוב הולכי רגל ב-2017. ביום שקט יחסית עם בתי קפה ודוכני אוכל, ובלילה הופך למסיבת רחוב שוקקת עם מוזיקה, בירה זולה ואווירה שלא קיימת בשום מקום אחר בעיר.",
      sources: [
        "https://vinpearl.com/en/bui-vien-street-saigon-nightlife-hot-spot",
        "https://vietnamdiscovery.com/ho-chi-minh-city/attractions/bui-vien-street/",
      ],
    },
    {
      id: "turtle-lake",
      cityId: "ho-chi-minh-city",
      category: "special",
      name: "אגם הצב",
      nameLatin: "Turtle Lake (Ho Con Rua)",
      description:
        "כיכר-מזרקה מוכרת בשם \"אגם הצב\", שהפכה לנקודת מפגש בלתי רשמית של נוער סייגון. בערבים מתיישבים מקומיים ישירות על המדרגות סביב האגם עם כוס קפה וייטנאמי מדוכני הרחוב - הזדמנות לראות שגרת חיים מקומית אמיתית.",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/turtle-lake-ho-chi-minh-city/",
        "https://gtrip.vn/travel-blogs/saigon-sidewalk-coffee",
      ],
    },
  ],
  warnings: [
    {
      id: "fake-taxi-meters",
      cityId: "ho-chi-minh-city",
      text: "מוניות עם מונים מתוקנים שרצים מהר פי 3-5 מהתעריף האמיתי, בעיקר בשדה התעופה טאן סון נהאט ובאזור שוק בן טהאן. מומלץ להשתמש באפליקציית Grab או ב-Xanh SM, ואם עולים למונית רגילה - לוודא שזו של ויאנסון (Vinasun, לבנה) או מאי לין (Mai Linh, ירוקה) ושהמונה פועל מתחילת הנסיעה.",
    },
    {
      id: "money-switching-scam",
      cityId: "ho-chi-minh-city",
      text: "נהגים ומוכרי רחוב שמחליפים במהירות שטר גדול שקיבלו בשטר קטן דומה בצבעו (למשל 500,000 דונג מול 20,000 דונג) וטוענים שקיבלו סכום נמוך מדי. כדאי לספור כסף בקול, לאט, ולהכיר את הצבעים והגדלים של השטרות מראש.",
    },
    {
      id: "bui-vien-bar-scam",
      cityId: "ho-chi-minh-city",
      text: "באזור בוי וויין ופאם נגו לאו יש ברים שמזמינים דרך מארחות ידידותיות לשתות בלי תפריט מחירים גלוי, וכשמגיע החשבון הסכום מנופח באופן קיצוני. יש לבדוק מחירים לפני ההזמנה, לצלם את החשבון, ובמקרה של לחץ - לאיים בפנייה למשטרת התיירות (113).",
    },
    {
      id: "atm-skimming-ben-thanh",
      cityId: "ho-chi-minh-city",
      text: "כספומטים עצמאיים ברחובות סביב שוק בן טהאן דווחו כמותקנים במכשירי שכפול כרטיסים. עדיף למשוך כסף מכספומט בתוך סניף בנק, קניון או מלון, ולכסות את המקלדת בעת הקשת הקוד.",
    },
  ],
  phrases: [
    {
      id: "vi-slang-spoon-saigon",
      language: "vietnamese",
      phrase: "muỗng",
      meaning: "כף (לאכילה) - בצפון אומרים thìa",
      cityId: "ho-chi-minh-city",
    },
    {
      id: "vi-slang-expensive-saigon",
      language: "vietnamese",
      phrase: "mắc",
      meaning: "יקר - בצפון אומרים đắt",
      cityId: "ho-chi-minh-city",
    },
  ],
};
