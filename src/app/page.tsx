import Hero from "@/pages/Hero";
import About from "@/pages/About";
import SkillsSection from "@/pages/SkillsSection";

export default function Home() {
  return (
    <div className="mt-16">
      <Hero />
      <About />
      <SkillsSection />
    </div>
  );
}
