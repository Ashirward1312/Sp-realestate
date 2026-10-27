import React, { useEffect, useRef } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = ({ onGoHome }) => {
  const canvasRef = useRef(null);

  // Floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let animationId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E]">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* Animated 404 Number */}
        <div className="relative mb-6 sm:mb-8 select-none">
          <h1
            className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #06B6D4 0%, #3B82F6 40%, #8B5CF6 70%, #06B6D4 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 4s ease infinite",
            }}
          >
            404
          </h1>
          {/* Ghost shadow behind 404 */}
          <h1
            className="absolute inset-0 text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tight text-cyan-400/10 blur-xl"
            aria-hidden="true"
          >
            404
          </h1>
        </div>

        {/* Search Icon Animation */}
        <div
          className="flex justify-center mb-6"
          style={{ animation: "floatY 3s ease-in-out infinite" }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 backdrop-blur-xl flex items-center justify-center">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto"
          style={{ animation: "fadeUp 0.8s 0.4s ease both" }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "fadeUp 0.8s 0.6s ease both" }}
        >
          <button
            onClick={onGoHome}
            className="w-full sm:w-auto group px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Home size={18} />
            Go Back Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-600/15 hover:border-cyan-300 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <ArrowLeft size={18} />
            Previous Page
          </button>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full" />
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default NotFound;
