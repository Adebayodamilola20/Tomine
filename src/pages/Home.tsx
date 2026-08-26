import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Award, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { MENU } from '../data/menu';
import './Home.css';

import building1 from '../assets/building-1.jpg';
import building2 from '../assets/building-2.jpg';

import img1 from '../assets/cto1.jpg';
import img2 from '../assets/cto2.jpg';
import img3 from '../assets/cto3.jpg';
import img4 from '../assets/cto4.jpg';

import path1 from '../assets/path1.jpg';
import path4 from '../assets/path4.jpg';
import path5 from '../assets/path5.jpg';
import path6 from '../assets/path6.jpg';

const WHATSAPP_ORDER = 'https://wa.me/2349036152411';

/**
 * The hero slideshow. Names describe what is actually in each photo — these are
 * the kitchen's own shots, so the plate on screen has to match the caption
 * beside it.
 */
const HERO_SLIDES = [
  { image: path4, name: 'Jollof Rice & Chicken' },
  { image: path6, name: 'Efo Riro & Fish' },
  { image: path5, name: 'Tomine Special Bread' },
  { image: path1, name: 'The Takeaway Pack' },
];

const SLIDE_HOLD_MS = 6000;

const BUILDING_SHOTS = [
  { image: building1, alt: 'The Tomine Bakery & Restaurant shopfront' },
  { image: building2, alt: 'Tomine Bakery & Restaurant seen from the forecourt' },
];

const BUILDING_HOLD_MS = 5000;

/**
 * The strip pulls its photos and captions straight out of the menu, so a dish
 * can never end up under the wrong name here — correct it once in menu.ts and
 * this follows. Anything without a photo yet is simply skipped.
 */
const SHOWCASE_NAMES = [
  'Jollof Rice',
  'Efo-Riro Soup',
  'Pounded Yam with Soup',
  'Croaker Fish',
  'Fried Rice',
  'Egusi Soup',
  'Semo with Egusi Soup',
  'Meat Pie',
  'Yam Pottage',
  'Assorted Meat',
  'Chicken Pie',
  /* Parfait is left out on purpose: its photo is a cut-out saved with the
     transparency checkerboard baked in, so it needs replacing first. */
  'Semo with Efo-Riro',
];

type Showcase = { name: string; image: string };

const SHOWCASE: Showcase[] = SHOWCASE_NAMES.flatMap((name) => {
  const item = MENU.flatMap((s) => s.items).find((i) => i.name === name);
  return item?.image ? [{ name: item.name, image: item.image }] : [];
});

const GALLERY_SHOTS = [
  { image: img1, label: 'The dining room' },
  { image: img2, label: 'Private seating' },
  { image: img3, label: 'The bar' },
  { image: img4, label: 'Signature plates' }
];

// Testimonials removed to fix unused variable warning

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  /* Keyed on slideIndex so picking a dot restarts the countdown — otherwise a
     click could be swept away a moment later by a timer already mid-flight. */
  useEffect(() => {
    const timer = setTimeout(
      () => setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length),
      SLIDE_HOLD_MS
    );
    return () => clearTimeout(timer);
  }, [slideIndex]);

  /* Only the next photo is fetched ahead of time — pulling all five up front
     would cost more than the whole rest of the page. */
  useEffect(() => {
    const next = new Image();
    next.src = HERO_SLIDES[(slideIndex + 1) % HERO_SLIDES.length].image;
  }, [slideIndex]);

  const slide = HERO_SLIDES[slideIndex];

  const [buildingIndex, setBuildingIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setBuildingIndex((prev) => (prev + 1) % BUILDING_SHOTS.length),
      BUILDING_HOLD_MS
    );
    return () => clearTimeout(timer);
  }, [buildingIndex]);

  return (
    <div className="home-page">
      {/* 1. Hero Section — full-bleed dish slideshow */}
      <section className="hero-section" aria-label="Featured dishes">
        <div className="hero-stage">
          {/* Crossfade: outgoing and incoming photos overlap, so the eye never
              lands on an empty frame between the two. */}
          <AnimatePresence initial={false}>
            <motion.img
              key={slideIndex}
              src={slide.image}
              alt={slide.name}
              className="hero-slide"
              fetchPriority={slideIndex === 0 ? 'high' : 'auto'}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.03 }}
              animate={{ opacity: 1, scale: reducedMotion ? 1 : 1.1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: reducedMotion ? 0.4 : 1.8, ease: 'easeInOut' },
                scale: { duration: 9, ease: 'linear' },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Darkens the photo just enough to hold white text over any dish. */}
        <div className="hero-scrim" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-dish">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -12 }}
                transition={{ duration: reducedMotion ? 0.25 : 0.6, ease: 'easeOut' }}
              >
                <span className="hero-eyebrow">Now serving</span>
                <h1 className="hero-dish-name">{slide.name}</h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-cta">
            <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="icon-btn hero-order-btn">
                Order Now <ArrowRight size={18} />
              </Button>
            </a>
            <Link to="/menu" className="hero-menu-link">
              See the full menu
            </Link>
          </div>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Choose a dish">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-label={s.name}
              aria-selected={i === slideIndex}
              className={`hero-dot ${i === slideIndex ? 'is-active' : ''}`}
              onClick={() => setSlideIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* 2. Dish strip — half-height, drifting left to right */}
      <section className="dish-strip" aria-label="Dishes from our menu">
        <div className="dish-marquee">
          {/* The list is laid down twice: the track slides exactly one copy's
              width, so the loop point lands on an identical frame. */}
          <div className="dish-track">
            {[...SHOWCASE, ...SHOWCASE].map((dish, i) => (
              <figure className="dish-cell" key={`${dish.name}-${i}`} aria-hidden={i >= SHOWCASE.length}>
                <img src={dish.image} alt={i < SHOWCASE.length ? dish.name : ''} loading="lazy" />
                <figcaption>{dish.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The restaurant — full section, photos sliding left to right */}
      <section className="branch-section" aria-label="Our restaurant">
        <AnimatePresence initial={false}>
          <motion.img
            key={buildingIndex}
            src={BUILDING_SHOTS[buildingIndex].image}
            alt={BUILDING_SHOTS[buildingIndex].alt}
            className="branch-photo"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
        </AnimatePresence>

        <div className="branch-dots">
          {BUILDING_SHOTS.map((shot, i) => (
            <button
              key={shot.alt}
              type="button"
              aria-label={shot.alt}
              aria-current={i === buildingIndex}
              className={`branch-dot ${i === buildingIndex ? 'is-active' : ''}`}
              onClick={() => setBuildingIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* 4. About Preview */}
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
                loading="lazy"
                decoding="async"
              />
              <div className="experience-badge glass-panel">
                <span className="badge-number">2017</span>
                <span className="badge-text">Baking<br/>Fresh Since</span>
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
              <h2 className="section-title">Baked Fresh Every Day Since 2017</h2>
              <p className="text-secondary mt-4 mb-4">
                What began in 2017 as a modest bakery with a single locally made oven has grown into a beloved part of our community—fresh bakery favourites in the morning and comforting home-cooked meals all day.
              </p>
              <p className="text-secondary mb-4">
                We remain family-owned, deeply hands-on, and committed to premium ingredients and heartfelt hospitality across our two vibrant branches.
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

      {/* 5. Why Choose Us */}
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
