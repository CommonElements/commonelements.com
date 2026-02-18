/* ------------------------------------------------------------------ */
/*  Feature Flags                                                      */
/*                                                                     */
/*  Flip IS_LAUNCHED when the agency license is active and carrier      */
/*  appointments are in place. The other flags depend on it.            */
/* ------------------------------------------------------------------ */

export const IS_LAUNCHED = false;
export const SHOW_QUOTE_FORM = IS_LAUNCHED;
export const SHOW_CLIENT_PORTAL = false; // enable separately post-launch
