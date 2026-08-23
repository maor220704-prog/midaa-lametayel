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
      sources: [
        RESTAURANT_SOURCE,
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1487249-Reviews-Morning_Glory_Restaurant-Hoi_An_Quang_Nam_Province.html",
      ],
    },
    {
      id: "thanh-cao-lau",
      cityId: "hoi-an",
      category: "restaurant",
      name: "טהאן קאו לאו",
      nameLatin: "Thanh Cao Lầu",
      description:
        "מסעדה מקומית ותיקה שנחשבת לאחת הכתובות האותנטיות ביותר למנת קאו לאו - אטריות עבות ייחודיות להוֹיאן, המבושלות במים מהבארות העתיקות של העיר.",
      sources: [
        RESTAURANT_SOURCE,
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d12913336-Reviews-Cao_Lau_Thanh-Hoi_An_Quang_Nam_Province.html",
      ],
    },
    {
      id: "cargo-club",
      cityId: "hoi-an",
      category: "restaurant",
      name: "קארגו קלאב",
      nameLatin: "Cargo Club",
      description:
        "בית קפה ומסעדה עם מרפסת פתוחה ונוף לעיר העתיקה ולנהר, מוכר בעיקר בזכות הקינוחים בסגנון צרפתי - אופציה נעימה להפסקת קפה או ארוחת ערב רגועה.",
      sources: [
        RESTAURANT_SOURCE,
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1122024-Reviews-Cargo_Club_Cafe_Restaurant-Hoi_An_Quang_Nam_Province.html",
      ],
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
    {
      id: "hoi-an-central-market",
      cityId: "hoi-an",
      category: "market",
      name: "השוק המרכזי של הוֹיאן",
      nameLatin: "Hoi An Central Market (Cho Hoi An)",
      description:
        "שוק צהוב ותיק על גדת נהר הוֹיי, מוקד הקניות והאוכל של העיר עם דוכני בדים, מזכרות ובגדי תפירה לצד אולם מזון עמוס. שווה להגיע מוקדם או בשעות הערב, כשהאולם המרכזי פחות צפוף מתיירים.",
      sources: ["https://hoiannow.com/hoi-an-central-market/"],
    },
    {
      id: "yaly-couture",
      cityId: "hoi-an",
      category: "tailor",
      name: "יאלי קוצ'ר",
      nameLatin: "Yaly Couture",
      description:
        "בית האופנה בהזמנה אישית המפורסם והמפואר ביותר בהוֹיאן, עם מאות תופרים ועובדים משלו ושירות הכולל בחירת בדים ומספר מדידות התאמה. יקר יחסית לחייטים אחרים בעיר, אך נחשב לרמת הגימור הגבוהה ביותר.",
      sources: [
        "https://yalycouture.com/en",
        "https://www.tripadvisor.com/Attraction_Review-g298082-d555725-Reviews-Yaly_Couture-Hoi_An_Quang_Nam_Province.html",
      ],
    },
    {
      id: "a-dong-silk",
      cityId: "hoi-an",
      category: "tailor",
      name: "איי דונג סילק",
      nameLatin: "A Dong Silk",
      description:
        "חנות תפירה ותיקה שפועלת מאז 1997, ידועה בתהליך מדידה מהיר של כעשר דקות ובזמן השלמה קצר של יומיים בממוצע. מתמחים בבגדי משי בהזמנה אישית, ונחשבים לאחת החנויות הגדולות והמקצועיות בעיר.",
      sources: [
        "https://hoiannow.com/a-dong-silk/",
        "https://www.tripadvisor.com/ShowUserReviews-g298082-d1194254-r1041767029-A_Dong_Silk_Tailors-Hoi_An_Quang_Nam_Province.html",
      ],
    },
    {
      id: "cam-thanh-basket-boat",
      cityId: "hoi-an",
      category: "special",
      name: "שיט בסירת הסל של קאם טהאן",
      nameLatin: "Cam Thanh Basket Boat Ride",
      description:
        "שיט קצר בסירות סל עגולות מסורתיות ביער הקוקוסים של הכפר קאם טהאן, כרבע שעה נסיעה מהעיר העתיקה. אנשי הכפר חותרים ומסובבים את הסירה בתנועת מחול, ולעיתים נותנים לתייר לנסות לחתור בעצמו.",
      sources: [
        "https://www.tripadvisor.com/AttractionProductReview-g298082-d25147092-Hoi_An_Coconut_Basket_Boat_Ride_and_Fishing_Experience-Hoi_An_Quang_Nam_Province.html",
        "https://hotelroyalhoian.vn/cam-thanh-coconut-village/",
      ],
    },
    {
      id: "an-bang-beach",
      cityId: "hoi-an",
      category: "scenic",
      name: "חוף אן באנג",
      nameLatin: "An Bang Beach",
      description:
        "חוף חול זהוב ושקט יחסית, כארבעה קילומטרים בלבד מהעיר העתיקה של הוֹיאן, עם מסעדות דגים משפחתיות על החול. נכלל בעבר ברשימת חופי האסיה היפים של טריפ אדוויזר, ונעים במיוחד לשעות שקיעה.",
      sources: ["https://centralvietnamguide.com/an-bang-beach-hoi-an/"],
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
