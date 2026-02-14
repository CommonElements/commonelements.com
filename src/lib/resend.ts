import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const NOTIFICATION_EMAIL =
  process.env.CONTACT_EMAIL || "harry@commonelements.com";

export const FROM_EMAIL = "Common Elements <hello@commonelements.com>";
