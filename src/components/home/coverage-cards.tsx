import Link from "next/link";
import { COVERAGE_TYPES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function CoverageCards() {
  return (
    <section id="coverage" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange">
            What We&rsquo;ll Cover
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-blue md:text-4xl">
            Coverage Areas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            When Common Elements launches, we&rsquo;ll specialize in the full
            range of coverage community associations need &mdash; placed through
            both admitted and surplus lines markets.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COVERAGE_TYPES.map((coverage) => {
            const Icon = coverage.icon;
            return (
              <Link
                key={coverage.slug}
                href={`/coverage/${coverage.slug}`}
                className="group rounded-xl border bg-white p-6 transition-all duration-200 hover:border-blue/20 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/5">
                  <Icon className="h-5 w-5 text-blue" />
                </div>
                <h3 className="text-lg font-semibold text-blue">
                  {coverage.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {coverage.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-teal transition-colors group-hover:text-teal-dark">
                  Learn more
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
