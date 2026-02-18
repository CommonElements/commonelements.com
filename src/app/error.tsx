"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-orange">
          Something went wrong
        </p>
        <h1 className="mt-2 text-3xl font-bold text-blue md:text-4xl">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          This page ran into a problem. You can try again, or head back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={reset}
            className="bg-blue text-white hover:bg-blue/90"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-orange text-orange hover:bg-orange/10"
          >
            <Link href="/">
              Go to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
