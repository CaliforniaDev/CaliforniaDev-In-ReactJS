import { MainContainer } from "./styles";
import { Home } from "../sections/Home";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Technical } from "../sections/Technical";
import { Contact } from "../sections/Contact";
import { Nav } from "components/Navigation/Nav";
import { NavRail } from "components/ui/Navigation/Desktop/NavRail";
import { useMediaQuery } from "react-responsive";

export function MainBody() {
  const isTabletOrLarger = useMediaQuery({ query: `(min-width: ${768/16}em)` });
  return (
    <MainContainer>
      {isTabletOrLarger ? <NavRail /> : <Nav />}
      <Home />
      <Skills />
      <Projects />
      <Technical />
      <Contact />
    </MainContainer>
  );
}
