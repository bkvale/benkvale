'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-16">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-textPrimary font-display uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Invite Player to Party
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-retroMagenta to-transparent mx-auto" />
          <p className="text-textMuted text-lg">
            Want to ship a new GTM system, automate the boring parts, or trade notes on creative work? Drop a line and let’s
            make it real.
          </p>
        </motion.div>

        {/* Contact Panel */}
        <Card className="p-8 space-y-6 border-neonBlue/30 shadow-glow">
          <CardContent className="space-y-6 p-0">
          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              onClick={() => window.location.href = 'mailto:ben@benkvale.com'}
              className="w-full uppercase tracking-wider"
              size="lg"
            >
              Send Email
            </Button>
          </motion.div>

          {/* LinkedIn Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="secondary"
              onClick={() => window.open('https://www.linkedin.com/in/benkvale/', '_blank')}
              className="w-full uppercase tracking-wider"
              size="lg"
            >
              Connect on LinkedIn
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-panelHighlight" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-surfaceRetro text-textMuted text-sm uppercase tracking-wider">
                Optional
              </span>
            </div>
          </div>

          {/* Newsletter Input (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <label className="block text-sm uppercase tracking-wider text-textMuted">
              Newsletter
            </label>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Signal boost coming soon"
                className="flex-1 bg-panelHighlight border border-chromeEdge/30 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue/50 transition-all"
                disabled
              />
              <Button variant="secondary" className="px-8 uppercase tracking-wider" disabled>
                Subscribe
              </Button>
            </div>
            <p className="text-textMuted text-xs">
              Low-volume dispatches on RevOps experiments, automation recipes, and studio drops. Leave your email when it
              unlocks.
            </p>
          </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

