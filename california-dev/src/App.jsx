import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from 'context/ThemeContext';
import { ScrollProvider } from 'context/ScrollContext';

import { FloatingActionButton } from 'components/ui/FloatingActionButton/FloatingActionButton';


import { MainBody } from 'components/Main';
import { ProjectDetails } from 'pages/ProjectDetails';
import { Sandbox } from 'utils/Sandbox/Sandbox';
import { TestEnvironment } from 'utils/Sandbox/TestEnvironment';
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
    path: '/test',
    element: <TestEnvironment />,
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
      <ScrollProvider>
        <RouterProvider router={router} />
        {/* <FloatingActionButton /> */}
      </ScrollProvider>
    </ThemeContextProvider>
  );
}

export default App;
