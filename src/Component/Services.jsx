import React, { useState } from "react";
import {
  Sparkles, TrendingUp, Target, Users, Globe,
  Database, Phone, MessageSquare, BarChart3,
  ArrowRight, Zap, CheckCircle2,
} from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { icon: Sparkles, title: "Branding & Strategy", description: "Create a powerful brand identity and positioning roadmap that sets you apart." },
    { icon: TrendingUp, title: "Social Media Marketing", description: "Build visibility and trust with strategic, engaging campaigns." },
    { icon: Target, title: "Performance Marketing", description: "Run data-driven campaigns for high-quality enquiries and maximum ROI." },
    { icon: Users, title: "Lead Generation", description: "Convert attention into qualified real estate opportunities consistently." },
    { icon: Globe, title: "Landing Pages & Funnels", description: "Design high-converting customer journeys that drive action." },
    { icon: Database, title: "Custom CRM", description: "Manage leads and sales pipelines in one powerful, integrated system." },
    { icon: Phone, title: "AI Telecalling", description: "AI-powered lead qualification & scheduling that never sleeps." },
    { icon: MessageSquare, title: "WhatsApp Automation", description: "Engage and nurture prospects seamlessly with smart automation." },
    { icon: BarChart3, title: "Analytics & Optimization", description: "Track every metric, optimize every campaign & maximize ROI." },
  ];

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E] text-white"
    >
      {/* Floating Micro Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${5 + Math.random() * 5}s ${Math.random() * 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full mb-5 sm:mb-6">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Our Services
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            End-to-End Solutions for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real Estate Growth
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            Everything you need to attract, convert, and scale your business —
            integrated into one powerful ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => scrollTo("contact")}
                className="group relative bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-500 overflow-hidden cursor-pointer select-none"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" />
                </div>

                {/* Title */}
                <h3
                  className={`relative z-10 text-base sm:text-xl font-bold mb-3 sm:mb-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-7">
                  {service.description}
                </p>

                {/* Learn More — always visible, bolder on hover */}
                <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-all duration-300">
                  <span className="border-b border-cyan-400/40 group-hover:border-cyan-300 pb-0.5 transition-colors">
                    Get Started
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-6 p-7 sm:p-10 bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-cyan-400/20 shadow-2xl w-full sm:w-auto max-w-2xl mx-auto">

            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-2xl font-bold mb-2 flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                Ready to Scale Your Project?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Let's build a powerful real estate growth system together.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="flex-shrink-0 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default Services;