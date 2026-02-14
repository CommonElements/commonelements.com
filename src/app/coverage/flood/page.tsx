import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "Flood Insurance for Community Associations",
  description:
    "NFIP limits often fall short for Gulf Coast associations. Learn about RCBAP coverage caps, the private flood market, and how to evaluate your flood exposure.",
};

export default function FloodPage() {
  return (
    <CoveragePageLayout title="Flood Insurance for Community Associations: Why NFIP Alone Isn't Enough">
      <p>
        For Gulf Coast community associations, flood insurance isn&rsquo;t
        optional &mdash; it&rsquo;s essential. And for many associations, the
        National Flood Insurance Program (NFIP) policy they carry provides
        coverage that falls far short of their actual exposure.
      </p>

      <h2>NFIP limits for associations</h2>
      <p>
        The NFIP&rsquo;s Residential Condominium Building Association Policy
        (RCBAP) provides building coverage up to $250,000 per unit in the
        association (not per building). For a 100-unit condominium building,
        that&rsquo;s up to $25M in aggregate building coverage. Sounds
        adequate &mdash; until you consider that a modern 100-unit mid-rise or
        high-rise in a coastal Florida market may have a replacement cost value
        of $40M, $60M, or more. The NFIP cap creates a coverage gap that can
        run into tens of millions of dollars.
      </p>
      <p>
        Contents coverage for common areas (furniture, equipment, fixtures in
        lobbies, clubhouses, fitness centers) is limited to $100,000 per
        building under the RCBAP. For a building with a furnished lobby,
        equipped fitness center, and business center, actual common area
        contents may far exceed this limit.
      </p>

      <h2>The private flood market</h2>
      <p>
        Private flood insurance carriers have grown significantly in Florida
        and across the Gulf Coast over the past several years. These carriers
        can offer limits above NFIP caps, often with more favorable terms
        &mdash; broader coverage definitions, replacement cost settlement
        (NFIP pays on ACV basis for contents), and in some cases lower
        deductibles. For associations where NFIP limits are inadequate, a
        private flood policy can fill the gap either as a standalone policy or
        as excess flood coverage above the NFIP layer.
      </p>
      <p>
        Not every private flood carrier writes in every zone or for every
        building type. And the private flood market&rsquo;s pricing and
        availability can shift. Working with an agent who understands both the
        NFIP program and the private flood market is important for structuring
        the right combination.
      </p>

      <h2>Flood zone considerations</h2>
      <p>
        Your flood zone designation (AE, VE, X, etc.) affects both your NFIP
        premium and your private market options. Elevation certificates, flood
        mitigation improvements, and building design all factor into how
        carriers evaluate your risk. Associations in VE zones (coastal high
        hazard areas) face the most restricted market and highest premiums.
        Associations in X zones (minimal flood hazard) often skip flood
        coverage entirely &mdash; which is a calculated risk that boards should
        make consciously, not by default.
      </p>

      <h2>What boards should be asking</h2>
      <p>
        What are our NFIP coverage limits and how do they compare to our
        building&rsquo;s replacement cost? Would excess or private flood
        coverage close the gap, and at what cost? When was our elevation
        certificate last updated? Are there flood mitigation improvements
        we&rsquo;ve made that aren&rsquo;t reflected in our current rating?
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will specialize in flood insurance placements for Gulf
        Coast associations &mdash; including both NFIP and private market
        options &mdash; when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>
        .
      </p>
    </CoveragePageLayout>
  );
}
