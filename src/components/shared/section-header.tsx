interface SectionHeaderProps {
  headline: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  headline,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-semibold text-navy md:text-4xl">
        {headline}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
