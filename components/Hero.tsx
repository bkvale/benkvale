'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Trophy, Star, Zap, User } from 'lucide-react';
import { Section } from './layout/Section';

export default function Hero() {
  return (
    <Section id="hero">
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0a0a0a_100%)] opacity-60" />
        
        <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 border-b-2 border-xbox-green/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-xbox-glow to-xbox-green flex items-center justify-center border-2 border-white/20 shadow-lg shadow-xbox-green/50">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading text-xl text-white">Ben Kvale</div>
                <div className="font-tech text-xs text-xbox-glow flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    Gamerscore: 9250
                  </span>
                  <span>●</span>
                  <span className="text-green-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="gamer-score-badge px-4 py-2 rounded font-tech text-sm text-xbox-glow">
                <Star className="w-4 h-4 inline mr-1" />
                Rep: 4.5/5
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10 pt-24">
          <div className="max-w-5xl">
            <div className="mb-12 space-y-2">
              <div className="inline-block px-4 py-2 bg-xbox-green/20 border border-xbox-glow rounded-full">
                <span className="font-tech text-sm text-xbox-glow uppercase tracking-wider">
                  ⚡ Player Profile
                </span>
              </div>
              <h1 className="font-heading text-7xl md:text-9xl uppercase italic leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(82,176,67,0.3)]">
                BEN<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-xbox-glow to-xbox-green">KVALE</span>
              </h1>
              <p className="font-tech text-gray-400 text-lg">Zone: Minneapolis, MN • Last Seen: Now</p>
            </div>

            <div className="space-y-3 max-w-2xl" style={{ animationDelay: '0.1s' }}>
              <a href="#work" className="xbox-blade group flex items-center justify-between p-5 rounded-r-lg cursor-pointer backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-xbox-green/30 border border-xbox-glow flex items-center justify-center group-hover:shadow-lg group-hover:shadow-xbox-green/50 transition-all">
                    <Trophy className="w-5 h-5 text-xbox-glow" />
                  </div>
                  <div>
                    <span className="font-heading text-2xl uppercase italic text-white block">Achievements</span>
                    <span className="font-tech text-xs text-gray-400">View career progress</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-xbox-glow opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="#lab" className="xbox-blade group flex items-center justify-between p-5 rounded-r-lg cursor-pointer backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-xbox-green/30 border border-xbox-glow flex items-center justify-center group-hover:shadow-lg group-hover:shadow-xbox-green/50 transition-all">
                    <User className="w-5 h-5 text-xbox-glow" />
                  </div>
                  <div>
                    <span className="font-heading text-2xl uppercase italic text-white block">Customize Avatar</span>
                    <span className="font-tech text-xs text-gray-400">Edit your profile</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-xbox-glow opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="#contact" className="xbox-blade group flex items-center justify-between p-5 rounded-r-lg cursor-pointer backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-xbox-green/30 border border-xbox-glow flex items-center justify-center group-hover:shadow-lg group-hover:shadow-xbox-green/50 transition-all">
                    <Zap className="w-5 h-5 text-xbox-glow" />
                  </div>
                  <div>
                    <span className="font-heading text-2xl uppercase italic text-white block">Send Message</span>
                    <span className="font-tech text-xs text-gray-400">Connect with player</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-xbox-glow opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div className="mt-12 p-4 bg-black/50 border border-xbox-green/30 rounded-lg max-w-2xl backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-xbox-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-xbox-green/50">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-tech text-sm text-xbox-glow font-bold mb-1">ACHIEVEMENT UNLOCKED • 25G</div>
                  <div className="font-body text-white font-semibold">Portfolio Explorer</div>
                  <div className="font-tech text-xs text-gray-400">Discovered the profile of Ben Kvale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}