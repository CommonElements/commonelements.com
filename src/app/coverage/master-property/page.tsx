import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "Master Property Insurance for Community Associations",
  description:
    "Understand what master property insurance covers, Florida statutory requirements under Section 718, and the common coverage gaps boards miss at renewal.",
};

export default function MasterPropertyPage() {
  return (
    <CoveragePageLayout slug="master-property" title="Master Property Insurance: What It Covers, What It Doesn't, and Why Your Board Can't Get This Wrong">
      <p>
        Your association&rsquo;s master property policy is the single most
        expensive line item in your insurance program &mdash; and usually the
        single most important. It covers the physical building structures,
        common area improvements, and shared building systems (elevators, HVAC,
        plumbing, electrical) against covered perils like fire, wind, water
        damage, and other named risks.
      </p>
      <p>
        For condominium associations in Florida, the master policy is required
        by Section 718.111(11) of the Florida Condominium Act. The statute
        specifies minimum coverage requirements, including replacement cost
        coverage for all insurable common property. Most governing documents
        (your Declaration of Condominium) add requirements on top of the
        statutory minimums.
      </p>

      <h2>What the master policy typically covers</h2>
      <p>
        The building structure itself &mdash; walls, roofs, floors,
        foundations. Common area improvements like lobbies, hallways, pool
        decks, and clubhouses. Building systems and permanently installed
        fixtures. Many associations also carry coverage for unit interiors
        depending on whether the association&rsquo;s coverage is
        &ldquo;all-in&rdquo; (covering everything from the studs in, including
        unit finishes) or &ldquo;bare walls&rdquo; (covering only the
        structural elements, with unit owners responsible for their own
        interiors).
      </p>
      <p>
        <strong>The coverage form matters enormously.</strong> An HO-6 wrapper
        policy that unit owners carry is supposed to fill the gap between what
        the master policy covers and what the unit owner needs &mdash; but if
        the board doesn&rsquo;t clearly communicate what the master policy
        includes and excludes, unit owners are often underinsured without
        knowing it.
      </p>

      <h2>What Florida law requires</h2>
      <p>
        Under Section 718.111(11), condominium associations must maintain
        property insurance on all common property and units at replacement
        cost. The association is the named insured, and the policy must cover
        &ldquo;all portions of the condominium property as originally installed
        or replacement of like kind and quality.&rdquo; The policy must have a
        deductible not exceeding the greater of $10,000 or 5% of the policy
        value covering the buildings.
      </p>

      <h2>Common gaps boards don&rsquo;t know about</h2>

      <h3>Replacement cost vs. actual cash value</h3>
      <p>
        A policy written on an ACV basis depreciates the building&rsquo;s
        value &mdash; meaning after a major loss, the payout won&rsquo;t cover
        the cost to rebuild. Florida law requires replacement cost for
        condominiums, but the policy&rsquo;s stated replacement cost value
        must also be accurate. If your building was last appraised five years
        ago and construction costs have increased 40%, your coverage may
        technically meet the statutory requirement while being dramatically
        inadequate.
      </p>

      <h3>The appraisal gap</h3>
      <p>
        Insurance appraisals determine the replacement cost value that your
        policy is based on. If your appraisal is outdated, your coverage limit
        is wrong. In a total loss scenario, the carrier pays up to the policy
        limit &mdash; not the actual cost to rebuild. An association with a
        $20M building insured for $15M based on an old appraisal has a $5M
        problem that becomes a special assessment.
      </p>

      <h3>Named storm deductibles</h3>
      <p>
        In coastal Florida, named storm (hurricane) deductibles are typically
        2&ndash;5% of the total insured value &mdash; not 2&ndash;5% of the
        damage. On a building insured for $30M, a 3% named storm deductible
        is $900,000 that the association pays out of pocket before insurance
        kicks in. Boards often don&rsquo;t realize the magnitude of this
        number until after a hurricane.
      </p>

      <h3>Ordinance or law coverage</h3>
      <p>
        If your building is damaged and current building codes require
        upgrades during reconstruction (which they almost certainly will),
        standard property policies may not cover the additional cost to meet
        current code. Ordinance or law coverage fills this gap, but it&rsquo;s
        not always included by default.
      </p>

      <h2>What boards should be asking at renewal</h2>
      <p>
        When was our last insurance appraisal, and does our coverage limit
        match current replacement cost? What is our named storm deductible in
        dollar terms? Do we have ordinance or law coverage, and what&rsquo;s
        the limit? Is our policy &ldquo;all-in&rdquo; or &ldquo;bare
        walls&rdquo; and have we communicated that clearly to unit owners?
        What&rsquo;s our wind vs. non-wind deductible structure?
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will specialize in master property placements for Gulf
        Coast community associations across both admitted and surplus lines
        markets when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>{" "}
        to be notified.
      </p>
    </CoveragePageLayout>
  );
}
