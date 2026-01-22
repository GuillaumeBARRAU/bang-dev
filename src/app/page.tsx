import Hero from "@/components/sections/Hero";
import ServiceCards from "@/components/sections/ServiceCards";
import TrustBadges from "@/components/sections/TrustBadges";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServiceCards />
      <TrustBadges />
      <ProcessSteps />
      <ProjectsGrid />
      <FinalCTA />
    </div>
  );
}
