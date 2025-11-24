'use client';

import { motion } from 'framer-motion';
import GalleryGrid from './GalleryGrid';

export default function StudioSection() {
  const galleryItems = [
    {
      id: '1',
      title: 'Poster studies – retro racing interfaces',
      tag: 'Design',
    },
    {
      id: '2',
      title: 'Mixed-media sketches exploring motion + typography',
      tag: 'Art',
    },
    {
      id: '3',
      title: 'Clay forms + glazing tests (pottery experiments)',
      tag: 'Studio',
    },
    {
      id: '4',
      title: 'Thumbnail drafts for a GTM playbook series',
      tag: 'Content',
    },
    {
      id: '5',
      title: 'Daily render practice – chromed-out UI parts',
      tag: '3D',
    },
    {
      id: '6',
      title: 'Photography + moodboards that inspire product thinking',
      tag: 'Inspo',
    },
  ];

  return (
    <section id="studio" className="space-y-16">
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
          Studio Library
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-retroMagenta to-transparent mx-auto" />
        <p className="text-textMuted text-lg max-w-2xl mx-auto">
          Experiments from the other side of my brain—visual studies, clay work, and moodboards that keep the GTM work grounded
          in taste and feel.
        </p>
        </motion.div>

      {/* Gallery Grid */}
      <GalleryGrid items={galleryItems} />
    </section>
  );
}

