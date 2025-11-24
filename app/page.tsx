import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import LabSection from '@/components/LabSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  return (
    <main className="relative z-10 flex flex-col gap-12">
      <Hero />
      <WorkSection />
      <StudioSection />
      <LabSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="font-tech text-xs text-gray-600 uppercase tracking-[0.3em]">
          © 2024 Ben Kvale // System Status: Optimal
        </p>
      </footer>
    </main>
  );
}
