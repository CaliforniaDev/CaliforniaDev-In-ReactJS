import { Hero } from "./Hero";
import { SkillsSection } from "./SkillsSection";
import { Projects } from "./Projects";


export const Body = () => {
  return (
    <main style={{paddingLeft: "10rem"}} id="main">
      <Hero />
      <SkillsSection />
      <Projects />
    </main>
  );
};
