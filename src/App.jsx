import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header2, Header, Home, Partners, Reviews, About, Estimate, ContactUs, Gallery, Services, Footer, Windows, Doors } from './js';

function App() {
  console.log('App component rendered');
  return (
    <div className="app-container">
      <BrowserRouter basename="/">
        <Header2 />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="doors" element={<Doors />} />
          <Route path="windows" element={<Windows />} />
          <Route path="partners" element={<Partners />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="estimate" element={<Estimate />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
