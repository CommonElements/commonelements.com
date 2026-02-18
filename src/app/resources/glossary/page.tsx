import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/cta-banner";
import { GlossaryContent } from "@/components/resources/glossary-content";

export const metadata: Metadata = {
  title: "Insurance Glossary",
  description:
    "Plain-language definitions of community association insurance terms. From 'actual cash value' to 'wind mitigation' — understand what your policy actually says.",
};

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Insurance Glossary
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Community association insurance has its own vocabulary. Here are the
            terms you&rsquo;ll actually encounter — explained in plain language.
          </p>
        </div>
      </section>

      <GlossaryContent />

      <CtaBanner />
    </>
  );
}
