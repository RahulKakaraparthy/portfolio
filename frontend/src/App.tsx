import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const RootLayout: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'experience', element: <Experience /> },
        { path: 'skills', element: <Skills /> },
        { path: 'projects', element: <Projects /> }
      ]
    }
  ], {
    future: {
      v7_relativeSplatPath: true
    }
  });

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;