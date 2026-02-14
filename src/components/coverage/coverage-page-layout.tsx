import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ArrowLeft } from "lucide-react";

interface CoveragePageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function CoveragePageLayout({
  title,
  children,
}: CoveragePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
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
          <article className="prose prose-lg max-w-none prose-headings:text-navy prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-medium prose-strong:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
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
