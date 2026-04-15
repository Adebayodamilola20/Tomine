import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';
import './DishCard.css';

import path1 from '../../assets/path1.jpg';
import path2 from '../../assets/path2.jpg';
import path3 from '../../assets/path3.jpg';
import path4 from '../../assets/path4.jpg';
import path5 from '../../assets/path5.jpg';

const AVAILABLE_FOODS = [path1, path2, path3, path4, path5];

export interface DishCardProps {
  id?: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

const DishCard = ({ image, name, description, price }: DishCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
      className="dish-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="dish-image-wrapper">
        <img src={image} alt={name} className="dish-image" loading="lazy" />
        <div className="dish-price">{price}</div>
      </div>
      <div className="dish-content">
        <h4 className="dish-name">{name}</h4>
        <p className="dish-desc text-secondary">{description}</p>
        <div className="dish-action">
          <Button variant="outline" size="sm" className="dish-btn" onClick={() => setIsModalOpen(true)}>Details</Button>
        </div>
      </div>
    </motion.div>

    <AnimatePresence>
      {isModalOpen && (
        <div className="dish-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <motion.div 
            className="dish-modal-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="dish-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="dish-modal-grid">
              <div className="dish-modal-image-wrapper">
                <img src={image} alt={name} className="dish-modal-image" />
              </div>
              <div className="dish-modal-body flex-col justify-center">
                <h3 className="text-3xl font-heading mb-4">{name}</h3>
                <div className="text-primary text-2xl font-bold mb-6">{price}</div>
                <p className="text-secondary text-lg leading-relaxed mb-8">{description}</p>
                <p className="text-secondary opacity-80 mb-8 max-w-md">Our celebrated {name} is meticulously prepared by our world class chefs using only the finest seasonal ingredients. Every bite is designed to be an extraordinary culinary journey.</p>
                <div className="flex gap-md">
                  <Button variant="primary">Reserve Table</Button>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>Close</Button>
                </div>

                <div className="dish-available-foods">
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-6">Available Food</h4>
                  <div className="dish-mini-marquee">
                    <div className="dish-mini-track">
                      {[...AVAILABLE_FOODS, ...AVAILABLE_FOODS, ...AVAILABLE_FOODS].map((img, idx) => (
                        <div key={idx} className="dish-mini-item">
                          <img src={img} alt="Available food" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}

export default DishCard;
