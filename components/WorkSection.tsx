'use client';

import { Trophy, Star, Lock, CheckCircle } from 'lucide-react';
import { Section } from './layout/Section';

const achievements = [
  { 
    name: 'Marketing Mastermind', 
    description: 'Led successful multi-channel campaigns',
    gamerscore: 50,
    unlocked: true,
    progress: 100
  },
  { 
    name: 'Full Stack Developer', 
    description: 'Built end-to-end web applications',
    gamerscore: 75,
    unlocked: true,
    progress: 100
  },
  { 
    name: 'Creative Visionary', 
    description: 'Designed innovative brand experiences',
    gamerscore: 40,
    unlocked: true,
    progress: 100
  },
];

export default function WorkSection() {
  return (
    <Section id="work">
      <section className="py-24 relative bg-black/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Trophy className="w-10 h-10 text-xbox-glow" />
            <div>
              <h2 className="font-heading text-5xl uppercase italic text-white">Achievements</h2>
              <p className="font-tech text-xbox-glow text-sm">Career Unlocks & Progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.name}
                className="relative bg-black/60 border-2 border-xbox-green/50 rounded-lg p-6 hover:border-xbox-glow hover:shadow-lg hover:shadow-xbox-green/30 transition-all cursor-pointer group backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4">
                  {achievement.unlocked ? (
                    <CheckCircle className="w-6 h-6 text-xbox-glow" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-600" />
                  )}
                </div>

                <div className="mb-4">
                  <div className="w-16 h-16 mb-4 bg-xbox-green/20 border-2 border-xbox-glow rounded flex items-center justify-center group-hover:shadow-lg group-hover:shadow-xbox-green/50 transition-all">
                    <Trophy className="w-8 h-8 text-xbox-glow" />
                  </div>
                  
                  <h3 className="font-heading text-xl uppercase italic text-white mb-2 group-hover:text-xbox-glow transition-colors">
                    {achievement.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-body mb-4">
                    {achievement.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-tech text-xs text-gray-500 uppercase">Progress</span>
                    <span className="font-tech text-xs text-xbox-glow font-bold">
                      {achievement.progress}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-black/50 border border-xbox-green/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-xbox-green to-xbox-glow transition-all duration-1000"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-tech text-sm text-white font-bold">
                        {achievement.gamerscore}G
                      </span>
                    </div>
                    <span className="font-tech text-xs text-gray-500">
                      {achievement.unlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-black/60 border-2 border-xbox-green/50 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-2xl text-white mb-2">Total Gamerscore</h3>
                <p className="font-tech text-sm text-gray-400">Achievements completed in this profile</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-heading text-xbox-glow mb-1">165</div>
                <div className="font-tech text-xs text-gray-400">3 of 3 unlocked</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

