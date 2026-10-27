import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, Play, Image as ImageIcon, Film, ZoomIn, ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";

import artboard4 from "../Component/Images/Artboard 4-Dyn9OEWK.webp";
import artboard5 from "../Component/Images/Artboard 5-Daoy-hcx.webp";
import artboard8 from "../Component/Images/Artboard 8-DUvOq2a_.webp";
import c13 from "../Component/Images/c13-Dq6mWYtk.webp";
import c14 from "../Component/Images/c14-D4186Dgq.webp";
import c4 from "../Component/Images/c4-CaCkmORr.webp";
import c5 from "../Component/Images/c5-CrPYLC5b.webp";
import c6 from "../Component/Images/c6-veIYx9Qc.webp";

// ── Import JPEG images ──
import img1 from "../Component/Images/img1.webp";
import img2 from "../Component/Images/img2.webp";
import img3 from "../Component/Images/img3.webp";
import img4 from "../Component/Images/img4.webp";

// ── Import all videos ──
import vidClassicCastle from "../Component/Images/Classic castle.mp4";
import vidGodrej from "../Component/Images/Godrej Properties x Mahesh Ventures .mp4";
import vidMultiplex from "../Component/Images/Multiplex advertising is done by SP advertising for silver oak.Multiplex advertising is a powerf.mp4";
import vidOmayaAmenities from "../Component/Images/Omaya Amenities.mp4";
import vidOmayaHotel from "../Component/Images/Omaya Hotel .mp4";
import vidOmayaRoom from "../Component/Images/Omaya Room .mp4";
import vidRaisInfinity from "../Component/Images/Rais Infinity (Mahesh Ventures).mp4";
import vidAnandanCity from "../Component/Images/anandan city.mp4";
import vidAvinash from "../Component/Images/avinash magento.mp4";
import vidDreamHomes from "../Component/Images/dream homes.mp4";
import vidKs2 from "../Component/Images/ks video 2.mp4";
import vidKs from "../Component/Images/ks video.mp4";
import vidMagneto from "../Component/Images/magneto signature.mp4";
import vidRathis from "../Component/Images/rathis build mart.mp4";


/* ─── Media Data ─── */
const images = [
  { src: img1, title: "Creative Post 1" },
  { src: img2, title: "Creative Post 2" },
  { src: img3, title: "Creative Post 3" },
  { src: img4, title: "Creative Post 4" },
  { src: artboard4, title: "Artboard Design 1" },
  { src: artboard5, title: "Artboard Design 2" },
  { src: artboard8, title: "Artboard Design 3" },
  { src: c4, title: "Campaign Creative 1" },
  { src: c5, title: "Campaign Creative 2" },
  { src: c6, title: "Campaign Creative 3" },
  { src: c13, title: "Campaign Creative 4" },
  { src: c14, title: "Campaign Creative 5" },
];

const videos = [
  { src: vidClassicCastle },
  { src: vidGodrej },
  { src: vidRaisInfinity },
  { src: vidOmayaAmenities },
  { src: vidOmayaHotel },
  { src: vidOmayaRoom },
  { src: vidAnandanCity },
  { src: vidAvinash },
  { src: vidDreamHomes},
  { src: vidKs},
  { src: vidKs2},
  { src: vidMagneto },
  { src: vidRathis },
  { src: vidMultiplex },
];

/* ─── Tabs ─── */
const TABS = [
  { key: "creative", label: "Creative", icon: ImageIcon },
  { key: "walkthroughs", label: "Walkthroughs", icon: Film },
];

/* ═══════════════════════════════════════════
   HOOK: Auto-detect video orientation
   ═══════════════════════════════════════════ */
const useVideoOrientation = (videoList) => {
  const [orientations, setOrientations] = useState({});

  useEffect(() => {
    const detected = {};
    let remaining = videoList.length;

    videoList.forEach((vid, idx) => {
      const el = document.createElement("video");
      el.preload = "metadata";
      el.src = vid.src;

      const done = () => {
        const w = el.videoWidth || 0;
        const h = el.videoHeight || 0;
        detected[idx] = h > w ? "reel" : "wide";
        remaining--;
        if (remaining <= 0) {
          setOrientations({ ...detected });
        }
      };

      el.addEventListener("loadedmetadata", done);
      el.addEventListener("error", () => {
        detected[idx] = "wide";
        remaining--;
        if (remaining <= 0) setOrientations({ ...detected });
      });
    });
  }, [videoList]);

  return orientations;
};

