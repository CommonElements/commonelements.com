import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { CtaBanner } from "@/components/shared/cta-banner";
import { BlogPostingJsonLd } from "@/components/shared/json-ld";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://commonelements.com";

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `${BASE_URL}/resources/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: [
        {
          url: `/og?title=${encodeURIComponent(post.frontmatter.title)}&subtitle=${encodeURIComponent("Common Elements Insurance — Resources")}`,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <BlogPostingJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        slug={slug}
        datePublished={post.frontmatter.date}
        author={post.frontmatter.author}
      />

      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="mb-6 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Resources
          </Link>
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-tight">
            {post.frontmatter.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <span>By {post.frontmatter.author}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-blue prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-blue">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Author bio */}
          <div className="mt-12 rounded-xl border bg-cream/50 p-6">
            <p className="text-sm font-semibold text-blue">
              About the Author
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {post.frontmatter.author} is a founding member of Common Elements
              Insurance, a specialty agency focused on community associations
              across the Gulf Coast. The CEI team holds Florida 2-20 General
              Lines licensing and brings Licensed Community Association Manager
              (LCAM) credentials to the table.
            </p>
          </div>

          {/* Waitlist CTA */}
          <div className="mt-8 rounded-xl border border-teal/20 bg-teal/5 p-6 text-center">
            <p className="font-semibold text-blue">
              Want a professional review of your association&rsquo;s insurance
              program?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Common Elements is launching soon. Join the waitlist for a
              complimentary coverage review.
            </p>
            <Link
              href="/waitlist"
              className="mt-4 inline-block rounded-md bg-orange px-6 py-2 text-sm font-medium text-white hover:bg-orange-dark transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
