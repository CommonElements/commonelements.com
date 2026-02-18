import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PreLaunchBanner } from "@/components/shared/pre-launch-banner";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/shared/json-ld";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Common Elements Insurance | Community Association Insurance Specialists",
    template: "%s | Common Elements Insurance",
  },
  description:
    "Building specialty insurance solutions for community associations. Expert coverage for HOAs, condominiums, and cooperatives across the Gulf Coast.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Common Elements Insurance",
    images: [
      {
        url: "/og?title=Common+Elements+Insurance&subtitle=Specialty+Insurance+for+Community+Associations",
        width: 1200,
        height: 630,
        alt: "Common Elements Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <PreLaunchBanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
