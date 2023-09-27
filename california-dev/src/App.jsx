import { ThemeContextProvider } from 'context/ThemeContext';
import { MainBody } from 'components/Main';
import { FloatingActionButton } from 'components/ui/FloatingActionButton/FloatingActionButton';
import { Routes, Route } from 'react-router-dom';
import { Sandbox } from 'utils/Sandbox/Sandbox';
import { ProjectDetails } from 'pages/ProjectDetails';

function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route exact path="/" element={<MainBody />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <FloatingActionButton />
    </ThemeContextProvider>
  );
}

export default App;
