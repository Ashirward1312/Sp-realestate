import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "./Images/logo.jpeg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Work", id: "projects" },
    // { name: "Why Us", id: "why" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A35]/85 backdrop-blur-xl border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

        {/* ================= LOGO ================= */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={(e) => scrollToSection(e, "home")}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img
              src={logoImg}
              alt="SP Advertising"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="leading-tight">
            <h2 className="text-lg font-bold text-white tracking-tight">
              SP Advertising
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-cyan-400">
              Real Estate Growth
            </p>
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="relative text-sm font-medium text-white/80 hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* ================= CTA ================= */}
        <div className="hidden lg:block">
          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold transition hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight size={16} />
          </button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white"
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#071A35]/95 backdrop-blur-xl border-t border-white/10 shadow-xl">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-white/90 text-base font-medium hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;