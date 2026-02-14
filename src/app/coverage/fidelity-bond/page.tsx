import type { Metadata } from "next";
import Link from "next/link";
import { CoveragePageLayout } from "@/components/coverage/coverage-page-layout";

export const metadata: Metadata = {
  title: "Fidelity Bonds for Community Associations",
  description:
    "Florida requires fidelity bonding for anyone who controls association funds. Learn about statutory requirements, common pitfalls with outdated limits, and what's covered.",
};

export default function FidelityBondPage() {
  return (
    <CoveragePageLayout title="Fidelity Bonds for Community Associations: Florida's Requirement and Why the Amount Matters">
      <p>
        A fidelity bond (also called employee dishonesty or crime coverage)
        protects association funds against theft, fraud, or dishonesty by
        anyone who has access to or control over association money &mdash;
        board members, officers, employees, management company staff,
        bookkeepers, and vendors with financial access.
      </p>

      <h2>Florida&rsquo;s statutory requirement</h2>
      <p>
        For condominium associations, Section 718.111(11)(d) requires fidelity
        bonding for all persons who control or disburse funds of the
        association. The required coverage amount must be equal to the maximum
        amount of funds that will be in the custody of the association or its
        management agent at any one time. For HOAs governed by Chapter 720,
        similar requirements exist.
      </p>
      <p>
        In practice, this means your fidelity bond limit should reflect the
        total of your operating account balance, reserve fund balance, and any
        other funds the association holds &mdash; at their peak levels, not
        their average. An association with a $300K operating account and $1.2M
        in reserves needs a minimum $1.5M fidelity bond.
      </p>

      <h2>The problem: outdated bond limits</h2>
      <p>
        Fidelity bonds are often set at formation or when the association first
        purchases coverage, and then renewed at the same limit year after year
        without adjustment. Meanwhile, reserve balances grow. Special
        assessment collections temporarily inflate fund balances. An
        association that needed a $500K bond five years ago may need $2M today.
        If the bond limit hasn&rsquo;t kept pace with fund balances, the
        association is carrying coverage that doesn&rsquo;t meet the statutory
        requirement &mdash; and more importantly, doesn&rsquo;t actually
        protect the funds.
      </p>

      <h2>What&rsquo;s covered</h2>
      <p>
        Direct loss of money, securities, or property due to dishonest acts by
        covered persons. This includes embezzlement, fraudulent transfers,
        forgery, and computer fraud in many modern policy forms. Some policies
        extend to cover social engineering fraud (a board treasurer tricked by
        a phishing email into wiring funds to a fraudulent account), but this
        coverage varies significantly between carriers and often has sublimits.
      </p>

      <h2>What&rsquo;s NOT covered</h2>
      <p>
        Indirect losses, lost income, or consequential damages. Acts by
        persons not covered under the bond. Losses discovered after the policy
        period and outside the discovery period. Some policies exclude
        volunteer board members or require separate coverage for them.
      </p>

      <h2>Management company coverage</h2>
      <p>
        If your association uses a management company that handles financial
        transactions, the management company should also carry its own fidelity
        coverage. However, the association should not rely solely on the
        management company&rsquo;s bond &mdash; the association&rsquo;s own
        fidelity bond should cover the full fund exposure regardless of who
        has custody.
      </p>

      <p className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-4 text-sm not-prose">
        Common Elements will ensure your fidelity bond coverage meets
        Florida&rsquo;s statutory requirements and actually matches your fund
        balances when we launch.{" "}
        <Link href="/waitlist" className="font-medium text-teal hover:underline">
          Join our waitlist
        </Link>
        .
      </p>
    </CoveragePageLayout>
  );
}
