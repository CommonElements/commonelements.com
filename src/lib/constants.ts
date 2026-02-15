import {
  Shield,
  Building2,
  Users,
  Umbrella,
  Droplets,
  Lock,
  Ghost,
  FileQuestion,
  AlertTriangle,
  Blocks,
  Focus,
  GraduationCap,
  MapPin,
  Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "What We'll Cover",
    href: "/coverage",
    children: [
      { label: "Master Property / Hazard", href: "/coverage/master-property" },
      { label: "General Liability", href: "/coverage/general-liability" },
      { label: "Directors & Officers", href: "/coverage/directors-officers" },
      { label: "Umbrella / Excess", href: "/coverage/umbrella-excess" },
      { label: "Flood Insurance", href: "/coverage/flood" },
      { label: "Fidelity Bond / Crime", href: "/coverage/fidelity-bond" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  Credibility Strip                                                  */
/* ------------------------------------------------------------------ */

export const CREDENTIALS = [
  "Licensed in FL, GA, AL, MS & LA",
  "FL 2-20 General Lines",
  "LCAM CAM58884",
  "CAI Member",
] as const;

/* ------------------------------------------------------------------ */
/*  Pain Points                                                        */
/* ------------------------------------------------------------------ */

export const PAIN_POINTS = [
  {
    icon: Ghost,
    title: "The Vanishing Agent",
    description:
      "Your insurance agent shows up once a year to collect a signature and disappears until renewal. When your building takes a hit, you\u2019re on hold with a carrier you\u2019ve never spoken to.",
  },
  {
    icon: FileQuestion,
    title: "The Unexplained Renewal",
    description:
      "Your premium jumped 40% and the only explanation is a one-line email that says \u201Cmarket conditions.\u201D No alternatives presented. No breakdown of what changed. Just a bigger number and a deadline.",
  },
  {
    icon: AlertTriangle,
    title: "The Coverage Gap Nobody Mentioned",
    description:
      "Your governing documents require $10M in liability coverage. Your policy has $5M. Nobody flagged it \u2014 not your agent, not your management company. You find out when a plaintiff\u2019s attorney does.",
  },
  {
    icon: Blocks,
    title: "One-Size-Fits-All",
    description:
      "Your agent handles auto, home, life, commercial, and your 200-unit high-rise master policy on the side. Association insurance isn\u2019t their specialty \u2014 it\u2019s not even their focus.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Solution / Differentiators                                         */
/* ------------------------------------------------------------------ */

export const DIFFERENTIATORS = [
  {
    icon: Focus,
    title: "Association-Only Focus",
    description:
      "We don\u2019t sell auto insurance. We don\u2019t sell homeowners policies. Every client is a community association. Every carrier relationship, every coverage analysis, every renewal strategy is built around how associations actually work.",
  },
  {
    icon: GraduationCap,
    title: "CAM Background",
    description:
      "Our team brings active LCAM licensing and hands-on experience managing operations for 600+ community associations across Florida. We\u2019ve sat in your board meetings and watched boards approve budgets based on coverage they didn\u2019t fully understand.",
  },
  {
    icon: MapPin,
    title: "Gulf Coast Specialist",
    description:
      "Florida. Georgia. Alabama. Mississippi. Louisiana. Coastal property insurance is a different animal \u2014 surplus lines markets, wind mitigation credits, flood zone classifications, named storm deductibles. We operate exclusively where this complexity lives.",
  },
  {
    icon: Eye,
    title: "Transparency as Standard",
    description:
      "When we present your renewal, you\u2019ll see what changed, why, and what alternatives we explored. Side-by-side comparisons, plain-language summaries, and a direct line to someone who picks up the phone. That\u2019s not a premium service \u2014 that\u2019s the baseline.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Coverage Types                                                     */
/* ------------------------------------------------------------------ */

export const COVERAGE_TYPES = [
  {
    slug: "master-property",
    title: "Master Property / Hazard",
    icon: Building2,
    shortDescription:
      "The backbone of your association\u2019s insurance program. Covers the physical structure, common areas, and building systems against covered perils.",
  },
  {
    slug: "general-liability",
    title: "General Liability",
    icon: Shield,
    shortDescription:
      "Protects your association against bodily injury and property damage claims arising from common areas \u2014 the pool deck slip, the parking garage incident, the fallen tree limb.",
  },
  {
    slug: "directors-officers",
    title: "Directors & Officers (D&O)",
    icon: Users,
    shortDescription:
      "Protects your volunteer board members personally against claims alleging wrongful acts in their capacity as directors.",
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    icon: Umbrella,
    shortDescription:
      "Additional liability coverage above your GL and D&O limits. Most governing documents require it. Most associations are underinsured here.",
  },
  {
    slug: "flood",
    title: "Flood Insurance",
    icon: Droplets,
    shortDescription:
      "NFIP policies have coverage caps that don\u2019t come close to protecting a mid-rise or high-rise association. Private flood markets can fill the gap.",
  },
  {
    slug: "fidelity-bond",
    title: "Fidelity Bond / Crime",
    icon: Lock,
    shortDescription:
      "Protects association funds against theft or dishonesty by board members, managers, or employees. Florida statute requires it.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Tell us about your community.",
    description:
      "A short intake form with the basics: association type, unit count, location, and what\u2019s driving you to look. No jargon, no 40-field application.",
  },
  {
    number: 2,
    title: "We do the work.",
    description:
      "We review your current program, analyze your governing document requirements, and go to market across admitted and surplus lines carriers to find competitive options.",
  },
  {
    number: 3,
    title: "Your board decides with clarity.",
    description:
      "We present side-by-side comparisons in plain language \u2014 coverage differences, premium breakdowns, deductible structures \u2014 so your board can make an informed vote.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Form Options                                                       */
/* ------------------------------------------------------------------ */

export const ROLE_OPTIONS = [
  "Board President",
  "Board Treasurer",
  "Board Member",
  "Property Manager",
  "Other",
] as const;

export const STATE_OPTIONS = [
  "Florida",
  "Georgia",
  "Alabama",
  "Mississippi",
  "Louisiana",
  "Other",
] as const;

export const CONTACT_SUBJECT_OPTIONS = [
  "General Inquiry",
  "Partnership Opportunity",
  "Media / Press",
  "Other",
] as const;

export const RENEWAL_MONTH_OPTIONS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "Not Sure",
] as const;

/* ------------------------------------------------------------------ */
/*  Gulf Coast States (for map component)                              */
/* ------------------------------------------------------------------ */

export const GULF_COAST_STATES = [
  "Florida",
  "Alabama",
  "Mississippi",
  "Louisiana",
  "Georgia",
] as const;

/* ------------------------------------------------------------------ */
/*  Footer / Legal                                                     */
/* ------------------------------------------------------------------ */

export const FOOTER_DISCLAIMER =
  "Common Elements is currently in pre-launch. We are not yet a registered insurance agency and are not currently soliciting or transacting insurance business. Content on this website is provided for informational purposes only and does not constitute insurance advice. Insurance coverage is subject to the terms, conditions, and exclusions of each individual policy. Please consult with a licensed insurance professional regarding your specific coverage needs.";

export const COMPANY_INFO = {
  name: "Common Elements Insurance",
  email: "hello@commonelements.com",
  location: "Florida Gulf Coast",
  credentials: "LCAM CAM58884",
  year: 2026,
} as const;

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;
