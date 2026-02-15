"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue">
            <span className="text-xs font-bold text-orange">CEI</span>
          </div>
          <span className="text-lg font-semibold text-blue">
            Common Elements
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            "children" in item ? (
              <DesktopDropdown
                key={item.label}
                label={item.label}
                items={item.children}
                pathname={pathname}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue",
                  pathname === item.href
                    ? "text-blue"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden bg-orange text-white hover:bg-orange-dark lg:inline-flex"
        >
          <Link href="/waitlist">
            Join the Waitlist
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="text-left text-blue">
                Common Elements
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="flex flex-col">
                    <span className="px-3 py-2 text-sm font-semibold text-blue">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <SheetClose asChild key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "rounded-md px-6 py-2 text-sm transition-colors hover:bg-muted",
                            pathname === child.href
                              ? "font-medium text-blue"
                              : "text-muted-foreground"
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ) : (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                        pathname === item.href
                          ? "text-blue"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                )
              )}
              <div className="mt-4 border-t pt-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-orange text-white hover:bg-orange-dark"
                  >
                    <Link
                      href="/waitlist"
                      onClick={() => setMobileOpen(false)}
                    >
                      Join the Waitlist
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function DesktopDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = items.some((item) => pathname.startsWith(item.href));
  const closeTimer = React.useRef<ReturnType<typeof setTimeout>>(null);

  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={handleOpen}
        onBlur={handleClose}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-blue",
          isActive ? "text-blue" : "text-muted-foreground"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full z-50 pt-2 transition-all",
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        <div className="min-w-[220px] rounded-lg border bg-white p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onFocus={handleOpen}
              onBlur={handleClose}
              className={cn(
                "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                pathname === item.href
                  ? "font-medium text-blue"
                  : "text-muted-foreground hover:text-blue"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
