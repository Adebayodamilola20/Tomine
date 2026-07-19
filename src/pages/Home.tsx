import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Award, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
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
import path4 from '../assets/path4.jpg';
import path5 from '../assets/path5.jpg';

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
  },
  {
    id: '4',
    image: path4,
    name: 'Lobster Ravioli',
    description: 'Handmade ravioli stuffed with lobster and ricotta in a creamy vodka pink sauce.',
    price: '₦ 28,000'
  },
  {
    id: '5',
    image: path5,
    name: 'Signature Negroni',
    description: 'Gin, vermouth rosso, and Campari, garnished with orange peel.',
    price: '₦ 12,000'
  }
];

const GALLERY_SHOTS = [
  { image: img1, label: 'The dining room' },
  { image: img2, label: 'Private seating' },
  { image: img3, label: 'The bar' },
  { image: img4, label: 'Signature plates' }
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
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="hero-badge">Lagos, Nigeria &middot; Open 7 Days a Week</span>
            <h1 className="hero-title">Experience taste like <span className="highlight-mark">never before.</span></h1>
            <p className="hero-desc">Discover a harmonious blend of traditional flavors and modern culinary artistry in the heart of the city.</p>
            <div className="hero-actions flex gap-md items-center">
              <Link to="/order">
                <Button variant="primary" size="lg" className="icon-btn">Book a Table <ArrowRight size={18} /></Button>
              </Link>
              <Link to="/menu">
                <Button variant="ghost" size="lg">See the Menu</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src={HERO_IMAGES[(currentImageIndex + 1) % HERO_IMAGES.length]}
              alt=""
              aria-hidden="true"
              className="hero-photo-behind"
            />
            <div className="hero-photo-card">
              <AnimatePresence>
                <motion.img
                  key={currentImageIndex}
                  src={HERO_IMAGES[currentImageIndex]}
                  alt="Restaurant Interior"
                  className="hero-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1.5, ease: "easeInOut" },
                    scale: { duration: 6, ease: "linear" }
                  }}
                />
              </AnimatePresence>
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
          <div className="featured-mosaic">
            {MOCK_DISHES.map((dish, i) => (
              <motion.div
                key={dish.id}
                className={`mosaic-card ${i === 0 ? 'mosaic-large' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <img src={dish.image} alt={dish.name} loading="lazy" />
                <div className="mosaic-info">
                  <h3 className="mosaic-name">{dish.name}</h3>
                  <p className="mosaic-desc">{dish.description}</p>
                  <span className="mosaic-price">{dish.price}</span>
                </div>
              </motion.div>
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
      <section className="section gallery-preview-section">
        <div className="container">
          <div className="gallery-header">
            <div>
              <h4 className="section-subtitle">Visual Feast</h4>
              <h2 className="section-title gallery-title">Our ambience & <span className="highlight-mark">creations.</span></h2>
            </div>
            <p className="gallery-header-desc text-secondary">
              Warm light, plated art and a room that hums. A glimpse of an evening at Tomine.
            </p>
          </div>

          <div className="gallery-bento">
            {GALLERY_SHOTS.map((shot, i) => (
              <motion.div
                key={shot.label}
                className={`bento-item ${i === 0 ? 'bento-large' : ''} ${i === 1 ? 'bento-wide' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <img src={shot.image} alt={shot.label} loading="lazy" />
                <span className="bento-label">{shot.label}</span>
              </motion.div>
            ))}
          </div>

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
