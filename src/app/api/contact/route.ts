import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { getResend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";

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
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Subject</td><td style="padding:8px;">${data.subject}</td></tr>
        </table>
        <h3 style="margin-top:16px;">Message</h3>
        <p style="white-space:pre-wrap;">${data.message}</p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We received your message — Common Elements",
      html: `
        <h2>Thanks for reaching out, ${data.name}!</h2>
        <p>We've received your message and will get back to you within one business day.</p>
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

    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
