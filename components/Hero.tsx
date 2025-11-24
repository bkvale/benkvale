'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export default function Hero() {
  const identityChips = ['Marketer', 'Builder', 'Creative', 'Human'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated scanlines background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '0% 10px'] }}
          transition={{ duration: 0.15, repeat: Infinity }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(46,216,247,0.08) 0px, rgba(46,216,247,0.08) 1px, transparent 1px, transparent 3px)',
            backgroundPosition: '0% 0%',
          }}
        />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg,
              transparent 0%,
              rgba(183,255,74,0.2) 25%,
              rgba(46,216,247,0.2) 50%,
              rgba(255,79,167,0.2) 75%,
              transparent 100%)`,
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* HUD Header */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="inline-block px-3 py-1 bg-surfaceRetro/60 border border-neonBlue/40 rounded text-xs text-neonBlue uppercase tracking-[0.3em] font-mono">
              &gt; PLAYER 1 INITIALIZED
            </div>
            <div className="text-xs text-textMuted uppercase tracking-[0.2em] opacity-60">
              Systems Engineer • GTM Architect
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-textPrimary leading-[1.1] font-display uppercase tracking-tighter">
              Level Up<br />Your GTM<br />Engine
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-neonBlue via-neonGreen to-neonBlue" />
              <span className="text-xs text-neonGreen uppercase tracking-widest font-mono">Systems Over Chaos</span>
            </div>
          </motion.div>

          {/* Identity Chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {identityChips.map((chip, index) => (
              <motion.div
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonGreen rounded opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
                <div className="relative px-4 py-2 rounded text-xs font-bold text-textPrimary bg-surfaceRetro border border-panelHighlight group-hover:border-neonBlue/80 uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-neonBlue/30">
                  {chip}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-textMuted leading-relaxed max-w-xl"
          >
            I build modern marketing engines combining AI, RevOps, and hands-on execution. This is my sandbox for systems that scale, experiments that matter, and everything in between.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={() =>
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative uppercase tracking-wider font-bold text-lg h-12 px-8 group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neonBlue via-neonGreen to-neonBlue opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ['200% 0%', '-200% 0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
              <span className="relative flex items-center gap-2">
                <span className="text-neonBlue font-bold text-xl">[▶]</span>
                Enter Game
              </span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative uppercase tracking-wider font-bold text-lg h-12 px-8 border-2 border-panelHighlight hover:border-neonGreen transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                <span className="text-neonGreen font-bold text-xl">[ⓘ]</span>
                Profile
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - CRT DISPLAY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square">
            {/* CRT Outer Bezel */}
            <div className="absolute inset-0 bg-gradient-to-b from-panelHighlight via-surface to-panelHighlight rounded-2xl shadow-2xl border-8 border-panelHighlight/50 overflow-hidden">
              {/* Screen glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/2 rounded-2xl" />

              {/* CRT Screen */}
              <div className="absolute inset-8 bg-surfaceRetro rounded overflow-hidden border-4 border-panelHighlight/80 shadow-inner">
                {/* Scanlines */}
                <motion.div
                  animate={{ backgroundPosition: ['0% 0%', '0% 10px'] }}
                  transition={{ duration: 0.15, repeat: Infinity }}
                  className="absolute inset-0 opacity-50 pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, rgba(46,216,247,0.1) 0px, rgba(46,216,247,0.1) 1px, transparent 1px, transparent 4px)',
                  }}
                />

                {/* Screen glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 via-transparent to-retroMagenta/10" />

                {/* Screen content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 space-y-8">
                  {/* Pulsing glyph */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="absolute -inset-6 bg-gradient-to-r from-neonBlue to-neonGreen rounded-full opacity-20 blur-lg" />
                    <div className="relative w-32 h-32 rounded-full border-4 border-neonBlue/60 bg-gradient-to-br from-neonBlue/20 to-transparent flex items-center justify-center">
                      <div className="text-6xl font-black text-neonBlue">⚡</div>
                    </div>
                  </motion.div>

                  {/* Status text */}
                  <div className="text-center space-y-2">
                    <motion.div
                      animate={{ opacity: [0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                      className="text-2xl font-black text-neonGreen uppercase tracking-wider font-display"
                    >
                      READY
                    </motion.div>
                    <p className="text-xs text-textMuted uppercase tracking-[0.1em] max-w-xs">
                      &gt; INITIALIZING SYSTEMS DIAGNOSTIC
                    </p>
                  </div>
                </div>

                {/* Reflection line */}
                <motion.div
                  animate={{ y: ['-150%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-[1px] bg-gradient-to-b from-neonGreen via-neonBlue to-transparent pointer-events-none"
                />
              </div>

              {/* Screen reflections */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/0 to-white/[0.08] pointer-events-none" />
            </div>

            {/* Screen glow */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(46,216,247,0.3)',
                  '0 0 60px rgba(46,216,247,0.5)',
                  '0 0 30px rgba(46,216,247,0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}