import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas";
import { getResend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";

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
      html: `
        <h2>New Waitlist Signup</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Role</td><td style="padding:8px;">${data.role}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">State</td><td style="padding:8px;">${data.state}</td></tr>
          ${data.associationName ? `<tr><td style="padding:8px;font-weight:bold;">Association</td><td style="padding:8px;">${data.associationName}</td></tr>` : ""}
          ${data.unitCount ? `<tr><td style="padding:8px;font-weight:bold;">Unit Count</td><td style="padding:8px;">${data.unitCount}</td></tr>` : ""}
          ${data.renewalMonth ? `<tr><td style="padding:8px;font-weight:bold;">Renewal Month</td><td style="padding:8px;">${data.renewalMonth}</td></tr>` : ""}
          ${data.challenge ? `<tr><td style="padding:8px;font-weight:bold;">Challenge</td><td style="padding:8px;">${data.challenge}</td></tr>` : ""}
        </table>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "You're on the Common Elements waitlist!",
      html: `
        <h2>Welcome to the Common Elements waitlist, ${data.name}!</h2>
        <p>Thank you for your interest in Common Elements Insurance. We're building a specialty agency focused exclusively on community association coverage across the Gulf Coast.</p>
        <p>When we officially launch, you'll be among the first to receive a <strong>complimentary coverage review</strong> — a full analysis of your current insurance program with gap identification and market comparison.</p>
        <p>In the meantime, check out our <a href="https://commonelements.com/resources">educational resources</a> for articles on community association insurance.</p>
        <p>Best,<br/>The Common Elements Team</p>
      `,
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
