'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export default function Card({ 
  children, 
  className = '',
  hoverGlow = true
}: CardProps) {
  return (
    <motion.div
      className={`relative bg-surfaceRetro rounded-xl border border-panelHighlight p-6 shadow-card transition-all duration-300 ${className}`}
      whileHover={hoverGlow ? { 
        borderColor: 'rgba(46, 216, 247, 0.5)',
        boxShadow: '0 0 20px rgba(46, 216, 247, 0.3)'
      } : {}}
    >
      {/* Grain overlay on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"
           style={{
             backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px)`,
             backgroundSize: '2px 2px'
           }}
      />
      {children}
    </motion.div>
  );
}

