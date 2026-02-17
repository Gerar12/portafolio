import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <FeaturedProjects />
      <ExperienceTimeline />
    </>
  );
}
