import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, TrendingUp, Target, Users, Globe,
  Database, Phone, MessageSquare, BarChart3,
  ArrowRight, Zap, CheckCircle2,
} from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleContactCTA = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

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
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] text-slate-800"
    >
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0891b2 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-800 bg-cyan-100/80 border border-cyan-200/80 rounded-full mb-5 sm:mb-6 shadow-sm">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600" />
            Our Services
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
            End-to-End Solutions for{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Real Estate Growth
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
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
                onClick={handleContactCTA}
                className="group relative bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-cyan-400/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer select-none"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100/80 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3
                  className={`relative z-10 text-base sm:text-xl font-bold mb-3 sm:mb-4 transition-all duration-300 ${
                    isHovered
                      ? "text-cyan-700"
                      : "text-slate-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-7">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-600 group-hover:text-cyan-700 transition-all duration-300">
                  <span className="border-b border-cyan-400/50 group-hover:border-cyan-600 pb-0.5 transition-colors">
                    Get Started
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-6 p-7 sm:p-10 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-cyan-200/90 shadow-xl shadow-slate-200/80 w-full sm:w-auto max-w-2xl mx-auto">

            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 flex-shrink-0" />
                Ready to Scale Your Project?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Let's build a powerful real estate growth system together.
              </p>
            </div>

            <button
              onClick={handleContactCTA}
              className="flex-shrink-0 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl sm:rounded-2xl font-semibold shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;