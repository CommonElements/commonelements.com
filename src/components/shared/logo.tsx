import { cn } from "@/lib/utils";

/**
 * CEI shield-and-columns logomark.
 *
 * Renders an inline SVG so it works everywhere (header, footer, emails via OG)
 * without requiring an external image file.
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

      {/* Shield fill */}
      <path
        d="M18 5 L30 10 L30 20 Q30 28 18 33 Q6 28 6 20 L6 10 Z"
        fill="white"
        opacity="0.12"
      />
      {/* Shield outline */}
      <path
        d="M18 5 L30 10 L30 20 Q30 28 18 33 Q6 28 6 20 L6 10 Z"
        stroke="#FF8A00"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Pediment triangle */}
      <polygon
        points="11,14.5 18,10.5 25,14.5"
        stroke="white"
        strokeWidth="0.9"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />

      {/* Left column */}
      <rect x="12.5" y="15.5" width="2.5" height="9" rx="0.5" fill="white" opacity="0.9" />
      <rect x="12" y="14.5" width="3.5" height="1.2" rx="0.3" fill="white" opacity="0.9" />

      {/* Center column (taller) */}
      <rect x="16.75" y="13" width="2.5" height="11.5" rx="0.5" fill="white" opacity="0.95" />
      <rect x="16.25" y="12" width="3.5" height="1.2" rx="0.3" fill="white" opacity="0.95" />

      {/* Right column */}
      <rect x="21" y="15.5" width="2.5" height="9" rx="0.5" fill="white" opacity="0.9" />
      <rect x="20.5" y="14.5" width="3.5" height="1.2" rx="0.3" fill="white" opacity="0.9" />

      {/* Base */}
      <rect x="11.5" y="24.5" width="13" height="0.8" rx="0.3" fill="white" opacity="0.7" />

      {/* Orange diamond accent */}
      <polygon points="18,9.5 19,10.5 18,11.5 17,10.5" fill="#FF8A00" opacity="0.9" />
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
