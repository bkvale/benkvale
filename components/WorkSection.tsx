'use client';

import { motion } from 'framer-motion';
import SkillRadar from './SkillRadar';
import ProjectCard from './ProjectCard';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Section } from './layout/Section';
import { SectionHeader } from './layout/SectionHeader';

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
    { label: 'Lifecycle Reviews', value: 42, max: 50 },
    { label: 'Automation Routines', value: 68, max: 80 },
    { label: 'HubSpot Instances', value: 14 },
    { label: 'Years in GTM', value: 8 },
  ];

  const projects = [
    {
      title: 'GTM Copilot (Glean + HubSpot)',
      description:
        'Built an AI workspace that surfaces account intel and campaign context directly in HubSpot, shortening prep time and keeping reps in flow.',
      tags: ['AI Assist', 'HubSpot', 'Workflow'],
    },
    {
      title: 'Lifecycle OS + RevOps Governance',
      description:
        'Rebuilt lifecycle, MQL, and routing logic with guardrails, QA automation, and dashboards so marketing, sales, and CS stay in sync.',
      tags: ['RevOps', 'Lifecycle', 'QA'],
    },
    {
      title: 'Partner Signal Engine',
      description:
        'Connected Crossbeam, ZoomInfo, and intent data to trigger partner-assisted plays and route the right intros at the right time.',
      tags: ['Integrations', 'Data Signals', 'ABM'],
    },
  ];

  return (
    <Section id="work">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Career Stats"
            subtitle="GTM engineer with a focus on clean data, thoughtful automation, and the creative storytelling that gets teams to adopt the systems they depend on."
            accentColor="neonBlue"
          />
        </motion.div>

        <div className="space-y-16">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Skill Radar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-textPrimary font-display" style={{ fontFamily: 'var(--font-display)' }}>
              Attributes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SkillRadar skills={skills} />
          </CardContent>
        </Card>

        {/* Stat Bars */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-textPrimary font-display" style={{ fontFamily: 'var(--font-display)' }}>
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {stats.map((stat, index) => (
              <StatBar
                key={index}
                label={stat.label}
                value={stat.value}
                max={stat.max ?? 100}
              />
            ))}
          </CardContent>
        </Card>
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
      </div>
    </Section>
  );
}

