import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { MenuItem } from '@tomine/data/menu';
import { orderLink } from '../config';
import { lockScroll } from '../useSmoothScroll';
import { useIsPhone } from '../useMediaQuery';
import WhatsAppMark from './WhatsAppMark';

/** Each caption line lifts in behind the one before it. */
const LINE = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
} as const;

/** A card on the desktop, a sheet that rises off the bottom edge on a phone. */
const PANEL = {
  card: {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 12, scale: 0.99 },
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  sheet: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' },
    transition: { type: 'spring', stiffness: 320, damping: 34, mass: 0.9 },
  },
} as const;

interface LightboxProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isPhone = useIsPhone();
  const dragControls = useDragControls();

  useEffect(() => {
    if (!item) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    lockScroll(true);
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lockScroll(false);
    };
  }, [item, onClose]);

  const motionProps = isPhone ? PANEL.sheet : PANEL.card;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={`lightbox${isPhone ? ' is-sheet' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="lightbox-panel"
            data-lenis-prevent
            onClick={(event) => event.stopPropagation()}
            {...motionProps}
            // Only the grip starts a drag, so the panel still scrolls normally.
            drag={isPhone ? 'y' : false}
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 110 || info.velocity.y > 700) onClose();
            }}
          >
            {isPhone && (
              <div
                className="sheet-grip"
                onPointerDown={(event) => dragControls.start(event)}
                aria-hidden="true"
              >
                <span />
              </div>
            )}

            <button
              type="button"
              className="lightbox-close"
              onClick={onClose}
              ref={closeRef}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>

            <motion.div
              className="lightbox-media"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.image ? (
                <img className="lightbox-image" src={item.image} alt={item.name} />
              ) : (
                <div className="lightbox-image lightbox-image-empty">Photo coming soon</div>
              )}
            </motion.div>

            <motion.div
              className="lightbox-caption"
              initial="hidden"
              animate="shown"
              transition={{ staggerChildren: 0.06, delayChildren: 0.12 }}
            >
              <motion.h3 variants={LINE}>{item.name}</motion.h3>
              {item.note && (
                <motion.p className="lightbox-note" variants={LINE}>
                  {item.note}
                </motion.p>
              )}
              <motion.p className="lightbox-price" variants={LINE}>
                {item.price}
              </motion.p>

              <motion.a
                className="order-button"
                variants={LINE}
                href={orderLink(item.name, item.price, item.note)}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppMark />
                Order on WhatsApp
              </motion.a>

              <motion.p className="order-hint" variants={LINE}>
                {isPhone
                  ? 'Opens WhatsApp with your order already typed. Swipe down to close.'
                  : 'Opens WhatsApp with your order already typed.'}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
