/**
 * The two Tomine branches. Both the main site and the standalone menu site
 * read from here, so an address only ever has to be corrected in one place.
 */
export interface Branch {
  /** Short name for the area, used as the heading above the address. */
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
}

export const BRANCHES: Branch[] = [
  {
    name: 'Ijede',
    address: '226, Ijede Road, Okeletu, Ijede, Lagos',
    phone: '09036152411',
    phoneHref: 'tel:+2349036152411',
  },
  {
    name: 'Ikorodu',
    address: '110, Agura/Okeolokun Rd, Gberigbe, Ikorodu, Lagos',
    phone: '09036152411',
    phoneHref: 'tel:+2349036152411',
  },
];
