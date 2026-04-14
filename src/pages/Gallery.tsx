import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1466978913421-bac2e5e79ed4?q=80&w=1200&auto=format&fit=crop'
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
            Glimpses into the beautiful spaces and intricately crafted dishes at Lumina.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container mt-12">
        <div className="full-gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              className="gallery-grid-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Gallery item ${idx + 1}`} loading="lazy" />
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
