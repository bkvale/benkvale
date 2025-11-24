'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'neon';
  className?: string;
  gamepadKey?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  gamepadKey,
  disabled = false
}: ButtonProps) {
  const baseStyles = 'relative px-6 py-3 rounded-xl font-medium transition-all duration-300 uppercase tracking-wider text-sm';
  
  const variants = {
    primary: 'bg-surfaceRetro text-textPrimary border border-panelHighlight hover:border-neonBlue hover:shadow-glow',
    secondary: 'bg-panelHighlight text-textRetro border border-chromeEdge hover:border-neonGreen',
    neon: 'bg-neonBlue/10 text-neonBlue border border-neonBlue hover:bg-neonBlue/20 hover:shadow-glow',
  };

  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : '';

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {gamepadKey && (
        <span className="absolute -left-8 text-neonBlue font-bold text-lg">
          [{gamepadKey}]
        </span>
      )}
      {children}
    </motion.button>
  );
}

