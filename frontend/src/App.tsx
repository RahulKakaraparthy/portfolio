import React from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/Home';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  const router = createHashRouter([
    {
      path: '/',
      element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: isAuthenticated ? <Navigate to="/" /> : <Login />,
    }
  ], {
    future: {
      v7_relativeSplatPath: true
    }
  });

  return <RouterProvider router={router} />;
};

export default App;