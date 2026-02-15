import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaBanner({
  headline = "Be First in Line",
  body = "Join the waitlist to receive a complimentary coverage review when we launch. No cost. No obligation.",
  ctaLabel = "Join the Waitlist",
  ctaHref = "/waitlist",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-blue py-16 text-white md:py-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-light/15 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {body}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-orange text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/30"
        >
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
