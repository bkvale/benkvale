import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import LabSection from '@/components/LabSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Hero />
      <WorkSection />
      <StudioSection />
      <LabSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
