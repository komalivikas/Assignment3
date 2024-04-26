// src/React/App.js

import React from 'react';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NasaApiComponent from './components/NasaApiComponent';

function App() {
  return (
    <Router>
    <div>
    <Header />
        <Routes>
          <Route path="/" element={<NasaApiComponent />} />
          <Route path="/about" element={<About />} />
         {/* // <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </div>
    </Router>
  );
}

export default App;