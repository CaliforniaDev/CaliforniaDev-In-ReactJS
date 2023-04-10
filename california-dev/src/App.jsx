import { ThemeContext, breakpoints } from "context/ThemeContext";
import { Body } from "components/Body";
import { Nav } from "components/Navigation/Nav";
import {useTheme} from "./hooks/useTheme";
import { FloatingActionButton } from "components/ui/FloatingActionButton/FloatingActionButton";

function App() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <ThemeContext themeMode={themeMode}>
      <Nav />
      <Body />
      <FloatingActionButton onClick={toggleTheme} />

    </ThemeContext>
  );
}

export default App;
