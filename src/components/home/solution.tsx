import { DIFFERENTIATORS } from "@/lib/constants";

export function Solution() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-blue md:text-4xl">
            What Common Elements Is Building
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We&rsquo;re not trying to be the biggest agency. We&rsquo;re
            building one that focuses exclusively on community associations
            &mdash; because your master policy, your D&amp;O coverage, and your
            flood program deserve someone who thinks about this full-time.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {DIFFERENTIATORS.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="rounded-xl border bg-white p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                  <Icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-blue">
                  {diff.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
