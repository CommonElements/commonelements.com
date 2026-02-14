import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { CtaBanner } from "@/components/shared/cta-banner";
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

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
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
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
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
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Author bio */}
          <div className="mt-12 rounded-xl border bg-cream/50 p-6">
            <p className="text-sm font-semibold text-navy">
              About the Author
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {post.frontmatter.author} is the founder of Common Elements, a
              specialty insurance agency focused on community associations across
              the Gulf Coast. He holds a Florida 2-20 General Lines license and
              a Licensed Community Association Manager (LCAM) credential.
            </p>
          </div>

          {/* Waitlist CTA */}
          <div className="mt-8 rounded-xl border border-teal/20 bg-teal/5 p-6 text-center">
            <p className="font-semibold text-navy">
              Want a professional review of your association&rsquo;s insurance
              program?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Common Elements is launching soon. Join the waitlist for a
              complimentary coverage review.
            </p>
            <Link
              href="/waitlist"
              className="mt-4 inline-block rounded-md bg-gold px-6 py-2 text-sm font-medium text-white hover:bg-gold-dark transition-colors"
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
