import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
  accentColor?: 'neonBlue' | 'neonGreen' | 'retroMagenta';
}

export function SectionHeader({ title, subtitle, accentColor = 'neonBlue' }: SectionHeaderProps) {
  const accentColors = {
    neonBlue: 'via-neonBlue',
    neonGreen: 'via-neonGreen',
    retroMagenta: 'via-retroMagenta',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center space-y-4 mb-12"
    >
      <h2
        className="text-5xl md:text-6xl font-bold text-textPrimary font-display uppercase tracking-wider"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-transparent ${accentColors[accentColor]} to-transparent mx-auto`} />
      {subtitle && (
        <p className="text-textMuted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

