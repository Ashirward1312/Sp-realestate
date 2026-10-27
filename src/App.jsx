import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Components
import Header from './Component/Header';
import HeroSection from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import OurWork from './Component/Ourwork';
import Why from './Component/Why';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import PortfolioPage from './Component/PortfolioPage';
import NotFound from './Component/NotFound';

// Auto scroll to top or hash target on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

// ── Views ──
function HomeView() {
  return (
    <>
      <HeroSection />
      {/* <About /> */}
      <Services />
      {/* <OurWork /> */}
      <Why />
      {/* <Contact /> */}
    </>
  );
}

function AboutView() {
  return (
    <div className="pt-16 sm:pt-20">
      <About />
      <Contact />
    </div>
  );
}

function ServicesView() {
  return (
    <div className="pt-16 sm:pt-20">
      <Services />
      <Why />
      <Contact />
    </div>
  );
}

function OurWorkView() {
  return (
    <div className="pt-16 sm:pt-20">
      <OurWork />
      <Contact />
    </div>
  );
}

function PortfolioView() {
  return <PortfolioPage />;
}

function ContactView() {
  return (
    <div className="pt-16 sm:pt-20">
      <Contact />
    </div>
  );
}

function NotFoundWrapper() {
  const navigate = useNavigate();
  return <NotFound onGoHome={() => navigate('/')} />;
}

// ── App Component ──
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App min-h-screen bg-[#071A35] flex flex-col justify-between selection:bg-cyan-500 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/our-work" element={<OurWorkView />} />
            <Route path="/portfolio" element={<PortfolioView />} />
            <Route path="/contact" element={<ContactView />} />
            {/* 404 Catch-All Route */}
            <Route path="*" element={<NotFoundWrapper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;