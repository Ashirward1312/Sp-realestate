import React, { useEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      if (graphRef.current) {
        graphRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E]"
    >
      {/* ===== Background Glow ===== */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/20 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>

      {/* ===== GRAPH LAYER ===== */}
      <div
        ref={graphRef}
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out pointer-events-none"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M0 650 L250 520 L450 600 L700 420 L900 480 L1150 280 L1440 160"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="12"
            opacity="0.08"
          />

          <path
            id="heroMainPath"
            d="M0 650 L250 520 L450 600 L700 420 L900 480 L1150 280 L1440 160"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
              animation: "drawLine 2.5s ease forwards",
            }}
          />

          <circle r="7" fill="#22D3EE" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#heroMainPath" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      {/* ===== CONTENT ===== */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
        style={{ animation: "fadeUp 0.8s ease forwards" }}
      >
        <p
          className="text-cyan-400 uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 font-semibold"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          REAL ESTATE GROWTH EXPERTS
        </p>

        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 sm:mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Real Estate Marketing That Drives
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Visibility, Leads &amp; Sales.
          </span>
        </h1>

        <p
          className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ animation: "fadeUp 0.8s 0.4s ease both" }}
        >
          Build your brand. Generate quality leads. Automate follow-ups.
          Scale your real estate business.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "fadeUp 0.8s 0.6s ease both" }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Let's Grow Your Project
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-600/20 hover:border-cyan-300 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PlayCircle size={18} />
            View Our Work
          </button>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;