export const SITE = {
  name: "קייטרינג שפע מטעמים",
  alternateName: 'קייטרינג בד"ץ הרב מחפוד',
  url: "https://www.wigig.co.il",
  description:
    'קייטרינג כשר למהדרין בד"ץ הרב מחפוד החל מ-48 ש"ח למנה. שירותי קייטרינג איכותיים לכל אירוע באזור המרכז.',
  locale: "he_IL",
  lang: "he-IL",
  founded: 2013,
  city: "פתח תקווה",
  kashrut: 'בד"ץ יורה דעה - הרב מחפוד',
} as const;

export const CONTACT = {
  phone: "0723308072",
  phoneDisplay: "072-3308-072",
  phoneTel: "tel:0723308072",
  whatsappNumber: "972546272421",
  whatsappMessage:
    "היי פניתי לקייטרינג שפע מטעמים, אשמח לקבל הצעת מחיר",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const COLORS = {
  waGreen: "#00d339",
  waGreenDark: "#04a82e",
  phoneCyan: "#00ddff",
  phoneCyanDark: "#06b5d4",
  textDark: "#1c1c1c",
  textBody: "#333333",
  kashrutRed: "#7a1f1f",
  goldAccent: "#c4a04a",
} as const;
