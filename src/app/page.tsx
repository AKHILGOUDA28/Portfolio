
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";

const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const EducationSection = dynamic(() => import("@/components/EducationSection"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
