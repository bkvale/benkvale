'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function Hero() {
  const identityChips = ['Marketer', 'Builder', 'Creative', 'Human'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Identity Chips */}
          <div className="flex flex-wrap gap-3">
            {identityChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-surfaceRetro border border-panelHighlight text-textRetro text-sm uppercase tracking-wider hover:border-neonBlue hover:text-neonBlue transition-colors duration-300"
              >
                {chip}
              </motion.span>
            ))}
          </div>

          {/* Bio Placeholder */}
          <div className="space-y-4">
            <p className="text-textPrimary text-lg leading-relaxed">
              COPY GOES HERE
            </p>
            <p className="text-textMuted text-base leading-relaxed">
              COPY GOES HERE
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative uppercase tracking-wider"
            >
              <span className="absolute -left-8 text-neonBlue font-bold text-lg">[A]</span>
              Enter
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative uppercase tracking-wider"
            >
              <span className="absolute -left-8 text-neonBlue font-bold text-lg">[B]</span>
              Profile
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Animated Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Card className="p-8 aspect-square border-neonBlue/30 shadow-glow">
            {/* Animated background pattern */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 via-transparent to-retroMagenta/10" />
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(46, 216, 247, 0.1) 50%, transparent 70%)`,
                  backgroundSize: '200% 200%',
                }}
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="w-32 h-32 rounded-full border-4 border-neonBlue/50 bg-neonBlue/10 flex items-center justify-center"
              >
                <span className="text-6xl">⚡</span>
              </motion.div>
              
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-neonBlue font-display" style={{ fontFamily: 'var(--font-display)' }}>
                  COPY GOES HERE
                </h2>
                <p className="text-textMuted text-sm">
                  COPY GOES HERE
                </p>
              </div>

              {/* Scanning line effect */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 w-full h-1 bg-gradient-to-b from-transparent via-neonBlue/50 to-transparent"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

