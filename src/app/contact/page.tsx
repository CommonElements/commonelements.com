import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Common Elements. We welcome questions about what we're building, partnership inquiries, and general conversation about community association insurance.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Common Elements is currently in pre-launch. We&rsquo;re not yet
            accepting clients or placing insurance, but we welcome questions
            about what we&rsquo;re building, partnership inquiries, and general
            conversation about community association insurance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-navy">
                  <Mail className="h-5 w-5 text-teal" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <a
                  href="mailto:hello@commonelements.com"
                  className="mt-1 block text-sm text-muted-foreground hover:text-teal"
                >
                  hello@commonelements.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy">
                  <Phone className="h-5 w-5 text-teal" />
                  <h3 className="font-semibold">Phone</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Available at launch
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-navy">
                  <MapPin className="h-5 w-5 text-teal" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Florida Gulf Coast
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          {/* Below Form CTA */}
          <div className="mt-12 rounded-xl border bg-cream/50 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Looking for insurance for your community association? We&rsquo;re
              not quite ready yet, but you can join our waitlist to be first in
              line when we launch.
            </p>
            <Link
              href="/waitlist"
              className="mt-3 inline-block text-sm font-medium text-teal hover:underline"
            >
              Join the Waitlist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
