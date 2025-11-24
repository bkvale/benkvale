import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import LabSection from '@/components/LabSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-textPrimary">
      <div className="flex flex-col gap-16 py-12 md:py-20">
        <Hero />
        <WorkSection />
        <StudioSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
