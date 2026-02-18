import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas";
import { getResend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";
import {
  waitlistAdminEmail,
  waitlistConfirmationEmail,
} from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = waitlistSchema.parse(body);

    // Honeypot check
    if (data.website) {
      // Silently succeed to not tip off bots
      return NextResponse.json({ success: true });
    }

    const resend = getResend();

    // Send notification email to team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: `New Waitlist Signup: ${data.name}`,
      html: waitlistAdminEmail(data),
    });

    // Send confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "You're on the Common Elements waitlist!",
      html: waitlistConfirmationEmail(data.name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "Invalid form data. Please check your entries." },
        { status: 400 }
      );
    }

    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
