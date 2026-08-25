import type { CityContent } from "../../types";
import cityImg from "../../assets/images/hanoi.webp";
import hoanKiemLakeImg from "../../assets/images/hanoi-hoan-kiem-lake.webp";
import trainStreetImg from "../../assets/images/hanoi-train-street.webp";
import stJosephCathedralImg from "../../assets/images/hanoi-st-joseph-cathedral.webp";
import hoTayLakeImg from "../../assets/images/hanoi-ho-tay-lake.webp";
import dongXuanMarketImg from "../../assets/images/hanoi-dong-xuan-market.webp";

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
    image: cityImg,
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
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d1123439-Reviews-Cha_Ca_Thang_Long-Hanoi.html",
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
        "אחת הכתובות המוכרות ביותר לבון צ'ה - פרוסות בשר חזיר צלויות על גחלים, מוגשות עם אטריות אורז קרות, ירק טרי ורוטב מתוק-חמצמץ. המנה עצמה התפרסמה מעבר לוייטנאם אחרי שהנשיא אובמה אכל אותה במסעדה אחרת בהאנוי ב-2016.",
      infoUrl: "https://bunchata.com/",
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
      infoUrl: "https://cafegiang.vn/",
      sources: [RESTAURANT_SOURCE, "https://asiamystika.com/blog/cafe-giang"],
    },
    {
      id: "pho-gia-truyen-bat-dan",
      cityId: "hanoi",
      category: "restaurant",
      name: "פו ג'ה טרוין",
      nameLatin: "Phở Gia Truyền (49 Bát Đàn)",
      description:
        "מוסד פו איקוני ברובע העתיק שפועל כבר יותר משבעים שנה ברחוב בת דאן, ופתוח רק לשעות בוקר קצרות ולערב - מגישים בו מרק בקר מסורתי בלבד, בשלוש דרגות בישול של הבשר. זכה בציון ביב גורמנד ממדריך מישלן, והתור המשתרך ברחוב הוא סימן ההיכר שלו.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d1124695-Reviews-Pho_Gia_Truyen-Hanoi.html",
      sources: [
        "https://guide.michelin.com/us/en/ha-noi/ha-noi_2974158/restaurant/pho-gia-truyen",
        "https://danielfooddiary.com/2025/12/12/phogiatruyen/",
      ],
    },
    {
      id: "xoi-yen",
      cityId: "hanoi",
      category: "restaurant",
      name: "סוי יין",
      nameLatin: "Xôi Yến",
      description:
        "מוסד אורז דביק ברחוב נגוין הו הואן שפועל משנת 1997 ונחשב לחלוץ הז'אנר בהאנוי - קערות ענקיות של אורז צהוב עם טופינגים כמו נקניקיה, פטה, ביצה וחזיר, פתוח מהבוקר המוקדם ועד הלילה. יעד קבוע לארוחת בוקר וייטנאמית אמיתית.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d2054307-Reviews-Xoi_Yen-Hanoi.html",
      sources: [
        "https://www.bdatrip.com/en-us/hanoi/travel-tips/xoi-yen-the-pinnacle-of-hanois-famous",
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d2054307-Reviews-Xoi_Yen-Hanoi.html",
      ],
    },
    {
      id: "ca-phe-dinh",
      cityId: "hanoi",
      category: "restaurant",
      name: "קפה דין",
      nameLatin: "Cà Phê Đinh",
      description:
        "בית קפה נסתר בקומה השנייה מעל רחוב דין טיין הואנג, שאליו מגיעים דרך סמטה צרה ומדרגות עץ ישנות. נוסד ב-1987 בידי בתה של ממציא קפה הביצה, ועד היום מקום ותיק לשבת בו עם כוס קפה ביצה ולהשקיף על אגם הואן קיים.",
      sources: [
        "https://vietnamnet.vn/en/ca-phe-dinh-where-old-hanoi-lingers-in-every-sip-2401046.html",
        "https://www.hanoitourism.org/hanoi-egg-coffee-guide/",
      ],
    },
    {
      id: "loading-t-cafe",
      cityId: "hanoi",
      category: "restaurant",
      name: "לואדינג טי קפה",
      nameLatin: "Loading T Café",
      description:
        "בית קפה בקומה שנייה נסתרת בתוך וילה צרפתית-קולוניאלית משנות ה-30, דקות הליכה מקתדרלת סנט ג'וזף. מתמחה בקפה ביצה עם קינמון קלוי ובגרסאות ייחודיות כמו קפה קוקוס וקפה יוגורט, בתפאורה נוסטלגית של רצפת אריחים מקורית וקירות לבנים חשופים.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d7077336-Reviews-or75-Loading_T_Cafe-Hanoi.html",
      sources: [
        "https://saigoneer.com/hanoi-street-food-restaurants/24298-ng%C3%B5-nooks-decadent-egg-coffee-in-a-1930s-architectural-gem",
        "https://www.trip.com/moments/theme/poi-loading-t-caf-25576285-restaurant-993134/",
      ],
    },
    {
      id: "hanoi-social-club",
      cityId: "hanoi",
      category: "restaurant",
      name: "האנוי סושיאל קלאב",
      nameLatin: "The Hanoi Social Club",
      description:
        "בית קפה-מסעדה בווילה קולוניאלית מ-1920 בסמטה שקטה ליד רחוב הנג בונג, על שלוש קומות שכוללות מרפסת גג למוזיקה חיה. תפריט הבוקר-בראנץ' מציע טוסט אבוקדו וטוסט צרפתי לצד קפה וייטנאמי איכותי, ומושך את הקהילה היצירתית של האנוי.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g27501570-d2216014-Reviews-The_Hanoi_Social_Club-Hoan_Kiem_Hanoi.html",
      sources: [
        "https://www.vietnamairlines.com/us/en/plan-book/travel/travel-guide/best-brunch-hanoi",
        "https://www.tripadvisor.com/Restaurant_Review-g27501570-d2216014-Reviews-The_Hanoi_Social_Club-Hoan_Kiem_Hanoi.html",
      ],
    },
    {
      id: "banh-mi-25",
      cityId: "hanoi",
      category: "restaurant",
      name: "באן מי 25",
      nameLatin: "Bánh Mì 25",
      description:
        "דוכן באן מי קטן ברחוב הנג קה שנפתח ב-2014 והתפשט לשלוש כתובות סמוכות בזכות הביקוש. הבגט הפריך במילוי בשר צלוי על גחלים או עוף בדבש נחשב לאחד הכריכים המדוברים ביותר ברובע העתיק - אופציה מצוינת לארוחת בוקר או צהריים מהירה.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d10804511-Reviews-Banh_Mi_25-Hanoi.html",
      sources: [
        "https://flavorsofhanoi.com/banh-mi-25/",
        "https://www.tripadvisor.com/Restaurant_Review-g293924-d10804511-Reviews-Banh_Mi_25-Hanoi.html",
      ],
    },
    {
      id: "quan-an-ngon",
      cityId: "hanoi",
      category: "restaurant",
      name: "קואן אן נגון",
      nameLatin: "Quán Ăn Ngon",
      description:
        "מסעדה הפועלת מ-2005 בווילה קולוניאלית מרשימה ברחוב פאן בוי צ'או, שבה עשרות דוכני רחוב פנימיים משחזרים מנות מסורתיות משלושת אזורי וייטנאם - מבון צ'ה ועד בן קסאו. מקום נוח לטעום הרבה מנות שונות בארוחה אחת בלי לנדוד בין דוכני רחוב.",
      infoUrl: "https://guide.michelin.com/us/en/ha-noi/ha-noi_2974158/restaurant/quan-an-ngon",
      sources: [
        "https://guide.michelin.com/us/en/ha-noi/ha-noi_2974158/restaurant/quan-an-ngon",
        "https://vietnamdiscovery.com/hanoi/eating/quan-an-ngon-restaurant/",
      ],
    },
    {
      id: "hoan-kiem-lake",
      cityId: "hanoi",
      category: "attraction",
      name: "אגם הואן קיים",
      nameLatin: "Hoan Kiem Lake",
      description:
        "האגם המרכזי והמוכר ביותר בהאנוי, עם מגדל הצב הקטן במרכזו ומקדש נגוק סון שאליו מגיעים דרך גשר אדום ציורי. מקום נעים לטיול רגלי, בעיקר בשעות הבוקר או הערב.",
      image: hoanKiemLakeImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d311070-Reviews-Lake_of_the_Restored_Sword_Hoan_Kiem_Lake-Hanoi.html",
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
      image: stJosephCathedralImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d311082-Reviews-St_Joseph_s_Cathedral-Hanoi.html",
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
      image: trainStreetImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d32789681-Reviews-Hanoi_Train_Street-Hanoi.html",
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
      image: dongXuanMarketImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d311057-Reviews-Dong_Xuan_Market-Hanoi.html",
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
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d10962096-Reviews-Chuong_Tailor-Hanoi.html",
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
        "רשת בתי קפה וייטנאמית שנוסדה ב-2007 בהאנוי בהשראה נוסטלגית לתקופת הקיצוב הסוציאליסטית, עם עיצוב ירוק-זית ומדים צבאיים לצוות. מוכרת בעיקר בזכות קפה הקוקוס הקר שלה, וכיום מונה למעלה מ-100 סניפים בשלוש יבשות.",
      infoUrl: "https://congcaphe.com/",
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
      image: hoTayLakeImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g293924-d455016-Reviews-West_Lake-Hanoi.html",
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
