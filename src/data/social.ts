export interface SocialLink {
  name: string;
  /**
   * Tomine's own profile URL. Left empty until the manager supplies the
   * handle — an empty entry renders the icon without a link rather than
   * sending a customer to a dead page.
   */
  url: string;
}

export const SOCIALS: SocialLink[] = [
  { name: 'Facebook', url: '' },
  { name: 'TikTok', url: '' },
  { name: 'Instagram', url: '' },
];
