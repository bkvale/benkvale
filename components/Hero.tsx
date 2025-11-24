'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Section } from './layout/Section';

export default function Hero() {
  const identityChips = ['Marketer', 'Builder', 'Creative', 'Human'];

  return (
    <Section id="hero">
      <div className="relative min-h-[85vh] flex items-center w-full">
        <div className="mx-auto w-full max-w-5xl grid md:grid-cols-2 gap-16 items-center px-4">
        
        {/* ---------------------- */}
        {/* LEFT COLUMN (MAIN MENU) */}
        {/* ---------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* HUD LABEL */}
          <div className="tracking-[0.2em] text-xs text-textMuted uppercase opacity-70">
            Player 1 • Ben Kvale
          </div>

          {/* Identity Chips */}
          <div className="flex flex-wrap gap-3">
            {identityChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                className="px-3 py-1.5 rounded-full bg-surfaceRetro/80 border border-panelHighlight text-textRetro text-xs uppercase tracking-widest shadow-card hover:border-neonBlue hover:text-neonBlue transition-all duration-300"
              >
                {chip}
              </motion.span>
            ))}
          </div>

          {/* Primary Text */}
          <div className="space-y-4 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
              Designing Systems. Building Tools. Leveling Up GTM.
            </h1>
            <p className="text-textMuted text-base leading-relaxed max-w-prose">
              I build modern marketing engines—combining AI, RevOps, creative problem-solving, and hands-on
              execution. This is my sandbox for ideas, experiments, and everything I’m learning along the way.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative uppercase tracking-wider pl-10"
            >
              <span className="absolute left-3 text-neonBlue font-bold text-lg">[A]</span>
              Enter
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative uppercase tracking-wider pl-10"
            >
              <span className="absolute left-3 text-neonBlue font-bold text-lg">[B]</span>
              Profile
            </Button>
          </div>
        </motion.div>

        {/* ---------------------- */}
        {/* RIGHT COLUMN (PANEL)   */}
        {/* ---------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <Card className="relative aspect-square p-0 overflow-hidden shadow-card border-panelHighlight bg-surfaceRetro/70 backdrop-blur-md">
            
            {/* Background gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 via-transparent to-retroMagenta/10 pointer-events-none" />

            {/* Moving scan texture */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, transparent 30%, rgba(46,216,247,0.15) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
            />

            {/* Inner content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 space-y-6">
              {/* Animated glyph */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-28 h-28 rounded-full border-4 border-neonBlue/40 bg-neonBlue/10 flex items-center justify-center"
              >
                <span className="text-5xl">⚡</span>
              </motion.div>

              {/* Label / placeholder */}
              <div className="text-center">
                <h2 className="text-xl font-bold text-neonBlue">
                  Systems Over Chaos
                </h2>
                <p className="text-textMuted text-sm mt-1">
                  Building clarity, flow, and momentum into every GTM motion.
                </p>
              </div>
            </div>

            {/* Scanning line effect */}
            <motion.div
              animate={{ y: ['-150%', '180%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-full h-[2px] bg-gradient-to-b from-transparent via-neonBlue/50 to-transparent pointer-events-none"
            />
          </Card>
        </motion.div>
        </div>
      </div>
    </Section>
  );
}