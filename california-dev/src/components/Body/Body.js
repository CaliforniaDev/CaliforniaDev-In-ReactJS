import { Hero } from "./Hero";
import { SkillsSection } from "./SkillsSection.js";


export const Body = () => {
  return (
    <main style={{marginLeft: "100px"}} id="main">
      <Hero />
      <SkillsSection />
    </main>
  );
};
