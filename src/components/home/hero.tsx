import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Insurance for Community Associations.{" "}
            <span className="text-gold">
              Built by Someone Who&rsquo;s Managed Them.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Common Elements is a specialty insurance agency for HOAs,
            condominiums, and cooperatives across the Gulf Coast. Founded by a
            Licensed Community Association Manager who spent years on the other
            side of the table &mdash; watching boards get blindsided by coverage
            gaps, disappearing agents, and renewals nobody could explain.
          </p>
          <p className="mt-3 text-sm font-medium text-gold">
            We&rsquo;re launching soon. Get on the list.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold text-white hover:bg-gold-dark"
            >
              <Link href="/waitlist">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <a href="#coverage">
                Learn what we&rsquo;ll offer
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
