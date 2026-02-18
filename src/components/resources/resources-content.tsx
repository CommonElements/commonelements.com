"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/blog/blog-card";
import {
  BookOpen,
  Scale,
  CheckSquare,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import type { BlogPost } from "@/types/blog";

/* ------------------------------------------------------------------ */
/*  Florida Statute Links                                              */
/* ------------------------------------------------------------------ */

const FL_STATUTES = [
  {
    title: "Chapter 718 — Condominium Act",
    description:
      "Insurance requirements for condominium associations, including mandatory coverage types and minimum limits.",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/0718.html",
  },
  {
    title: "Chapter 720 — HOA Act",
    description:
      "Homeowners' association governance, including insurance and fidelity bond requirements.",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0720/0720.html",
  },
  {
    title: "§626.112 — License Required to Transact Insurance",
    description:
      "Defines who must hold an insurance license and what constitutes transacting insurance business in Florida.",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0626/Sections/0626.112.html",
  },
  {
    title: "§627.714 — Unit Owner Coverage / HO-6 Policies",
    description:
      "Governs the interaction between the association's master policy and individual unit owner HO-6 policies.",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.714.html",
  },
  {
    title: "§627.0629 — Wind Mitigation Credits",
    description:
      "Requires insurers to provide premium discounts for buildings with wind-resistant construction features.",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.0629.html",
  },
  {
    title: "SB 4-D (2022) — Structural Inspection Requirements",
    description:
      "Milestone structural inspection and reserve study requirements for condominium and cooperative associations.",
    href: "https://www.flsenate.gov/Session/Bill/2022D/4D",
  },
];

/* ------------------------------------------------------------------ */
/*  Checklists                                                         */
/* ------------------------------------------------------------------ */

const CHECKLISTS = [
  {
    title: "Insurance Renewal Preparation Checklist",
    audience: "Board Members",
    items: [
      "Start renewal process 90–120 days before expiration",
      "Request current loss runs from your carrier",
      "Obtain a current property insurance appraisal (update every 3–5 years)",
      "Review governing documents for minimum coverage requirements",
      "Confirm wind mitigation inspection is current",
      "Request side-by-side carrier comparisons from your agent",
      "Verify named storm deductible is funded in reserves",
      "Confirm flood coverage limits vs. building replacement cost",
      "Review D&O and fidelity bond limits",
      "Document board's insurance review and approval in meeting minutes",
    ],
  },
  {
    title: "Board Meeting Insurance Review Guide",
    audience: "Board Members & Property Managers",
    items: [
      "Confirm all coverage types are in place (property, GL, D&O, umbrella, flood, fidelity bond)",
      "Review total insured property value against current replacement cost",
      "Check that liability limits meet governing document minimums",
      "Review any open claims and their status",
      "Confirm workers' compensation coverage if association has employees",
      "Verify certificate of insurance for all vendors working on property",
      "Review unit owner HO-6 policy requirements and communication",
      "Discuss any upcoming capital projects that may affect coverage needs",
    ],
  },
  {
    title: "Post-Storm Claims Preparation Guide",
    audience: "Board Members & Property Managers",
    items: [
      "Ensure board member and management contact information is current",
      "Keep a copy of the insurance policy declarations page accessible off-site",
      "Document pre-storm building condition (photos/video of common areas)",
      "Know your carrier's claims reporting phone number and process",
      "Understand your named storm deductible amount and how it's funded",
      "Identify your public adjuster or claims advocate contact (if applicable)",
      "Prepare an emergency communication plan for unit owners",
      "Review temporary repair authorization limits in your policy",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface ResourcesContentProps {
  posts: BlogPost[];
  allTags: string[];
}

export function ResourcesContent({ posts, allTags }: ResourcesContentProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((p) => p.frontmatter.tags.includes(activeTag))
    : posts;

  return (
    <>
      {/* Quick Links */}
      <section className="border-b bg-cream/50 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/resources/glossary"
              className="group flex items-start gap-3 rounded-lg border bg-white p-4 transition-shadow hover:shadow-md"
            >
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-semibold text-blue group-hover:text-teal transition-colors">
                  Insurance Glossary
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  36 terms explained in plain language
                </p>
              </div>
            </Link>
            <a
              href="#checklists"
              className="group flex items-start gap-3 rounded-lg border bg-white p-4 transition-shadow hover:shadow-md"
            >
              <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-semibold text-blue group-hover:text-teal transition-colors">
                  Checklists &amp; Guides
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Practical reference tools for your board
                </p>
              </div>
            </a>
            <a
              href="#statutes"
              className="group flex items-start gap-3 rounded-lg border bg-white p-4 transition-shadow hover:shadow-md"
            >
              <Scale className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-semibold text-blue group-hover:text-teal transition-colors">
                  Florida Statutes
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Key laws governing association insurance
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Articles with Tag Filter */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-blue">Articles</h2>
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="flex items-center gap-1 rounded-full bg-blue/10 px-3 py-1 text-sm text-blue hover:bg-blue/20 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
                Clear filter
              </button>
            )}
          </div>

          {/* Tag cloud */}
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTag(activeTag === tag ? null : tag)
                }
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-teal text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-8 flex flex-col items-center gap-2 py-12 text-center">
              <Search className="h-8 w-8 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                No articles match that tag.
              </p>
              <button
                onClick={() => setActiveTag(null)}
                className="text-sm text-teal hover:underline"
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Checklists & Guides */}
      <section id="checklists" className="scroll-mt-20 bg-cream/50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">
            Practical Tools
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue">
            Checklists &amp; Guides
          </h2>
          <p className="mt-2 max-w-2xl text-[0.9375rem] text-muted-foreground">
            Print-ready checklists for board meetings, renewal season, and
            emergency preparation. Based on real governance workflows.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CHECKLISTS.map((checklist) => (
              <div
                key={checklist.title}
                className="rounded-xl border bg-white p-6"
              >
                <Badge
                  variant="secondary"
                  className="bg-blue/10 text-blue text-xs"
                >
                  {checklist.audience}
                </Badge>
                <h3 className="mt-3 text-lg font-semibold text-blue">
                  {checklist.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {checklist.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-teal/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Statutes */}
      <section id="statutes" className="scroll-mt-20 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal">
            Reference
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue">
            Florida Statutes &amp; Regulations
          </h2>
          <p className="mt-2 max-w-2xl text-[0.9375rem] text-muted-foreground">
            Key Florida laws that govern community association insurance
            requirements. Links open the official Florida Legislature website.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FL_STATUTES.map((statute) => (
              <a
                key={statute.title}
                href={statute.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-lg border bg-white p-5 transition-shadow hover:shadow-md"
              >
                <Scale className="mt-0.5 h-5 w-5 shrink-0 text-blue/60" />
                <div className="flex-1">
                  <p className="font-semibold text-blue group-hover:text-teal transition-colors">
                    {statute.title}
                    <ExternalLink className="ml-1.5 inline h-3.5 w-3.5 text-muted-foreground/50" />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {statute.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Links point to the official Florida Legislature website
            (leg.state.fl.us) and the Florida Senate (flsenate.gov). Statutes are
            subject to amendment — verify current text for legal purposes.
          </p>
        </div>
      </section>
    </>
  );
}
