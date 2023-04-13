import { MainContainer } from "./styles";
import { Home } from "../Section/Home";
import { Skills } from "../Section/Skills";
import { Nav } from "components/Navigation/Nav";
export function MainBody() {
  return (
    <MainContainer>
      <Nav />
      <Home />
      <Skills />
    </MainContainer>
  );
}
