import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import InfoHero from '../components/layout/InfoHero';
import { WHATSAPP_ORDER } from '../data/contact';
import { BRANCHES } from '../data/locations';
import faqPhoto from '../assets/path5.jpg';
import './InfoPages.css';

/**
 * Only questions we can answer truthfully from what the business has already
 * confirmed. Anything needing the manager's word — delivery radius, exact
 * opening hours, catering minimums — is deliberately not guessed at here.
 */
const FAQS: { q: string; a: string }[] = [
  {
    q: 'Where are you located?',
    a: `We have two branches in Lagos: ${BRANCHES.map((b) => `${b.name} — ${b.address}`).join('; and ')}.`,
  },
  {
    q: 'How do I place an order?',
    a: 'The quickest way is WhatsApp. Message us with what you want and which branch you are ordering from, and we will confirm it with you. You can also call the branch directly, or order at the counter.',
  },
  {
    q: 'Can I see prices before I order?',
    a: 'Yes. Every item on our menu is listed with its price, so you know what you are paying before you message us.',
  },
  {
    q: 'Do you cater for events?',
    a: 'We do — both corporate catering for offices and outdoor catering for weddings, birthdays, naming ceremonies and similar celebrations. Tell us the date and headcount and we will quote you.',
  },
  {
    q: 'Can I book a table?',
    a: 'Yes. You can reserve a table through the site, or message us on WhatsApp and we will hold one for you.',
  },
  {
    q: 'Can I hire the space for a private event?',
    a: 'Both branches can set aside space for private gatherings, meetings and shoots. The rooms are different sizes, so message us with your date and headcount and we will tell you which branch fits.',
  },
  {
    q: 'Are you a bakery or a restaurant?',
    a: 'Both. Tomine has been baking since 2017 — bread, pies, doughnuts and pastries in the morning — alongside a full kitchen serving rice, swallow, soups and proteins all day.',
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="info-page">
      <InfoHero
        eyebrow="Who We Are"
        title="Frequently Asked Questions"
        lede="The things people ask us most. If yours is not here, just message us."
        photo={faqPhoto}
      />

      <div className="container info-body">
        {FAQS.map((item, i) => (
          <div className="faq-item" key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {item.q}
              <ChevronDown size={20} className={open === i ? 'is-open' : ''} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="info-cta">
          <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">Ask us on WhatsApp</Button>
          </a>
          <Link to="/outlet-locator">
            <Button variant="outline" size="lg">Find a branch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
