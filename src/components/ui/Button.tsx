import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import './Button.css';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "ref"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`;
  
  return (
    <motion.button 
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
