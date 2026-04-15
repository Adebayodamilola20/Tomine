import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './IntroScreen.css';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  useEffect(() => {
    // The animation will take some time, we trigger completion after it finishes.
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // 4.5 seconds total for the intro screen
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="intro-content">
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tomine
          <motion.span
            className="intro-dot"
            initial={{ opacity: 0, x: "-800%", y: 0 }}
            animate={{
              x: ["-800%", "-650%", "-500%", "-350%", "-200%", "-100%", "0%"],
              y: [0, -150, 0, -100, 0, -50, 0],
              opacity: [0, 1, 1, 1, 1, 1, 1],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
              ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeOut", "easeIn"],
              x: { duration: 2.5, ease: "linear" }, // Keep horizontal momentum constant
              opacity: { duration: 0.2 } // Fade in quickly at the start
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
