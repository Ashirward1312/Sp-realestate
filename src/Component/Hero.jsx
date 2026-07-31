import React, { useEffect, useRef } from "react";

const Hero = () => {
  const graphRef = useRef(null);

  // Subtle parallax movement
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
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E]">

      {/* ===== Background Glow ===== */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      {/* ===== GRAPH LAYER ===== */}
      <div
        ref={graphRef}
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
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

          {/* BACK LAYER (soft depth) */}
          <path
            d="M0 650 L250 520 L450 600 L700 420 L900 480 L1150 280 L1440 160"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="12"
            opacity="0.08"
          />

          {/* MAIN GRAPH */}
          <path
            id="mainPath"
            d="M0 650 L250 520 L450 600 L700 420 L900 480 L1150 280 L1440 160"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#glow)"
            className="animate-draw"
          />

          {/* Moving Glow Dot */}
          <circle r="7" fill="#22D3EE" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#mainPath" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-6 animate-fadeUp">
          REAL ESTATE GROWTH EXPERTS
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeUp delay-200">
          Real Estate Marketing That Drives
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Visibility, Leads & Sales.
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-10 animate-fadeUp delay-400">
          Build your brand. Generate quality leads. Automate follow-ups.
          Scale your real estate business.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeUp delay-600">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Let’s Grow Your Project
          </button>

          <button className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-600/20 transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>

      {/* ===== Animations ===== */}
      <style jsx>{`
        @keyframes drawLine {
          from {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-draw {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawLine 2.5s ease forwards;
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero;