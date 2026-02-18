"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  definition: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Actual Cash Value (ACV)",
    definition:
      "The replacement cost of damaged property minus depreciation. If your 15-year-old roof is destroyed, ACV pays what a 15-year-old roof is worth — not what a new one costs. Most association master policies should carry replacement cost coverage instead.",
  },
  {
    term: "Additional Insured",
    definition:
      "A person or organization added to an insurance policy that isn't the named insured. Associations often require vendors and contractors to list the association as an additional insured on their liability policies.",
  },
  {
    term: "Admitted Carrier",
    definition:
      "An insurance company licensed and regulated by the state's insurance department. Policyholders of admitted carriers are protected by the state guaranty fund if the carrier becomes insolvent. Compare with surplus lines carrier.",
  },
  {
    term: "Assessment",
    definition:
      "A charge levied against unit owners by the association. A special assessment is a one-time charge — often triggered by an uninsured loss, a deductible obligation, or a reserve shortfall after a claim.",
  },
  {
    term: "Betterments and Improvements",
    definition:
      "Upgrades made by individual unit owners to their units beyond the original specifications — upgraded flooring, custom cabinetry, remodeled kitchens. Typically NOT covered by the association's master policy. Unit owners need their own HO-6 policy.",
  },
  {
    term: "Binder",
    definition:
      "A temporary agreement that provides insurance coverage until a formal policy is issued. Often used to provide proof of coverage between the effective date and the time the carrier issues the full policy documents.",
  },
  {
    term: "Certificate of Insurance (COI)",
    definition:
      "A document proving that an insurance policy exists and summarizing key coverage details. Associations frequently need COIs from vendors, and lenders often require COIs from the association.",
  },
  {
    term: "Claim",
    definition:
      "A formal request to the insurance carrier for payment under the terms of the policy. The claims process involves reporting the loss, investigation by an adjuster, and determination of coverage and payment.",
  },
  {
    term: "Coinsurance",
    definition:
      "A policy provision requiring the insured to carry coverage equal to a specified percentage (usually 80%, 90%, or 100%) of the property's value. If you're underinsured, you may only receive a proportional payout on claims.",
  },
  {
    term: "Condominium Act (Florida Statute 718)",
    definition:
      "Florida's governing law for condominium associations. Section 718.111(11) specifically addresses insurance requirements, including mandatory property, liability, and fidelity bond coverage.",
  },
  {
    term: "Declarations Page (Dec Page)",
    definition:
      "The front page(s) of an insurance policy summarizing key information: named insured, policy period, coverage limits, deductibles, and premiums. This is the first thing to review at every renewal.",
  },
  {
    term: "Deductible",
    definition:
      "The amount the policyholder must pay out of pocket before insurance kicks in. For associations, this is typically a budget line item. Named storm deductibles in Florida are often 2-5% of the insured property value — on a $50M building, that's $1M-$2.5M.",
  },
  {
    term: "Directors & Officers (D&O) Insurance",
    definition:
      "Liability coverage that protects volunteer board members against claims alleging wrongful acts in their capacity as directors — breach of fiduciary duty, mismanagement, failure to maintain property, and similar allegations.",
  },
  {
    term: "Endorsement",
    definition:
      "A written amendment to an insurance policy that changes the terms, conditions, or coverage. Also called a rider. Endorsements can add, remove, or modify coverage.",
  },
  {
    term: "Excess Liability",
    definition:
      "Coverage that sits above the limits of an underlying policy and follows the same terms and conditions. Different from an umbrella policy, which may broaden coverage in addition to adding limits. See also: Umbrella Policy.",
  },
  {
    term: "Exclusion",
    definition:
      "A specific condition, peril, or type of loss that a policy will NOT cover. Common association exclusions include mold, gradual water damage, and wear and tear. Always read your exclusions carefully.",
  },
  {
    term: "Fidelity Bond / Crime Coverage",
    definition:
      "Insurance that protects association funds against theft or dishonesty by board members, property managers, employees, or anyone with access to association money. Required by Florida statute for condominiums.",
  },
  {
    term: "Flood Zone",
    definition:
      "Geographic areas classified by FEMA based on flood risk. Zone A and Zone V are high-risk areas where flood insurance is typically mandatory if there's a federally-backed mortgage. Many Gulf Coast associations are in high-risk zones.",
  },
  {
    term: "General Liability (GL)",
    definition:
      "Insurance that protects the association against third-party claims for bodily injury or property damage occurring in common areas — slip-and-fall at the pool, injury in the parking garage, a falling tree limb hitting a visitor's car.",
  },
  {
    term: "Governing Documents",
    definition:
      "The legal documents that establish and govern a community association: the declaration of condominium (or covenants), articles of incorporation, bylaws, and rules and regulations. These documents often specify minimum insurance requirements.",
  },
  {
    term: "Guaranty Fund",
    definition:
      "A state-managed fund that pays claims if an admitted insurance carrier becomes insolvent. Surplus lines carriers are NOT covered by the guaranty fund, which is one reason they may offer lower premiums.",
  },
  {
    term: "HO-6 Policy",
    definition:
      "A homeowner's insurance policy designed for condominium or co-op unit owners. Covers the unit interior, personal property, personal liability, and loss assessment (charges from the association's deductible). Every unit owner should carry one.",
  },
  {
    term: "Indemnity",
    definition:
      "The principle that insurance should restore you to the financial position you were in before the loss — no better, no worse. Insurance isn't meant to be a profit center.",
  },
  {
    term: "Loss Assessment Coverage",
    definition:
      "Coverage within a unit owner's HO-6 policy that helps pay their share of a special assessment levied by the association after a covered loss. Critical when the association's deductible is high.",
  },
  {
    term: "Loss Run / Loss History",
    definition:
      "A report from your current (or previous) carrier listing all claims filed over a specified period, typically five years. Carriers require loss runs when quoting new business. Request them early — they can take weeks to arrive.",
  },
  {
    term: "Master Policy",
    definition:
      "The association's primary property insurance policy that covers the building structure, common elements, and (depending on coverage type) unit interiors. The master policy is the backbone of the association's insurance program.",
  },
  {
    term: "Named Storm Deductible",
    definition:
      "A separate, typically higher deductible that applies specifically to losses caused by named hurricanes or tropical storms. In Florida, this is often 2-5% of the total insured value — a significant financial exposure for the association.",
  },
  {
    term: "National Flood Insurance Program (NFIP)",
    definition:
      "The federal program administered by FEMA that provides flood insurance. NFIP has coverage caps ($250K residential / $500K commercial per building) that are far too low for most multi-unit associations. Private flood markets can provide higher limits.",
  },
  {
    term: "Ordinance or Law Coverage",
    definition:
      "Coverage for the additional costs of rebuilding to current building codes after a loss. If your building was built in 1985 and destroyed today, current code may require upgraded electrical, plumbing, and structural systems. Without this coverage, the association pays the difference.",
  },
  {
    term: "Premium",
    definition:
      "The amount paid to the insurance carrier for coverage, typically annually. For associations, the premium is a significant budget line item that directly affects unit owner assessments.",
  },
  {
    term: "Replacement Cost Value (RCV)",
    definition:
      "The cost to replace or rebuild damaged property with materials of similar kind and quality at current prices, without deducting for depreciation. This is the coverage basis most associations should carry on their master policy.",
  },
  {
    term: "Reserve Study",
    definition:
      "A long-term financial planning document that identifies the association's major common elements, estimates their remaining useful life and replacement cost, and determines the funding needed to cover future replacements without special assessments.",
  },
  {
    term: "Subrogation",
    definition:
      "The process by which an insurance carrier recovers claim payments from a third party who caused the loss. If a contractor's negligence caused water damage, your carrier may pay the claim and then pursue the contractor for reimbursement.",
  },
  {
    term: "Surplus Lines Carrier",
    definition:
      "An insurance company not admitted (licensed) in the state but authorized to write coverage through surplus lines brokers. Often used for hard-to-place risks, coastal property, or coverage that admitted carriers won't write. Not covered by the state guaranty fund.",
  },
  {
    term: "Umbrella Policy",
    definition:
      "A liability policy that provides additional limits above underlying policies (GL, D&O, auto) AND may broaden coverage. Different from excess liability, which only adds limits without broadening terms. Most governing documents require umbrella coverage.",
  },
  {
    term: "Underinsured",
    definition:
      "Carrying coverage limits that are insufficient to cover the actual value of the insured property or the association's real exposure. Common in associations where property values have increased but coverage limits haven't kept pace.",
  },
  {
    term: "Waiver of Subrogation",
    definition:
      "An endorsement that prevents the carrier from pursuing recovery against a specified party. Often required in vendor contracts. If the association waives subrogation against a contractor and the contractor causes damage, the carrier can't go after the contractor to recover what it paid.",
  },
  {
    term: "Wind Mitigation",
    definition:
      "Building features that reduce vulnerability to wind damage — roof shape, roof covering, roof deck attachment, wall construction, and opening protection (shutters or impact glass). A wind mitigation inspection can qualify associations for significant premium credits, sometimes 20% or more.",
  },
];

