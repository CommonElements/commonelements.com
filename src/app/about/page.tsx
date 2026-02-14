import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/shared/cta-banner";
import {
  Shield,
  Award,
  Building2,
  FileCheck,
  BookOpen,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Common Elements Insurance is built by a Licensed Community Association Manager with experience overseeing 600+ associations. Learn about our founder and mission.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Built by a Community Association Manager.{" "}
            <span className="text-gold">For Community Associations.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Most insurance agents learn about associations from a product
            manual. I learned by managing 600+ of them.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            The Short Version
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              My name is Harry Schoeller. I hold an active Florida LCAM license
              and a Florida 2-20 General Lines insurance license. I&rsquo;ve
              spent my career in community association management &mdash; most
              recently as an Account Manager overseeing operations for hundreds
              of condominium, cooperative, and homeowner associations across
              Florida.
            </p>
            <p>
              Over those years, I sat through hundreds of board meetings where
              insurance was on the agenda. And I watched the same thing happen
              over and over: a board full of intelligent, well-meaning volunteers
              trying to make a decision about a $150,000 line item that nobody
              in the room fully understood.
            </p>
            <p>
              I watched associations discover coverage gaps after a loss &mdash;
              gaps that should have been caught during any competent policy
              review. I watched boards get blindsided by special assessments
              because their deductibles were structured wrong for their reserve
              position. I watched agents disappear between renewals and surface
              once a year for a signature.
            </p>
            <p>
              I kept thinking: I know what these boards actually need. I know the
              questions they should be asking. I know what a policy review should
              look like when it&rsquo;s done by someone who understands governing
              documents, reserve studies, and how association budgets actually
              work.
            </p>
            <p className="font-medium text-navy">
              So I got licensed. And I&rsquo;m building Common Elements.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="bg-cream/50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            This Isn&rsquo;t a Side Hustle
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Common Elements is being built as a specialty agency &mdash; not a
            general practice that happens to take on a few association accounts.
            Every system, every carrier relationship, every piece of content on
            this site is designed around the specific needs of community
            associations.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: FileCheck,
                title: "I've read your governing documents.",
                body: "Not skimmed them — read them. I know what Section 718 requires for condominium insurance. I know what your declarations say about insurance obligations versus what's actually on your dec pages. Most agents don't check. I will.",
              },
              {
                icon: Building2,
                title: "I understand your budget cycle.",
                body: "Insurance isn't just a policy — it's a budget line item that affects assessments, reserve contributions, and your association's financial health. I approach renewals with that context because I've built those budgets myself.",
              },
              {
                icon: Shield,
                title: "I know what happens when a claim goes sideways.",
                body: "I've been on the management side when a carrier delays, when an adjuster lowballs, when a board doesn't understand their deductible obligation. That experience shapes how I structure coverage — to prevent those situations, not react to them.",
              },
              {
                icon: MapPin,
                title: "I work across the Gulf Coast.",
                body: "Florida, Georgia, Alabama, Mississippi, and Louisiana. Coastal property insurance requires navigating surplus lines markets, understanding wind/flood layering, and working with carriers who actually want to write in these geographies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-white p-6"
              >
                <item.icon className="h-6 w-6 text-teal" />
                <h3 className="mt-3 text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Licenses &amp; Credentials
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-navy">Insurance Licenses</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Florida 2-20 General Lines (P&amp;C)</li>
                <li>Florida 6-20 Company Adjuster</li>
                <li className="italic">FL 1-20 Surplus Lines (in progress)</li>
                <li className="italic">
                  Multi-state Gulf Coast licensing (in progress)
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-navy">
                  Professional Credentials
                </h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Licensed Community Association Manager (LCAM)</li>
                <li>CAM58884, State of Florida</li>
                <li>Community Associations Institute (CAI) Member</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-navy">Background</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Account Manager, 600+ community associations</li>
                <li>Condominium, cooperative &amp; HOA operations</li>
                <li>
                  Governing doc compliance, reserves &amp; vendor management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="border-t bg-cream/50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy md:text-3xl">
            Where We Are Right Now
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I believe in being straightforward: Common Elements is in
              pre-launch. We&rsquo;re in the process of completing our agency
              registration, finalizing carrier and market access partnerships,
              and building the infrastructure to serve associations the way they
              deserve to be served.
            </p>
            <p>
              I could have rushed this. I could have hung a shingle, bought some
              leads, and started writing policies next week. But I&rsquo;ve seen
              what happens when insurance is done carelessly for associations
              &mdash; and I&rsquo;m not interested in being another version of
              that.
            </p>
            <p>
              When we launch, we&rsquo;ll be ready. Licensed, appointed,
              insured, and built specifically for this.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gold text-white hover:bg-gold-dark"
          >
            <Link href="/waitlist">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBanner
        headline="Be Among the First"
        body="The first associations on our waitlist will receive a complimentary coverage review when we launch. No cost. No obligation."
      />
    </>
  );
}
