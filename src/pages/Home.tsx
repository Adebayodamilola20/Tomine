import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Award, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import DishCard from '../components/ui/DishCard';
import './Home.css';

import img1 from '../assets/cto1.jpg';
import img2 from '../assets/cto2.jpg';
import img3 from '../assets/cto3.jpg';
import img4 from '../assets/cto4.jpg';
import img5 from '../assets/cto5.jpg';
import img6 from '../assets/ct.jpg';

import path1 from '../assets/path1.jpg';
import path2 from '../assets/path2.jpg';
import path3 from '../assets/path3.jpg';

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6];

const MOCK_DISHES = [
  {
    id: '1',
    image: path1,
    name: 'Grilled Salmon Puree',
    description: 'Fresh Atlantic salmon perfectly grilled with a side of asparagus and lemon butter sauce.',
    price: '₦ 24,000'
  },
  {
    id: '2',
    image: path2,
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice slow-cooked with white wine, parmesan cheese, and black truffle shavings.',
    price: '₦ 21,000'
  },
  {
    id: '3',
    image: path3,
    name: 'Wagyu Beef Steak',
    description: 'Premium A5 grade beef served with roasted rustic potatoes and red wine reduction.',
    price: '₦ 55,000'
  }
];

const MOCK_GALLERY = [img1, img2, img3, img4];

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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
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
                Since our founding, Tomine has been dedicated to reimagining the culinary landscape. We believe that a meal is more than just food—it's an experience that brings people together, evoking passion and memories.
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
            <h4 className="section-subtitle">The Tomine Difference</h4>
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
      <section className="section gallery-preview-section overflow-hidden">
        <div className="container">
          <div className="text-center mb-10">
            <h4 className="section-subtitle">Visual Feast</h4>
            <h2 className="section-title">Our Ambience & Creations</h2>
          </div>
        </div>
        
        <div className="gallery-marquee">
          <div className="gallery-track">
            {[...MOCK_GALLERY, ...MOCK_GALLERY, ...MOCK_GALLERY, ...MOCK_GALLERY].map((img, idx) => (
              <div key={idx} className="gallery-slide">
                <img src={img} alt="Restaurant gallery item" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="text-center gallery-action-btn">
            <Link to="/gallery">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Call To Action */}
      <section className="cta-section">
        <div className="cta-video-container">
          <video 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="cta-video" 
          />
        </div>
        <div className="cta-overlay"></div>
        <div className="container relative z-10">
          <div className="cta-box glass-panel text-center">
            <h2>Ready to Experience Tomine?</h2>
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
