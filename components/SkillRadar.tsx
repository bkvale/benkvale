'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  value: number; // 0-100
}

interface SkillRadarProps {
  skills: Skill[];
}

export default function SkillRadar({ skills }: SkillRadarProps) {
  const centerX = 150;
  const centerY = 150;
  const radius = 100;

  // Generate polygon points for radar chart
  const getPoint = (angle: number, value: number) => {
    const rad = (angle * Math.PI) / 180;
    const distance = (radius * value) / 100;
    return {
      x: centerX + distance * Math.cos(rad),
      y: centerY + distance * Math.sin(rad),
    };
  };

  const angles = skills.map((_, i) => (i * 360) / skills.length - 90);
  const points = skills.map((skill, i) => getPoint(angles[i], skill.value));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-auto">
        {/* Grid circles */}
        {[1, 2, 3, 4, 5].map((level) => (
          <circle
            key={level}
            cx={centerX}
            cy={centerY}
            r={(radius * level) / 5}
            fill="none"
            stroke="rgba(200, 210, 234, 0.1)"
            strokeWidth="1"
          />
        ))}
        
        {/* Grid lines */}
        {angles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="rgba(200, 210, 234, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Skill area */}
        <motion.path
          d={pathData}
          fill="rgba(46, 216, 247, 0.2)"
          stroke="#2ED8F7"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Skill labels */}
        {skills.map((skill, i) => {
          const angle = angles[i];
          const rad = (angle * Math.PI) / 180;
          const labelRadius = radius + 20;
          const x = centerX + labelRadius * Math.cos(rad);
          const y = centerY + labelRadius * Math.sin(rad);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-textRetro text-xs font-medium"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {skill.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

