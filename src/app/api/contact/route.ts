import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { getResend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";
import {
  contactAdminEmail,
  contactConfirmationEmail,
} from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Honeypot check
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const resend = getResend();

    // Send notification email to team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject: `Contact Form: ${data.subject} — ${data.name}`,
      html: contactAdminEmail(data),
    });

    // Send confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We received your message — Common Elements",
      html: contactConfirmationEmail(data.name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "Invalid form data. Please check your entries." },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
