'use client';

import { motion } from 'framer-motion';
import Card from './ui/Card';

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
      <Card hoverGlow>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-textPrimary font-display" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h3>
          <p className="text-textMuted text-sm leading-relaxed">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded bg-panelHighlight text-neonGreen text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