/* ═══════════════════════════════════════════
   IMAGE LIGHTBOX MODAL
   ═══════════════════════════════════════════ */
const ImageLightbox = ({ src, title, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition flex items-center gap-1.5 text-sm font-medium z-10"
        >
          <X size={18} /> Close
        </button>
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
        >
          <ChevronRight size={22} />
        </button>
        <img
          src={src}
          alt={title}
          className="w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
        />
        {title && (
          <p className="text-center text-white/60 text-sm mt-4 font-medium">{title}</p>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   VIDEO LIGHTBOX MODAL (supports reel & wide)
   ═══════════════════════════════════════════ */
const VideoLightbox = ({ src, title, onClose, isReel }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`relative ${isReel ? "max-w-sm" : "max-w-5xl"} w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition flex items-center gap-1.5 text-sm font-medium z-10"
        >
          <X size={18} /> Close
        </button>
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            src={src}
            controls
            autoPlay
            className={`w-full object-contain ${isReel ? "max-h-[85vh]" : "max-h-[82vh]"}`}
          />
        </div>
        {title && (
          <p className="text-center text-white/60 text-sm mt-4 font-medium">{title}</p>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   REEL VIDEO CARD (Vertical / Portrait — Compact & Autoplaying)
   ═══════════════════════════════════════════ */
const ReelVideoCard = ({ video, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-pink-400/40 bg-black/60 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-1.5"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Reel badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-white/90 shadow">
            <Smartphone size={10} className="text-pink-400" /> Reel
          </span>
        </div>

        {/* Auto indicator */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-400/30 text-[9px] font-bold text-pink-300">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Play Button Overlay on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "bg-black/25" : "bg-transparent"
          }`}
        >
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? "bg-gradient-to-br from-pink-500 to-purple-600 scale-100 opacity-100 shadow-xl shadow-pink-500/50"
                : "bg-white/20 backdrop-blur-sm border border-white/30 scale-90 opacity-0 group-hover:opacity-100"
            }`}
          >
            <Play
              className="w-5 h-5 ml-0.5 text-white"
              fill="white"
            />
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-3 sm:p-3.5 pt-8">
          {video.title && (
            <p className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-2 mb-1">
              {video.title}
            </p>
          )}
          <span className="text-[10px] text-pink-300/90 inline-flex items-center gap-1 font-medium">
            Tap to open
          </span>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   WIDE VIDEO CARD (Landscape / Horizontal — Autoplaying)
   ═══════════════════════════════════════════ */
const WideVideoCard = ({ video, onClick }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400/30 bg-black/40 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-500 hover:-translate-y-1.5"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Wide badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-semibold text-white/90">
            <Monitor size={11} className="text-cyan-400" /> Walkthrough
          </span>
        </div>

        {/* Live indicator badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-[9px] font-bold text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LIVE
          </span>
        </div>

        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "bg-black/20" : "bg-transparent"
          }`}
        >
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-400 ${
              isHovered
                ? "bg-gradient-to-br from-cyan-500 to-blue-600 scale-100 opacity-100 shadow-xl shadow-cyan-500/50"
                : "bg-white/20 backdrop-blur-sm border border-white/30 scale-90 opacity-0 group-hover:opacity-100"
            }`}
          >
            <Play
              className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 text-white"
              fill="white"
            />
          </div>
        </div>
      </div>

      {/* Title Bar */}
      <div className="p-4 sm:p-5 flex items-center gap-3">
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
          <Film className="w-4 h-4 text-white" />
        </span>
        <div className="min-w-0">
          <p className="text-sm sm:text-base font-bold text-white/90 truncate group-hover:text-cyan-400 transition-colors">
            {video.title || "Walkthrough Video"}
          </p>
          <p className="text-[11px] text-white/40 mt-0.5">Click to watch full video</p>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   REEL GRID — Compact 3-Column Grid (3 top, 3 bottom)
   ═══════════════════════════════════════════ */
const ReelGrid = ({ reelVideos, onVideoClick }) => {
  if (reelVideos.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 to-purple-500/15 border border-pink-400/20">
          <Smartphone size={14} className="text-pink-400" />
          <span className="text-xs sm:text-sm font-bold text-pink-400 tracking-wide uppercase">Reels</span>
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-500/20 to-transparent" />
      </div>

      {/* Compact 3-Column Reel Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-5 max-w-[760px] mx-auto">
        {reelVideos.map((vid, idx) => (
          <ReelVideoCard
            key={`reel-${idx}`}
            video={vid}
            onClick={() => onVideoClick(vid.src, vid.title, true)}
          />
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   PORTFOLIO PAGE
   ═══════════════════════════════════════════ */
const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("creative");
  const [imgLightbox, setImgLightbox] = useState({ index: -1 });
  const [vidLightbox, setVidLightbox] = useState({ src: null, title: "", isReel: false });
  const sectionRef = useRef(null);

  // Auto-detect reel vs wide
  const orientations = useVideoOrientation(videos);
  const allDetected = Object.keys(orientations).length === videos.length;

  const reelVideos = allDetected
    ? videos.filter((_, i) => orientations[i] === "reel")
    : [];
  const wideVideos = allDetected
    ? videos.filter((_, i) => orientations[i] === "wide")
    : videos;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image lightbox handlers
  const openImage = (index) => setImgLightbox({ index });
  const closeImage = () => setImgLightbox({ index: -1 });
  const prevImage = () => {
    setImgLightbox((prev) => ({
      index: prev.index <= 0 ? images.length - 1 : prev.index - 1,
    }));
  };
  const nextImage = () => {
    setImgLightbox((prev) => ({
      index: prev.index >= images.length - 1 ? 0 : prev.index + 1,
    }));
  };

  // Video lightbox handlers
  const openVideo = (src, title, isReel = false) => setVidLightbox({ src, title, isReel });
  const closeVideo = () => setVidLightbox({ src: null, title: "", isReel: false });

  return (
    <>
      {/* Image Lightbox */}
      {imgLightbox.index >= 0 && (
        <ImageLightbox
          src={images[imgLightbox.index]?.src}
          title={images[imgLightbox.index]?.title}
          onClose={closeImage}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Video Lightbox */}
      <VideoLightbox
        src={vidLightbox.src}
        title={vidLightbox.title}
        onClose={closeVideo}
        isReel={vidLightbox.isReel}
      />

      <section
        ref={sectionRef}
        className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#001B2E] text-white pt-[90px] sm:pt-[110px] pb-20 sm:pb-28 overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Page Header ── */}
          <div className="text-center mb-12 sm:mb-16" style={{ animation: "fadeUp 0.8s ease both" }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 rounded-full mb-5">
              <Film className="w-4 h-4" />
              Portfolio
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Our Creative{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our stunning collection of real estate marketing campaigns —
              from visual creatives to promotional videos.
            </p>
          </div>

          {/* ── Tab Bar ── */}
          <div
            className="flex justify-center mb-10 sm:mb-14"
            style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
          >
            <div className="inline-flex bg-white/5 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-1.5 gap-1">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── CREATIVE SECTION — Compact & Clear ── */}
          {activeTab === "creative" && (
            <div
              className="mb-8"
              style={{ animation: "fadeUp 0.5s ease both" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/[0.06] hover:border-cyan-400/30 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/15"
                    onClick={() => openImage(index)}
                  >
                    {/* Image — fixed aspect for compact clear display */}
                    <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                      <img
                        src={img.src}
                        alt={img.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                      <p className="text-white text-xs sm:text-sm font-bold truncate">
                        {img.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-cyan-400 text-[10px] sm:text-xs mt-1 font-semibold">
                        <ZoomIn size={12} /> View Full
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── WALKTHROUGHS & REELS SECTION ── */}
          {activeTab === "walkthroughs" && (
            <div style={{ animation: "fadeUp 0.5s ease both" }}>

              {/* ── Reels 3-Column Grid ── */}
              {reelVideos.length > 0 && (
                <div className="mb-12 sm:mb-16">
                  <ReelGrid
                    reelVideos={reelVideos}
                    onVideoClick={openVideo}
                  />
                </div>
              )}

              {/* ── Wide Videos Grid ── */}
              {wideVideos.length > 0 && (
                <div>
                  {/* Section Label — only show if we have both types */}
                  {reelVideos.length > 0 && (
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/20">
                        <Monitor size={14} className="text-cyan-400" />
                        <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wide uppercase">Walkthroughs</span>
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">
                    {wideVideos.map((vid, index) => (
                      <WideVideoCard
                        key={`wide-${index}`}
                        video={vid}
                        onClick={() => openVideo(vid.src, vid.title, false)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Loading state while detecting */}
              {!allDetected && (
                <div className="flex items-center justify-center gap-3 py-8 text-white/40">
                  <div className="w-5 h-5 border-2 border-cyan-400/40 border-t-cyan-400 rounded-full animate-spin" />
                  <span className="text-sm font-medium">Detecting video formats...</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Keyframes & utility styles */}
        <style>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
    </>
  );
};

export default PortfolioPage;
