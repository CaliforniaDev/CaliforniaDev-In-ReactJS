import { MainContainer } from "./styles";
import { Home } from "../sections/Home";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Technical } from "../sections/Technical";
import { Contact } from "../sections/Contact";
import { Nav } from "components/Navigation/Nav";
import {NavRail} from "components/ui/Navigation/Desktop/NavRail";
export function MainBody() {
  return (
    <MainContainer>
      <Nav />
      <NavRail />
      <Home />
      <Skills />
      <Projects />
      <Technical />
      <Contact />
    </MainContainer>
  );
}
