import React from 'react';
import HeroSection from './Component/Hero';
import Header from './Component/Header';
import About from './Component/About';
import Services from './Component/Services';
import OurWork from './Component/Ourwork';
import Why from './Component/Why';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <OurWork />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;