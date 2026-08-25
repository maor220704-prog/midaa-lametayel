import type { CityContent } from "../../types";
import cityImg from "../../assets/images/phu-quoc.webp";
import saoBeachImg from "../../assets/images/phu-quoc-sao-beach.webp";
import honThomCableCarImg from "../../assets/images/phu-quoc-hon-thom-cable-car.webp";
import longBeachImg from "../../assets/images/phu-quoc-long-beach.webp";
import dinhCauNightMarketImg from "../../assets/images/phu-quoc-dinh-cau-night-market.webp";

export const phuQuoc: CityContent = {
  city: {
    id: "phu-quoc",
    name: "פו קווק",
    country: "vietnam",
    generalInfo:
      "פו קווק הוא האי הגדול בוייטנאם, שוכן במפרץ תאילנד קרוב יותר לחוף קמבודיה מאשר ליבשת וייטנאם, ומנוהל כאזור כלכלי מיוחד עם כניסה ללא ויזה. שמו מקורו בסינית-וייטנאמית ופירושו בקירוב \"אדמה עשירה\", וכינויו העממי \"אי הפנינים\" (Đảo Ngọc) נובע ממסורת ציד הצדפים ופיתוח הפנינים שהתפתחה סביבו. עד לפני כשני עשורים היה בעיקר איזור דייגים שקט; כיום הוא משלב כפרי דיג מסורתיים וחופי חול לבן עם תשתית תיירות ענקית של קבוצת וינגרופ - פארקי שעשועים, ספארי ורכבל הים הארוך בעולם - מה שהופך אותו ליעד שמשלב טבע, ים ובידור משפחתי אינטנסיבי במרחק נסיעה קצר.",
    image: cityImg,
  },
  places: [
    {
      id: "bun-quay-kien-xay",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "בון קוואי קיין סאי",
      nameLatin: "Bún Quậy Kiến Xây",
      description:
        "דוכן אטריות אגדי בדואונג דונג, שבו מבשלים במרק חם שרימפס וסוגי דגים חיים, ואת האטריות הטריות מערבבים (\"קוואי\") בעצמכם. המנה עצמה הגיעה לאי כבר ב-1955, ומשפחת קיין סאי מכינה אותה בגרסתה שלה מאז שנות ה-90 - ונחשבת למנה המזוהה ביותר עם פו קווק.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g1184679-d12269141-Reviews-Bun_Qu_y_Ki_n_Xay_A_C_Noodles-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://vietnam.travel/things-to-do/phu-quoc-signature-noodle-bun-quay",
        "https://www.vietnamcoracle.com/bun-quay-seafood-noodles/",
      ],
    },
    {
      id: "xin-chao-seafood",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "סין צ'או",
      nameLatin: "Xin Chào Seafood Restaurant",
      description:
        "מסעדת דגים ופירות ים גדולה ברחוב טראן הונג דאו, כ-300 מטר מהשוק הלילי, עם מרפסת פתוחה מוקפת דקלים מול הים ותפריט של כמעט 100 מנות ים. מקום נעים לפתוח בו ערב לפני שממשיכים לשוק.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g1184679-d10629874-Reviews-Xin_Chao_Seafood_Restaurant-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://visitphuquoc.com.vn/en/xin-chao-restaurant-757",
        "https://dulich.phuquoc.gov.vn/en/nhahangxinchao",
      ],
    },
    {
      id: "on-the-rocks-mango-bay",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "און דה רוקס",
      nameLatin: "On The Rocks, Mango Bay Resort",
      description:
        "מסעדת בוטיק על יציע עץ מעל הים בריזורט מנגוביי בחוף אונג לאנג, עם מטבח פיוז'ן וייטנאמי-מערבי הכולל מנות סרטן וים חתימה. ידועה בעיקר בזכות השקיעות שנראות ממנה - כדאי לתאם מקום מראש דרך הריזורט.",
      infoUrl: "https://mangobayphuquoc.com/en/dining/",
      sources: [
        "https://mangobayphuquoc.com/en/dining/",
        "https://idealmagazine.co.uk/restaurant-review-rocks-mango-bay-phu-quoc-ideal-place-island-intimacy/",
      ],
    },
    {
      id: "crab-house-duong-dong",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "קראב האוס",
      nameLatin: "Crab House Restaurant",
      description:
        "מסעדת סרטנים בסגנון קייג'ני שפועלת בדואונג דונג מאז 2015, עם סרטנים וחיות ים טריות המוגשות בתבלינים חריפים או בחמאת שום. פופולרית מאוד, ולכן מומלץ להזמין מקום מראש ולבדוק מחיר לפני ההזמנה כי התמחור לפי משקל.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g1184679-d8385690-Reviews-Crab_House_Restaurant-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g1184679-d8385690-Reviews-Crab_House_Restaurant-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
        "https://salindaresort.com/uncategorized/nha-ghe-phu-quoc",
      ],
    },
    {
      id: "noras-cafe",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "נורה'ס קפה",
      nameLatin: "Nora's Cafe",
      description:
        "בית קפה קטן וירוק באזור דואונג טו, שהפך לכתובת המומלצת לארוחת בוקר טבעונית וצמחונית באי - טוסט אבוקדו, סלטים טריים ושייקים מפירות מקומיים. אווירה שקטה וצל מטעים, נעים לפתוח בו בוקר לפני שיוצאים לחוף.",
      infoUrl: "https://www.facebook.com/norascafes/",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g1184676-d23794686-Reviews-Nora_s_Cafe-Duong_To_Phu_Quoc_Island_Kien_Giang_Province.html",
        "https://www.facebook.com/norascafes/",
      ],
    },
    {
      id: "kingkong-coffee",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "קינג קונג קופי",
      nameLatin: "King Kong Coffee",
      description:
        "בית קפה בסגנון ג'ונגל ברחוב טראן הונג דאו בדואונג דונג, מרחב פתוח ומוצל בין צמחייה עבותה, עם קפה קר וייטנאמי חתימה וקינוחים קלים. מקום נעים להתקרר בו בצהריים החמים, ליד קניון קינג קונג מארט.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g469418-d34119339-Reviews-King_Kong_Coffee-Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g469418-d34119339-Reviews-King_Kong_Coffee-Phu_Quoc_Island_Kien_Giang_Province.html",
        "https://www.facebook.com/kingkongcoffeephuquoc/",
      ],
    },
    {
      id: "hana-coffee-grand-world",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "האנה קופי אנד רסטורנט",
      nameLatin: "Hana Coffee & Restaurant",
      description:
        "בית קפה על גדת התעלה במתחם גרנד וורלד, שם אפשר ללגום קפה קוקוס ולצפות בגונדולות חולפות בסגנון ונציאני. מגישים גם מנות וייטנאמיות פשוטות כמו פו וספרינג רולס - עצירה נוחה בין אטרקציות המתחם.",
      infoUrl: "https://www.facebook.com/Hanacoffee.Phuquoc/",
      sources: [
        "https://vinpearl.com/en/phu-quoc-cafes",
        "https://www.facebook.com/Hanacoffee.Phuquoc/",
      ],
    },
    {
      id: "vuon-tao-restaurant",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "וורן טאו",
      nameLatin: "Vườn Táo Restaurant",
      description:
        "מסעדת פירות ים כפרית וירוקה ממול חוף לונג ביץ', ידועה בעיקר בזכות גוי קה טריק - סלט הרינג נא עטוף בנייר אורז עם עשבי תיבול וסויה מקומית. המסעדה גם מייצרת בעצמה יין רואו סים משזיף הוורד המקומי.",
      sources: [
        "https://www.phuquocislandexplorer.com/restaurants/vuon-tao.html",
        "https://www.hotels.com/go/vietnam/best-restaurants-phu-quoc",
      ],
    },
    {
      id: "peppertree-la-veranda",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "דה פפרטרי",
      nameLatin: "The Peppertree Restaurant, La Veranda Resort",
      description:
        "מסעדת יוקרה בריזורט לה ורנדה על חוף לונג ביץ', שמשלבת מטבח צרפתי עם פלפל פו קווק ורוטב דגים מקומי. הסטייק מוכן ומוגש ליד השולחן, ובערבים מתלווה נגינה חיה - מומלץ לערב רומנטי או חגיגי.",
      infoUrl: "https://laverandaresorts.com/restaurants-bars/the-peppertree/",
      sources: [
        "https://laverandaresorts.com/restaurants-bars/the-peppertree/",
        "https://www.tripadvisor.com/Restaurant_Review-g1184679-d2445331-Reviews-The_Pepper_Tree_Restaurant-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
      ],
    },
    {
      id: "sailing-club-phu-quoc",
      cityId: "phu-quoc",
      category: "restaurant",
      name: "סיילינג קלאב פו קווק",
      nameLatin: "Sailing Club Phu Quoc",
      description:
        "מועדון חוף במתחם המרינה של פו קווק, עם בריכת אינסוף הפונה לים ותפריט בינלאומי לצד מנות וייטנאמיות. פתוח כל היום מבריכה ושכיבה על שמש ועד ארוחת ערב, ובלילה הופך למוקד בידור עם מוזיקה חיה.",
      infoUrl: "https://sailingclubphuquoc.com/",
      sources: [
        "https://sailingclubphuquoc.com/",
        "https://vietnam.travel/things-to-do/sailing-club-phu-quoc",
      ],
    },
    {
      id: "hon-thom-cable-car",
      cityId: "phu-quoc",
      category: "attraction",
      name: "הרכבל להון תום",
      nameLatin: "Hon Thom Cable Car",
      description:
        "רכבל ים תלת-כבלי באורך כ-8 ק\"מ, שיא גינס לרכבל החוצה ים הארוך בעולם. הנסיעה נמשכת כרבע שעה מעל ארכיפלג האן טוי אל אי הון תום, והיא גם הדרך הנפוצה להגיע לסאנסט טאון.",
      image: honThomCableCarImg,
      infoUrl: "https://sunworld.vn/en/hon-thom/transportation/longest-cable-car-in-the-world",
      sources: [
        "https://sunworld.vn/en/hon-thom/transportation/longest-cable-car-in-the-world",
        "https://www.vietjetair.com/en/news/travel-guides-1665635013747/hon-thom-phu-quoc-cable-car-review-the-worlds-longest-sea-crossing-cable-car-1768878737803",
      ],
    },
    {
      id: "dinh-cau-temple",
      cityId: "phu-quoc",
      category: "attraction",
      name: "מקדש דין קאו",
      nameLatin: "Dinh Cau Temple",
      description:
        "מקדש קטן על סלע בפתח נהר דואונג דונג, שדייגים מתפללים בו למען שיט בטוח כבר יותר מ-300 שנה. עולים אליו במדרגות אבן קצרות, ובשעות אחר הצהריים המאוחרות הוא גם אחת מנקודות הצפייה הפופולריות בשקיעה.",
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g469418-d7220914-Reviews-Dinh_Cau_Rock_cau_Temple-Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://vinpearl.com/en/dinh-cau-temple-phu-quoc",
        "https://www.vietnamairlines.com/sg/en/plan-book/travel/travel-guide/Dinh-Cau-Temple",
      ],
    },
    {
      id: "nuoc-mam-fish-sauce-factory",
      cityId: "phu-quoc",
      category: "attraction",
      name: "מפעל רוטב הדגים נואוק מאם",
      nameLatin: "Nuoc Mam Phu Quoc Fish Sauce Factory",
      description:
        "פו קווק מייצרת את רוטב הדגים המשובח בוייטנאם, המוגן כמוצר מקור ייחודי לאזור מאז 2012, מאנשובי ומלח ביחס 7:3 שמתסיסים בחביות עץ ענקיות במשך חודשים. בכמה ממפעלי דואונג דונג אפשר לסייר בחינם ולהריח את התהליך מקרוב.",
      sources: [
        "https://www.tripadvisor.com/Attraction_Review-g1184676-d15645762-Reviews-Nuoc_Mam_Phu_Quoc_Huynh_Khoa-Duong_To_Phu_Quoc_Island_Kien_Giang_Province.html",
        "https://www.phuquocislandguide.com/phu-quoc-fish-sauce-factory/",
      ],
    },
    {
      id: "les-rives-yacht-snorkeling",
      cityId: "phu-quoc",
      category: "attraction",
      name: "לה ריב",
      nameLatin: "Les Rives Phu Quoc",
      description:
        "חברת סירות בוטיק שמפעילה קטמרנים ממונעים שנבנו במיוחד למי האי, ומציעה ימי שיט פרטיים לאיים בארכיפלג האן טוי עם עצירות שנירקול. שירות מוקפד וציוד שנירקול מקצועי כלולים, ומומלץ להזמין מראש כי מקומות מוגבלים.",
      infoUrl: "https://lesrivesphuquoc.com/tours/fishing-snorkeling-tour-by-luxury-yacht/",
      sources: [
        "https://lesrivesphuquoc.com/tours/fishing-snorkeling-tour-by-luxury-yacht/",
        "https://www.tripadvisor.com/Attraction_Review-g469418-d20256033-Reviews-Les_Rives_Phu_Quoc-Phu_Quoc_Island_Kien_Giang_Province.html",
      ],
    },
    {
      id: "sao-beach",
      cityId: "phu-quoc",
      category: "scenic",
      name: "חוף סאו",
      nameLatin: "Sao Beach (Bãi Sao)",
      description:
        "חוף בדרום האי עם קשת חול לבן ורך כקמח לאורך כמה קילומטרים, ומים רדודים ושקטים כמעט כמו בריכה. עיתונות בינלאומית כמו קונדה נאסט טראוולר דירגה אותו שוב ושוב בין החופים היפים בעולם.",
      image: saoBeachImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g12520037-d1750341-Reviews-Bai_T_m_Sao-An_Thoi_Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/sao-beach-phu-quoc/",
        "https://www.phuquocislandguide.com/sao-beach-phu-quoc/",
      ],
    },
    {
      id: "long-beach-bai-truong",
      cityId: "phu-quoc",
      category: "scenic",
      name: "החוף הארוך",
      nameLatin: "Long Beach (Bãi Trường)",
      description:
        "רצועת החוף הארוכה באי, כ-20 ק\"מ במורד החוף המערבי, שבה מרוכזים רוב בתי המלון והברים. בזכות הפנייה למערב זו נקודת השקיעה הפופולרית ביותר בפו קווק - כדאי לתכנן שם ארוחת ערב או משקה בין הערביים.",
      image: longBeachImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g1184676-d25168349-Reviews-Bai_Truong_Phu_Quoc-Duong_To_Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/long-beach-phu-quoc/",
        "https://www.sunsetsanato.com/en/blog/bai-truong-beach-guide/",
      ],
    },
    {
      id: "dinh-cau-night-market",
      cityId: "phu-quoc",
      category: "market",
      name: "השוק הלילי דין קאו",
      nameLatin: "Dinh Cau Night Market",
      description:
        "שוק לילה עם עשרות דוכני פירות ים חיים - בוחרים דג, סרטן או קלמארי מהאקווריום ומבקשים לצלות או לאדות במקום. פתוח כל ערב עד חצות ברחוב באך דאנג, לא רחוק ממסעדת סין צ'או.",
      image: dinhCauNightMarketImg,
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g469418-d2712477-Reviews-Dinh_Cau_Night_Market-Phu_Quoc_Island_Kien_Giang_Province.html",
      sources: [
        "https://vinpearl.com/en/phu-quoc-night-market-a-true-foodies-paradise-on-phu-quoc-island",
        "https://www.tripadvisor.com/Restaurant_Review-g469418-d2712477-Reviews-Dinh_Cau_Night_Market-Phu_Quoc_Island_Kien_Giang_Province.html",
      ],
    },
    {
      id: "vinwonders-phu-quoc",
      cityId: "phu-quoc",
      category: "special",
      name: "וין וונדרס פו קווק",
      nameLatin: "VinWonders Phu Quoc",
      description:
        "פארק השעשועים הגדול בוייטנאם, כ-50 הקטר ליד חוף באי דאי בצפון האי, עם שישה אזורי נושא, פארק מים ואקווריום צבים. פתוח יומיום 10:00-19:30, ומומלץ לתכנן לו יום שלם עם מגוון גילאים במשפחה.",
      infoUrl: "https://vinwonders.com/en/vinwonders-phu-quoc/",
      sources: [
        "https://vinwonders.com/en/vinwonders-phu-quoc/",
        "https://www.tripadvisor.com/Attraction_Review-g12666019-d8111328-Reviews-VinWonders_Phu_Quoc-Ganh_Dau_Phu_Quoc_Island_Kien_Giang_Province.html",
      ],
    },
    {
      id: "vinpearl-safari-phu-quoc",
      cityId: "phu-quoc",
      category: "special",
      name: "וינפרל ספארי פו קווק",
      nameLatin: "Vinpearl Safari Phu Quoc",
      description:
        "גן החיות הפתוח הגדול בוייטנאם, 380 הקטר עם למעלה מ-4,000 בעלי חיים מ-200 מינים, כולל נמרים בנגליים ואריות שרואים מתוך אוטובוס ספארי. אזור הספארי פתוח 9:00-16:00 בלבד, ואסור להכניס מזון או משקאות מהבית.",
      infoUrl: "https://vinwonders.com/en/vinpearl-safari-phu-quoc/",
      sources: [
        "https://vinwonders.com/en/vinpearl-safari-phu-quoc/",
        "https://vinpearl.com/en/vinpearl-safari-phu-quoc-venture-into-the-largest-safari-park-in-vietnam",
      ],
    },
    {
      id: "sunset-town-hon-thom",
      cityId: "phu-quoc",
      category: "special",
      name: "סאנסט טאון",
      nameLatin: "Sunset Town (Hon Thom)",
      description:
        "עיירת בידור על אי הון תום סביב \"גשר הנשיקה\" - שתי זרועות גשר שנפגשות כמעט אך לא נוגעות, בקצה מזח באורך כ-400 מטר מעל הים. בכל ערב (מלבד שלישי) מתקיים בשעה 21:00 מופע זיקוקים, מים ולייזרים.",
      infoUrl: "https://sungroup.com.vn/en/sunsettown",
      sources: [
        "https://kissofthesea.com/",
        "https://visitphuquoc.com.vn/en/grab-the-ultimate-guide-to-watching-fireworks-at-sunset-town-phu-quoc-the-worlds-most-unique-light-paradise-7264",
      ],
    },
  ],
  warnings: [
    {
      id: "rainy-season-afternoon-storms",
      cityId: "phu-quoc",
      text: "ספטמבר הוא חלק מעונת הגשמים בפו קווק (מאי-אוקטובר), עם כ-18 ימי גשם בחודש, בעיקר בסופות אחר-צהריים קצרות וחזקות. כדאי לתכנן פעילויות בחוץ לשעות הבוקר, ולזכור שהחוף המערבי (הארוך) יכול להיות גלי יותר מהחופים המזרחיים.",
    },
    {
      id: "airport-taxi-touts",
      cityId: "phu-quoc",
      text: "נהגים לא רשמיים מציעים לעיתים \"מחיר קבוע\" בשדה התעופה או טוענים שהם צוות רשמי - עדיף להתעלם ולהזמין נסיעה דרך אפליקציית Grab עם מחיר מוצג מראש, או לוודא עם נהג מונית שהמונה פועל לפני היציאה.",
    },
    {
      id: "heat-hydration-outdoor-days",
      cityId: "phu-quoc",
      text: "ימים מלאים בשמש כמו יום שיט, ביקור בספארי או בפארק שעשועים כרוכים בחשיפה ממושכת לחום וללחות גבוהה. מומלץ כובע, קרם הגנה ושתייה מרובה של מים, ולתכנן הפסקות צל באמצע היום עבור ילדים.",
    },
    {
      id: "vinpearl-safari-no-outside-food",
      cityId: "phu-quoc",
      text: "בכניסה לוינפרל ספארי אסור להכניס אוכל ומשקאות מהבית (למעט לתינוקות או לצרכים רפואיים), אופניים או חיות מחמד - שווה לבדוק את הרשימה המלאה מראש כדי לא להיתקל בהפתעה ליד השער.",
    },
  ],
  phrases: [],
};
