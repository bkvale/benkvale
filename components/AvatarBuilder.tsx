'use client';

import { motion } from 'framer-motion';
import Panel from './ui/Panel';

interface AvatarBuilderProps {
  builderClass: string;
  styleVibe: string;
  characterHeight: number;
  hairColor: string;
  stats?: {
    label: string;
    value: number;
  }[];
}

export default function AvatarBuilder({
  builderClass,
  styleVibe,
  characterHeight,
  hairColor,
  stats = [],
}: AvatarBuilderProps) {
  return (
    <Panel variant="highlight" className="p-6 space-y-6">
      {/* Avatar Preview */}
      <div className="relative aspect-square bg-panelHighlight rounded-xl border-2 border-chromeEdge/30 flex items-center justify-center overflow-hidden">
        {/* Placeholder avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neonBlue/20 to-retroMagenta/20 border-2 border-neonBlue/50 flex items-center justify-center">
          <span className="text-4xl">👤</span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl border border-neonBlue/20 shadow-glow" />
      </div>

      {/* Class Display */}
      <div className="text-center space-y-2">
        <div className="text-xs uppercase tracking-widest text-textMuted">Class</div>
        <div className="text-2xl font-bold text-neonBlue font-display" style={{ fontFamily: 'var(--font-display)' }}>
          {builderClass}
        </div>
      </div>

      {/* Style Vibe */}
      <div className="text-center space-y-2">
        <div className="text-xs uppercase tracking-widest text-textMuted">Style</div>
        <div className="text-lg text-textRetro">{styleVibe}</div>
      </div>

      {/* Stats */}
      {stats.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-panelHighlight">
          <div className="text-xs uppercase tracking-widest text-textMuted text-center mb-4">Stats</div>
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-textRetro">{stat.label}</span>
                <span className="text-neonGreen">{stat.value}%</span>
              </div>
              <div className="h-2 bg-panelHighlight rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-neonBlue to-neonGreen"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Height & Color Info */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-panelHighlight text-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-textMuted mb-1">Height</div>
          <div className="text-textRetro">{characterHeight}′</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-textMuted mb-1">Hair</div>
          <div className="flex items-center justify-center gap-2">
            <div 
              className="w-4 h-4 rounded-full border border-chromeEdge/30"
              style={{ backgroundColor: hairColor }}
            />
            <span className="text-textRetro text-sm">{hairColor}</span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

