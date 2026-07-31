import React from "react";
import { ArrowRight, TrendingUp, MapPin, Users } from "lucide-react";
import imgClassic from "./Images/1.jpeg";
import imgRais from "./Images/2.jpeg";
import imgGodrej from "./Images/3.jpeg";
import vb from "./Images/4.jpeg";
import residential from "./Images/5.jpeg";
import vidChatbot from "./Images/vid1.mp4";
import vidAutomation from "./Images/vid2.mp4";
import vidCrm from "./Images/vid3.mp4";

const OurWork = () => {
  const featuredProjects = [
    {
      title: "Classic",
      image: imgClassic,
      stats: [
        { label: "Leads Generated", value: "60+" },
        { label: "Site Visits", value: "25+" },
        { label: "Bookings", value: "3" },
      ],
    },
    {
      title: "Rais Infinity",
      image: imgRais,
      stats: [
        { label: "Leads Provided", value: "60+" },
        { label: "Positive Responses", value: "20+" },
        { label: "Site Visits", value: "20+" },
        { label: "Bookings", value: "2" },
      ],
    },
    {
      title: "Godrej Property",
      image: imgGodrej,
      stats: [
        { label: "Leads Provided", value: "20+" },
        { label: "Site Visits", value: "5+" },
      ],
    },
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-br from-white via-[#F6FBFF] to-[#EAF6FF] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            We Let Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Results Speak.
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real estate campaigns delivering measurable growth and bookings.
          </p>
        </div>

        {/* ================= FIRST ROW ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {project.title}
                </h4>

                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm border-b border-gray-100 pb-2 mb-2"
                  >
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="text-cyan-600 font-semibold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">

          {/* VB Tower */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img
                src={vb}
                alt="VB Tower"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                VB Tower — Leads Generation Campaign
              </h4>

              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b pb-2">
                  <span>Leads Generated</span>
                  <span className="text-rose-500 font-semibold">50+</span>
                </div>
                <div className="flex justify-between text-sm border-b pb-2">
                  <span>Positive Responses & Site Visits</span>
                  <span className="text-rose-500 font-semibold">20+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bookings</span>
                  <span className="text-rose-500 font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Residential + Krishna */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img
                src={residential}
                alt="Residential Projects"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                Residential Plot & Krishna Sattavam
              </h4>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-cyan-600 mb-2">
                    Residential Plot
                  </p>
                  <p>20 Leads Generated</p>
                  <p>8 Site Visits</p>
                  <p>Final Booking ✓</p>
                </div>

                <div>
                  <p className="font-semibold text-cyan-600 mb-2">
                    Krishna Sattavam
                  </p>
                  <p>30+ Leads Generated</p>
                  <p>13+ Site Visits</p>
                  <p>2 Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VIDEOS SMALL FIXED ================= */}
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Tech & Automation
        </h3>

        <div className="max-w-4xl mx-auto">

          {/* Mobile Videos Small */}
          <div className="flex justify-center gap-12 mb-12">

            <div className="w-[200px]">
              <div className="rounded-3xl overflow-hidden shadow-lg border bg-black">
                <video
                  src={vidChatbot}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="w-[200px]">
              <div className="rounded-3xl overflow-hidden shadow-lg border bg-black">
                <video
                  src={vidAutomation}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

          {/* Rectangle CRM Small */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg border bg-black">
              <video
                src={vidCrm}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto">
            Explore All Results
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurWork;