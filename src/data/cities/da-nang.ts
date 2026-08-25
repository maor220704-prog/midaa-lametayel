import type { CityContent } from "../../types";
import cityImg from "../../assets/images/da-nang.webp";
import goldenBridgeImg from "../../assets/images/da-nang-golden-bridge.webp";
import marbleMountainsImg from "../../assets/images/da-nang-marble-mountains.webp";
import myKheBeachImg from "../../assets/images/da-nang-my-khe-beach.webp";
import dragonBridgeFireShowImg from "../../assets/images/da-nang-dragon-bridge-fire-show.webp";

export const daNang: CityContent = {
  city: {
    id: "da-nang",
    name: "דה נאנג",
    country: "vietnam",
    generalInfo:
      "השם דה נאנג מקורו כנראה בשפת הצ'אם - העם שישב באזור לפני הווייטנאמים - ופירושו בערך \"נהר גדול\", כרמז לנהר האן שחוצה את העיר. תחת השלטון הצרפתי, מהמאה ה-19 ועד אמצע המאה ה-20, נקראה העיר \"טוראן\" ושימשה נמל מסחר מרכזי בווייטנאם המרכזית. מעיירת נמל קולוניאלית צנועה, דה נאנג הפכה בעשורים האחרונים לאחת הערים המתפתחות והמודרניות בווייטנאם - עם קו רקיע חדש, גשרים מעוצבים על נהר האן וחוף ים ארוך שהפך אותה ליעד נופש מבוקש. היא משמשת גם כשער הכניסה הנוח ביותר לאזור הוֹיאן והוואה הסמוכים.",
    image: cityImg,
  },
  places: [
    {
      id: "ba-na-hills-golden-bridge",
      cityId: "da-nang",
      category: "attraction",
      name: "באנה הילס וגשר הזהב",
      nameLatin: "Sun World Ba Na Hills & Golden Bridge",
      description:
        "פארק הרים בגובה כ-1,487 מטרים, שמגיעים אליו ברכבל ארוך במיוחד. בלב הפארק גשר הזהב - מוביל הליכה שנפתח ב-2018 ונראה כמונף בידי שתי כפות ידיים ענקיות מאבן, וזכה להכללה ברשימת TIME ל-100 המקומות הגדולים בעולם ב-2018.",
      image: goldenBridgeImg,
      infoUrl: "https://sunworld.vn/en/banahills",
      sources: [
        "https://danangfantasticity.com/en/sun-world-ba-na-hills-3",
        "https://www.klook.com/en-SG/blog/ba-na-hills-guide/",
      ],
    },
    {
      id: "marble-mountains",
      cityId: "da-nang",
      category: "attraction",
      name: "הרי השיש (נגו האן סון)",
      nameLatin: "Marble Mountains (Ngũ Hành Sơn)",
      description:
        "חמישה גבעות אבן גיר ושיש, שכל אחת נקראת על שם אחד מחמשת היסודות במחשבה המזרחית - מתכת, אדמה, עץ, אש ומים. במערות ובפסגות פזורים מקדשים ואתרי פולחן בודהיסטיים בני מאות שנים, עם מדרגות תלולות ונוף אל הים.",
      image: marbleMountainsImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298085-d454980-Reviews-The_Marble_Mountains-Da_Nang.html",
      sources: ["https://vietnamdiscovery.com/da-nang/attractions/marble-mountains/"],
    },
    {
      id: "linh-ung-pagoda-lady-buddha",
      cityId: "da-nang",
      category: "attraction",
      name: "פגודת לין אונג (הבודהה הלבנה)",
      nameLatin: "Linh Ung Pagoda, Son Tra (Lady Buddha)",
      description:
        "פגודה פעילה על חצי האי סון צ'ה, שנחנכה ב-2010 ומרכזה פסל בודהה לבן בגובה 67 מטרים המשקיף על המפרץ ועל העיר. אתר תפילה בודהיסטי אמיתי, ולא רק אטרקציה - כדאי להתלבש בצניעות בעת הביקור.",
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g17786366-d7118743-Reviews-Linh_Ung_Pagoda-Son_Tra_Peninsula_Da_Nang.html",
      sources: [
        "https://www.tomhentystravel.co.uk/asia-1/lady-buddha-statue-da-nang",
        "https://vietnamdiscovery.com/da-nang/attractions/linh-ung-pagoda/",
      ],
    },
    {
      id: "da-nang-cathedral-pink-church",
      cityId: "da-nang",
      category: "attraction",
      name: "הקתדרלה הוורודה של דה נאנג",
      nameLatin: "Da Nang Cathedral (Pink Church)",
      description:
        "כנסייה ניאו-גותית מ-1923 בצבע ורוד בולט, שנבנתה עבור הקהילה הצרפתית-קתולית בתקופת הקולוניאליזם. מכונה גם \"כנסיית התרנגול\" בזכות פסל תרנגול המוצב על גג מגדל הפעמונים, וממשיכה לשרת קהילה קתולית פעילה עד היום.",
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298085-d12273530-Reviews-Da_Nang_Catheral-Da_Nang.html",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/da-nang-cathedral-a-famous-cultural-attraction-with-impressive-pink-color/",
        "https://traveldanang.org/place/the-pink-church-danang-cathedral/",
      ],
    },
    {
      id: "mi-quang-ba-mua",
      cityId: "da-nang",
      category: "restaurant",
      name: "מי קוואנג בה מואה",
      nameLatin: "Mì Quảng Bà Mua",
      description:
        "רשת מקומית ותיקה משנת 1997, שמתמחה במי קוואנג - אטריות צהובות מכורכום עם מעט מרק בלבד, המוגשות עם שרימפס, חזיר, ביצת שליו ובוטנים. מנה שנחשבת לסמל הקולינרי של אזור דה נאנג-הוֹיאן.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d8064453-Reviews-Quan_Mi_Quang_Ba_Mua-Da_Nang.html",
      sources: [
        "https://visitdanang.travel/en/mi-quang-ba-mua-2186",
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d8064453-Reviews-Quan_Mi_Quang_Ba_Mua-Da_Nang.html",
      ],
    },
    {
      id: "be-man-seafood",
      cityId: "da-nang",
      category: "restaurant",
      name: "בה מן",
      nameLatin: "Hải Sản Bé Mặn",
      description:
        "מסעדת פירות ים סמוך לחוף מי קה, נכללה במדריך מישלן ב-2024 וב-2025. בוחרים דגים ופירות ים חיים מהאקווריום ומחליטים איך לבשל אותם - כולל מנת דגל הסרטן ברוטב טמרינד.",
      infoUrl: "https://www.facebook.com/haisanbeman/",
      sources: [
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/be-man",
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d16670813-Reviews-Hai_San_Be_Man_A-Da_Nang.html",
      ],
    },
    {
      id: "banh-xeo-76",
      cityId: "da-nang",
      category: "restaurant",
      name: "באן שאו 76",
      nameLatin: "Bánh Xèo 76",
      description:
        "דוכן קטן שזכה בהמלצת Bib Gourmand של מדריך מישלן ב-2025, כאחד מארבעה מקומות חדשים ומשתלמים בדה נאנג. מגישים באן שאו בסגנון קוואנג נגאי, פריך ודק, יחד עם מטולעי חזיר צלויים על גחלים.",
      infoUrl: "https://www.facebook.com/76QuangNgaiTaste/",
      sources: [
        "https://guide.michelin.com/en/da-nang-region/da-nang_2984390/restaurant/banh-xeo-76",
        "https://e.vnexpress.net/news/travel/food-recipes/michelin-guide-names-4-new-budget-friendly-gems-in-da-nang-4896463.html",
      ],
    },
    {
      id: "xliii-coffee-roasters",
      cityId: "da-nang",
      category: "restaurant",
      name: "43 פקטורי קופי רוסטרס",
      nameLatin: "43 Factory Coffee Roaster (XLIII Coffee)",
      description:
        "בית קפה ספֶּשְׁלְטי שנוסד ב-2019 בידי בן העיר לה דאק טהאן, וקורא לעצמו על שם הספרות הראשונות בלוחיות הרישוי של דה נאנג. קולים את הפולים בעצמם באולם תעשייתי מרשים, ונחשבים לחלוצי גל הקפה האיכותי בעיר - כיום עוברים מיתוג מחדש בהדרגה לשם XLIII Coffee.",
      infoUrl: "https://43factory.coffee/en/",
      sources: [
        "https://sprudge.com/vietnam-inside-43-factory-coffee-roasters-stunning-da-nang-cafe-140742.html",
        "https://xliiicoffee.com/en/journal/hello-we-are-xliii-coffee/",
      ],
    },
    {
      id: "cong-caphe-da-nang",
      cityId: "da-nang",
      category: "restaurant",
      name: "קונג קפה",
      nameLatin: "Cộng Càphê",
      description:
        "רשת קפה וייטנאמית ארצית בעיצוב רטרו בהשראת התקופה הקומוניסטית, עם צוות בסגנון מדים צבאיים וריהוט פח ישן. משקה הדגל הוא קפה קוקוס קר וסמיך, והסניף על טיילת נהר האן מלא כמעט תמיד בלקוחות.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d15245742-Reviews-Cong_Caphe-Da_Nang.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d15245742-Reviews-Cong_Caphe-Da_Nang.html",
        "https://www.facebook.com/CongCaphe.9698BachDang/",
      ],
    },
    {
      id: "roost-coffee-roasters",
      cityId: "da-nang",
      category: "restaurant",
      name: "רוסט קופי רוסטרס",
      nameLatin: "Roost Coffee Roasters",
      description:
        "בית קפה השוכן בווילה ותיקה עם גינה ירוקה ושקטה, שקולה ומוכרת פולי קפה בעצמה למקומות נוספים ברחבי העיר. מוקד עבודה פופולרי בקרב נוודים דיגיטליים בזכות שקעי חשמל בשפע, אינטרנט אמין ושולחנות עבודה משותפים.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d26244781-Reviews-Roost_Coffee_Roasters_Da_Nang-Da_Nang.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298085-d26244781-Reviews-Roost_Coffee_Roasters_Da_Nang-Da_Nang.html",
        "https://thecupscoffee.vn/roost-roasters/",
      ],
    },
    {
      id: "banh-canh-yen",
      cityId: "da-nang",
      category: "restaurant",
      name: "באן קאן ין",
      nameLatin: "Bánh Canh Yến",
      description:
        "דוכן רחוב ותיק בן יותר מ-30 שנה שמגיש מנה אחת בלבד - באן קאן, אטריות עבות מקמח אורז וטפיוקה במרק דגי נחש, עם תוספות כמו לביבת דגים או ביצת שליו. נכלל ברשימת מישלין כאתר סטריט פוד מומלץ, ופתוח כבר משעה 6 בבוקר.",
      infoUrl:
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/banh-canh-yen",
      sources: [
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/banh-canh-yen",
        "https://monandanang.vn/en/restaurant/g_ChIJcVrBUSYZQjER5Njau02Z1qI-banh-canh-yen",
      ],
    },
    {
      id: "bun-cha-ca-ba-hoa",
      cityId: "da-nang",
      category: "restaurant",
      name: "בון צ'ה קה בה הואה",
      nameLatin: "Bún Chả Cá Bà Hoa",
      description:
        "מסעדה משפחתית שפועלת מאז 2009 ומתמחה במנה אחת - בון צ'ה קה, אטריות אורז במרק עגבניות ודלעת עם לביבות דגים טריות שמוכנות מדי יום. נכללת ברשימת מישלין סלקטד, ומוכרת כמעט 300 קערות ביום ללקוחות מקומיים ותיירים.",
      infoUrl:
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/bun-cha-ca-ba-hoa",
      sources: [
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/bun-cha-ca-ba-hoa",
        "https://www.airial.travel/restaurants/vietnam/da-nang/b%C3%BAn-ch%E1%BA%A3-c%C3%A1-b%C3%A0-hoa-wO00f374",
      ],
    },
    {
      id: "madame-lan",
      cityId: "da-nang",
      category: "restaurant",
      name: "מאדאם לאן",
      nameLatin: "Madame Lân",
      description:
        "מסעדה מרווחת על גדת נהר האן שנוסדה ב-2012 ונקראת על שם אמו של הבעלים, בהשראת המטבח הביתי שבו גידלה את ילדיה. כלולה ברשימת מישלין סלקטד, ומציעה תפריט רחב של מטבח וייטנאמי - כולל ספרינג רול הדגים המטוגן, מנת הדגל של דה נאנג.",
      infoUrl: "https://madamelan.vn/en",
      sources: [
        "https://guide.michelin.com/us/en/da-nang-region/da-nang_2984390/restaurant/madame-lan",
        "https://madamelan.vn/en",
      ],
    },
    {
      id: "my-khe-beach",
      cityId: "da-nang",
      category: "scenic",
      name: "חוף מי קה",
      nameLatin: "My Khe Beach",
      description:
        "חוף חול זהוב וארוך שמייצג עבור רבים את דה נאנג המודרנית - מים בהירים, שדרת בתי מלון ומסעדות, וספורט ימי כמו גלישה וג'ט סקי. מוגן על ידי מצילים לאורך רוב שעות היום, עם דגלים המסמנים את מצב הים.",
      image: myKheBeachImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298085-d7687457-Reviews-My_Khe_Beach-Da_Nang.html",
      sources: [
        "https://singaporetripguide.com/travel-tips/safety-and-health-tips-around-my-khe-beach-da-nang",
        "https://www.originvietnam.com/destinations/my-khe-beach/",
      ],
    },
    {
      id: "son-tra-peninsula-viewpoint",
      cityId: "da-nang",
      category: "scenic",
      name: "חצי האי סון צ'ה",
      nameLatin: "Son Tra Peninsula",
      description:
        "חצי אי מיוער הבולט לתוך הים ממזרח לעיר, עם כביש חוף מתפתל ותצפיות פנורמיות על מפרץ דה נאנג. שמורת טבע שבה חיים קופי דוק אדומים נדירים, ומקום נעים לנסיעה איטית עם עצירות תצפית.",
      infoUrl:
        "https://en.nbca.gov.vn/khu-du-tru-thien-nhien-ban-dao-son-tra-da-nang/",
      sources: [
        "https://powertraveller.com/marble-mountain-son-tra-peninsula-and-lady-buddha/",
        "https://wanderlustale.com/en/da-nang-unusual-adventures-to-marble-mountain-and-lady-buddha/",
      ],
    },
    {
      id: "han-market",
      cityId: "da-nang",
      category: "market",
      name: "שוק האן",
      nameLatin: "Han Market (Chợ Hàn)",
      description:
        "שוק דו-קומתי על גדת נהר האן שפועל רשמית מ-1991, אם כי המסורת המסחרית באתר מוקדמת יותר. בקומת הקרקע - מזכרות, ממתקים מקומיים ודוכני אוכל; בקומה העליונה - חנויות אריגים וחייטות מהירה למי שרוצה בגד תפור על המידה.",
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298085-d5599000-Reviews-Han_Market-Da_Nang.html",
      sources: [
        "https://vietnamstory.in/han-market/",
        "https://centralvietnamguide.com/han-market-da-nang/",
      ],
    },
    {
      id: "an-thuong-night-market",
      cityId: "da-nang",
      category: "market",
      name: "שוק הלילה אן תיונג",
      nameLatin: "An Thuong Night Market",
      description:
        "שוק לילה קטן וידידותי לתיירים במרחק כ-200 מטר מחוף מי קה, פתוח מדי ערב בין השעות 18:00-23:00. דוכני אוכל רחוב, בגדים ומזכרות באווירה נינוחה יותר משוק האן - אפשרות טובה לארוחת ערב אחרי יום בים.",
      infoUrl: "https://www.facebook.com/danangnightmarket",
      sources: [
        "https://vinwonders.com/en/wonderpedia/news/an-thuong-night-market-da-nang/",
        "https://traveldanang.org/place/an-thuong-night-market/",
      ],
    },
    {
      id: "dragon-bridge-fire-show",
      cityId: "da-nang",
      category: "special",
      name: "מופע האש של גשר הדרקון",
      nameLatin: "Dragon Bridge Fire & Water Show",
      description:
        "גשר בצורת דרקון מעל נהר האן, שנפתח ב-2013. בכל שישי, שבת, ראשון וחג בשעה 21:00 הדרקון פולט אש ואז מים למשך כחצי שעה - מופע חינמי שאין צורך להזמין אליו מקום, רק להגיע מוקדם לטיילת לצפייה נוחה.",
      image: dragonBridgeFireShowImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298085-d6612108-Reviews-Dragon_Bridge-Da_Nang.html",
      sources: [
        "https://danangfantasticity.com/en/countdown-event/the-dragon-show",
        "https://www.vietnamairlines.com/us/en/plan-book/travel/travel-guide/dragon-bridge-danang",
      ],
    },
    {
      id: "jolie-da-nang-cooking-class",
      cityId: "da-nang",
      category: "special",
      name: "סדנת בישול ג'ולי",
      nameLatin: "Jolie Da Nang Cooking Class",
      description:
        "סדנת בישול משפחתית שפועלת למעלה מעשור, כולל לרוב ביקור בשוק מקומי ולימוד כמה מנות וייטנאמיות קלאסיות. מדריכים דוברי אנגלית טובה, אווירה חמה ופרטית - חוויה טובה למשפחות עם ילדים שרוצות להתנסות מעבר לאכילה בלבד.",
      infoUrl: "https://joliecookingclass.com/",
      sources: [
        "https://joliecookingclass.com/",
        "https://www.tripadvisor.com/Attraction_Review-g298085-d15224275-Reviews-Jolie_Danang_Cooking_Class-Da_Nang.html",
      ],
    },
  ],
  warnings: [
    {
      id: "my-khe-rip-currents",
      cityId: "da-nang",
      text: "זרמים חתרניים (rip currents) בחוף מי קה יכולים לסחוף גם שחיינים חזקים, בעיקר בעונת הגשמים בין אוקטובר לפברואר. יש להיכנס למים רק באזורים עם דגל ירוק או צהוב ובנוכחות מצילים, ואם נסחפים - לשחות במקביל לחוף ולא נגד הזרם.",
    },
    {
      id: "ba-na-hills-crowds",
      cityId: "da-nang",
      text: "תורים ארוכים לרכבל ולגשר הזהב בין השעות 10:00-16:00, ובמיוחד בסופי שבוע ובחגים. מומלץ להגיע מיד עם הפתיחה בבוקר או בשעות אחר הצהריים המאוחרות, ולרכוש כרטיסים מראש דרך האתר הרשמי כדי לחסוך זמן בקופות.",
    },
    {
      id: "ba-na-hills-fake-tours",
      cityId: "da-nang",
      text: "עמודי פייסבוק ואינסטגרם מזויפים המתחזים למפעילי טיולים מוכרים מוכרים חבילות לבאנה הילס וגשר הזהב שלא קיימות בפועל. יש להזמין כרטיסים רק דרך אתר Sun World הרשמי או מפעילי טיולים מאומתים עם ביקורות אמיתיות.",
    },
    {
      id: "fake-grab-airport",
      cityId: "da-nang",
      text: "נהגי Grab מזויפים בשדה התעופה של דה נאנג מיירטים הזמנות, טוענים לתשלום נוסף ולעיתים מסרבים להחזיר מזוודות עד לתשלום. עדיף להזמין נסיעה מתוך שדה התעופה ולוודא את פרטי הרכב והנהג באפליקציה לפני העלייה.",
    },
  ],
  phrases: [],
};
