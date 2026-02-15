import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 scroll-mt-20 text-2xl font-bold text-blue"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 scroll-mt-20 text-xl font-semibold text-blue"
      {...props}
    />
  ),
  a: ({ href, ...props }) => {
    if (href?.startsWith("/")) {
      return <Link href={href} className="text-teal hover:underline" {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal hover:underline"
        {...props}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-teal/30 bg-teal/5 py-1 pl-4 italic not-italic text-muted-foreground"
      {...props}
    />
  ),
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning";
  }) => (
    <div
      className={`my-6 rounded-lg border p-4 text-sm ${
        type === "warning"
          ? "border-orange/30 bg-orange/5"
          : "border-teal/20 bg-teal/5"
      }`}
    >
      {children}
    </div>
  ),
};
