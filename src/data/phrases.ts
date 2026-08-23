import type { Phrase } from "../types";
import { cityPhrases } from "./cities/index";

export type { Phrase, PhraseLanguage } from "../types";

/** Phrases that are not tied to any single city. City slang lives in the city content files. */
export const generalPhrases: Phrase[] = [
  // וייטנאמית - ביטויים בסיסיים
  { id: "vi-hello", language: "vietnamese", phrase: "Xin chào", meaning: "שלום (ברכה מנומסת)" },
  { id: "vi-thanks", language: "vietnamese", phrase: "Cảm ơn", meaning: "תודה" },
  {
    id: "vi-youre-welcome",
    language: "vietnamese",
    phrase: "Không có chi",
    meaning: "על לא דבר / אין בעד מה",
  },
  { id: "vi-sorry", language: "vietnamese", phrase: "Xin lỗi", meaning: "סליחה" },
  { id: "vi-how-much", language: "vietnamese", phrase: "Bao nhiêu tiền?", meaning: "כמה זה עולה?" },
  {
    id: "vi-too-expensive",
    language: "vietnamese",
    phrase: "Đắt quá!",
    meaning: "יקר מדי! (למיקוח על מחיר)",
  },
  {
    id: "vi-no",
    language: "vietnamese",
    phrase: "Không!",
    meaning: "לא! (סירוב נחרץ, למשל למוכר מתעקש)",
  },

  // תאית - ביטויים בסיסיים
  { id: "th-hello", language: "thai", phrase: "Sawasdee (kha / khrap)", meaning: "שלום" },
  { id: "th-thanks", language: "thai", phrase: "Khop khun (kha / khrap)", meaning: "תודה" },
  { id: "th-how-much", language: "thai", phrase: "Tao rai (kha / khrap)?", meaning: "כמה זה עולה?" },
  {
    id: "th-discount",
    language: "thai",
    phrase: "Lod dai mai (kha / khrap)?",
    meaning: "אפשר לקבל הנחה?",
  },
  { id: "th-too-expensive", language: "thai", phrase: "Paeng bpai", meaning: "יקר מדי" },
  {
    id: "th-polite-particle",
    language: "thai",
    phrase: "kha / khrap",
    meaning:
      "מילית נימוס שמוסיפים בסוף משפט - נשים אומרות \"קה\", גברים אומרים \"קראפ\". אין לה משמעות בפני עצמה, רק הופכת את המשפט למנומס יותר.",
  },
];

/** General phrases plus every city-specific slang phrase. */
export const phrases: Phrase[] = [...generalPhrases, ...cityPhrases];
