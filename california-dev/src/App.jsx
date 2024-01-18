import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from 'context/ThemeContext';
import { LoadingProvider } from 'context/LoadingContext';
import { useViewportHeight } from 'hooks/useViewportHeight';

import { IntroAnimation } from 'components/IntroAnimation';
import { AppLayout } from 'components/AppLayout';
import { ProjectDetails } from 'pages/ProjectDetails';
import { Sandbox } from 'utils/Sandbox/Sandbox';
import { TestEnvironment } from 'utils/Sandbox/TestEnvironment';
// Define routes using route objects
const routes = [
  {
    path: '/',
    element: <AppLayout />,
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
  const [introComplete, setIntroComplete] = useState(false);

  useViewportHeight();
  return (
    <LoadingProvider delay={500}>
      <ThemeContextProvider>
        {!introComplete && (
          <IntroAnimation onComplete={() => setIntroComplete(true)} />
        )}
        {introComplete && <RouterProvider router={router} />}
      </ThemeContextProvider>
    </LoadingProvider>
  );
}

export default App;
