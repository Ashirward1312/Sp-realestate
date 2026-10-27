import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ApproachAndWhy = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleContactCTA = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "Discover", desc: "Understand your project, market, audience & goals." },
    { title: "Strategize", desc: "Create the right positioning, funnel & roadmap." },
    { title: "Create", desc: "Develop branding, content, creatives & campaigns." },
    { title: "Generate", desc: "Drive targeted traffic and quality enquiries." },
    { title: "Nurture", desc: "Use CRM, WhatsApp & AI-powered follow-ups." },
    { title: "Optimize", desc: "Track performance and scale what works." },
  ];

  const why = [
    { title: "End-to-End Execution", desc: "Everything from branding to conversion under one roof." },
    { title: "Real Estate Focused", desc: "Strategies built around the real estate journey." },
    { title: "Performance Driven", desc: "We focus on measurable business results." },
    { title: "Technology Powered", desc: "CRM & AI tools that make your team faster." },
    { title: "Data-Driven Decisions", desc: "Every campaign is analyzed & optimized." },
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-white to-[#F8FAFC] py-20 sm:py-28 lg:py-36 text-slate-800"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0891b2 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= OUR APPROACH ================= */}
        <div className="text-center mb-14 sm:mb-28">
          <span className="px-4 sm:px-6 py-2 text-xs font-semibold tracking-widest uppercase text-cyan-800 bg-cyan-100/80 border border-cyan-200/80 rounded-full shadow-sm">
            Our Approach
          </span>

          <h2 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            From Strategy to Sales —
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              We Connect the Dots.
            </span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">

          {/* Vertical Line – hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500 opacity-30" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative mb-8 sm:mb-16 lg:mb-20 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot – only on desktop */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500 shadow-md shadow-cyan-400/50 top-8" />

              {/* Card */}
              <div
                className={`w-full md:w-[45%] bg-white/95 backdrop-blur-md border border-slate-200/90 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/70 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-cyan-600 font-bold text-sm mb-2 sm:mb-3">
                  {String(i + 1).padStart(2, "0")} —
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after Approach */}
        <div className="text-center mt-12 sm:mt-24 mb-16 sm:mb-40">
          <button
            onClick={handleContactCTA}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl sm:rounded-2xl font-bold shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto text-base sm:text-lg max-w-xs sm:max-w-none"
          >
            Start Your Growth Journey
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="px-4 sm:px-6 py-2 text-xs font-semibold tracking-widest uppercase text-cyan-800 bg-cyan-100/80 border border-cyan-200/80 rounded-full shadow-sm">
            Why Choose Us
          </span>

          <h2 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            More Than a Marketing Agency.
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Your Growth Partner.
            </span>
          </h2>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {why.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/95 backdrop-blur-md border border-slate-200/90 p-7 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/80 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <CheckCircle2 className="text-cyan-600 mt-1 w-5 h-5 flex-shrink-0" />
                <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8 sm:pl-9">
                {item.desc}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 sm:mt-28">
          <button
            onClick={handleContactCTA}
            className="w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto max-w-sm sm:max-w-none"
          >
            Let's Build Your Real Estate Growth System
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ApproachAndWhy;