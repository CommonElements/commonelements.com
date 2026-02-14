import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com";

interface CreateMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function createMetadata({
  title,
  description,
  path,
  ogType = "website",
  publishedTime,
  tags,
}: CreateMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: "Common Elements Insurance",
      ...(publishedTime && { publishedTime }),
      ...(tags && { tags }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
