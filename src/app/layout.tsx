import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    "Specialty insurance solutions for Florida community associations. Expert coverage for HOAs, condominiums, and cooperatives across the Gulf Coast.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Common Elements Insurance",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
