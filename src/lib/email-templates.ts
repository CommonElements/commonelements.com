/* ------------------------------------------------------------------ */
/*  Branded HTML Email Templates                                       */
/* ------------------------------------------------------------------ */

const BLUE = "#0063CE";
const ORANGE = "#FF8A00";
const TEAL = "#218577";
const SLATE = "#64748b";
const LIGHT_BG = "#f8fafc";
const WHITE = "#ffffff";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com";

/* ------------------------------------------------------------------ */
/*  Shared Layout                                                      */
/* ------------------------------------------------------------------ */

function layout(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Common Elements Insurance</title>
</head>
<body style="margin:0;padding:0;background-color:${LIGHT_BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${LIGHT_BG};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:${BLUE};border-radius:8px;width:36px;height:36px;text-align:center;vertical-align:middle;">
                    <span style="color:${WHITE};font-size:11px;font-weight:800;letter-spacing:0.5px;line-height:36px;font-family:Georgia,'Times New Roman',serif;">CE</span>
                  </td>
                  <td style="padding-left:10px;">
                    <span style="color:${BLUE};font-size:17px;font-weight:700;letter-spacing:-0.3px;">Common Elements</span><br/>
                    <span style="color:${ORANGE};font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">Insurance</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Card -->
          <tr>
            <td style="background-color:${WHITE};border-radius:12px;padding:32px;border:1px solid #e2e8f0;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:${SLATE};">
                Common Elements Insurance &middot; Gulf Coast Community Association Specialists
              </p>
              <p style="margin:0 0 8px;font-size:11px;color:${SLATE};">
                <a href="${SITE_URL}/resources" style="color:${BLUE};text-decoration:underline;">Resources</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/faq" style="color:${BLUE};text-decoration:underline;">FAQ</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}/contact" style="color:${BLUE};text-decoration:underline;">Contact</a>
              </p>
              <p style="margin:0;font-size:10px;color:#94a3b8;line-height:1.5;">
                Common Elements Insurance is in pre-launch development. We are not yet a licensed
                insurance agency and cannot bind coverage, issue policies, or collect premiums at this time.
                Content is educational and does not constitute insurance advice.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ------------------------------------------------------------------ */
/*  Data table helper                                                  */
/* ------------------------------------------------------------------ */

function dataRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;color:${BLUE};font-size:13px;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f1f5f9;">${label}</td>
    <td style="padding:8px 12px;font-size:14px;color:#334155;border-bottom:1px solid #f1f5f9;">${value}</td>
  </tr>`;
}

function dataTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    ${rows}
  </table>`;
}

/* ------------------------------------------------------------------ */
/*  Waitlist — Admin notification                                      */
/* ------------------------------------------------------------------ */

interface WaitlistData {
  name: string;
  email: string;
  role: string;
  state: string;
  associationName?: string;
  unitCount?: string;
  renewalMonth?: string;
  challenge?: string;
}

export function waitlistAdminEmail(data: WaitlistData): string {
  const rows = [
    dataRow("Name", data.name),
    dataRow("Email", `<a href="mailto:${data.email}" style="color:${BLUE};">${data.email}</a>`),
    dataRow("Role", data.role),
    dataRow("State", data.state),
    data.associationName ? dataRow("Association", data.associationName) : "",
    data.unitCount ? dataRow("Unit Count", data.unitCount) : "",
    data.renewalMonth ? dataRow("Renewal Month", data.renewalMonth) : "",
  ]
    .filter(Boolean)
    .join("");

  const challengeSection = data.challenge
    ? `<div style="margin-top:16px;padding:12px 16px;background-color:${LIGHT_BG};border-radius:8px;border-left:3px solid ${ORANGE};">
        <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:${SLATE};text-transform:uppercase;letter-spacing:0.5px;">Insurance Challenge</p>
        <p style="margin:0;font-size:14px;color:#334155;white-space:pre-wrap;">${data.challenge}</p>
      </div>`
    : "";

  return layout(`
    <div style="padding:8px 12px;background-color:${TEAL};border-radius:6px;display:inline-block;margin-bottom:16px;">
      <span style="color:${WHITE};font-size:12px;font-weight:600;letter-spacing:0.5px;">NEW WAITLIST SIGNUP</span>
    </div>
    <h2 style="margin:0 0 4px;font-size:20px;color:#1e293b;">${data.name}</h2>
    <p style="margin:0 0 16px;font-size:14px;color:${SLATE};">${data.role} &middot; ${data.state}</p>
    ${dataTable(rows)}
    ${challengeSection}
  `);
}

