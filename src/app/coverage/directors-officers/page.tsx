import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "D&O Insurance for Board Members",
  description:
    "Directors & Officers insurance protects volunteer board members from personal liability. Learn what D&O covers, Florida-specific protections, and how fidelity bonds fit in.",
};

export default function DirectorsOfficersPage() {
  return (
    <CoveragePageLayout slug="directors-officers" title="D&O Insurance for Board Members: What's Actually Covered and Why Volunteers Need It">
      <p>
        Serving on a community association board is a volunteer position with
        real legal exposure. Directors and officers insurance protects
        individual board members, committee members, and the association itself
        against claims alleging wrongful acts in the governance of the
        association &mdash; breach of fiduciary duty, failure to maintain the
        property, improper use of funds, discrimination in rule enforcement,
        failure to enforce governing documents, and more.
      </p>
      <p>
        If your association doesn&rsquo;t carry D&amp;O coverage, every
        volunteer board member is personally exposed to litigation costs and
        potential judgments. Even frivolous lawsuits cost money to defend.
      </p>

      <h2>What D&amp;O typically covers</h2>
      <p>
        Defense costs (attorney fees, court costs) and settlements or judgments
        arising from claims of wrongful acts by directors, officers, committee
        members, and employees acting in their governance capacity. Most
        policies cover the individuals personally AND the association entity.
        Some policies also include Employment Practices Liability (EPL)
        covering claims by employees alleging wrongful termination, harassment,
        or discrimination.
      </p>

      <h2>What D&amp;O does NOT cover</h2>
      <p>
        Intentional fraud or criminal acts. Personal profit or advantage gained
        illegally. Bodily injury or property damage (that&rsquo;s your{" "}
        <Link href="/coverage/general-liability">GL policy</Link>). Claims
        arising from activities outside the scope of association governance.
        Most policies also exclude claims related to professional services
        &mdash; if a board member who happens to be an architect provides
        professional design advice to the association, their professional
        liability is not covered under D&amp;O.
      </p>

      <h2>Florida-specific considerations</h2>
      <p>
        Florida provides limited statutory protection for volunteer board
        members under Section 617.0834 (for not-for-profit corporations) and
        the Volunteer Protection Act. However, these protections have
        significant exceptions &mdash; they generally don&rsquo;t apply if
        the volunteer acted with willful or wanton disregard, gross negligence,
        or outside the scope of their duties. They also don&rsquo;t prevent
        someone from filing a lawsuit, which means defense costs still
        accumulate even if the board member ultimately prevails. D&amp;O
        insurance fills the practical gap that statutory protections leave
        open.
      </p>

      <h2>Fidelity Bond / Crime coverage</h2>
      <p>
        <Link href="/coverage/fidelity-bond">Fidelity bond coverage</Link> is
        often bundled with D&amp;O or written as a companion policy. Florida
        statute (Section 718.111(11)(d) for condominiums) requires associations
        to maintain fidelity bonding covering all persons who control or
        disburse association funds. The coverage amount should equal the
        maximum funds that will be in the custody of the association or its
        management agent at any one time &mdash; typically matching your
        operating account, reserve account, and any other association funds
        combined.
      </p>
      <p>
        This is a coverage that often goes years without being updated. An
        association that had $500K in reserves when the bond was written may
        now have $2M. If the bond limit is still $500K, the association is
        exposed for $1.5M in potential theft or dishonesty loss.
      </p>

      <h2>What boards should be asking</h2>
      <p>
        Does our D&amp;O policy include EPL coverage? What&rsquo;s our
        fidelity bond limit, and does it match our current fund balances? Are
        committee members covered, or only named directors? Is there a prior
        acts date that limits coverage for claims arising from events before a
        certain date? What&rsquo;s the retention (deductible) and who pays it
        &mdash; the individual or the association?
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will specialize in D&amp;O and fidelity bond
        placements for community associations when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>{" "}
        to be notified.
      </p>
    </CoveragePageLayout>
  );
}
