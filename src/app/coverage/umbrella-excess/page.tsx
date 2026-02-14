import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "Umbrella & Excess Liability Insurance for Associations",
  description:
    "Umbrella and excess liability policies provide additional coverage limits above your primary GL and D&O. Learn why most associations don't carry enough.",
};

export default function UmbrellaExcessPage() {
  return (
    <CoveragePageLayout title="Umbrella and Excess Liability Insurance: The Coverage Most Associations Don't Carry Enough Of">
      <p>
        An umbrella or excess liability policy provides additional coverage
        limits above your underlying{" "}
        <Link href="/coverage/general-liability">general liability</Link>,{" "}
        <Link href="/coverage/directors-officers">D&amp;O</Link>, and auto
        liability policies. When a claim exceeds the limits of your primary
        policy &mdash; a catastrophic injury at the pool, a large-scale
        discrimination lawsuit against the board, a multi-vehicle accident in
        the parking structure &mdash; the umbrella responds to cover the
        excess.
      </p>
      <p>
        For most community associations, the umbrella policy is the most
        cost-effective coverage in the entire program on a
        per-dollar-of-coverage basis. Adding $5M or $10M in umbrella limits
        often costs a fraction of what the primary GL policy costs, because the
        umbrella only pays after primary limits are exhausted.
      </p>

      <h2>Why associations are commonly underinsured here</h2>
      <p>
        Many governing documents specify minimum umbrella or excess coverage
        limits. A Declaration might require $5M in aggregate liability
        coverage, which typically means the board needs primary GL ($1M/$2M)
        plus an umbrella to reach the required threshold. Boards often
        don&rsquo;t check whether their current umbrella limit still meets the
        governing document requirement, especially if the declaration was
        amended to increase minimums.
      </p>
      <p>
        Additionally, as property values and exposure profiles change, the
        underlying liability coverage should be re-evaluated. A community that
        added a fitness center, expanded the pool area, or converted to valet
        parking has a different liability profile than when the original
        coverage was placed.
      </p>

      <h2>Umbrella vs. Excess &mdash; what&rsquo;s the difference?</h2>
      <p>
        In practice, these terms are often used interchangeably for association
        policies, but there is a technical distinction. A true umbrella policy
        can provide broader coverage than the underlying policies (filling
        gaps) in addition to higher limits. A pure excess policy only provides
        additional limits &mdash; same terms and conditions as whatever it sits
        over. Most association &ldquo;umbrella&rdquo; policies function closer
        to excess policies in practice, but the specific form matters.
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will help associations evaluate and place appropriate
        umbrella and excess coverage when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>{" "}
        for updates.
      </p>
    </CoveragePageLayout>
  );
}
