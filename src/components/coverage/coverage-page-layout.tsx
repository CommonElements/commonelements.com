import Link from "next/link";
import { CtaBanner } from "@/components/shared/cta-banner";
import { COVERAGE_TYPES } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CoveragePageLayoutProps {
  slug: string;
  title: string;
  children: React.ReactNode;
}

export function CoveragePageLayout({
  slug,
  title,
  children,
}: CoveragePageLayoutProps) {
  const otherCoverageTypes = COVERAGE_TYPES.filter((t) => t.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/coverage"
            className="mb-6 inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            All Coverage Types
          </Link>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-blue prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-medium prose-p:leading-relaxed prose-strong:text-blue prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </div>
      </section>

      {/* Related Coverage Types */}
      <section className="border-t bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-blue">
            Other Coverage Types
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherCoverageTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/coverage/${type.slug}`}
                className="group flex items-start gap-3 rounded-lg border bg-white p-4 transition-all duration-200 hover:border-teal/30 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal/10">
                  <type.icon className="h-4 w-4 text-teal" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-medium text-blue">
                    {type.title}
                  </span>
                  <ArrowRight className="ml-1 inline h-3 w-3 text-teal opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t bg-cream/50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-muted-foreground italic">
            This content is provided for educational purposes only and does not
            constitute insurance advice. Coverage terms, conditions, and
            availability vary by carrier and state. Consult with a licensed
            insurance professional for guidance specific to your association.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
