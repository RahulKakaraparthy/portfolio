import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/experience',
      element: <Experience />
    },
    {
      path: '/skills',
      element: <Skills />
    },
    {
      path: '/projects',
      element: <Projects />
    }
  ], {
    future: {
      v7_relativeSplatPath: true
    }
  });

  return <RouterProvider router={router} />;
};

export default App;