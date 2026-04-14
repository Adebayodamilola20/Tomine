import { motion } from 'framer-motion';
import Button from './Button';
import './DishCard.css';

export interface DishCardProps {
  id?: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

const DishCard = ({ image, name, description, price }: DishCardProps) => {
  return (
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
          <Button variant="outline" size="sm" className="dish-btn">Add to Order</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default DishCard;
