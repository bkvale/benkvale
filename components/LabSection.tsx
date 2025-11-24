'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import AvatarBuilder from './AvatarBuilder';
import { Section } from './layout/Section';
import { SectionHeader } from './layout/SectionHeader';

type BuilderClass = 'RevOps Pilot' | 'Automation Engineer' | 'AI Tinkerer' | 'Creative Strategist';
type StyleVibe = 'Control Panel' | 'Skate Park' | 'Retro Future' | 'Studio Mode';

const builderClasses: BuilderClass[] = ['RevOps Pilot', 'Automation Engineer', 'AI Tinkerer', 'Creative Strategist'];
const styleVibes: StyleVibe[] = ['Control Panel', 'Skate Park', 'Retro Future', 'Studio Mode'];
const hairColors = ['#0D1B2A', '#8B4513', '#FFD700', '#FF69B4']; // Navy, Brown, Blonde, Pink

export default function LabSection() {
  const [builderClass, setBuilderClass] = useState<BuilderClass>('RevOps Pilot');
  const [styleVibe, setStyleVibe] = useState<StyleVibe>('Control Panel');
  const [characterHeight, setCharacterHeight] = useState(5.8);
  const [hairColor, setHairColor] = useState('#0D1B2A');

  const randomize = () => {
    setBuilderClass(builderClasses[Math.floor(Math.random() * builderClasses.length)]);
    setStyleVibe(styleVibes[Math.floor(Math.random() * styleVibes.length)]);
    setCharacterHeight(Number((Math.random() * 2 + 5).toFixed(1)));
    setHairColor(hairColors[Math.floor(Math.random() * hairColors.length)]);
  };

  const reset = () => {
    setBuilderClass('RevOps Pilot');
    setStyleVibe('Control Panel');
    setCharacterHeight(5.8);
    setHairColor('#0D1B2A');
  };

  const stats = [
    { label: 'System Design', value: 88 },
    { label: 'Automation', value: 92 },
    { label: 'Storytelling', value: 84 },
    { label: 'Experiment Speed', value: 90 },
  ];

  return (
    <Section id="lab">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Builder Lab"
            subtitle="Like a Skate 3 customizer for GTM builders. Tune the avatar, swap styles, and preview the mix of RevOps, AI, and creative instincts that go into my experiments."
            accentColor="neonGreen"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Panel - Controls */}
        <Card className="border-panelHighlight bg-surfaceRetro/70 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-textPrimary font-display uppercase tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
              Customize Loadout
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-textMuted text-sm leading-relaxed">
              Adjust the knobs to match the build you need—ops-heavy, automation-first, or design-forward. Then send it to the
              arena.
            </p>

            {/* Builder Class Dropdown */}
            <div className="space-y-3">
              <label className="text-sm uppercase tracking-wider text-textMuted">Class</label>
              <select
                value={builderClass}
                onChange={(e) => setBuilderClass(e.target.value as BuilderClass)}
                className="w-full bg-panelHighlight border border-chromeEdge/30 rounded-xl px-4 py-3 text-textPrimary focus:border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue/50 transition-all"
              >
                {builderClasses.map((cls) => (
                  <option key={cls} value={cls} className="bg-surfaceRetro">
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Vibe Segmented Selector */}
            <div className="space-y-3">
              <label className="text-sm uppercase tracking-wider text-textMuted">Style Vibe</label>
              <div className="grid grid-cols-2 gap-2">
                {styleVibes.map((vibe) => (
                  <Button
                    key={vibe}
                    onClick={() => setStyleVibe(vibe)}
                    variant={styleVibe === vibe ? "default" : "outline"}
                    size="sm"
                    className={`uppercase tracking-wider ${
                      styleVibe === vibe
                        ? 'bg-neonBlue/20 border-neonBlue text-neonBlue'
                        : ''
                    }`}
                  >
                    {vibe}
                  </Button>
                ))}
              </div>
            </div>

            {/* Height Slider */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm uppercase tracking-wider text-textMuted">Height</label>
                <span className="text-neonGreen font-bold">{characterHeight}′</span>
              </div>
              <input
                type="range"
                min="5"
                max="7"
                step="0.1"
                value={characterHeight}
                onChange={(e) => setCharacterHeight(Number(e.target.value))}
                className="w-full h-2 bg-panelHighlight rounded-lg appearance-none cursor-pointer accent-neonBlue"
                style={{
                  background: `linear-gradient(to right, #2ED8F7 0%, #2ED8F7 ${((characterHeight - 5) / 2) * 100}%, #2A2D36 ${((characterHeight - 5) / 2) * 100}%, #2A2D36 100%)`
                }}
              />
            </div>

            {/* Hair Color Selector */}
            <div className="space-y-3">
              <label className="text-sm uppercase tracking-wider text-textMuted">Hair Color</label>
              <div className="flex gap-3">
                {hairColors.map((color) => (
                  <Button
                    key={color}
                    onClick={() => setHairColor(color)}
                    variant="outline"
                    size="icon"
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      hairColor === color
                        ? 'border-neonBlue scale-110 shadow-glow'
                        : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button onClick={randomize} className="flex-1 uppercase tracking-wider">
                Randomize
              </Button>
              <Button variant="secondary" onClick={reset} className="flex-1 uppercase tracking-wider">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Panel - Avatar Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AvatarBuilder
            builderClass={builderClass}
            styleVibe={styleVibe}
            characterHeight={characterHeight}
            hairColor={hairColor}
            stats={stats}
          />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