/* ------------------------------------------------------------------ */
/*  Waitlist — User confirmation                                       */
/* ------------------------------------------------------------------ */

export function waitlistConfirmationEmail(name: string): string {
  return layout(`
    <h2 style="margin:0 0 16px;font-size:22px;color:${BLUE};">You&rsquo;re on the list, ${name}!</h2>
    <p style="margin:0 0 12px;font-size:15px;color:#334155;line-height:1.6;">
      Thank you for your interest in Common Elements Insurance. We&rsquo;re building a specialty
      insurance practice focused exclusively on community association coverage across the Gulf Coast.
    </p>
    <p style="margin:0 0 12px;font-size:15px;color:#334155;line-height:1.6;">
      When we officially launch, waitlist members will be among the first to know &mdash; and
      the first eligible for a complimentary coverage review.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
      In the meantime, check out our educational resources on community association insurance:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
      <tr>
        <td style="background-color:${ORANGE};border-radius:6px;">
          <a href="${SITE_URL}/resources" style="display:inline-block;padding:12px 24px;color:${WHITE};font-size:14px;font-weight:600;text-decoration:none;">
            Browse Resources &rarr;
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:14px;color:${SLATE};line-height:1.5;">
      Best,<br/>The Common Elements Team
    </p>
  `);
}

/* ------------------------------------------------------------------ */
/*  Contact — Admin notification                                       */
/* ------------------------------------------------------------------ */

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function contactAdminEmail(data: ContactData): string {
  const rows = [
    dataRow("Name", data.name),
    dataRow("Email", `<a href="mailto:${data.email}" style="color:${BLUE};">${data.email}</a>`),
    dataRow("Subject", data.subject),
  ].join("");

  return layout(`
    <div style="padding:8px 12px;background-color:${BLUE};border-radius:6px;display:inline-block;margin-bottom:16px;">
      <span style="color:${WHITE};font-size:12px;font-weight:600;letter-spacing:0.5px;">NEW CONTACT MESSAGE</span>
    </div>
    <h2 style="margin:0 0 4px;font-size:20px;color:#1e293b;">${data.subject}</h2>
    <p style="margin:0 0 16px;font-size:14px;color:${SLATE};">From ${data.name}</p>
    ${dataTable(rows)}
    <div style="margin-top:16px;padding:16px;background-color:${LIGHT_BG};border-radius:8px;border-left:3px solid ${BLUE};">
      <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:${SLATE};text-transform:uppercase;letter-spacing:0.5px;">Message</p>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
    </div>
    <p style="margin:16px 0 0;font-size:13px;color:${SLATE};">
      <a href="mailto:${data.email}" style="color:${BLUE};text-decoration:underline;">Reply to ${data.name}</a>
    </p>
  `);
}

/* ------------------------------------------------------------------ */
/*  Contact — User confirmation                                        */
/* ------------------------------------------------------------------ */

export function contactConfirmationEmail(name: string): string {
  return layout(`
    <h2 style="margin:0 0 16px;font-size:22px;color:${BLUE};">We received your message, ${name}!</h2>
    <p style="margin:0 0 12px;font-size:15px;color:#334155;line-height:1.6;">
      Thank you for reaching out to Common Elements Insurance. We&rsquo;ll review your
      message and get back to you within one business day.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#334155;line-height:1.6;">
      While you wait, you might find our educational resources helpful:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
      <tr>
        <td style="background-color:${BLUE};border-radius:6px;">
          <a href="${SITE_URL}/resources" style="display:inline-block;padding:12px 24px;color:${WHITE};font-size:14px;font-weight:600;text-decoration:none;">
            Browse Resources &rarr;
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:14px;color:${SLATE};line-height:1.5;">
      Best,<br/>The Common Elements Team
    </p>
  `);
}
