import { MainContainer } from "./styles";
import { Home } from "../sections/Home";
import { Workflow } from "../sections/WorkFlow";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import { Contact } from "../sections/Contact";
import { Nav } from "components/Navigation/Nav";
import { NavRail } from "components/ui/Navigation/Desktop/NavRail";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "context/ThemeContext";

export function MainBody() {

  const { toggleTheme } = useTheme();
  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${768 / 16}em)`,
  });

  return (
    <MainContainer>
      {isTabletOrLarger ? <NavRail toggleTheme={toggleTheme} /> : <Nav />}
      <Home />
      <Workflow />
      <Projects />
      <Skills />
      <Contact />
    </MainContainer>
  );
}
