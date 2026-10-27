import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Layers, TrendingUp, Users } from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const graphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleContactCTA = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height;
      const visible = windowHeight - rect.top;
      const percent = Math.min(Math.max(visible / total, 0), 1);
      setProgress(percent * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 80;
      const y = (window.innerHeight / 2 - e.clientY) / 80;
      if (graphRef.current) {
        graphRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const steps = ["Brand", "Reach", "Leads", "Follow‑Up", "Site Visits", "Sales"];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F3FAFF] to-[#E8F6FF] py-20 sm:py-28 lg:py-32"
    >
      {/* Animated BG Graph */}
      <div
        ref={graphRef}
        className="absolute inset-0 opacity-20 transition-transform duration-200 pointer-events-none"
      >
        <svg viewBox="0 0 1440 500" className="w-full h-full">
          <defs>
            <linearGradient id="bgGraph" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M0 420 L250 360 L450 400 L700 300 L900 340 L1150 220 L1440 160"
            fill="none"
            stroke="url(#bgGraph)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TRUST / PROCESS ================= */}
        <div className="text-center mb-16 sm:mb-24">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-5">
            <span className="text-xs sm:text-sm font-bold text-cyan-600 tracking-wider uppercase">Trust &amp; Quick Value</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Everything Your Real Estate Business Needs to Grow.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
            From brand positioning to final sales conversion — we build integrated systems that connect
            marketing, automation, and performance into one scalable growth engine.
          </p>

          {/* Timeline – scrollable on mobile */}
          <div className="relative px-4 sm:px-6 overflow-x-auto pb-4">
            <div className="min-w-[480px] sm:min-w-0">
              {/* BG Line */}
              <div className="absolute top-6 left-14 right-14 h-1 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
              {/* Progress Line */}
              <div
                className="absolute top-6 left-14 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -translate-y-1/2 transition-all duration-300 z-0"
                style={{ width: `calc(${progress}% * 0.78)` }}
              ></div>
              {/* Steps */}
              <div className="relative z-10 flex justify-between items-start">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center cursor-pointer w-16 sm:w-24"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center font-semibold text-cyan-600 text-sm shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                      {index + 1}
                    </div>
                    <span className="mt-3 text-center text-xs sm:text-sm text-gray-700 font-medium group-hover:text-cyan-600 transition">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commitment Cards */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-10">
              Our Commitment to Your Success
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8">

              {[
                {
                  border: "border-cyan-100",
                  bgLight: "bg-cyan-50",
                  textDark: "text-cyan-500",
                  Icon: Layers,
                  label: "One Integrated Ecosystem.",
                  desc: "Connecting all your marketing, CRM, and sales efforts seamlessly.",
                  delay: "0s"
                },
                {
                  border: "border-blue-100",
                  bgLight: "bg-blue-50",
                  textDark: "text-blue-500",
                  Icon: TrendingUp,
                  label: "One Growth Strategy.",
                  desc: "A unified, data-driven approach to scale your business efficiently.",
                  delay: "0.2s"
                },
                {
                  border: "border-indigo-100",
                  bgLight: "bg-indigo-50",
                  textDark: "text-indigo-500",
                  Icon: Users,
                  label: "One Dedicated Team.",
                  desc: "Focused entirely on delivering results and maximizing your ROI.",
                  delay: "0.4s"
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border ${item.border} hover:-translate-y-2 transition-transform duration-300`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bgLight} rounded-2xl flex items-center justify-center mx-auto mb-5 group relative overflow-hidden`}>
                    <item.Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.textDark} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    <div className={`absolute inset-0 bg-gradient-to-tr from-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{item.label}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-5">
              <span className="text-xs sm:text-sm font-bold text-cyan-600 tracking-wider uppercase">About Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5 sm:mb-6">
              We Don't Just Market Properties.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                We Build Real Estate Growth Systems.
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              We combine strategy, creativity, performance marketing,
              technology, and automation to help real estate businesses
              attract the right audience and convert more opportunities.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
              From creating your project's identity to generating leads and
              automating follow-ups, we connect every stage of the customer
              journey.
            </p>

            <button
              onClick={handleContactCTA}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              Start Growing Today
              <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-40 blur-3xl rounded-3xl pointer-events-none"></div>

            <div className="relative bg-white/70 backdrop-blur-xl border border-cyan-100 shadow-2xl rounded-3xl p-7 sm:p-10 hover:scale-[1.02] transition-all duration-300">

              {/* Integrated Marketing */}
              <div className="mb-7 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Integrated Marketing + Sales Alignment
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                  Every campaign, automation, and follow-up system is connected
                  to your CRM and sales pipeline — ensuring no opportunity is lost.
                </p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Growth Optimization Progress</p>
              </div>

              {/* Core Focus */}
              <div className="pt-6 sm:pt-8 border-t border-cyan-200/50">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">Our Core Focus</h4>
                <div className="space-y-4 sm:space-y-5">
                  {["Build Strong Brands.", "Generate Better Leads.", "Drive Real Growth."].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 sm:gap-4 text-gray-800 font-semibold hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="text-cyan-500" size={18} />
                      </div>
                      <span className="text-sm sm:text-base lg:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;