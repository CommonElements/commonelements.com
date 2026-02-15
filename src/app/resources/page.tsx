import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational articles on community association insurance — master policies, D&O coverage, flood insurance, and more. Written for board members and property managers.",
};

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Educational articles on community association insurance. Written in
            plain language for board members, officers, and property managers.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Articles coming soon. Check back shortly.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
