import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, About, Estimate, Gallery, Services, Footer } from './js';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/estimate" element={<Estimate/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;