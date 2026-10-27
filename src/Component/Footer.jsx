import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./Images/logo.jpeg";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#020617] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14">

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand – spans 2 cols on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 cursor-pointer mb-4"
              onClick={scrollToTop}
            >
              {/* SQUARE LOGO */}
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                <img
                  src={logoImg}
                  alt="SP Advertising"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold leading-tight">SP Advertising</h2>
                <p className="text-[9px] sm:text-[10px] text-cyan-400 uppercase tracking-widest">
                  Real Estate Growth Systems
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
              Helping developers &amp; builders generate quality leads and scale sales using performance marketing &amp; automation.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/spadvertisingraipur" },
                { label: "Instagram", href: "https://www.instagram.com/spadvertisingrpr/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all" },
                { label: "YouTube", href: "https://www.youtube.com/@spadvertising530" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-cyan-400 transition border border-white/10 px-3 py-1.5 rounded-lg hover:border-cyan-400/40"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {["Performance Marketing", "Brand Strategy", "Lead Generation", "CRM & Automation", "AI Telecalling"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Contact
            </h4>

            <div className="space-y-4 text-xs sm:text-sm text-gray-400">
              <div>
                <p className="text-[10px] text-gray-500 uppercase mb-1 tracking-wider">Phone</p>
                <a
                  href="tel:+918085354646"
                  className="hover:text-cyan-400 transition font-medium"
                >
                  +91-8085354646
                </a>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase mb-1 tracking-wider">Email</p>
                <a
                  href="mailto:spadvertising@live.com"
                  className="hover:text-cyan-400 transition font-medium break-all"
                >
                  spadvertising@live.com
                </a>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="mt-2 flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition"
                >
                  Get in Touch
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SP Advertising. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition flex items-center gap-1"
          >
            ↑ Back to top
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;