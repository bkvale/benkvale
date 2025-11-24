'use client';

import { useState } from 'react';
import { RefreshCw, User } from 'lucide-react';
import { Section } from './layout/Section';

export default function LabSection() {
  const [builderClass, setBuilderClass] = useState('Architect');
  const [chaosLevel, setChaosLevel] = useState(20);


  return (
    <Section id="lab">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <User className="w-10 h-10 text-xbox-glow" />
            <div>
              <h2 className="font-heading text-5xl uppercase italic text-white">Avatar Customization</h2>
              <p className="font-tech text-xbox-glow text-sm">Personalize Your Profile</p>
            </div>
          </div>

          <div className="bg-black/60 border-2 border-xbox-green/50 rounded-lg p-8 max-w-5xl mx-auto backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                
                <div>
                  <label className="block font-tech text-xbox-glow text-sm uppercase tracking-widest mb-4">Select Class</label>
                  <div className="flex flex-col gap-2">
                    {['Architect', 'Growth Hacker', 'Designer'].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => setBuilderClass(cls)}
                        className={`text-left px-4 py-3 border-2 rounded font-heading uppercase italic text-lg transition-all ${
                          builderClass === cls 
                            ? 'bg-xbox-green text-white border-xbox-glow shadow-lg shadow-xbox-green/50' 
                            : 'bg-transparent border-white/10 hover:border-xbox-green/50 text-gray-400'
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 font-tech text-xs uppercase">
                    <span>Creativity / Chaos</span>
                    <span>{chaosLevel}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={chaosLevel}
                    onChange={(e) => setChaosLevel(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-xbox-green"
                  />
                </div>

              </div>

              <div className="relative bg-black/40 border-2 border-xbox-green/50 rounded p-8 flex flex-col justify-center items-center min-h-[300px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(82,176,67,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(82,176,67,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 border-2 border-xbox-glow rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(82,176,67,0.5)]">
                    <RefreshCw className="w-10 h-10 text-xbox-glow animate-spin-slow" />
                  </div>
                  
                  <h3 className="font-heading text-3xl text-white uppercase italic mb-2">
                    {builderClass}
                  </h3>
                  <p className="font-tech text-gray-400 text-sm max-w-xs mx-auto">
                    {builderClass === 'Architect' && "Focuses on scalable structures and clean code."}
                    {builderClass === 'Growth Hacker' && "Optimizes conversion and viral loops."}
                    {builderClass === 'Designer' && "Prioritizes aesthetics and user feel."}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-[10px] font-tech text-xbox-glow/60">STR: {100 - chaosLevel}</div>
                  <div className="text-[10px] font-tech text-xbox-glow/60">AGI: {chaosLevel}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

