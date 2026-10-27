import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "./Images/logo.jpeg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A35]/90 backdrop-blur-xl border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[70px]">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
        >
          {/* SQUARE LOGO */}
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
            <img
              src={logoImg}
              alt="SP Advertising"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="leading-tight">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              SP Advertising
            </h2>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-cyan-400">
              Real Estate Growth
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium transition group ${
                isActive(item.path)
                  ? "text-cyan-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* ================= CTA ================= */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold transition hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white p-1 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#071A35]/97 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="flex flex-col px-5 py-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition py-3 px-3 rounded-lg ${
                  isActive(item.path)
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-white/90 hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition active:scale-95"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;