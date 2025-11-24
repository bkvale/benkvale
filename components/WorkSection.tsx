'use client';

import { motion } from 'framer-motion';
import SkillRadar from './SkillRadar';
import ProjectCard from './ProjectCard';
import Panel from './ui/Panel';

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
}

function StatBar({ label, value, max = 100 }: StatBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-textRetro uppercase tracking-wider">{label}</span>
        <span className="text-neonGreen font-bold">{value}/{max}</span>
      </div>
      <div className="h-3 bg-panelHighlight rounded-full overflow-hidden border border-chromeEdge/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-neonBlue to-neonGreen"
        />
      </div>
    </div>
  );
}

export default function WorkSection() {
  const skills = [
    { name: 'Strategy', value: 85 },
    { name: 'Execution', value: 90 },
    { name: 'Analytics', value: 75 },
    { name: 'Creative', value: 80 },
    { name: 'Leadership', value: 85 },
  ];

  const stats = [
    { label: 'Campaigns Launched', value: 150 },
    { label: 'Revenue Generated', value: 95 },
    { label: 'Team Members', value: 12 },
    { label: 'Years Experience', value: 8 },
  ];

  const projects = [
    {
      title: '<!-- COPY GOES HERE -->',
      description: '<!-- COPY GOES HERE -->',
      tags: ['Tag1', 'Tag2'],
    },
    {
      title: '<!-- COPY GOES HERE -->',
      description: '<!-- COPY GOES HERE -->',
      tags: ['Tag1', 'Tag2'],
    },
    {
      title: '<!-- COPY GOES HERE -->',
      description: '<!-- COPY GOES HERE -->',
      tags: ['Tag1', 'Tag2'],
    },
  ];

  return (
    <section id="work" className="min-h-screen py-20 px-4">
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
            Career Stats
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skill Radar */}
          <Panel variant="retro" className="p-8">
            <h3 className="text-2xl font-bold text-textPrimary mb-6 font-display" style={{ fontFamily: 'var(--font-display)' }}>
              Attributes
            </h3>
            <SkillRadar skills={skills} />
          </Panel>

          {/* Stat Bars */}
          <Panel variant="retro" className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-textPrimary mb-6 font-display" style={{ fontFamily: 'var(--font-display)' }}>
              Achievements
            </h3>
            {stats.map((stat, index) => (
              <StatBar key={index} label={stat.label} value={stat.value} max={stat.value > 100 ? stat.value : 100} />
            ))}
          </Panel>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-textPrimary font-display uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Missions / Objectives
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

