import type { CityContent } from "../../types";
import cityImg from "../../assets/images/hoi-an.webp";
import japaneseCoveredBridgeImg from "../../assets/images/hoi-an-japanese-covered-bridge.webp";
import anBangBeachImg from "../../assets/images/hoi-an-an-bang-beach.webp";
import camThanhBasketBoatImg from "../../assets/images/hoi-an-cam-thanh-basket-boat.webp";
import traQueVillageImg from "../../assets/images/hoi-an-tra-que-village.webp";
import centralMarketImg from "../../assets/images/hoi-an-central-market.webp";

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
    image: cityImg,
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
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1487249-Reviews-Morning_Glory_Restaurant-Hoi_An_Quang_Nam_Province.html",
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
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d12913336-Reviews-Cao_Lau_Thanh-Hoi_An_Quang_Nam_Province.html",
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
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1122024-Reviews-Cargo_Club_Cafe_Restaurant-Hoi_An_Quang_Nam_Province.html",
      sources: [
        RESTAURANT_SOURCE,
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1122024-Reviews-Cargo_Club_Cafe_Restaurant-Hoi_An_Quang_Nam_Province.html",
      ],
    },
    {
      id: "reaching-out-teahouse",
      cityId: "hoi-an",
      category: "restaurant",
      name: "ריצ'ינג אאוט טי האוס",
      nameLatin: "Reaching Out Teahouse",
      description:
        "בית תה שקט ברובע העתיק, מיזם חברתי שהוקם בשנת 2000 ומעסיק אך ורק צוות חירש וכבד שמיעה, שמתקשר עם האורחים באמצעות כרטיסיות כתובות על השולחן. כלי ההגשה עשויים בעבודת יד בסגנון המשפחה הקיסרית מהואה, והמקום זוכה לאורך השנים בפרסי בחירת הנוסעים של טריפ אדוויזר.",
      infoUrl: "https://reachingoutvietnam.com/teahouse/the-teahouse/",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d3844277-Reviews-Reaching_Out_Tea_House-Hoi_An_Quang_Nam_Province.html",
        "https://reachingoutvietnam.com/teahouse/the-teahouse/",
      ],
    },
    {
      id: "espresso-station",
      cityId: "hoi-an",
      category: "restaurant",
      name: "האספרסו סטיישן",
      nameLatin: "The Espresso Station",
      description:
        "בית קפה משפחתי בסמטה בשולי הרובע העתיק, פועל מאז 2015 בתוך בית מגורים ותיק בניהול הצעיר טרונג וסבתו בת השמונים ומעלה. מתמחים בקלייה עצמית של פולי קפה מרמות דלאט, עם תפריט קפה וייטנאמי מגוון וכריכים קלים לארוחת בוקר.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d8327556-Reviews-The_Espresso_Station-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d8327556-Reviews-The_Espresso_Station-Hoi_An_Quang_Nam_Province.html",
        "https://www.rustycompass.com/vietnam-travel-guide-233/hoi-an-28/eating-16/the-espresso-station-hoi-an-1255",
      ],
    },
    {
      id: "rosies-cafe",
      cityId: "hoi-an",
      category: "restaurant",
      name: "רוזי'ס קפה",
      nameLatin: "Rosie's Cafe",
      description:
        "בית קפה לארוחות בוקר וברנץ' בסמטה שקטה, מוכר בזכות טוסט אבוקדו עם ביצים עלומות וקערות גרנולה טריות. מבקרים רבים מציינים אותו כאחת מכתובות ארוחת הבוקר הטובות בהוֹיאן, עם אפשרויות טבעוניות ותפריט בריאותי.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d10331162-Reviews-Rosie_s_Cafe-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d10331162-Reviews-Rosie_s_Cafe-Hoi_An_Quang_Nam_Province.html",
        "https://www.facebook.com/love.rosiecafe",
      ],
    },
    {
      id: "faifo-coffee",
      cityId: "hoi-an",
      category: "restaurant",
      name: "פאיפו קופי",
      nameLatin: "Faifo Coffee",
      description:
        "בית קפה בן שלוש קומות בתוך בית צהוב עתיק ברחוב טראן פו, שהגג הפתוח שלו נחשב לאחת מנקודות התצפית המוכרות ביותר על גגות הרעפים של הרובע העתיק. מגישים תפריט קפה וייטנאמי קלאסי לצד עוגות וכריכי באן מי קלים.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d8773820-Reviews-Faifo_Coffee-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d8773820-Reviews-Faifo_Coffee-Hoi_An_Quang_Nam_Province.html",
        "https://www.mytravelbuzzg.com/faifo-coffee-hoi-an/",
      ],
    },
    {
      id: "banh-mi-phuong",
      cityId: "hoi-an",
      category: "restaurant",
      name: "באן מי פואונג",
      nameLatin: "Banh Mi Phuong",
      description:
        "דוכן כריכים ותיק הפועל כבר יותר משלושים שנה ברחוב פאן צ'ו טרין, שקיבל תהילה עולמית ב-2009 כשהשף אנתוני בורדיין הגדיר את הבאן מי שלו כ'סימפוניה בתוך כריך'. הלחם נאפה במקום, וגברת פואונג עדיין מפקחת אישית על המטבח.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d2365673-Reviews-Banh_My_Phu_ng-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d2365673-Reviews-Banh_My_Phu_ng-Hoi_An_Quang_Nam_Province.html",
        "https://hiddenhoian.com/eat/banh-mi-phuong-hoi-ans-best-banh-mi/",
      ],
    },
    {
      id: "white-rose-restaurant",
      cityId: "hoi-an",
      category: "restaurant",
      name: "וייט רוז",
      nameLatin: "White Rose Restaurant",
      description:
        "המסעדה המשפחתית שבה נולדה מנת 'הוורד הלבן' - באן באו באן ואק, כופתאות שקופות במילוי שרימפס שהמתכון הסודי שלהן עובר במשפחה כבר יותר ממאה שנה, כיום בידי הדור השלישי. התפריט מצומצם לשתי מנות בלבד, ואפשר לצפות בכופתאות מוכנות בעבודת יד מול העיניים.",
      infoUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1994933-Reviews-White_Rose_Restaurant-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://www.tripadvisor.com/Restaurant_Review-g298082-d1994933-Reviews-White_Rose_Restaurant-Hoi_An_Quang_Nam_Province.html",
        "https://danangfantasticity.com/en/eat-drink/white-rose-dumplings-banh-bao-banh-vac-hoi-an",
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
      image: japaneseCoveredBridgeImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d451147-Reviews-Japanese_Covered_Bridge-Hoi_An_Quang_Nam_Province.html",
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
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d451145-Reviews-Fukian_Assembly_Hall_Phuc_Kien-Hoi_An_Quang_Nam_Province.html",
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
      image: traQueVillageImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d2068091-Reviews-Tra_Que_Vegetable_Village-Hoi_An_Quang_Nam_Province.html",
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
      image: centralMarketImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d451144-Reviews-Central_Market-Hoi_An_Quang_Nam_Province.html",
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
      infoUrl: "https://yalycouture.com/en",
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
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d1194254-Reviews-A_Dong_Silk_Tailors-Hoi_An_Quang_Nam_Province.html",
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
      image: camThanhBasketBoatImg,
      infoUrl:
        "https://www.tripadvisor.com/AttractionProductReview-g298082-d25147092-Hoi_An_Coconut_Basket_Boat_Ride_and_Fishing_Experience-Hoi_An_Quang_Nam_Province.html",
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
      image: anBangBeachImg,
      infoUrl:
        "https://www.tripadvisor.com/Attraction_Review-g298082-d6612712-Reviews-An_Bang_Beach-Hoi_An_Quang_Nam_Province.html",
      sources: [
        "https://centralvietnamguide.com/an-bang-beach-hoi-an/",
        "https://vietnamdiscovery.com/hoi-an/attractions/an-bang-beach/",
      ],
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
