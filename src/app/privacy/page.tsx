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
          Last updated: February 2026
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-blue">Who we are</h2>
            <p className="mt-2">
              Common Elements (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) operates the website commonelements.com. This
              privacy policy explains how we collect, use, and protect your
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">
              What we collect
            </h2>
            <p className="mt-2">
              When you join our waitlist or use our contact form, we collect the
              information you voluntarily provide: your name, email address, and
              any optional information you choose to share (such as your
              association name, role, or state).
            </p>
            <p className="mt-3">
              We also collect standard analytics data through our website
              analytics provider: pages visited, time on site, referring source,
              device type, and general geographic location (city/state level).
              This data is aggregated and not tied to your personal identity.
            </p>
          </div>

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
              <li>Improve our website and understand how visitors use it</li>
            </ul>
            <p className="mt-3">
              We do not use your information for any purpose other than those
              listed above.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">
              What we don&rsquo;t do
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                We do not sell your personal information to third parties. Ever.
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
            </ul>
          </div>

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
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">
              Data storage and security
            </h2>
            <p className="mt-2">
              Your information is stored securely using industry-standard
              encryption and access controls. We use reputable third-party
              service providers for email delivery and website hosting, each of
              which maintains their own security and privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">Your rights</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of your
              personal information at any time by emailing us at{" "}
              <a
                href="mailto:hello@commonelements.com"
                className="text-teal hover:underline"
              >
                hello@commonelements.com
              </a>
              . We&rsquo;ll respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">
              Children&rsquo;s privacy
            </h2>
            <p className="mt-2">
              We do not knowingly collect information from anyone under 16 years
              of age.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">
              Changes to this policy
            </h2>
            <p className="mt-2">
              If we make material changes to this privacy policy, we&rsquo;ll
              update it here and note the revision date. We won&rsquo;t
              retroactively change how we use information you&rsquo;ve already
              provided without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue">Contact</h2>
            <p className="mt-2">
              Questions about this privacy policy? Email{" "}
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
