import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-gold">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold text-navy md:text-4xl">
          This page doesn&rsquo;t exist yet.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We&rsquo;re still building. Common Elements is a specialty insurance
          agency for community associations &mdash; and we&rsquo;re launching
          soon.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-navy text-white hover:bg-navy/90">
            <Link href="/">
              Go to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10"
          >
            <Link href="/waitlist">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
