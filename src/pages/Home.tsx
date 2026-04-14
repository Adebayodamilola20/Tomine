import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Award, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import DishCard from '../components/ui/DishCard';
import './Home.css';

import img1 from '../assets/IMG_7445.jpg';
import img2 from '../assets/IMG_7446.jpg';
import img3 from '../assets/IMG_7447.jpg';
import img4 from '../assets/IMG_7448.jpg';
import img5 from '../assets/IMG_7449.jpg';
import img6 from '../assets/IMG_7450.jpg';

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6];

const MOCK_DISHES = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    name: 'Grilled Salmon Puree',
    description: 'Fresh Atlantic salmon perfectly grilled with a side of asparagus and lemon butter sauce.',
    price: '$32'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d92305?q=80&w=1000&auto=format&fit=crop',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice slow-cooked with white wine, parmesan cheese, and black truffle shavings.',
    price: '$28'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop',
    name: 'Wagyu Beef Steak',
    description: 'Premium A5 grade beef served with roasted rustic potatoes and red wine reduction.',
    price: '$85'
  }
];

const MOCK_GALLERY = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop'
];

// Testimonials removed to fix unused variable warning

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <AnimatePresence>
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Restaurant Interior"
              className="hero-image"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" } 
              }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="hero-subtitle">Meticulously Crafted</span>
            <h1 className="hero-title">Experience Taste Like Never Before.</h1>
            <p className="hero-desc">Discover a harmonious blend of traditional flavors and modern culinary artistry in the heart of the city.</p>
            <div className="hero-actions flex gap-md">
              <Link to="/menu">
                <Button variant="primary" size="lg">Explore Menu</Button>
              </Link>
              <Link to="/order">
                <Button variant="outline" size="lg" className="hero-btn-outline">Book a Table</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid grid-cols-2 gap-xl items-center">
            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="about-image"
              />
              <div className="experience-badge glass-panel">
                <span className="badge-number">15+</span>
                <span className="badge-text">Years of<br/>Excellence</span>
              </div>
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="section-subtitle">Our Story</h4>
              <h2 className="section-title">A Symphony of Fresh Ingredients and Passion</h2>
              <p className="text-secondary mt-4 mb-4">
                Since our founding, Lumina has been dedicated to reimagining the culinary landscape. We believe that a meal is more than just food—it's an experience that brings people together, evoking passion and memories.
              </p>
              <p className="text-secondary mb-4">
                Our world-renowned chefs meticulously source seasonal, local ingredients to craft dishes that look as beautiful as they taste.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-4 icon-btn">
                  Read Full Story <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes */}
      <section className="section featured-section bg-secondary">
        <div className="container">
          <div className="section-header flex justify-between items-center mb-10">
            <div>
              <h4 className="section-subtitle">Chef's Selection</h4>
              <h2 className="section-title">Featured Delights</h2>
            </div>
            <Link to="/menu" className="desktop-only text-primary flex items-center gap-sm slide-link">
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-lg">
            {MOCK_DISHES.map((dish) => (
              <DishCard key={dish.id} {...dish} />
            ))}
          </div>
          <div className="mobile-only mt-6 text-center">
            <Link to="/menu">
              <Button variant="outline">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="section why-us">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">The Lumina Difference</h4>
            <h2 className="section-title">Why Dine With Us?</h2>
          </div>
          <div className="grid grid-cols-3 gap-xl">
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-icon-wrapper"><Leaf size={32} /></div>
              <h3>Fresh Ingredients</h3>
              <p className="text-secondary">We source our produce daily from local organic farms to ensure peak flavor.</p>
            </motion.div>
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon-wrapper"><Award size={32} /></div>
              <h3>Award-Winning Chefs</h3>
              <p className="text-secondary">Our culinary team has been recognized internationally for extraordinary technique.</p>
            </motion.div>
            <motion.div 
              className="feature-card text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon-wrapper"><Clock size={32} /></div>
              <h3>Impeccable Service</h3>
              <p className="text-secondary">Experience attentive, non-intrusive service perfectly timed to your meal.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Preview */}
      <section className="section gallery-preview-section">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">Visual Feast</h4>
            <h2 className="section-title">Our Ambience & Creations</h2>
          </div>
          <div className="gallery-masonry">
            {MOCK_GALLERY.map((img, idx) => (
              <motion.div 
                key={idx} 
                className={`gallery-item item-${idx}`}
                whileHover={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={img} alt="Restaurant gallery item" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Call To Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass-panel text-center">
            <h2>Ready to Experience Lumina?</h2>
            <p className="text-secondary mt-4 mb-6">Reserve your table today for an unforgettable culinary journey.</p>
            <Link to="/order">
              <Button variant="primary" size="lg">Book Your Table Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
