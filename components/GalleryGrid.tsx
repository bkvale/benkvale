'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface GalleryItem {
  id: string;
  image?: string;
  title: string;
  tag?: string;
  content?: ReactNode;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="group relative bg-surfaceRetro rounded-xl border border-panelHighlight overflow-hidden cursor-pointer"
        >
          {/* Image placeholder or content */}
          <div className="aspect-square bg-panelHighlight flex items-center justify-center relative overflow-hidden">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-panelHighlight to-surfaceRetro flex items-center justify-center">
                <span className="text-textMuted text-sm">Image</span>
              </div>
            )}
            
            {/* Grain overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                 style={{
                   backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.1) 3px)`,
                   backgroundSize: '2px 2px'
                 }}
            />
            
            {/* Chrome glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neonBlue/50 transition-all duration-300 group-hover:shadow-glow" />
          </div>
          
          {/* Info overlay */}
          <div className="p-4 space-y-2">
            {item.tag && (
              <span className="inline-block px-2 py-1 rounded bg-neonBlue/20 text-neonBlue text-xs uppercase tracking-wider">
                {item.tag}
              </span>
            )}
            <h3 className="text-textPrimary font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h3>
            {item.content && <div className="text-textMuted text-sm">{item.content}</div>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

