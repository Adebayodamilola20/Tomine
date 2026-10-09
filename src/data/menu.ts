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
import poundedYamSoup from '../assets/menu/pounded-yam-soup.jpg';
import semo from '../assets/menu/semo.jpg';
import semoEfoRiro from '../assets/menu/semo-efo-riro.jpg';
import semoEgusi from '../assets/menu/semo-egusi.jpg';
import yamPottage from '../assets/menu/yam-pottage.jpg';
import efoRiro from '../assets/menu/efo-riro.jpg';
import egusi from '../assets/menu/egusi.jpg';
import panlaFish from '../assets/menu/panla-fish.jpg';
import croakerFish from '../assets/menu/croaker-fish.jpg';
import turkey from '../assets/menu/turkey.jpg';
import cowLeg from '../assets/menu/cow-leg.jpg';
import assortedMeat from '../assets/menu/assorted-meat.jpg';
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

import packChickenJollof from '../assets/menu/pack-chicken-jollof.jpg';
import packBeefFishJollof from '../assets/menu/pack-beef-fish-jollof.jpg';
import packBeefPomoJollof from '../assets/menu/pack-beef-pomo-jollof.jpg';
import packTwoBeefsJollof from '../assets/menu/pack-two-beefs-jollof.jpg';
import packBeefEggJollof from '../assets/menu/pack-beef-egg-jollof.jpg';
import packFishEggJollof from '../assets/menu/pack-fish-egg-jollof.jpg';
import packPomoEggJollof from '../assets/menu/pack-pomo-egg-jollof.jpg';
import packChickenFriedRice from '../assets/menu/pack-chicken-fried-rice.jpg';
import packBeefFishFriedRice from '../assets/menu/pack-beef-fish-fried-rice.jpg';
import packBeefPomoFriedRice from '../assets/menu/pack-beef-pomo-fried-rice.jpg';
import packPomoFishFriedRice from '../assets/menu/pack-pomo-fish-fried-rice.jpg';
import packTwoBeefsFriedRice from '../assets/menu/pack-two-beefs-fried-rice.jpg';
import packBeefEggFriedRice from '../assets/menu/pack-beef-egg-fried-rice.jpg';
import packFishEggFriedRice from '../assets/menu/pack-fish-egg-fried-rice.jpg';
import packPomoEggFriedRice from '../assets/menu/pack-pomo-egg-fried-rice.jpg';
import packChickenSpaghetti from '../assets/menu/pack-chicken-spaghetti.jpg';
import packBeefFishSpaghetti from '../assets/menu/pack-beef-fish-spaghetti.jpg';
import packBeefPomoSpaghetti from '../assets/menu/pack-beef-pomo-spaghetti.jpg';
import packPomoFishSpaghetti from '../assets/menu/pack-pomo-fish-spaghetti.jpg';
import packTwoBeefsSpaghetti from '../assets/menu/pack-two-beefs-spaghetti.jpg';
import packFishEggSpaghetti from '../assets/menu/pack-fish-egg-spaghetti.jpg';
import packPomoEggSpaghetti from '../assets/menu/pack-pomo-egg-spaghetti.jpg';
import packChickenMixed from '../assets/menu/pack-chicken-mixed.jpg';
import packBeefFishMixed from '../assets/menu/pack-beef-fish-mixed.jpg';
import packBeefPomoMixed from '../assets/menu/pack-beef-pomo-mixed.jpg';
import packPomoFishMixed from '../assets/menu/pack-pomo-fish-mixed.jpg';
import packTwoBeefsMixed from '../assets/menu/pack-two-beefs-mixed.jpg';
import packBeefEggMixed from '../assets/menu/pack-beef-egg-mixed.jpg';
import packFishEggMixed from '../assets/menu/pack-fish-egg-mixed.jpg';

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
      { name: 'Beef Roll', price: '₦500', image: beefRoll },
      { name: 'Frank Roll', price: '₦600', image: frankRoll },
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
      { name: 'Eba', price: '₦500', image: eba },
      { name: 'Pounded Yam', price: '₦1,500', image: poundedYam },
      { name: 'Pounded Yam with Soup', price: '₦2,500', image: poundedYamSoup },
      { name: 'Semo', price: '₦1,000', image: semo },
      { name: 'Semo with Efo-Riro', price: '₦2,000', image: semoEfoRiro },
      { name: 'Semo with Egusi Soup', price: '₦2,000', image: semoEgusi },
      { name: 'Yam Pottage', price: '₦1,500', image: yamPottage },
      { name: 'Efo-Riro Soup', price: '₦1,000', image: efoRiro },
      { name: 'Egusi Soup', price: '₦1,000', image: egusi },
      { name: 'Panla Fish', price: '₦1,000', image: panlaFish },
      { name: 'Croaker Fish', price: '₦3,000', image: croakerFish },
      /* Photo pulled at the client's request — listed by name until a new one arrives. */
      { name: 'Roasted Chicken', price: '₦2,500' },
      { name: 'Turkey', price: '₦4,000', image: turkey },
      { name: 'Cow Leg', price: '₦2,500', image: cowLeg },
      { name: 'Assorted Meat', price: '₦1,000', image: assortedMeat },
      { name: 'Boiled Egg', price: '₦500', image: boiledEgg },
    ],
  },
  /*
   * Ready-packed combos the kitchen sells as one item: a base, plantain, a
   * drink (Coke, Fanta or Capri-Sun) and the protein in its name. Prices are
   * summed from the manager's price lists; the egg packs come to 3,300 there
   * and are rounded to a flat 3,500 at the manager's instruction. The lists
   * only price jollof, so the other bases carry the jollof price until the
   * manager says otherwise. Each base lists only the packs the kitchen shot.
   */
  {
    category: 'Jollof Packs',
    items: [
      { name: 'Chicken Pack', price: '₦4,500', note: 'Jollof, plantain & drink', image: packChickenJollof },
      { name: 'Beef & Fish Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packBeefFishJollof },
      { name: 'Beef & Pomo Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packBeefPomoJollof },
      { name: '2 Beefs Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packTwoBeefsJollof },
      { name: 'Beef & Egg Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packBeefEggJollof },
      { name: 'Fish & Egg Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packFishEggJollof },
      { name: 'Pomo & Egg Pack', price: '₦3,500', note: 'Jollof, plantain & drink', image: packPomoEggJollof },
    ],
  },
  {
    category: 'Fried Rice Packs',
    items: [
      { name: 'Chicken Pack', price: '₦4,500', note: 'Fried rice, plantain & drink', image: packChickenFriedRice },
      { name: 'Beef & Fish Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packBeefFishFriedRice },
      { name: 'Beef & Pomo Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packBeefPomoFriedRice },
      { name: 'Pomo & Fish Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packPomoFishFriedRice },
      { name: '2 Beefs Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packTwoBeefsFriedRice },
      { name: 'Beef & Egg Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packBeefEggFriedRice },
      { name: 'Fish & Egg Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packFishEggFriedRice },
      { name: 'Pomo & Egg Pack', price: '₦3,500', note: 'Fried rice, plantain & drink', image: packPomoEggFriedRice },
    ],
  },
  {
    category: 'Spaghetti Packs',
    items: [
      { name: 'Chicken Pack', price: '₦4,500', note: 'Spaghetti, plantain & drink', image: packChickenSpaghetti },
      { name: 'Beef & Fish Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packBeefFishSpaghetti },
      { name: 'Beef & Pomo Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packBeefPomoSpaghetti },
      { name: 'Pomo & Fish Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packPomoFishSpaghetti },
      { name: '2 Beefs Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packTwoBeefsSpaghetti },
      { name: 'Fish & Egg Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packFishEggSpaghetti },
      { name: 'Pomo & Egg Pack', price: '₦3,500', note: 'Spaghetti, plantain & drink', image: packPomoEggSpaghetti },
    ],
  },
  {
    category: 'Jollof & Fried Rice Packs',
    items: [
      { name: 'Chicken Pack', price: '₦4,500', note: 'Jollof & fried rice, plantain & drink', image: packChickenMixed },
      { name: 'Beef & Fish Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packBeefFishMixed },
      { name: 'Beef & Pomo Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packBeefPomoMixed },
      { name: 'Pomo & Fish Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packPomoFishMixed },
      { name: '2 Beefs Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packTwoBeefsMixed },
      { name: 'Beef & Egg Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packBeefEggMixed },
      { name: 'Fish & Egg Pack', price: '₦3,500', note: 'Jollof & fried rice, plantain & drink', image: packFishEggMixed },
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
