import React, { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Globe,
  Database,
  Phone,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { icon: Sparkles, title: "Branding & Strategy", description: "Create a powerful brand identity and positioning roadmap." },
    { icon: TrendingUp, title: "Social Media Marketing", description: "Build visibility and trust with strategic campaigns." },
    { icon: Target, title: "Performance Marketing", description: "Run data-driven campaigns for high-quality enquiries." },
    { icon: Users, title: "Lead Generation", description: "Convert attention into qualified real estate opportunities." },
    { icon: Globe, title: "Landing Pages & Funnels", description: "Design high-converting customer journeys." },
    { icon: Database, title: "Custom CRM", description: "Manage leads and sales pipelines in one system." },
    { icon: Phone, title: "AI Telecalling", description: "AI-powered lead qualification & scheduling." },
    { icon: MessageSquare, title: "WhatsApp Automation", description: "Engage and nurture prospects seamlessly." },
    { icon: BarChart3, title: "Analytics & Optimization", description: "Track performance & maximize ROI." },
  ];

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E] text-white">

      {/* ===== Floating Micro Particles ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== Header ===== */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Our Services
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            End-to-End Solutions for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real Estate Growth
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need to attract, convert, and scale your business —
            integrated into one powerful ecosystem.
          </p>
        </div>

        {/* ===== Services Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-24 text-center">

          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-cyan-400/20 shadow-2xl">

            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                Ready to Scale Your Project?
              </h3>
              <p className="text-gray-400">
                Let’s build a powerful real estate growth system together.
              </p>
            </div>

            <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>

      </div>

      {/* ===== Particle Animation CSS ===== */}
      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-20px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.4; }
        }
        .animate-particle {
          animation: floatParticle linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Services;