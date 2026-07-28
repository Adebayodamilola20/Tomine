import { motion } from 'framer-motion';
import type { MenuItem, MenuSection as Section } from '@tomine/data/menu';
import { numeral, slugify } from '../utils';

interface MenuSectionProps {
  section: Section;
  index: number;
  onSelect: (item: MenuItem) => void;
}

export default function MenuSection({ section, index, onSelect }: MenuSectionProps) {
  const id = slugify(section.category);

  return (
    <section className="menu-section" id={id} aria-labelledby={`${id}-title`}>
      <header className="section-head">
        <span className="section-numeral" aria-hidden="true">
          {numeral(index)}
        </span>
        <h2 className="section-title" id={`${id}-title`}>
          {section.category}
        </h2>
        <span className="section-rule" aria-hidden="true" />
        <span className="section-count">{section.items.length} items</span>
      </header>

      <ul className="dish-grid">
        {section.items.map((item, i) => (
          <motion.li
            key={item.name}
            className="dish"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: Math.min(i, 5) * 0.05,
            }}
          >
            <button
              type="button"
              className="dish-button"
              onClick={() => onSelect(item)}
              aria-label={`${item.name}, ${item.price}. View photo`}
            >
              <span className="dish-media">
                {item.image ? (
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                ) : (
                  <span className="dish-media-empty" aria-hidden="true">
                    Photo coming soon
                  </span>
                )}
              </span>

              <span className="dish-body">
                <span className="dish-line">
                  <span className="dish-name">{item.name}</span>
                  <span className="dish-leader" aria-hidden="true" />
                  <span className="dish-price">{item.price}</span>
                </span>
                {item.note && <span className="dish-note">{item.note}</span>}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
