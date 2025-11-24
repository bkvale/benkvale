'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import Panel from './ui/Panel';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl space-y-16">
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
            COPY GOES HERE
          </p>
        </motion.div>

        {/* Contact Panel */}
        <Panel variant="highlight" className="p-8 space-y-6">
          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              variant="neon"
              onClick={() => window.location.href = 'mailto:<!-- COPY GOES HERE -->'}
              className="w-full justify-center"
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
              onClick={() => window.open('<!-- COPY GOES HERE -->', '_blank')}
              className="w-full justify-center"
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
                placeholder="<!-- COPY GOES HERE -->"
                className="flex-1 bg-panelHighlight border border-chromeEdge/30 rounded-xl px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue/50 transition-all"
                disabled
              />
              <Button variant="secondary" className="px-8" disabled>
                Subscribe
              </Button>
            </div>
            <p className="text-textMuted text-xs">
              COPY GOES HERE
            </p>
          </motion.div>
        </Panel>
      </div>
    </section>
  );
}

