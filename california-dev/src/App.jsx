import { ThemeContext, breakpoints } from "context/ThemeContext";
import { MainBody } from "components/Main";
import {useTheme} from "./hooks/useTheme";
import { FloatingActionButton } from "components/ui/FloatingActionButton/FloatingActionButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sandbox from "utils/Sandbox";

function App() {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <Router>
      <ThemeContext themeMode={themeMode}>
        <Routes>
          <Route exact path="/" element={<MainBody />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
        <FloatingActionButton toggleTheme={toggleTheme} />
      </ThemeContext>
    </Router>
  );
}

export default App;
