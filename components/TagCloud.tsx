'use client';

import { motion } from 'framer-motion';

interface TagCloudProps {
  tags: string[];
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="px-3 py-1 rounded-full bg-panelHighlight border border-chromeEdge/20 text-textMuted text-xs uppercase tracking-wider hover:border-neonBlue hover:text-neonBlue transition-colors duration-300"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

