import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../config/publicRoutes/publicRoutes';

const AppRouter = () => (
  <Routes>
    {publicRoutes.map((route) => (
      <Route path={route.path} element={route.element} key={route.path} />
    ))}
  </Routes>
);

export { AppRouter };
