import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Brands from './components/Brands/Brands';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='tarot__primary_bg w-full max-w-full min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <Brands />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

