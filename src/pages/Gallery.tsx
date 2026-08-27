import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

import building1 from '../assets/building-1.jpg';
import building2 from '../assets/building-2.jpg';
import shot1 from '../assets/path1.jpg';
import shot2 from '../assets/path2.jpg';
import shot3 from '../assets/path3.jpg';
import shot4 from '../assets/path4.jpg';
import shot5 from '../assets/path5.jpg';
import shot6 from '../assets/path6.jpg';
import room1 from '../assets/cto1.jpg';
import room2 from '../assets/cto2.jpg';
import room3 from '../assets/cto3.jpg';
import room4 from '../assets/cto4.jpg';

/**
 * Tomine's own photographs. This page used to be eight Unsplash hotlinks with
 * no connection to the restaurant — and one of them had since 404'd, leaving a
 * broken tile on a page reachable straight from the navbar.
 */
const GALLERY_IMAGES = [
  { src: building1, alt: 'The Tomine Bakery & Restaurant shopfront' },
  { src: shot4, alt: 'Jollof rice with chicken and fried plantain' },
  { src: shot6, alt: 'Efo riro with fish and meat' },
  { src: shot5, alt: 'Tomine Special Bread with fried plantain' },
  { src: building2, alt: 'Tomine seen from the forecourt' },
  { src: shot1, alt: 'A takeaway pack of rice, soup and chicken' },
  { src: shot2, alt: 'Shawarma wraps with grilled chicken' },
  { src: shot3, alt: 'Celebration cakes on the counter' },
  { src: room1, alt: 'Inside the dining room' },
  { src: room2, alt: 'Seating at Tomine' },
  { src: room3, alt: 'The counter' },
  { src: room4, alt: 'Plated dishes' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="gallery-page pb-20">
      {/* Header */}
      <section className="gallery-hero flex items-center justify-center text-center">
        <div className="gallery-hero-overlay"></div>
        <motion.div 
          className="container relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Visual Feast</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Glimpses into the beautiful spaces and intricately crafted dishes at Tomine.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container mt-12">
        <div className="full-gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.src}
              className="gallery-grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-grid-overlay">
                <ZoomIn size={40} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Selected" 
              className="lightbox-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
