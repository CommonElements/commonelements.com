import { cn } from "@/lib/utils";

/**
 * CEI ascending-bars logomark.
 *
 * Three rising rectangular bars representing building elements with an
 * orange foundation bar — rendered as inline SVG so it works everywhere
 * (header, footer, emails via OG) without an external image file.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="36" height="36" rx="7" fill="#0063CE" />

      {/* Short bar (left) */}
      <rect x="7" y="18" width="6" height="12" rx="1" fill="white" opacity="0.3" />
      {/* Medium bar (center) */}
      <rect x="15" y="12" width="6" height="18" rx="1" fill="white" opacity="0.55" />
      {/* Tall bar (right) */}
      <rect x="23" y="6" width="6" height="24" rx="1" fill="white" opacity="0.9" />

      {/* Orange foundation bar */}
      <rect x="7" y="30" width="22" height="2" rx="1" fill="#FF8A00" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <span className="text-lg font-semibold text-blue">Common Elements</span>
    </div>
  );
}
