import { MainContainer } from "./styles";
import { Home } from "../sections/Home";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Technical } from "../sections/Technical";
import { Contact } from "../sections/Contact";
import { Nav } from "components/Navigation/Nav";
export function MainBody() {
  return (
    <MainContainer>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Technical />
      <Contact />
    </MainContainer>
  );
}
