export interface SocialLink {
  name: string;
  /**
   * Tomine's own profile URL. Left empty until the manager supplies the
   * handle — an empty entry renders the icon without a link rather than
   * sending a customer to a dead page.
   */
  url: string;
}

/**
 * REPLACE THESE THREE with Tomine's real profile URLs, e.g.
 *   https://www.instagram.com/tominebakery
 *
 * They currently point at each platform's search for the restaurant. That
 * keeps every icon clickable without guessing at a handle — a guessed URL
 * would sooner or later land a customer on a stranger's account.
 */
export const SOCIALS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/search/top?q=tomine%20bakery%20and%20restaurant',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/search?q=tomine%20bakery%20and%20restaurant',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/explore/search/keyword/?q=tomine%20bakery',
  },
];
