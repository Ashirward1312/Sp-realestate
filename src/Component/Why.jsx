import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ApproachAndWhy = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
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
    "End-to-End Execution",
    "Real Estate Focused",
    "Performance Driven",
    "Technology Powered",
    "Data-Driven Decisions",
  ];

  const whyDesc = [
    "Everything from branding to conversion under one roof.",
    "Strategies built around the real estate journey.",
    "We focus on measurable business results.",
    "CRM & AI tools that make your team faster.",
    "Every campaign is analyzed & optimized.",
  ];

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E] py-36 text-white"
    >
      {/* Background Glow Layers */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ================= OUR APPROACH ================= */}
        <div className="text-center mb-28">
          <span className="px-6 py-2 text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full">
            Our Approach
          </span>

          <h2 className="mt-8 text-4xl sm:text-5xl font-extrabold leading-tight">
            From Strategy to Sales —
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              We Connect the Dots.
            </span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 to-blue-600 opacity-30"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative mb-20 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"></div>

              {/* Card */}
              <div
                className={`w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-cyan-400/10 p-8 rounded-3xl shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-cyan-400 font-bold mb-3">
                  {String(i + 1).padStart(2, "0")} —
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24 mb-40">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto text-lg"
          >
            Start Your Growth Journey
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="text-center mb-20">
          <span className="px-6 py-2 text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-4xl sm:text-5xl font-extrabold leading-tight">
            More Than a Marketing Agency.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Growth Partner.
            </span>
          </h2>
        </div>

        {/* Why Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {why.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl border border-cyan-400/10 p-10 rounded-3xl shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="text-cyan-400 mt-1" />
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition">
                  {item}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">
                {whyDesc[i]}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-28">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
            className="px-14 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Let’s Build Your Real Estate Growth System
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ApproachAndWhy;