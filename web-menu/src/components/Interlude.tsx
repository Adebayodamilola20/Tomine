import { motion } from 'framer-motion';

interface InterludeProps {
  children: React.ReactNode;
}

export default function Interlude({ children }: InterludeProps) {
  return (
    <aside className="interlude">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.p>
    </aside>
  );
}
