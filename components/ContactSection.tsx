'use client';

import { Mail } from 'lucide-react';
import { Section } from './layout/Section';

export default function ContactSection() {
  return (
    <Section id="contact">
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center gap-4 mb-12">
            <Mail className="w-10 h-10 text-xbox-glow" />
            <div>
              <h2 className="font-heading text-5xl uppercase italic text-white">Send Message</h2>
              <p className="font-tech text-xbox-glow text-sm">Connect with This Player</p>
            </div>
          </div>

          <div className="bg-black/60 border-2 border-xbox-green/50 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <p className="font-body text-gray-400">
                Send a friend request or message. Online status will be updated upon response.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-tech uppercase text-xbox-glow">Your Gamertag</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/30 border-2 border-white/10 rounded p-3 text-white focus:border-xbox-glow focus:outline-none transition-colors font-tech focus:shadow-lg focus:shadow-xbox-green/30" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-tech uppercase text-xbox-glow">Contact Info</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/30 border-2 border-white/10 rounded p-3 text-white focus:border-xbox-glow focus:outline-none transition-colors font-tech focus:shadow-lg focus:shadow-xbox-green/30" 
                    placeholder="email@domain.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-tech uppercase text-xbox-glow">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-black/30 border-2 border-white/10 rounded p-3 text-white focus:border-xbox-glow focus:outline-none transition-colors font-tech focus:shadow-lg focus:shadow-xbox-green/30" 
                  placeholder="Type your message here..." 
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-xbox-green border-2 border-xbox-glow text-white font-heading uppercase italic text-lg hover:bg-xbox-glow hover:shadow-lg hover:shadow-xbox-green/50 transition-all duration-300"
              >
                Send Friend Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </Section>
  );
}

