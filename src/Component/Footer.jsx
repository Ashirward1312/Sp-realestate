import React from "react";
import logoImg from "./Images/logo.jpeg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020617] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div
              className="flex items-center gap-3 cursor-pointer mb-4"
              onClick={scrollToTop}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img
                  src={logoImg}
                  alt="SP Advertising"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold leading-tight">
                  SP Advertising
                </h2>
                <p className="text-[10px] text-cyan-400 uppercase tracking-widest">
                  Real Estate Growth Systems
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Helping developers & builders generate quality leads and scale sales using performance marketing & automation.
            </p>

            {/* Social Links Inline */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/spadvertisingraipur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-cyan-400 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/spadvertisingrpr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-cyan-400 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@spadvertising530"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-cyan-400 transition"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Our Work</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Performance Marketing</li>
              <li>Brand Strategy</li>
              <li>Lead Generation</li>
              <li>CRM & Automation</li>
              <li>AI Telecalling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Phone</p>
                <a
                  href="tel:+918085354646"
                  className="hover:text-cyan-400 transition"
                >
                  +91-8085354646
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
                <a
                  href="mailto:spadvertising@live.com"
                  className="hover:text-cyan-400 transition"
                >
                  spadvertising@live.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} SP Advertising. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition"
          >
            ↑ Back to top
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;