import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const graphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Scroll progress animation
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

  // Subtle parallax graph movement
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

  const steps = [
    "Brand",
    "Reach",
    "Leads",
    "Follow‑Up",
    "Site Visits",
    "Sales",
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F3FAFF] to-[#E8F6FF] py-32"
    >
      {/* ===== Animated Background Graph ===== */}
      <div
        ref={graphRef}
        className="absolute inset-0 opacity-20 transition-transform duration-200"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= TRUST / PROCESS ================= */}
        <div className="text-center mb-28">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-6">
            <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">Trust & Quick Value</span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Everything Your Real Estate Business Needs to Grow.
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            From brand positioning to final sales conversion — we build
            integrated systems that connect marketing, automation, and
            performance into one scalable growth engine.
          </p>

          {/* Timeline */}
          <div className="relative px-6">

            {/* Connecting Line (Centered) */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>

            {/* Scroll Progress Line */}
            <div
              className="absolute top-6 left-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full -translate-y-1/2 transition-all duration-300 z-0"
              style={{ width: `calc(${progress}% * 0.85)` }}
            ></div>

            {/* Steps */}
            <div className="relative z-10 flex justify-between items-start">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center cursor-pointer w-16 sm:w-24"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center font-semibold text-cyan-600 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                    {index + 1}
                  </div>
                  <span className="mt-4 text-center text-sm sm:text-base text-gray-700 font-medium group-hover:text-cyan-600 transition">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">
              Our Commitment to Your Success
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              
              <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-cyan-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">One Integrated Ecosystem.</h4>
                <p className="text-sm text-gray-500">Connecting all your marketing, CRM, and sales efforts seamlessly.</p>
              </div>

              <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">One Growth Strategy.</h4>
                <p className="text-sm text-gray-500">A unified, data-driven approach to scale your business efficiently.</p>
              </div>

              <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-indigo-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">One Dedicated Team.</h4>
                <p className="text-sm text-gray-500">Focused entirely on delivering results and maximizing your ROI.</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* ================= ABOUT CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-6">
              <span className="text-sm font-bold text-cyan-600 tracking-wider uppercase">About Us</span>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              We Don’t Just Market Properties.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                We Build Real Estate Growth Systems.
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              We combine strategy, creativity, performance marketing,
              technology, and automation to help real estate businesses
              attract the right audience and convert more opportunities.
            </p>

            <p className="text-gray-600 text-lg mb-10">
              From creating your project’s identity to generating leads and
              automating follow-ups, we connect every stage of the customer
              journey.
            </p>

          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-40 blur-3xl rounded-3xl"></div>

            <div className="relative bg-white/70 backdrop-blur-xl border border-cyan-100 shadow-2xl rounded-3xl p-10 hover:scale-[1.02] transition-all duration-300">
              
              {/* Top Section: Integrated Marketing */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Integrated Marketing + Sales Alignment
                </h3>

                <p className="text-gray-600 mb-6">
                  Every campaign, automation, and follow-up system is connected
                  to your CRM and sales pipeline — ensuring no opportunity is lost.
                </p>

                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Growth Optimization Progress
                </p>
              </div>

              {/* Bottom Section: Our Core Focus */}
              <div className="pt-8 border-t border-cyan-200/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Our Core Focus
                </h4>
                <div className="space-y-5">
                  {[
                    "Build Strong Brands.",
                    "Generate Better Leads.",
                    "Drive Real Growth.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-gray-800 font-semibold hover:translate-x-2 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-cyan-100 transition-colors">
                        <CheckCircle2 className="text-cyan-500" size={20} />
                      </div>
                      <span className="text-lg">{item}</span>
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