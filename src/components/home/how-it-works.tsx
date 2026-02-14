import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            Simple. Transparent. Built for Boards.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm italic text-muted-foreground">
          This process will be available when we officially launch. Join the
          waitlist to be first in line.
        </p>
      </div>
    </section>
  );
}
