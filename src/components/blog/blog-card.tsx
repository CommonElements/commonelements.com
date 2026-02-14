import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group flex flex-col rounded-xl border bg-white p-6 transition-shadow hover:shadow-md"
    >
      <div className="flex flex-wrap gap-2">
        {post.frontmatter.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-teal/10 text-teal text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-navy group-hover:text-teal transition-colors line-clamp-2">
        {post.frontmatter.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.frontmatter.description}
      </p>

      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime}
        </span>
      </div>
    </Link>
  );
}
