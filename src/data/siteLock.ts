/**
 * The one switch that gates both sites.
 *
 * While this is true, the main site and the standalone menu site each render a
 * plain 404 instead of the real thing. Set it to false and rebuild to hand
 * everything back — this single edit covers both.
 *
 * It lives in a plain .ts file on purpose. The menu site reads it across the
 * project boundary through the @tomine alias, and a module with no React or
 * JSX in it travels over that boundary safely — exactly like data/menu.ts
 * already does. The 404 component itself is kept local to each site.
 */
export const SITE_LOCKED = true;
