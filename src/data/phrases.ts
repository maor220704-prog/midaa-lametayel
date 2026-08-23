export type PhraseLanguage = "vietnamese" | "thai";

export interface Phrase {
  language: PhraseLanguage;
  phrase: string;
  meaning: string;
  cityId?: string;
}

export const phrases: Phrase[] = [
  // וייטנאמית - ביטויים בסיסיים
  { language: "vietnamese", phrase: "Xin chào", meaning: "שלום (ברכה מנומסת)" },
  { language: "vietnamese", phrase: "Cảm ơn", meaning: "תודה" },
  { language: "vietnamese", phrase: "Không có chi", meaning: "על לא דבר / אין בעד מה" },
  { language: "vietnamese", phrase: "Xin lỗi", meaning: "סליחה" },
  { language: "vietnamese", phrase: "Bao nhiêu tiền?", meaning: "כמה זה עולה?" },
  { language: "vietnamese", phrase: "Đắt quá!", meaning: "יקר מדי! (למיקוח על מחיר)" },
  { language: "vietnamese", phrase: "Không!", meaning: "לא! (סירוב נחרץ, למשל למוכר מתעקש)" },

  // וייטנאמית - סלנג/ניב מקומי לפי עיר (הבדלי צפון-דרום אמיתיים)
  { language: "vietnamese", phrase: "lợn", meaning: "חזיר", cityId: "hanoi" },
  { language: "vietnamese", phrase: "heo", meaning: "חזיר", cityId: "hoi-an" },
  { language: "vietnamese", phrase: "bát", meaning: "קערה", cityId: "hanoi" },
  { language: "vietnamese", phrase: "tô / chén", meaning: "קערה", cityId: "hoi-an" },
  { language: "vietnamese", phrase: "mũ", meaning: "כובע", cityId: "hanoi" },
  { language: "vietnamese", phrase: "nón", meaning: "כובע", cityId: "hoi-an" },

  // תאית - ביטויים בסיסיים
  { language: "thai", phrase: "Sawasdee (kha / khrap)", meaning: "שלום" },
  { language: "thai", phrase: "Khop khun (kha / khrap)", meaning: "תודה" },
  { language: "thai", phrase: "Tao rai (kha / khrap)?", meaning: "כמה זה עולה?" },
  { language: "thai", phrase: "Lod dai mai (kha / khrap)?", meaning: "אפשר לקבל הנחה?" },
  { language: "thai", phrase: "Paeng bpai", meaning: "יקר מדי" },
  {
    language: "thai",
    phrase: "kha / khrap",
    meaning:
      "מילית נימוס שמוסיפים בסוף משפט - נשים אומרות \"קה\", גברים אומרים \"קראפ\". אין לה משמעות בפני עצמה, רק הופכת את המשפט למנומס יותר.",
  },

  // תאית - ניב דרומי לפי עיר (הבדלים מתועדים מול תאית סטנדרטית)
  { language: "thai", phrase: "อร่อย (a-roi)", meaning: "טעים", cityId: "bangkok" },
  { language: "thai", phrase: "หรอย (roi)", meaning: "טעים", cityId: "koh-samui-koh-phangan" },
  { language: "thai", phrase: "พูด (phuut)", meaning: "לדבר", cityId: "bangkok" },
  { language: "thai", phrase: "แหลง (laeng)", meaning: "לדבר", cityId: "koh-samui-koh-phangan" },
];
