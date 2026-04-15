import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DishCard, { type DishCardProps } from '../components/ui/DishCard';
import './Menu.css';

import path1 from '../assets/path1.jpg';
import path2 from '../assets/path2.jpg';
import path3 from '../assets/path3.jpg';
import path4 from '../assets/path4.jpg';
import path5 from '../assets/path5.jpg';
import path6 from '../assets/path6.jpg';

interface MenuItem extends DishCardProps {
  category: string;
}

const MENU_CATEGORIES = ['All', 'Starters', 'Main Dishes', 'Desserts', 'Drinks'];

const MENU_DATA: MenuItem[] = [
  // Starters
  { id: 'm1', category: 'Starters', image: path1, name: 'Bruschetta al Pomodoro', description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes.', price: '₦ 8,500' },
  { id: 'm2', category: 'Starters', image: path2, name: 'Crispy Calamari', description: 'Lightly breaded calamari rings served with a spicy marinara dipping sauce.', price: '₦ 12,000' },
  { id: 'm3', category: 'Starters', image: path3, name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.', price: '₦ 9,500' },
  
  // Main Dishes
  { id: 'm4', category: 'Main Dishes', image: path4, name: 'Grilled Salmon Puree', description: 'Fresh Atlantic salmon perfectly grilled with a side of asparagus and lemon butter.', price: '₦ 24,000' },
  { id: 'm5', category: 'Main Dishes', image: path5, name: 'Wagyu Beef Steak', description: 'Premium A5 grade beef served with roasted rustic potatoes and red wine reduction.', price: '₦ 55,000' },
  { id: 'm6', category: 'Main Dishes', image: path6, name: 'Truffle Mushroom Risotto', description: 'Creamy Arborio rice slow-cooked with white wine, parmesan cheese, and truffle.', price: '₦ 21,000' },
  { id: 'm7', category: 'Main Dishes', image: path1, name: 'Lobster Ravioli', description: 'Handmade ravioli stuffed with lobster and ricotta in a creamy vodka pink sauce.', price: '₦ 28,000' },

  // Desserts
  { id: 'm8', category: 'Desserts', image: path2, name: 'Classic Tiramisu', description: 'Coffee-flavoured Italian dessert dusted with cocoa powder.', price: '₦ 8,500' },
  { id: 'm9', category: 'Desserts', image: path3, name: 'Molten Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla bean ice cream.', price: '₦ 10,000' },
  
  // Drinks
  { id: 'm10', category: 'Drinks', image: path4, name: 'Signature Negroni', description: 'Gin, vermouth rosso, and Campari, garnished with orange peel.', price: '₦ 12,000' },
  { id: 'm11', category: 'Drinks', image: path5, name: 'Citrus Sparkler', description: 'Refreshing mocktail with fresh lemon, lime, mint, and sparkling water.', price: '₦ 6,000' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

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
            A curated selection of extraordinary dishes prepared with love and precision.
          </p>
        </motion.div>
      </section>

      {/* Menu Filter */}
      <section className="menu-filter-section container text-center mt-12 mb-10">
        <div className="menu-tabs">
          {MENU_CATEGORIES.map(category => (
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
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="container">
        <motion.div 
          className="grid grid-cols-3 gap-lg menu-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <DishCard 
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-secondary">No items found in this category.</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Menu;
