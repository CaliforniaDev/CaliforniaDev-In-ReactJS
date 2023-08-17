import { ThemeContextProvider } from 'context/ThemeContext';
import { MainBody } from 'components/Main';
import { FloatingActionButton } from 'components/ui/FloatingActionButton/FloatingActionButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sandbox from 'utils/Sandbox';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Routes>
          <Route exact path="/" element={<MainBody />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
        <FloatingActionButton />
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
