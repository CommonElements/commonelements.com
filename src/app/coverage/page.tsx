import type { Metadata } from "next";
import Link from "next/link";
import { COVERAGE_TYPES } from "@/lib/constants";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage Types",
  description:
    "Understand the six core insurance coverage types that every community association needs — from master property to fidelity bonds. Educational guides in plain language.",
};

export default function CoverageOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Understanding Your Association&rsquo;s Insurance Program
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            A community association&rsquo;s insurance program isn&rsquo;t a
            single policy &mdash; it&rsquo;s a coordinated set of coverages that
            protect the physical property, the organization&rsquo;s finances,
            and the volunteer board members who oversee it all.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Most associations need six core coverage types, and each one has
            requirements shaped by state law, governing documents, and the
            specific risks your community faces. Whether you&rsquo;re a board
            member trying to understand what you&rsquo;re approving at renewal,
            or a property manager advising a board on their options, these guides
            break down each coverage type in plain language.
          </p>
        </div>
      </section>

      {/* Coverage Cards Grid */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE_TYPES.map((type) => (
              <Link
                key={type.slug}
                href={`/coverage/${type.slug}`}
                className="group rounded-lg border bg-white p-6 transition-all hover:border-teal/30 hover:shadow-md"
              >
                <type.icon className="h-8 w-8 text-teal" />
                <h2 className="mt-4 text-lg font-semibold text-blue group-hover:text-teal">
                  {type.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {type.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-teal">
                  Read Guide
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
