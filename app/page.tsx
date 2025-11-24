import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import StudioSection from '@/components/StudioSection';
import LabSection from '@/components/LabSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 md:py-16">
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
