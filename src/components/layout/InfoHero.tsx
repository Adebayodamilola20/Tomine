import { motion } from 'framer-motion';

interface InfoHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  photo?: string;
}

/**
 * The banner every category page shares. Kept in one place so the pages behind
 * the navbar dropdowns read as one family rather than five separate designs.
 */
const InfoHero = ({ eyebrow, title, lede, photo }: InfoHeroProps) => (
  <section className="info-hero">
    {photo && <img className="info-hero-photo" src={photo} alt="" aria-hidden="true" />}
    <div className="info-hero-scrim" aria-hidden="true" />
    <motion.div
      className="container info-hero-inner"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <span className="info-eyebrow">{eyebrow}</span>
      <h1 className="info-title">{title}</h1>
      {lede && <p className="info-lede">{lede}</p>}
    </motion.div>
  </section>
);

export default InfoHero;
