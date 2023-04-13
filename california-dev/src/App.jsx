import { ThemeContext, breakpoints } from "context/ThemeContext";
import { MainBody } from "components/Main";
import {useTheme} from "./hooks/useTheme";
import { FloatingActionButton } from "components/ui/FloatingActionButton/FloatingActionButton";

function App() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <ThemeContext themeMode={themeMode}>
      <MainBody />
      <FloatingActionButton toggleTheme={toggleTheme} />

    </ThemeContext>
  );
}

export default App;
