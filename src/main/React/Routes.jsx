// src/React/Routes.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NasaApiComponent from './Component/NasaApiComponent';
import NasaNewPage from './Component/NasaNewPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NasaApiComponent />} />
        <Route path="/new-page" element={<NasaNewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
