import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { ResourcesContent } from "@/components/resources/resources-content";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational articles, checklists, and Florida statute references for community association insurance — written for board members and property managers.",
};

export default function ResourcesPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Educational articles, practical checklists, and Florida statute
            references — written in plain language for board members, officers,
            and property managers.
          </p>
        </div>
      </section>

      <ResourcesContent posts={posts} allTags={allTags} />

      <CtaBanner />
    </>
  );
}
