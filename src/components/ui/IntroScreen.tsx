import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './IntroScreen.css';

interface IntroScreenProps {
  onComplete: () => void;
}

const LETTERS = 'Tomine'.split('');

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-screen"
      exit={{
        y: '-100%',
        borderBottomLeftRadius: '50% 120px',
        borderBottomRightRadius: '50% 120px',
      }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* soft glow blooming behind the wordmark */}
      <motion.div
        className="intro-glow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ delay: 0.2, duration: 1.4, ease: 'easeOut' }}
      />

      {/* thin line that draws open, then closes once the letters are up */}
      <motion.div
        className="intro-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, times: [0, 0.3, 0.75, 1], ease: 'easeInOut' }}
      />

      <div className="intro-content">
        <div className="intro-text">
          {LETTERS.map((letter, i) => (
            <span className="intro-letter-mask" key={i}>
              <motion.span
                className="intro-letter"
                initial={{ y: '115%', rotate: 6 }}
                animate={{ y: '0%', rotate: 0 }}
                transition={{ delay: 0.35 + i * 0.09, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
          <motion.span
            className="intro-dot"
            initial={{ scale: 0, y: -120, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0.9, 1], y: [-120, 0, 0, 0], opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6, times: [0, 0.5, 0.8, 1], ease: 'easeOut' }}
          />
        </div>

        <motion.span
          className="intro-tagline"
          initial={{ opacity: 0, y: 14, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.35em' }}
          transition={{ delay: 1.6, duration: 0.7, ease: 'easeOut' }}
        >
          Fine Dining &middot; Lagos
        </motion.span>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
