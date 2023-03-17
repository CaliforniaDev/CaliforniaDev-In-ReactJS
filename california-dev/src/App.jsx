import { ThemeContext, breakpoints } from "context/ThemeContext";
import { Body } from "components/Body";
import { Nav } from "components/Navigation/Nav";
import {useTheme} from "./hooks/useTheme";

function App() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <ThemeContext themeMode={themeMode}>
      <Nav />
      {/* theme prop being passed is temporary test */}
      <Body theme={themeMode} />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext>
  );
}

export default App;
