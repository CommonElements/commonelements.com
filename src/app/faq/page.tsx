import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/shared/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Common Elements Insurance, our pre-launch status, community association insurance, and how the waitlist works.",
};

const FAQ_SECTIONS = [
  {
    heading: "About Common Elements",
    questions: [
      {
        q: "What is Common Elements Insurance?",
        a: "Common Elements is a specialty insurance practice being built exclusively for community associations — condominiums, cooperatives, and homeowner associations along the Gulf Coast. Our founding team brings active Florida LCAM licensing and hands-on experience managing operations for 600+ community associations.",
      },
      {
        q: "Are you currently writing insurance policies?",
        a: "No. Common Elements is in pre-launch development. We are not yet a licensed insurance agency and do not currently have carrier appointments. We cannot bind coverage, issue policies, or collect premiums at this time. We are currently building our infrastructure, finalizing carrier and market access partnerships, and completing additional licensing.",
      },
      {
        q: "When will you launch?",
        a: "We don't have a fixed public launch date yet. We're completing our licensing, securing carrier appointments, and building the systems to serve associations properly. We'd rather launch right than launch fast. Waitlist members will be the first to know when we're ready.",
      },
      {
        q: "What states will you serve?",
        a: "We're preparing to serve community associations across the Gulf Coast — Florida, Georgia, Alabama, Mississippi, and Louisiana. We're starting with Florida, where our team is licensed and based, and will expand as we secure additional state licenses.",
      },
      {
        q: "What makes you different from other insurance agents?",
        a: "Most insurance agents handle auto, home, life, commercial, and community association policies on the side. Association insurance isn't their specialty. Our team comes from the community association management side — we've read governing documents, built association budgets, and sat through hundreds of board meetings where insurance was the most confusing agenda item. We're building a practice around that experience.",
      },
    ],
  },
  {
    heading: "The Waitlist",
    questions: [
      {
        q: "What does joining the waitlist mean?",
        a: "The waitlist is a simple expression of interest. You're telling us you'd like to hear from us when we launch. There's no cost, no obligation, and no commitment. We collect your name, email, role, state, and optional details about your association so we can reach out with relevant information when the time comes.",
      },
      {
        q: "Will I receive a quote by joining the waitlist?",
        a: "No. We are not able to provide insurance quotes at this time. The waitlist is for launch notifications only. When we're fully licensed and appointed with carriers, waitlist members will be among the first we reach out to.",
      },
      {
        q: "What will you do with my information?",
        a: "We'll use your contact information solely to notify you about our launch and share relevant educational content about community association insurance. We won't sell or share your information with third parties. See our privacy policy for full details.",
      },
      {
        q: "Can I remove myself from the waitlist?",
        a: "Yes. You can contact us at hello@commonelements.com at any time to request removal from the waitlist. We'll delete your information promptly.",
      },
    ],
  },
  {
    heading: "Community Association Insurance",
    questions: [
      {
        q: "What types of insurance does a community association need?",
        a: "Most community associations need six core coverage types: Master Property / Hazard insurance (protects the physical structure and common areas), General Liability (covers bodily injury and property damage claims), Directors & Officers (protects volunteer board members), Umbrella / Excess Liability (additional coverage above base policy limits), Flood Insurance (especially critical in Gulf Coast communities), and Fidelity Bond / Crime coverage (protects association funds against theft or dishonesty). The specific requirements depend on your state law, governing documents, and community characteristics.",
      },
      {
        q: "Is community association insurance required by law in Florida?",
        a: "Yes. Florida Statute 718 (the Condominium Act) requires condominium associations to maintain certain insurance coverages, including property insurance, liability insurance, and fidelity bonding. HOAs governed under Chapter 720 have different but related requirements. The specifics depend on your association type, your governing documents, and your community's characteristics.",
      },
      {
        q: "What's the difference between admitted and surplus lines insurance?",
        a: "Admitted carriers are licensed and regulated by the state's insurance department, and their policyholders are protected by the state guaranty fund if the carrier becomes insolvent. Surplus lines carriers are not admitted in the state but can write coverage that admitted carriers won't — common for coastal property, high-value associations, or hard-to-place risks. Many Gulf Coast associations need a combination of both.",
      },
      {
        q: "Why is coastal association insurance so expensive?",
        a: "Gulf Coast associations face a combination of factors: hurricane and wind exposure, flood risk, aging building stock, rising reinsurance costs, and a litigation environment that has driven many carriers out of the market. These factors make coastal association insurance more complex and more expensive than inland coverage, which is why specialist knowledge matters.",
      },
      {
        q: "What is a wind mitigation inspection?",
        a: "A wind mitigation inspection evaluates your building's construction features that reduce vulnerability to wind damage — roof shape, roof covering, roof deck attachment, wall construction, and opening protection (shutters or impact glass). These inspections can qualify your association for significant premium credits, sometimes reducing wind premiums by 20% or more.",
      },
    ],
  },
  {
    heading: "Working With Us (After Launch)",
    questions: [
      {
        q: "How will the process work once you launch?",
        a: "When we're operational, you'll fill out a short intake form with your association's basics — type, unit count, location, and current coverage situation. We'll review your program, analyze your governing document requirements, and go to market across admitted and surplus lines carriers to find competitive options. Then we'll present side-by-side comparisons in plain language so your board can make an informed decision.",
      },
      {
        q: "Will you handle claims?",
        a: "Yes. When we launch, we plan to be actively involved in the claims process — not just handing you a carrier's 800 number. Our founding team includes a Florida 6-20 Licensed Company Adjuster, which gives us direct insight into how the claims process works from the other side.",
      },
      {
        q: "Do you charge fees beyond the commission?",
        a: "Our compensation structure will be detailed at launch. In general, insurance agents are compensated through commissions paid by the carrier — not directly by the policyholder. We believe in full transparency about how we're compensated and will clearly disclose our commission structure.",
      },
      {
        q: "Can you help with our next renewal even if we have an existing agent?",
        a: "When we launch, absolutely. It's your association's right to shop your insurance program at any time. We recommend starting the process 90-120 days before your renewal date to allow adequate time for marketing and board review.",
      },
    ],
  },
] as const;

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
            Answers to common questions about Common Elements, our pre-launch
            status, and community association insurance in general.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      {FAQ_SECTIONS.map((section, sectionIdx) => (
        <section
          key={section.heading}
          className={`py-12 md:py-16 ${sectionIdx % 2 === 1 ? "bg-cream/50" : "bg-white"}`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-blue">
              {section.heading}
            </h2>
            <Accordion type="multiple" className="mt-6">
              {section.questions.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`${section.heading}-${idx}`}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="py-5 text-left text-[0.9375rem] font-medium text-blue hover:no-underline [&[data-state=open]]:text-teal">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="border-t bg-cream py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-blue">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
            We&rsquo;re happy to help. Reach out directly and we&rsquo;ll get
            back to you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-orange px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark"
            >
              Contact Us
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/waitlist"
              className="inline-flex items-center text-sm font-medium text-teal transition-colors hover:text-teal-dark"
            >
              Join the Waitlist
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
