import { CREDENTIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export function CredibilityStrip() {
  return (
    <section className="border-b bg-cream py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Shield className="hidden h-4 w-4 text-teal sm:block" />
        {CREDENTIALS.map((credential) => (
          <Badge
            key={credential}
            variant="secondary"
            className="bg-white text-xs font-medium text-muted-foreground"
          >
            {credential}
          </Badge>
        ))}
      </div>
    </section>
  );
}
