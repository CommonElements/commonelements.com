interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        name: "Common Elements Insurance",
        url: BASE_URL,
        description:
          "Specialty insurance agency focused exclusively on community associations across the Gulf Coast.",
        areaServed: [
          { "@type": "State", name: "Florida" },
          { "@type": "State", name: "Georgia" },
          { "@type": "State", name: "Alabama" },
          { "@type": "State", name: "Mississippi" },
          { "@type": "State", name: "Louisiana" },
        ],
        founder: {
          "@type": "Person",
          name: "Harry Schoeller",
          jobTitle: "Founder",
        },
        email: "hello@commonelements.com",
        address: {
          "@type": "PostalAddress",
          addressRegion: "FL",
          addressCountry: "US",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Common Elements Insurance",
        url: BASE_URL,
        description:
          "Educational resources and information about community association insurance for HOAs, condominiums, and cooperatives across the Gulf Coast.",
      }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url: `${BASE_URL}/resources/${slug}`,
        datePublished,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "Common Elements Insurance",
          url: BASE_URL,
        },
      }}
    />
  );
}
