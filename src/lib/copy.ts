/* ------------------------------------------------------------------ */
/*  Copy Abstraction Layer                                              */
/*                                                                     */
/*  All user-facing copy that changes between pre-launch and active     */
/*  states. Flip IS_LAUNCHED in feature-flags.ts to swap everything.    */
/* ------------------------------------------------------------------ */

import { IS_LAUNCHED } from "./feature-flags";

function pick<T>(prelaunch: T, active: T): T {
  return IS_LAUNCHED ? active : prelaunch;
}

/* ------------------------------------------------------------------ */
/*  Site-wide                                                          */
/* ------------------------------------------------------------------ */

export const SITE_TAGLINE = pick(
  "Building specialty insurance solutions for Gulf Coast community associations.",
  "Specialty insurance solutions for Gulf Coast community associations."
);

export const SITE_DESCRIPTION = pick(
  "Common Elements Insurance is building a specialty insurance practice focused exclusively on community association coverage across the Gulf Coast.",
  "Common Elements Insurance is a specialty insurance practice focused exclusively on community association coverage across the Gulf Coast."
);

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const HERO_HEADLINE = pick(
  "Building the Insurance Practice Your Association Deserves",
  "The Insurance Practice Your Association Deserves"
);

export const HERO_SUBHEADLINE = pick(
  "We're building a specialty insurance practice focused exclusively on community association coverage across the Gulf Coast — because your association deserves an agent who understands what they're insuring.",
  "A specialty insurance practice focused exclusively on community association coverage across the Gulf Coast — because your association deserves an agent who understands what they're insuring."
);

export const HERO_CTA_PRIMARY = pick("Join the Waitlist", "Get a Quote");
export const HERO_CTA_PRIMARY_HREF = pick("/waitlist", "/quote");
export const HERO_CTA_SECONDARY = pick("See What We'll Cover", "See What We Cover");

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const NAV_COVERAGE_LABEL = pick("What We'll Cover", "Coverage");

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */

export const HOW_IT_WORKS_HEADING = pick(
  "How It Will Work",
  "How It Works"
);

/* ------------------------------------------------------------------ */
/*  Differentiators                                                    */
/* ------------------------------------------------------------------ */

export const DIFF_GULF_COAST_DESC = pick(
  "Florida. Georgia. Alabama. Mississippi. Louisiana. Coastal property insurance is a different animal — surplus lines markets, wind mitigation credits, flood zone classifications, named storm deductibles. We will operate exclusively where this complexity lives.",
  "Florida. Georgia. Alabama. Mississippi. Louisiana. Coastal property insurance is a different animal — surplus lines markets, wind mitigation credits, flood zone classifications, named storm deductibles. We operate exclusively where this complexity lives."
);

export const DIFF_TRANSPARENCY_DESC = pick(
  "When we present your renewal, you'll see what changed, why, and what alternatives we explored. Side-by-side comparisons, plain-language summaries, and a direct line to someone who picks up the phone. That won't be a premium service — it'll be the baseline.",
  "When we present your renewal, you see what changed, why, and what alternatives we explored. Side-by-side comparisons, plain-language summaries, and a direct line to someone who picks up the phone. That's not a premium service — it's the baseline."
);

/* ------------------------------------------------------------------ */
/*  Footer / Disclaimer                                                */
/* ------------------------------------------------------------------ */

export const FOOTER_DISCLAIMER = pick(
  "Common Elements Insurance is in pre-launch development. Harry Schoeller holds a Florida 2-20 General Lines Agent license (LCAM CAM58884). Common Elements is not yet a licensed insurance agency and does not currently have carrier appointments. We are not transacting insurance business — we cannot bind coverage, issue policies, or collect premiums at this time. The waitlist collects expressions of interest only. Content on this website is educational and does not constitute insurance advice, a quote, or an offer of coverage. Insurance coverage is subject to the terms, conditions, and exclusions of each individual policy. Please consult with a licensed insurance professional for your specific needs.",
  "Common Elements Insurance is a licensed insurance agency specializing in community association coverage across the Gulf Coast. Content on this website is educational and does not constitute a binding quote or offer of coverage. Insurance coverage is subject to the terms, conditions, and exclusions of each individual policy."
);

/* ------------------------------------------------------------------ */
/*  Pre-launch Banner                                                  */
/* ------------------------------------------------------------------ */

export const PRE_LAUNCH_BANNER = pick(
  "Pre-Launch — We're preparing to serve Gulf Coast community associations",
  null
);
