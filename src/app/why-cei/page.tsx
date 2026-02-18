import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/shared/cta-banner";
import {
  ArrowRight,
  Check,
  X,
  Building2,
  FileCheck,
  Shield,
  Phone,
  MapPin,
  Users,
  Eye,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Common Elements",
  description:
    "See why a specialty insurance practice built by community association professionals delivers better outcomes than a generalist agent. Compare approaches side-by-side.",
};

const COMPARISON_ROWS = [
  {
    category: "Focus",
    generalist: "Handles auto, home, life, commercial, and your association on the side",
    cei: "100% community associations — condominiums, cooperatives, and HOAs",
  },
  {
    category: "Association Knowledge",
    generalist: "Learns about your association from a product manual",
    cei: "Team brings LCAM licensing and experience managing 600+ associations",
  },
  {
    category: "Governing Documents",
    generalist: "Rarely reads your declaration or bylaws before placing coverage",
    cei: "Reviews governing documents to ensure coverage aligns with your legal obligations",
  },
  {
    category: "Market Access",
    generalist: "May only access admitted carriers — limited options for coastal property",
    cei: "Will access both admitted and surplus lines markets for competitive options",
  },
  {
    category: "Renewal Process",
    generalist: "Sends a one-page summary and asks for a signature",
    cei: "Side-by-side comparisons with plain-language breakdowns of what changed and why",
  },
  {
    category: "Claims Support",
    generalist: "Hands you a carrier's 800 number",
    cei: "Active involvement in the claims process — our team includes a licensed adjuster",
  },
  {
    category: "Year-Round Service",
    generalist: "Surfaces once a year at renewal time",
    cei: "Ongoing relationship — available when questions come up, not just at renewal",
  },
  {
    category: "Budget Context",
    generalist: "Treats insurance as a standalone product",
    cei: "Understands how insurance fits into your operating budget, reserves, and assessments",
  },
] as const;

const VALUE_PROPS = [
  {
    icon: Building2,
    title: "We've Managed Associations",
    description:
      "We didn't study community associations from the outside. Our founding team has overseen operations for hundreds of condominiums, cooperatives, and HOAs — building budgets, reviewing governing documents, and sitting through the board meetings where insurance decisions get made.",
  },
  {
    icon: FileCheck,
    title: "We Read Your Governing Documents",
    description:
      "Your declaration, bylaws, and rules may specify insurance requirements that your current coverage doesn't meet. We'll review those documents as part of every engagement — because coverage gaps start with requirements nobody checked.",
  },
  {
    icon: Shield,
    title: "We Understand Claims — From Both Sides",
    description:
      "Our team includes a Florida 6-20 Licensed Company Adjuster. That means we understand how the claims process works from the carrier's perspective, which shapes how we'll structure coverage to protect your association when losses occur.",
  },
  {
    icon: Phone,
    title: "We'll Pick Up the Phone",
    description:
      "When your building takes a hit at 2 AM during a hurricane, you shouldn't be navigating an automated phone tree. We're building a practice where direct access to your advisor is the baseline, not a premium tier.",
  },
  {
    icon: MapPin,
    title: "We Know the Gulf Coast Market",
    description:
      "Florida, Georgia, Alabama, Mississippi, and Louisiana. Coastal property insurance means navigating surplus lines markets, understanding wind/flood layering, and working with carriers who actually want to write in these geographies.",
  },
  {
    icon: Eye,
    title: "We Believe in Transparency",
    description:
      "When we present your renewal, you'll see what changed, why it changed, and what alternatives we explored. No black boxes. No unexplained rate increases. Just clear information so your board can make an informed decision.",
  },
] as const;

const BOARD_PAIN_POINTS = [
  {
    icon: Users,
    stat: "600+",
    label: "Associations our team has managed",
  },
  {
    icon: TrendingUp,
    stat: "40%+",
    label: "Average premium increase boards face without explanation",
  },
  {
    icon: FileCheck,
    stat: "6",
    label: "Core coverage types most associations need",
  },
  {
    icon: Shield,
    stat: "$1M–2.5M",
    label: "Typical named storm deductible on a $50M building",
  },
] as const;

