import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Common Elements Insurance privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: February 17, 2026
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
          {/* ── Who We Are ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">Who we are</h2>
            <p className="mt-2">
              Common Elements (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) operates the website commonelements.com. This
              privacy policy explains how we collect, use, disclose, and protect
              your personal information when you visit our website or interact
              with our services.
            </p>
          </div>

          {/* ── What We Collect ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Information we collect
            </h2>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue/70">
              Information you provide
            </h3>
            <p className="mt-2">
              When you join our waitlist or use our contact form, we collect the
              information you voluntarily provide: your name, email address, and
              any optional information you choose to share (such as your
              association name, role, or state).
            </p>

            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue/70">
              Information collected automatically
            </h3>
            <p className="mt-2">
              When you visit our website, our hosting provider (Vercel) may
              automatically collect certain technical information, including your
              IP address, browser type, operating system, referring URL, pages
              visited, and the date and time of your visit. This information is
              used for website operation, security, and performance purposes.
            </p>
          </div>

          {/* ── How We Use It ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              How we use your information
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Send you notifications about our launch and service availability
              </li>
              <li>
                Share educational content about community association insurance
              </li>
              <li>
                Respond to inquiries submitted through our contact form
              </li>
              <li>
                Operate, maintain, and improve our website
              </li>
              <li>
                Protect against security threats, fraud, and abuse
              </li>
            </ul>
            <p className="mt-3">
              We do not use your information for any purpose other than those
              listed above. We do not use your information for automated
              decision-making or profiling.
            </p>
          </div>

          {/* ── What We Don't Do ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              What we don&rsquo;t do
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                We do not sell, rent, or trade your personal information to third
                parties.
              </li>
              <li>
                We do not share your information with insurance carriers,
                management companies, or any other business without your explicit
                consent.
              </li>
              <li>
                We do not send unsolicited commercial messages beyond the launch
                notifications and educational content you signed up for.
              </li>
              <li>
                We do not use third-party advertising or behavioral tracking.
              </li>
            </ul>
          </div>

          {/* ── Third-Party Service Providers ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Third-party service providers
            </h2>
            <p className="mt-2">
              We use a limited number of trusted third-party providers to operate
              our website and communicate with you. These providers process data
              on our behalf and are contractually obligated to protect your
              information.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Vercel</strong> &mdash;
                Website hosting and deployment. Vercel may process server logs
                containing IP addresses and request metadata for security and
                performance purposes.{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  Vercel Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-foreground">Resend</strong> &mdash;
                Email delivery service. When you join our waitlist or contact us,
                your name and email address are transmitted to Resend to deliver
                confirmation and notification emails on our behalf.{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  Resend Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-foreground">GitHub</strong> &mdash;
                Source code hosting. GitHub does not process your personal
                information, but our website code is hosted on their platform.
              </li>
            </ul>
            <p className="mt-3">
              We do not use Google Analytics, Facebook Pixel, or any third-party
              advertising or tracking services.
            </p>
          </div>

          {/* ── Cookies & Tracking ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Cookies and tracking technologies
            </h2>
            <p className="mt-2">
              Our website does not use cookies for advertising or behavioral
              tracking purposes. We may use strictly necessary cookies for
              website functionality (such as form submission state). Our hosting
              provider (Vercel) may set technical cookies required for content
              delivery and security.
            </p>
            <p className="mt-3">
              We do not use any third-party tracking pixels, social media
              widgets, or embedded content that would allow third parties to
              track your activity on our website.
            </p>
          </div>

          {/* ── Email Communications ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Email communications
            </h2>
            <p className="mt-2">
              If you join our waitlist or contact us, you may receive emails from
              us. Every email includes an unsubscribe link. Click it and
              we&rsquo;ll stop emailing you &mdash; no questions, no &ldquo;are
              you sure&rdquo; screens, no continued emails.
            </p>
            <p className="mt-3">
              Emails are sent through Resend, which may collect data about email
              delivery (such as whether an email was delivered or bounced) for
              service operation purposes.
            </p>
          </div>

          {/* ── Data Storage & Security ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Data storage and security
            </h2>
            <p className="mt-2">
              Your information is stored securely using industry-standard
              encryption (TLS/SSL) in transit and at rest. We limit access to
              your personal information to those who need it to operate our
              services.
            </p>
            <p className="mt-3">
              Our website is served over HTTPS. Form submissions are transmitted
              securely to our service providers. We do not store credit card
              numbers, social security numbers, or other sensitive financial
              information.
            </p>
          </div>

          {/* ── Data Retention ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">Data retention</h2>
            <p className="mt-2">
              We retain your personal information only for as long as necessary
              to fulfill the purposes described in this policy. If you
              unsubscribe from our waitlist or request deletion of your data, we
              will remove your personal information within 30 days, except where
              we are required by law to retain it.
            </p>
          </div>

          {/* ── Your Rights ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">Your rights</h2>
            <p className="mt-2">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Access</strong> &mdash;
                Request a copy of the personal information we hold about you
              </li>
              <li>
                <strong className="text-foreground">Correction</strong> &mdash;
                Request that we correct inaccurate or incomplete information
              </li>
              <li>
                <strong className="text-foreground">Deletion</strong> &mdash;
                Request that we delete your personal information
              </li>
              <li>
                <strong className="text-foreground">Portability</strong> &mdash;
                Request a machine-readable copy of your information
              </li>
              <li>
                <strong className="text-foreground">Opt-out</strong> &mdash;
                Unsubscribe from email communications at any time
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:hello@commonelements.com"
                className="text-teal hover:underline"
              >
                hello@commonelements.com
              </a>
              . We will respond within 30 days. We will not discriminate against
              you for exercising your privacy rights.
            </p>
          </div>

          {/* ── California Residents ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              California residents (CCPA/CPRA)
            </h2>
            <p className="mt-2">
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) and California Privacy Rights Act (CPRA) provide you
              with additional rights regarding your personal information:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Right to know</strong>{" "}
                &mdash; You may request that we disclose the categories and
                specific pieces of personal information we have collected about
                you, the categories of sources, the business purposes for
                collection, and the categories of third parties with whom we
                share it.
              </li>
              <li>
                <strong className="text-foreground">Right to delete</strong>{" "}
                &mdash; You may request deletion of your personal information,
                subject to certain exceptions.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to opt-out of sale
                </strong>{" "}
                &mdash; We do not sell your personal information. We have not
                sold personal information in the preceding 12 months.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to non-discrimination
                </strong>{" "}
                &mdash; We will not deny you services, charge different prices,
                or provide a different quality of service because you exercised
                your CCPA rights.
              </li>
            </ul>
            <p className="mt-3">
              To submit a CCPA request, email{" "}
              <a
                href="mailto:hello@commonelements.com"
                className="text-teal hover:underline"
              >
                hello@commonelements.com
              </a>{" "}
              with the subject line &ldquo;CCPA Request.&rdquo; We may need to
              verify your identity before processing your request.
            </p>
          </div>

          {/* ── Children's Privacy ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Children&rsquo;s privacy
            </h2>
            <p className="mt-2">
              Our website and services are not directed to individuals under 16
              years of age. We do not knowingly collect personal information from
              children under 16. If we learn that we have collected personal
              information from a child under 16, we will promptly delete it.
            </p>
          </div>

          {/* ── Changes ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">
              Changes to this policy
            </h2>
            <p className="mt-2">
              If we make material changes to this privacy policy, we&rsquo;ll
              update it here and note the revision date at the top. We
              won&rsquo;t retroactively change how we use information
              you&rsquo;ve already provided without your consent. For material
              changes, we will notify you via email if you have provided your
              email address to us.
            </p>
          </div>

          {/* ── Contact ── */}
          <div>
            <h2 className="text-lg font-semibold text-blue">Contact</h2>
            <p className="mt-2">
              Questions or concerns about this privacy policy? Email{" "}
              <a
                href="mailto:hello@commonelements.com"
                className="text-teal hover:underline"
              >
                hello@commonelements.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
