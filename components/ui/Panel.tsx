'use client';

import { ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'retro';
}

export default function Panel({ 
  children, 
  className = '',
  variant = 'default'
}: PanelProps) {
  const baseStyles = 'relative rounded-2xl border backdrop-blur-sm';
  
  const variants = {
    default: 'bg-surface border-panelHighlight',
    highlight: 'bg-surfaceRetro border-neonBlue/30 shadow-glow',
    retro: 'bg-surfaceRetro border-chromeEdge/20',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {/* Chrome edge highlight */}
      <div className="absolute inset-0 rounded-2xl border border-chromeEdge/10 pointer-events-none" />
      {children}
    </div>
  );
}

