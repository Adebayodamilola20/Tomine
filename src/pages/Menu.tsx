import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

import { MENU, MENU_CATEGORIES } from '../data/menu';



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

                <div className="menu-grid">
                  {section.items.map((item, index) => (
                    <motion.article
                      key={item.name}
                      className="menu-card"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                    >
                      <div className="menu-card-media">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="menu-card-placeholder" aria-hidden="true">
                            <span>Photo coming soon</span>
                          </div>
                        )}
                      </div>
                      <div className="menu-card-body">
                        <h3 className="menu-card-name">
                          {item.name}
                          {item.note && <span className="menu-card-note">{item.note}</span>}
                        </h3>
                        <span className="menu-card-price">{item.price}</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Menu;
