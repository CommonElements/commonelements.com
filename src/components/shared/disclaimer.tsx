import { FOOTER_DISCLAIMER } from "@/lib/constants";

export function Disclaimer() {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">
      {FOOTER_DISCLAIMER}
    </p>
  );
}
