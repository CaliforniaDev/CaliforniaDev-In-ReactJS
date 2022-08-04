import { Hero } from "./Hero";
import { SkillsSection } from "./SkillsSection.js";


export const Body = () => {
  return (
    <main style={{paddingLeft: "10rem"}} id="main">
      <Hero />
      <SkillsSection />
    </main>
  );
};