export default function WhyCeiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Your Association Deserves a Specialist.
            <br />
            <span className="text-orange">Not a Generalist With a Side Gig.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Most insurance agents who work with associations also handle auto,
            home, life, and commercial policies. Association insurance isn&rsquo;t
            their specialty &mdash; it&rsquo;s a line item. We&rsquo;re building
            something different.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange">
            The Problem
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue md:text-3xl">
            What We&rsquo;ve Seen From the Inside
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              After managing operations for hundreds of community associations,
              our founding team noticed the same patterns playing out at board
              meetings across the Gulf Coast:
            </p>
            <ul className="space-y-3 pl-5 [&>li]:relative [&>li]:pl-4 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2.5 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-orange">
              <li>
                Boards of intelligent, well-meaning volunteers trying to approve
                a six-figure insurance budget that nobody in the room fully
                understood.
              </li>
              <li>
                Coverage gaps discovered after a loss &mdash; gaps that should
                have been flagged during any competent policy review.
              </li>
              <li>
                Agents who disappeared between renewals and surfaced once a year
                for a signature.
              </li>
              <li>
                Premium increases with no explanation, no alternatives presented,
                and no breakdown of what changed.
              </li>
              <li>
                Governing documents requiring coverage that wasn&rsquo;t actually
                on the policy &mdash; and nobody checking.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y bg-cream/50 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {BOARD_PAIN_POINTS.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="mx-auto h-5 w-5 text-teal" />
                <p className="mt-2 text-2xl font-bold text-blue md:text-3xl">
                  {item.stat}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal">
            Side-by-Side
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue md:text-3xl">
            Generalist Agent vs. Common Elements
          </h2>
          <p className="mt-3 text-[0.9375rem] text-muted-foreground">
            This isn&rsquo;t about any specific company &mdash; it&rsquo;s about
            the structural difference between a generalist approach and a
            specialty practice built around community associations.
          </p>

          {/* Desktop Table */}
          <div className="mt-8 hidden overflow-hidden rounded-xl border md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cream/60">
                  <th className="w-[22%] px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Category
                  </th>
                  <th className="w-[39%] px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Typical Generalist Agent
                  </th>
                  <th className="w-[39%] px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-blue">
                    Common Elements
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.category} className="hover:bg-cream/30 transition-colors">
                    <td className="px-5 py-4 font-medium text-blue">
                      {row.category}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <span className="inline-flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                        {row.generalist}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <span className="inline-flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                        {row.cei}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="mt-8 space-y-4 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.category} className="rounded-lg border p-4">
                <h3 className="text-sm font-semibold text-blue">
                  {row.category}
                </h3>
                <div className="mt-3 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-muted-foreground/80">
                        Generalist:
                      </span>{" "}
                      {row.generalist}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-teal">CEI:</span>{" "}
                      {row.cei}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-cream/50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange">
            What We Bring
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-blue md:text-3xl">
            Built by People Who&rsquo;ve Done Your Job
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-white p-6"
              >
                <item.icon className="h-6 w-6 text-teal" />
                <h3 className="mt-3 text-base font-semibold text-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Testimonial-style callout */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl font-medium leading-relaxed text-blue md:text-2xl">
            &ldquo;We kept thinking: we know what these boards actually need. We
            know the questions they should be asking. We know what a policy
            review should look like when it&rsquo;s done by people who
            understand governing documents, reserve studies, and how association
            budgets actually work.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            &mdash; The Common Elements Founding Team
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-blue md:text-3xl">
            Ready for a Different Approach?
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
            Common Elements is currently in pre-launch. Join the waitlist to be
            among the first associations we serve — including a complimentary
            coverage review when we launch.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center rounded-md bg-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark"
            >
              Join the Waitlist
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-teal transition-colors hover:text-teal-dark"
            >
              Learn About Our Team
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
