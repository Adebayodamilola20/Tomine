import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const MENU: MenuSection[] = [
  {
    category: 'Pastries',
    items: [
      { name: 'Ring Doughnut', price: '₦500' },
      { name: 'Meat Pie', price: '₦1,000' },
      { name: 'Chicken Pie', price: '₦1,000' },
      { name: 'Beef Roll', price: '₦600' },
      { name: 'Frank Roll', price: '₦500' },
      { name: 'Chocolate Doughnut', price: '₦1,000' },
      { name: 'Jam Doughnut', price: '₦500' },
      { name: 'Milky Doughnut', price: '₦500' },
      { name: 'Egg Roll', price: '₦500' },
      { name: 'Scotch Egg', price: '₦700' },
      { name: 'Cup Cake', price: '₦500' },
    ],
  },
  {
    category: 'Meals & Proteins',
    items: [
      { name: 'Jollof Rice', price: '₦1,000' },
      { name: 'Fried Rice', price: '₦1,000' },
      { name: 'White Rice & Beans', price: '₦1,000' },
      { name: 'Eba', price: '₦1,000' },
      { name: 'Pounded Yam', price: '₦1,000' },
      { name: 'Semo', price: '₦4,500' },
      { name: 'Efo-Riro Soup', price: '₦1,000' },
      { name: 'Egusi Soup', price: '₦1,000' },
      { name: 'Panla Fish', price: '₦1,000' },
      { name: 'Croaker Fish', price: '₦3,500' },
      { name: 'Roasted Chicken', price: '₦2,500' },
      { name: '¼ Roasted Chicken', price: '₦4,500' },
      { name: 'Turkey', price: '₦4,000' },
      { name: 'Boiled Egg', price: '₦500' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Fanta', price: '₦500', note: '50CL' },
      { name: 'Coca-Cola', price: '₦500', note: '50CL' },
      { name: 'Sprite', price: '₦500', note: '50CL' },
      { name: 'Pepsi', price: '₦500', note: '50CL' },
      { name: '7-Up', price: '₦500', note: '50CL' },
      { name: '7-Up Can', price: '₦650', note: '33CL' },
      { name: 'Coca-Cola Can', price: '₦650', note: '33CL' },
      { name: 'Fanta Can', price: '₦650', note: '33CL' },
      { name: 'Eva Water', price: '₦400', note: '75CL' },
      { name: 'Aquafina Water', price: '₦300' },
      { name: 'Maltina', price: '₦600' },
      { name: 'Maltina Can', price: '₦800', note: '33CL' },
      { name: 'Malta Guinness Can', price: '₦800', note: '33CL' },
      { name: 'Parfait', price: '₦3,000' },
      { name: 'Vita Milk', price: '₦1,800' },
    ],
  },
];

const MENU_CATEGORIES = ['All', ...MENU.map((s) => s.category)];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const sections =
    activeCategory === 'All'
      ? MENU
      : MENU.filter((s) => s.category === activeCategory);

  return (
    <div className="menu-page pb-20">
      {/* Menu Header */}
      <section className="menu-hero flex items-center justify-center text-center">
        <div className="menu-hero-overlay"></div>
        <motion.div
          className="container relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Freshly baked pastries, hearty home-cooked meals, and cold drinks — made daily with love.
          </p>
        </motion.div>
      </section>

      {/* Menu Filter */}
      <section className="menu-filter-section container text-center mt-12 mb-10">
        <div className="menu-tabs">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="menu-tab-indicator"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Sections */}
      <section className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {sections.map((section) => (
              <div key={section.category} className="menu-section">
                <div className="menu-section-header">
                  <h2 className="menu-section-title">{section.category}</h2>
                  <span className="menu-section-line" />
                </div>
                <ul className="menu-list">
                  {section.items.map((item) => (
                    <li key={item.name} className="menu-list-item">
                      <span className="menu-item-name">
                        {item.name}
                        {item.note && <span className="menu-item-note">{item.note}</span>}
                      </span>
                      <span className="menu-item-dots" aria-hidden="true" />
                      <span className="menu-item-price">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Menu;
