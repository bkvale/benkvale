'use client';

import { motion } from 'framer-motion';
import GalleryGrid from './GalleryGrid';
import { Section } from './layout/Section';
import { SectionHeader } from './layout/SectionHeader';

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
    <Section id="studio">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Studio Library"
            subtitle="Experiments from the other side of my brain—visual studies, clay work, and moodboards that keep the GTM work grounded in taste and feel."
            accentColor="retroMagenta"
          />
        </motion.div>

        <GalleryGrid items={galleryItems} />
      </div>
    </Section>
  );
}

