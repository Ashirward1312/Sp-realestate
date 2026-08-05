import React, { useState } from "react";
import {
  ArrowRight, TrendingUp, Users, MapPin,
  CheckCircle, BarChart2, Home, X, ZoomIn
} from "lucide-react";
import imgClassic from "./Images/1.jpeg";
import imgRais from "./Images/2.jpeg";
import imgGodrej from "./Images/3.jpeg";
import vb from "./Images/4.jpeg";
import residential from "./Images/5.jpeg";
import vidChatbot from "./Images/vid1.mp4";
import vidAutomation from "./Images/vid2.mp4";
import vidCrm from "./Images/vid3.mp4";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/* ─────────────────────────────────────
   STAT ROW — uniform cyan on every card
   ───────────────────────────────────── */
const StatRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
    <div className="flex items-center gap-2.5">
      <span className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-cyan-600" />
      </span>
      <span className="text-xs sm:text-sm text-gray-600">{label}</span>
    </div>
    <span className="text-sm sm:text-base font-bold text-cyan-600">{value}</span>
  </div>
);

/* ─────────────────────────────────────
   PROJECT CARD — same structure every time
   ───────────────────────────────────── */
const ProjectCard = ({ title, image, stats, onImageClick }) => (
  <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col">

    {/* Image */}
    <div
      className="relative aspect-video overflow-hidden cursor-zoom-in group"
      onClick={() => onImageClick(image, title)}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30">
          <ZoomIn size={13} /> View Full
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">

      {/* Title row — same badge style */}
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
          <Home className="w-4 h-4 text-white" />
        </span>
        <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">{title}</h4>
      </div>

      {/* Stats */}
      <div className="flex-1">
        {stats.map((stat, i) => (
          <StatRow key={i} icon={stat.icon} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────
   IMAGE LIGHTBOX MODAL
   ───────────────────────────────────── */
const Lightbox = ({ src, title, onClose }) => {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition flex items-center gap-1.5 text-sm font-medium"
        >
          <X size={18} /> Close
        </button>
        <img
          src={src}
          alt={title}
          className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
        />
        {title && (
          <p className="text-center text-white/60 text-sm mt-3 font-medium">{title}</p>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════ */
const OurWork = () => {
  const [lightbox, setLightbox] = useState({ src: null, title: "" });
  const openLightbox  = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox({ src: null, title: "" });

  /* All stats use the same icon + cyan colour — no rose, no blue */
  const projects = [
    {
      title: "Classic Castle",
      image: imgClassic,
      stats: [
        { icon: TrendingUp,  label: "Leads Generated", value: "60+" },
        { icon: MapPin,      label: "Site Visits",      value: "25+" },
        { icon: CheckCircle, label: "Bookings",          value: "3"   },
      ],
    },
    {
      title: "Rais Infinity",
      image: imgRais,
      stats: [
        { icon: Users,       label: "Leads Provided",       value: "60+" },
        { icon: BarChart2,   label: "Positive Responses",   value: "20+" },
        { icon: MapPin,      label: "Site Visits",           value: "20+" },
        { icon: CheckCircle, label: "Bookings",              value: "2"   },
      ],
    },
    {
      title: "Godrej Property",
      image: imgGodrej,
      stats: [
        { icon: Users,  label: "Leads Provided", value: "20+" },
        { icon: MapPin, label: "Site Visits",     value: "5+"  },
      ],
    },
    {
      title: "VB Tower — Leads Generation Campaign",
      image: vb,
      stats: [
        { icon: TrendingUp,  label: "Leads Generated",                value: "50+" },
        { icon: BarChart2,   label: "Positive Responses & Site Visits", value: "20+" },
        { icon: CheckCircle, label: "Bookings",                        value: "5"   },
      ],
    },
  ];

  /* Residential split stays inside its own card but uniform cyan too */
  const residentialLeft = {
    label: "Residential Plot",
    stats: [
      { icon: TrendingUp,  label: "Leads Generated", value: "20" },
      { icon: MapPin,      label: "Site Visits",      value: "8"  },
      { icon: CheckCircle, label: "Final Booking",    value: "✓"  },
    ],
  };
  const residentialRight = {
    label: "Krishna Sattavam",
    stats: [
      { icon: TrendingUp,  label: "Leads Generated", value: "30+" },
      { icon: MapPin,      label: "Site Visits",      value: "13+" },
      { icon: CheckCircle, label: "Bookings",         value: "2"   },
    ],
  };

  const topProjects    = projects.slice(0, 3);
  const bottomProject  = projects[3]; // VB Tower only

  return (
    <>
      <Lightbox src={lightbox.src} title={lightbox.title} onClose={closeLightbox} />

      <section
        id="projects"
        className="relative bg-gradient-to-br from-white via-[#F6FBFF] to-[#EAF6FF] py-20 sm:py-28 lg:py-32 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100/40 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Header ── */}
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-5">
              <BarChart2 className="w-3.5 h-3.5 text-cyan-600" />
              <span className="text-xs sm:text-sm font-bold text-cyan-600 tracking-wider uppercase">Our Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-5 leading-tight">
              We Let Our{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Results Speak.
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Real estate campaigns delivering measurable growth and bookings.
            </p>
          </div>

          {/* ── Row 1: 3 cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {topProjects.map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                image={p.image}
                stats={p.stats}
                onImageClick={openLightbox}
              />
            ))}
          </div>

          {/* ── Row 2: VB Tower + Residential ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">

            {/* VB Tower — standard card */}
            <ProjectCard
              title={bottomProject.title}
              image={bottomProject.image}
              stats={bottomProject.stats}
              onImageClick={openLightbox}
            />

            {/* Residential Plot & Krishna — split but uniform style */}
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col">

              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden cursor-zoom-in group"
                onClick={() => openLightbox(residential, "Residential Plot & Krishna Sattavam")}
              >
                <img
                  src={residential}
                  alt="Residential Projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/30">
                    <ZoomIn size={13} /> View Full
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">

                {/* Title — same badge as all other cards */}
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Home className="w-4 h-4 text-white" />
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                    Residential Plot &amp; Krishna Sattavam
                  </h4>
                </div>

                {/* Two-column stats — BOTH use same cyan */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                  {[residentialLeft, residentialRight].map((col, ci) => (
                    <div key={ci}>
                      {/* Sub-heading */}
                      <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2 pb-1 border-b border-cyan-100">
                        {col.label}
                      </p>
                      {col.stats.map((s, si) => (
                        <div
                          key={si}
                          className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="w-6 h-6 rounded-md bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                            <s.icon className="w-3 h-3 text-cyan-600" />
                          </span>
                          <span className="text-xs text-gray-600 flex-1 leading-tight">{s.label}</span>
                          <span className="text-xs font-bold text-cyan-600">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* ── Tech & Automation ── */}
          <div className="mb-14 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-4">
                <span className="text-xs sm:text-sm font-bold text-cyan-600 tracking-wider uppercase">Tech &amp; Automation</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900">
                Our Digital Tools in Action
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                AI chatbot, WhatsApp automation &amp; custom CRM — keeping your sales pipeline moving 24/7.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Mobile Videos */}
              <div className="flex justify-center gap-6 sm:gap-12 mb-8 sm:mb-10 flex-wrap">
                {[
                  { src: vidChatbot,    label: "AI Chatbot" },
                  { src: vidAutomation, label: "WhatsApp Automation" },
                ].map((v, i) => (
                  <div key={i} className="w-[130px] sm:w-[190px] flex flex-col items-center gap-3">
                    <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-black w-full">
                      <video src={v.src} autoPlay loop muted playsInline className="w-full h-auto object-contain" />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                      {v.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CRM */}
              <div className="max-w-3xl mx-auto">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                  <video src={vidCrm} autoPlay loop muted playsInline className="w-full h-auto object-contain" />
                </div>
                <p className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-500 font-semibold mt-3">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                  Custom CRM Dashboard
                </p>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto max-w-xs sm:max-w-none"
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurWork;