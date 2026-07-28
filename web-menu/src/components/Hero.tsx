import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export interface Plate {
  src: string;
  alt: string;
}

interface HeroProps {
  /** One reel per arched frame — each cycles through its own photos. */
  reels: Plate[][];
  itemCount: number;
}

const HOLD = 3600;

/** An arched frame that fades from one dish to the next. */
function PlateReel({
  plates,
  y,
  delay,
  className,
}: {
  plates: Plate[];
  y: MotionValue<string>;
  delay: number;
  className: string;
}) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || plates.length < 2) return;

    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setIndex((i) => (i + 1) % plates.length);
      interval = setInterval(() => setIndex((i) => (i + 1) % plates.length), HOLD);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [plates.length, delay, reduced]);

  const plate = plates[index];
  if (!plate) return null;

  return (
    <motion.figure
      className={`hero-plate ${className}`}
      style={{ y }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="hero-plate-frame">
        <AnimatePresence initial={false}>
          <motion.img
            key={plate.src}
            src={plate.src}
            alt={plate.alt}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-plate-caption">
        <AnimatePresence mode="wait">
          <motion.figcaption
            className="hero-plate-name"
            key={plate.alt}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {plate.alt}
          </motion.figcaption>
        </AnimatePresence>
      </div>
    </motion.figure>
  );
}

export default function Hero({ reels, itemCount }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '-18%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '12%']);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-inner">
        <PlateReel
          plates={reels[0] ?? []}
          y={leftY}
          delay={1200}
          className="hero-plate-left"
        />

        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tomine · Lagos
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            The
            <em>Menu</em>
          </motion.h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {itemCount} things we make — pastries from the oven each morning, hot
            plates through the day, and something cold to go with them.
          </motion.p>

          <motion.a
            className="hero-cue"
            href="#menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>Browse the menu</span>
            <span className="hero-cue-rule" aria-hidden="true" />
          </motion.a>
        </div>

        <PlateReel
          plates={reels[1] ?? []}
          y={rightY}
          delay={3000}
          className="hero-plate-right"
        />
      </div>
    </section>
  );
}
