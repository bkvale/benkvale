'use client';

import { motion } from 'framer-motion';
import GalleryGrid from './GalleryGrid';

export default function StudioSection() {
  const galleryItems = [
    {
      id: '1',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Media',
    },
    {
      id: '2',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Design',
    },
    {
      id: '3',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Content',
    },
    {
      id: '4',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Media',
    },
    {
      id: '5',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Design',
    },
    {
      id: '6',
      title: '<!-- COPY GOES HERE -->',
      tag: 'Content',
    },
  ];

  return (
    <section id="studio" className="min-h-screen py-20 px-4">
      <div className="container mx-auto space-y-16">
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
            Media Library
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-retroMagenta to-transparent mx-auto" />
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            COPY GOES HERE
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <GalleryGrid items={galleryItems} />
      </div>
    </section>
  );
}

