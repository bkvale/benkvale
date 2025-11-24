import React from 'react';
import { cn } from '@/lib/utils';

interface RetroPanelProps {
  children: React.ReactNode;
  title?: string;
  accent?: 'blue' | 'pink' | 'green';
  className?: string;
}

export default function RetroPanel({ children, title, accent = 'green', className }: RetroPanelProps) {
  const borderColors = {
    blue: 'border-neonBlue/30',
    pink: 'border-neonPink/30',
    green: 'border-xbox-glow/30',
  };

  const textColors = {
    blue: 'text-neonBlue',
    pink: 'text-neonPink',
    green: 'text-xbox-glow',
  };

  const accentColors = {
    blue: 'border-neonBlue',
    pink: 'border-neonPink',
    green: 'border-xbox-glow',
  };

  return (
    <div className={cn(
      "relative bg-asphalt-light/80 backdrop-blur-sm border rounded-xl overflow-hidden group transition-all duration-300 hover:border-opacity-60",
      borderColors[accent],
      className
    )}>
      <div className={cn("absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-md z-10", accentColors[accent])} />
      
      <div className={cn("absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-md z-10", accentColors[accent])} />

      {title && (
        <div className="absolute top-0 right-0 px-4 py-1 bg-asphalt border-b border-l border-white/10 rounded-bl-xl z-20">
          <span className={cn("font-tech text-xs uppercase tracking-widest font-bold", textColors[accent])}>
            {title} // SYS_READY
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 relative z-0">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
    </div>
  );
}

