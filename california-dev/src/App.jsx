import { ThemeContextProvider } from 'context/ThemeContext';
import { MainBody } from 'components/Main';
import { FloatingActionButton } from 'components/ui/FloatingActionButton/FloatingActionButton';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Sandbox } from 'utils/Sandbox/Sandbox';
import { ProjectDetails } from 'pages/ProjectDetails';

// Define routes using route objects
const routes = [
  {
    path: '/',
    element: <MainBody />,
  },
  {
    path: '/sandbox',
    element: <Sandbox />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetails />,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <FloatingActionButton />
    </ThemeContextProvider>
  );
}

export default App;
