import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { enquiryLink } from '../config';
import WhatsAppMark from './WhatsAppMark';

/**
 * Phones don't get the header CTA, so ordering stays one thumb-reach away: the
 * button slides up once the hero is behind you and ducks away at the footer.
 */
export default function OrderFab({ hidden }: { hidden: boolean }) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight } = window;
      const nearBottom =
        scrollY + innerHeight > document.documentElement.scrollHeight - 420;
      setPast(scrollY > innerHeight * 0.7 && !nearBottom);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {past && !hidden && (
        <motion.a
          className="order-fab"
          href={enquiryLink()}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 28, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppMark size={20} />
          <span>Order</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
