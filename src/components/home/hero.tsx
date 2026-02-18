import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue py-20 md:py-28 lg:py-36">
      {/* Layered background for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-light/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-dark/40 via-transparent to-transparent" />
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Insurance for Community Associations.{" "}
            <span className="text-orange">
              Built by People Who&rsquo;ve Managed Them.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            Common Elements is building a specialty insurance practice for
            HOAs, condominiums, and cooperatives across the Gulf Coast. Founded
            by community association professionals who spent years on the other
            side of the table &mdash; watching boards get blindsided by coverage
            gaps, disappearing agents, and renewals nobody could explain.
          </p>
          <p className="mt-3 text-sm font-medium text-orange">
            We&rsquo;re launching soon. Get on the list.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-orange text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/30"
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
