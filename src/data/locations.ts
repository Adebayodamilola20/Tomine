/**
 * The three Tomine branches. Both the main site and the standalone menu site
 * read from here, so an address only ever has to be corrected in one place.
 */
export interface Branch {
  /** Short name for the spot, used as the heading above the address. */
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
}

/* Two of the three are in Gberigbe, so they are named by their nearest
   landmark rather than the area — "Ikorodu" twice would be no help to anyone
   trying to work out which one is closer. */
export const BRANCHES: Branch[] = [
  {
    name: 'Ijede',
    address: 'Tomine Building, 226, Ijede Rd, Ile Eja Bus Stop, Oke-Eletu Ijede, Lagos',
    phone: '09036152411',
    phoneHref: 'tel:+2349036152411',
  },
  {
    name: 'Okeagbo Junction',
    address: '1 Okeagbo Junction, Gberigbe Bus-Stop, Ikorodu, Lagos',
    phone: '08023099837',
    phoneHref: 'tel:+2348023099837',
  },
  {
    name: 'Agura Road',
    address: '110, Agura/Okealokun Rd, Gberigbe, Ikorodu, Lagos',
    phone: '07079322329',
    phoneHref: 'tel:+2347079322329',
  },
];