export function GlossaryContent() {
  const [search, setSearch] = useState("");

  const filteredTerms = useMemo(() => {
    if (!search.trim()) return GLOSSARY_TERMS;
    const q = search.toLowerCase();
    return GLOSSARY_TERMS.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    for (const term of filteredTerms) {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTerms]);

  const allLetters = useMemo(() => {
    const letters = new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  const activeLetters = useMemo(
    () => new Set(grouped.map(([letter]) => letter)),
    [grouped]
  );

  return (
    <>
      {/* Search + Letter Nav */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              aria-label="Search glossary terms"
            />
          </div>
          <nav
            className="mt-4 flex flex-wrap gap-1"
            aria-label="Alphabetical navigation"
          >
            {allLetters.map((letter) => (
              <a
                key={letter}
                href={activeLetters.has(letter) ? `#letter-${letter}` : undefined}
                className={`flex h-8 w-8 items-center justify-center rounded text-sm font-medium transition-colors ${
                  activeLetters.has(letter)
                    ? "text-blue hover:bg-blue/5"
                    : "text-muted-foreground/40 cursor-default"
                }`}
                aria-disabled={!activeLetters.has(letter)}
              >
                {letter}
              </a>
            ))}
          </nav>
          {search && (
            <p className="mt-3 text-sm text-muted-foreground">
              {filteredTerms.length} term{filteredTerms.length !== 1 && "s"}{" "}
              found
            </p>
          )}
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {grouped.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No terms match your search. Try a different keyword.
            </p>
          ) : (
            <div className="space-y-10">
              {grouped.map(([letter, terms]) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="mb-4 border-b border-border/50 pb-2 text-xl font-bold text-blue">
                    {letter}
                  </h2>
                  <dl className="space-y-6">
                    {terms.map((item) => (
                      <div key={item.term}>
                        <dt className="text-[0.9375rem] font-semibold text-blue">
                          {item.term}
                        </dt>
                        <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                          {item.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t bg-cream/50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-muted-foreground italic">
            These definitions are provided for educational purposes and are
            simplified for readability. Actual policy language, legal
            definitions, and regulatory requirements may differ. Always refer to
            your specific policy documents and consult with a licensed insurance
            professional for authoritative guidance.
          </p>
        </div>
      </section>
    </>
  );
}
