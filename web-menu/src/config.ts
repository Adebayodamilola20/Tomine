/** Everything that points outside this site lives here. */

/** The main Tomine website. Update if the domain changes. */
export const MAIN_SITE_URL = 'https://tomine-mu.vercel.app/';

export const CONTACT = {
  address: '110, Agura/Okeolokun Road, Gberigbe, Ikorodu, Lagos',
  phone: '09036152411',
  phoneHref: 'tel:+2349036152411',
  /** Where the order buttons go. */
  whatsapp: 'https://wa.me/2349036152411',
  /** Second WhatsApp line the restaurant also answers on. */
  whatsappAlt: 'https://wa.me/2347079322329',
  whatsappAltLabel: '07079322329',
  email: 'hello@tominarestaurant.com',
};

/**
 * A WhatsApp link that opens the chat with the order already typed out, so the
 * customer only has to hit send.
 */
export const orderLink = (name: string, price: string, note?: string) => {
  const dish = note ? `${name} (${note})` : name;
  const text = `Hello Tomine, I'd like to order:\n\n• ${dish} — ${price}\n\nIs it available?`;
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
};

/** The same chat, opened from the floating button before a dish has been picked. */
export const enquiryLink = () =>
  `${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello Tomine, I'm looking at the menu and I'd like to place an order."
  )}`;
