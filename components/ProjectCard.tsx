'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags = [],
  className = ''
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="h-full flex flex-col">
        <CardContent className="space-y-4 pt-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-black text-textPrimary font-display uppercase tracking-wide flex-1" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h3>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 0.5 }}
              className="text-xl flex-shrink-0"
            >
              ⚡
            </motion.div>
          </div>
          <p className="text-textMuted text-sm leading-relaxed flex-1">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="px-3 py-1 rounded text-xs font-bold bg-panelHighlight/80 border border-neonGreen/30 text-neonGreen uppercase tracking-wider hover:border-neonGreen/80 hover:shadow-lg hover:shadow-neonGreen/20 transition-all duration-200"
                >
                  [{tag}]
                </motion.span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

