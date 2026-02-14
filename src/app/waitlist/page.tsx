import type { Metadata } from "next";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Reserve your spot for a free coverage review from Common Elements. We'll analyze your association's insurance program — coverage gaps, statutory compliance, and plain-language recommendations.",
};

export default function WaitlistPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Reserve Your Spot for a Free Coverage Review
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Common Elements is a specialty insurance agency focused exclusively
            on community associations across the Gulf Coast. We&rsquo;re
            launching soon &mdash; and the first associations on our list will
            receive a complimentary coverage review.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* What you'll get */}
          <div className="mb-10 space-y-4">
            <h2 className="text-xl font-semibold text-navy">
              What you&rsquo;ll get
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A complete analysis of your association&rsquo;s current insurance
              program &mdash; coverage gaps, statutory compliance, market
              comparison, and plain-language recommendations your board can
              actually use to make an informed decision.
            </p>
            <p className="font-medium text-navy">
              No cost. No obligation. No high-pressure sales pitch.
            </p>
          </div>

          {/* Who this is for */}
          <div className="mb-10 space-y-2">
            <h2 className="text-xl font-semibold text-navy">
              Who this is for
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Board members, officers, and property managers for condominiums,
              HOAs, cooperatives, and townhome associations in Florida, Georgia,
              Alabama, Mississippi, and Louisiana.
            </p>
          </div>

          {/* Form */}
          <WaitlistForm />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
