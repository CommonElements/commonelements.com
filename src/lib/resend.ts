import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend() {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(key);
  }
  return _resend;
}

export const NOTIFICATION_EMAIL =
  process.env.CONTACT_EMAIL || "harry@commonelements.com";

// Use custom domain if RESEND_FROM_EMAIL is set, otherwise fall back to Resend's default
// Once commonelements.com is verified on Resend, set RESEND_FROM_EMAIL=hello@commonelements.com
export const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL
    ? `Common Elements <${process.env.RESEND_FROM_EMAIL}>`
    : "Common Elements <onboarding@resend.dev>";
