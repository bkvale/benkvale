'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Section } from './layout/Section';
import { SectionHeader } from './layout/SectionHeader';

export default function AboutSection() {
  const currentlyPlaying = [
    'Building QA and observability into HubSpot lifecycle + routing',
    'Prototyping AI copilots that surface the right GTM context on demand',
    'Weekends: clay studio, sketching interfaces, long walks with playlists',
  ];

  const attributes = [
    { label: 'Role', value: 'Marketer • Builder • Creative • Human' },
    { label: 'Focus', value: 'RevOps, Lifecycle, AI tooling, Integrated GTM' },
    { label: 'Stack', value: 'HubSpot, Glean, Crossbeam, ZoomInfo, Figma' },
  ];

  return (
    <Section id="about">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Player Profile"
            accentColor="neonBlue"
          />
        </motion.div>

        <div className="space-y-16">

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-textPrimary font-display uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  Bio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-textMuted leading-relaxed">
                  <p>
                    I’m Ben Kvale—a marketer and builder who thrives where systems, storytelling, and execution overlap. My
                    career has stretched from lifecycle programs and RevOps governance to AI-powered tooling that keeps teams
                    aligned.
                  </p>
                  <p>
                    I like making the complex usable: tighter handoffs, clearer dashboards, and creative experiments that make
                    go-to-market moves feel intuitive. I’m serious about the work but keep a playful, human edge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Currently Playing / Building */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-textPrimary font-display uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  Currently Playing / Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentlyPlaying.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-textRetro">
                      <span className="w-2 h-2 rounded-full bg-neonGreen" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Stats / Attributes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-textPrimary font-display uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                  Stats / Attributes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attributes.map((attr, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-panelHighlight last:border-0">
                      <span className="text-textMuted uppercase tracking-wider text-sm">{attr.label}</span>
                      <span className="text-neonBlue font-bold">{attr.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Portrait/Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 aspect-square flex items-center justify-center relative overflow-hidden border-neonBlue/30 shadow-glow">
              {/* Retro-tech framing */}
              <div className="absolute inset-0 border-4 border-chromeEdge/30 rounded-2xl" />
              <div className="absolute inset-4 border-2 border-neonBlue/20 rounded-xl" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neonBlue/50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neonBlue/50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neonBlue/50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neonBlue/50 rounded-br-2xl" />

              {/* Placeholder content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-neonBlue/20 to-retroMagenta/20 border-4 border-neonBlue/50 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <p className="text-textMuted text-sm uppercase tracking-wider">
                  Player 1: Ben Kvale — calibrated for clarity, creativity, and momentum
                </p>
              </div>

              {/* Scanning effect */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 w-full h-1 bg-gradient-to-b from-transparent via-neonBlue/30 to-transparent"
              />
            </Card>
          </motion.div>
        </div>
        </div>
      </div>
    </Section>
  );
}

