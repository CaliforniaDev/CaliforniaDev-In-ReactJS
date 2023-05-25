import { MainContainer } from "./styles";
import { Home } from "../Section/Home";
import { Skills } from "../Section/Skills";
import { Projects } from "../Section/Projects";
import { Technical } from "../Section/Technical";
import { Nav } from "components/Navigation/Nav";
export function MainBody() {
  return (
    <MainContainer>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Technical />
    </MainContainer>
  );
}
