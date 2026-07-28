import ringDoughnut from '../assets/menu/ring-doughnut.jpg';
import meatPie from '../assets/menu/meat-pie.jpg';
import chickenPie from '../assets/menu/chicken-pie.jpg';
import beefRoll from '../assets/menu/beef-roll.jpg';
import frankRoll from '../assets/menu/frank-roll.jpg';
import chocolateDoughnut from '../assets/menu/chocolate-doughnut.jpg';
import jamDoughnut from '../assets/menu/jam-doughnut.jpg';
import milkyDoughnut from '../assets/menu/milky-doughnut.jpg';
import eggRoll from '../assets/menu/egg-roll.jpg';
import scotchEgg from '../assets/menu/scotch-egg.jpg';
import cupCake from '../assets/menu/cup-cake.jpg';

import jollofRice from '../assets/menu/jollof-rice.jpg';
import friedRice from '../assets/menu/fried-rice.jpg';
import whiteRiceBeans from '../assets/menu/white-rice-beans.jpg';
import eba from '../assets/menu/eba.jpg';
import poundedYam from '../assets/menu/pounded-yam.jpg';
import semo from '../assets/menu/semo.jpg';
import efoRiro from '../assets/menu/efo-riro.jpg';
import egusi from '../assets/menu/egusi.jpg';
import panlaFish from '../assets/menu/panla-fish.jpg';
import croakerFish from '../assets/menu/croaker-fish.jpg';
import turkey from '../assets/menu/turkey.jpg';
import boiledEgg from '../assets/menu/boiled-egg.jpg';

import fanta from '../assets/menu/fanta.jpg';
import cocaCola from '../assets/menu/coca-cola.jpg';
import sprite from '../assets/menu/sprite.jpg';
import pepsi from '../assets/menu/pepsi.jpg';
import sevenUp from '../assets/menu/seven-up.jpg';
import sevenUpCan from '../assets/menu/seven-up-can.jpg';
import cocaColaCan from '../assets/menu/coca-cola-can.jpg';
import fantaCan from '../assets/menu/fanta-can.jpg';
import evaWater from '../assets/menu/eva-water.jpg';
import aquafina from '../assets/menu/aquafina.jpg';
import maltina from '../assets/menu/maltina.jpg';
import maltinaCan from '../assets/menu/maltina-can.jpg';
import maltaGuinnessCan from '../assets/menu/malta-guinness-can.jpg';
import parfait from '../assets/menu/parfait.jpg';
import vitaMilk from '../assets/menu/vita-milk.jpg';

export interface MenuItem {
  name: string;
  price: string;
  /* Left out until the kitchen supplies a correct photo for the item. */
  image?: string;
  note?: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

/**
 * Single source of truth for the menu, taken from the client's
 * "TOMINE MENU LIST" document. Both the main site (/menu) and the
 * standalone menu site (web-menu/) read from here — correct an item
 * once and it is fixed on both.
 */
export const MENU: MenuSection[] = [
  {
    category: 'Pastries',
    items: [
      { name: 'Ring Doughnut', price: '₦500', image: ringDoughnut },
      { name: 'Meat Pie', price: '₦1,000', image: meatPie },
      { name: 'Chicken Pie', price: '₦1,000', image: chickenPie },
      { name: 'Beef Roll', price: '₦600', image: beefRoll },
      { name: 'Frank Roll', price: '₦500', image: frankRoll },
      { name: 'Chocolate Doughnut', price: '₦1,000', image: chocolateDoughnut },
      { name: 'Jam Doughnut', price: '₦500', image: jamDoughnut },
      { name: 'Milky Doughnut', price: '₦500', image: milkyDoughnut },
      { name: 'Egg Roll', price: '₦500', image: eggRoll },
      { name: 'Scotch Egg', price: '₦700', image: scotchEgg },
      { name: 'Cup Cake', price: '₦500', image: cupCake },
    ],
  },
  {
    category: 'Meals & Proteins',
    items: [
      { name: 'Jollof Rice', price: '₦1,000', image: jollofRice },
      { name: 'Fried Rice', price: '₦1,000', image: friedRice },
      { name: 'White Rice & Beans', price: '₦1,000', image: whiteRiceBeans },
      { name: 'Eba', price: '₦1,000', image: eba },
      { name: 'Pounded Yam', price: '₦1,000', image: poundedYam },
      { name: 'Semo', price: '₦4,500', image: semo },
      { name: 'Efo-Riro Soup', price: '₦1,000', image: efoRiro },
      { name: 'Egusi Soup', price: '₦1,000', image: egusi },
      { name: 'Panla Fish', price: '₦1,000', image: panlaFish },
      { name: 'Croaker Fish', price: '₦3,500', image: croakerFish },
      /* Photo pulled at the client's request — listed by name until a new one arrives. */
      { name: 'Roasted Chicken', price: '₦2,500' },
      { name: 'Turkey', price: '₦4,000', image: turkey },
      { name: 'Boiled Egg', price: '₦500', image: boiledEgg },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Fanta', price: '₦500', note: '50CL', image: fanta },
      { name: 'Coca-Cola', price: '₦500', note: '50CL', image: cocaCola },
      { name: 'Sprite', price: '₦500', note: '50CL', image: sprite },
      { name: 'Pepsi', price: '₦500', note: '50CL', image: pepsi },
      { name: '7-Up', price: '₦500', note: '50CL', image: sevenUp },
      { name: '7-Up Can', price: '₦650', note: '33CL', image: sevenUpCan },
      { name: 'Coca-Cola Can', price: '₦650', note: '33CL', image: cocaColaCan },
      { name: 'Fanta Can', price: '₦650', note: '33CL', image: fantaCan },
      { name: 'Eva Water', price: '₦400', note: '75CL', image: evaWater },
      { name: 'Aquafina Water', price: '₦300', image: aquafina },
      { name: 'Maltina', price: '₦600', image: maltina },
      { name: 'Maltina Can', price: '₦800', note: '33CL', image: maltinaCan },
      { name: 'Malta Guinness Can', price: '₦800', note: '33CL', image: maltaGuinnessCan },
      { name: 'Parfait', price: '₦3,000', image: parfait },
      { name: 'Vita Milk', price: '₦1,800', image: vitaMilk },
    ],
  },
];

export const MENU_CATEGORIES = ['All', ...MENU.map((s) => s.category)];
