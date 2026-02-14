import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "General Liability Insurance for Community Associations",
  description:
    "Learn what general liability covers for HOAs and condos, common exclusions boards overlook, and how to evaluate whether your limits are adequate.",
};

export default function GeneralLiabilityPage() {
  return (
    <CoveragePageLayout title="General Liability Insurance for Community Associations: What Your Board Needs to Know">
      <p>
        General liability insurance protects your association against claims
        alleging bodily injury or property damage arising from the ownership,
        maintenance, or use of common areas. Someone slips on the pool deck. A
        child is injured on playground equipment. A visitor trips on a cracked
        sidewalk. A falling tree branch damages a resident&rsquo;s vehicle in
        the parking area.
      </p>
      <p>
        These aren&rsquo;t hypothetical scenarios &mdash; they&rsquo;re the
        most common claims filed against community associations nationwide.
      </p>

      <h2>What GL typically covers</h2>
      <p>
        Bodily injury claims (medical expenses, pain and suffering, lost wages)
        and property damage claims by third parties arising from conditions on
        association property. It also typically includes personal and
        advertising injury coverage (defamation, libel, slander &mdash; which
        can come up in association governance disputes) and medical payments
        coverage (small medical bills paid regardless of fault to prevent them
        from becoming lawsuits).
      </p>

      <h2>How much coverage do you need?</h2>
      <p>
        Most association GL policies carry $1M per occurrence / $2M aggregate
        limits. Whether that&rsquo;s adequate depends on your community&rsquo;s
        exposure profile &mdash; a 300-unit high-rise with a pool, gym, and
        parking garage has dramatically different liability exposure than a
        30-unit townhome community with minimal common areas.
      </p>
      <p>
        Check your governing documents. Many declarations and bylaws specify
        minimum liability coverage limits. Your association&rsquo;s{" "}
        <Link href="/coverage/umbrella-excess">umbrella or excess policy</Link>{" "}
        sits on top of your GL limits, so the two should be evaluated together.
      </p>

      <h2>Common issues</h2>

      <h3>Additional insured requirements</h3>
      <p>
        If your association hires contractors for common area work, your
        contract should require them to name the association as an additional
        insured on their GL policy. This gives the association direct rights
        under the contractor&rsquo;s policy if their work causes injury or
        damage. Many associations have this language in their vendor contracts
        but never verify the certificates.
      </p>

      <h3>Assault and battery exclusions</h3>
      <p>
        Standard GL policies often exclude claims arising from assault and
        battery. In communities with security concerns, this exclusion can
        leave a significant gap. If an incident occurs in a common area, the
        association may face a negligent security claim with no GL coverage to
        respond.
      </p>

      <h3>Sexual abuse and molestation coverage</h3>
      <p>
        For associations with amenities used by children &mdash; pools,
        playgrounds, recreation rooms, camps &mdash; this coverage responds to
        the most serious claims an association can face. It&rsquo;s not
        standard on every GL policy. Boards should verify it&rsquo;s included.
      </p>

      <h3>Hired and non-owned auto</h3>
      <p>
        If association employees or board members drive personal vehicles for
        association business (picking up supplies, inspecting properties), the
        association needs hired and non-owned auto coverage. Your GL policy may
        or may not include it.
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will handle general liability placements for community
        associations when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>{" "}
        for launch updates and educational resources.
      </p>
    </CoveragePageLayout>
  );
}
