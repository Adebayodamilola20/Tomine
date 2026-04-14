import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DishCard, { type DishCardProps } from '../components/ui/DishCard';
import './Menu.css';

interface MenuItem extends DishCardProps {
  category: string;
}

const MENU_CATEGORIES = ['All', 'Starters', 'Main Dishes', 'Desserts', 'Drinks'];

const MENU_DATA: MenuItem[] = [
  // Starters
  { id: 'm1', category: 'Starters', image: 'https://images.unsplash.com/photo-1626804475297-41609ea264eb?q=80&w=800&auto=format&fit=crop', name: 'Bruschetta al Pomodoro', description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes.', price: '$12' },
  { id: 'm2', category: 'Starters', image: 'https://images.unsplash.com/photo-1548943487-a2e4f43b485d?q=80&w=800&auto=format&fit=crop', name: 'Crispy Calamari', description: 'Lightly breaded calamari rings served with a spicy marinara dipping sauce.', price: '$16' },
  { id: 'm3', category: 'Starters', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop', name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil.', price: '$14' },
  
  // Main Dishes
  { id: 'm4', category: 'Main Dishes', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', name: 'Grilled Salmon Puree', description: 'Fresh Atlantic salmon perfectly grilled with a side of asparagus and lemon butter.', price: '$32' },
  { id: 'm5', category: 'Main Dishes', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop', name: 'Wagyu Beef Steak', description: 'Premium A5 grade beef served with roasted rustic potatoes and red wine reduction.', price: '$85' },
  { id: 'm6', category: 'Main Dishes', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d92305?q=80&w=800&auto=format&fit=crop', name: 'Truffle Mushroom Risotto', description: 'Creamy Arborio rice slow-cooked with white wine, parmesan cheese, and truffle.', price: '$28' },
  { id: 'm7', category: 'Main Dishes', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop', name: 'Lobster Ravioli', description: 'Handmade ravioli stuffed with lobster and ricotta in a creamy vodka pink sauce.', price: '$36' },

  // Desserts
  { id: 'm8', category: 'Desserts', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop', name: 'Classic Tiramisu', description: 'Coffee-flavoured Italian dessert dusted with cocoa powder.', price: '$12' },
  { id: 'm9', category: 'Desserts', image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?q=80&w=800&auto=format&fit=crop', name: 'Molten Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla bean ice cream.', price: '$14' },
  
  // Drinks
  { id: 'm10', category: 'Drinks', image: 'https://images.unsplash.com/photo-1536935338773-84f923e107df?q=80&w=800&auto=format&fit=crop', name: 'Signature Negroni', description: 'Gin, vermouth rosso, and Campari, garnished with orange peel.', price: '$16' },
  { id: 'm11', category: 'Drinks', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', name: 'Citrus Sparkler', description: 'Refreshing mocktail with fresh lemon, lime, mint, and sparkling water.', price: '$8' },
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
