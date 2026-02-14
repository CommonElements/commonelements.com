import { PAIN_POINTS } from "@/lib/constants";

export function PainPoints() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            Your Board Deserves Better Than This
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {PAIN_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-xl border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <Icon className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
