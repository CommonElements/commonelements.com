import Link from "next/link";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { Disclaimer } from "@/components/shared/disclaimer";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue">
                <span className="text-xs font-bold text-orange">CEI</span>
              </div>
              <span className="text-lg font-semibold text-blue">
                Common Elements
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Building specialty insurance solutions for community associations
              across the Gulf Coast.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-sm font-semibold text-blue">Quick Links</h2>
            <nav className="mt-3 flex flex-col gap-1">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold text-blue">Contact</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="transition-colors hover:text-blue"
              >
                {COMPANY_INFO.email}
              </a>
              <span>{COMPANY_INFO.location}</span>
              <span>{COMPANY_INFO.credentials}</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <Disclaimer />

        <div className="mt-6 text-xs text-muted-foreground">
          &copy; {COMPANY_INFO.year} Common Elements. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
