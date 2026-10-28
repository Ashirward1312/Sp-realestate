import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Image as ImageIcon,
  Film,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Volume2,
  VolumeX,
} from "lucide-react";

// ── Import Artboard & C images ──
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

// ── Import Godrej Post Images ──
import godrejPost1 from "../Component/Images/godrej property meta ads creative.png";
import godrejPost2 from "../Component/Images/godrej property meta ads creative  (1080 x 1080 px).png";
import godrejPost3 from "../Component/Images/godrej property meta ads creative  (1080 x 1080 px) (1).png";

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
  { src: godrejPost1 },
  { src: godrejPost2 },
  { src: godrejPost3 },
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: artboard8 },
  { src: c4 },
  { src: c5 },
  { src: c6 },
  { src: c13 },
  { src: c14 },
];

const videos = [
  { src: vidGodrej },
  { src: vidClassicCastle },
  { src: vidRaisInfinity },
  { src: vidOmayaAmenities },
  { src: vidOmayaHotel },
  { src: vidOmayaRoom },
  { src: vidAnandanCity },
  { src: vidAvinash },
  { src: vidDreamHomes },
  { src: vidKs },
  { src: vidKs2 },
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
   IMAGE LIGHTBOX MODAL (For Creative tab)
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
          alt={title || "Creative Post"}
          className="w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
        />
        {title && (
          <p className="text-center text-white/80 text-sm mt-4 font-semibold tracking-wide">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   REEL VIDEO CARD (Vertical / Portrait — Continuous Autoplay, No Click Open)
   ═══════════════════════════════════════════ */
const ReelVideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          el.muted = true;
          el.play().catch(() => {});
        });
      }
    }
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-pink-400/40 bg-black/60 shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 select-none">
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        />

        {/* Reel badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-white/90 shadow">
            <Smartphone size={10} className="text-pink-400" /> Reel
          </span>
        </div>

        {/* Audio Mute/Unmute Toggle */}
        <button
          type="button"
          onClick={toggleSound}
          title={isMuted ? "Click to unmute sound" : "Click to mute sound"}
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition shadow cursor-pointer active:scale-90"
        >
          {isMuted ? (
            <VolumeX size={13} className="text-white/70" />
          ) : (
            <Volume2 size={13} className="text-pink-400" />
          )}
        </button>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent p-3 sm:p-3.5 pt-8">
          {video.title && (
            <p className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-2 mb-1.5">
              {video.title}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[10px] text-pink-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Autoplaying
            </span>
            <span className="text-[9px] text-white/40 tracking-wider font-semibold uppercase">Loop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   WIDE VIDEO CARD (Landscape / Horizontal — Continuous Autoplay, No Click Open)
   ═══════════════════════════════════════════ */
const WideVideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.muted = true;
      el.defaultMuted = true;
      el.playsInline = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          el.muted = true;
          el.play().catch(() => {});
        });
      }
    }
  }, []);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 bg-black/40 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-500 select-none">
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        />

        {/* Wide badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-semibold text-white/90">
            <Monitor size={11} className="text-cyan-400" /> Walkthrough
          </span>
        </div>

        {/* Live indicator & Audio Toggle */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-[9px] sm:text-[10px] font-bold text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            LIVE
          </span>

          <button
            type="button"
            onClick={toggleSound}
            title={isMuted ? "Click to unmute sound" : "Click to mute sound"}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition shadow cursor-pointer active:scale-90"
          >
            {isMuted ? (
              <VolumeX size={13} className="text-white/70" />
            ) : (
              <Volume2 size={13} className="text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Title Bar */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-b from-black/20 to-black/60 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
            <Film className="w-4 h-4 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-sm sm:text-base font-bold text-white/90 truncate group-hover:text-cyan-400 transition-colors">
              {video.title || "Walkthrough Video"}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-cyan-300/80 font-medium mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Autoplaying in continuous loop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   REEL GRID — Compact 3-Column Grid
   ═══════════════════════════════════════════ */
const ReelGrid = ({ reelVideos }) => {
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
          <ReelVideoCard key={`reel-${idx}`} video={vid} />
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
  const sectionRef = useRef(null);

  // Auto-detect reel vs wide
  const orientations = useVideoOrientation(videos);
  const allDetected = Object.keys(orientations).length === videos.length;

  const reelVideos = allDetected ? videos.filter((_, i) => orientations[i] === "reel") : [];
  const wideVideos = allDetected ? videos.filter((_, i) => orientations[i] === "wide") : videos;

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

  return (
    <>
      {/* Image Lightbox (for Creative tab images) */}
      {imgLightbox.index >= 0 && (
        <ImageLightbox
          src={images[imgLightbox.index]?.src}
          title={images[imgLightbox.index]?.title}
          onClose={closeImage}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

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
              Explore our stunning collection of real estate marketing campaigns — from visual creatives to promotional walkthrough videos.
            </p>
          </div>

          {/* ── Tab Bar ── */}
          <div className="flex justify-center mb-10 sm:mb-14" style={{ animation: "fadeUp 0.8s 0.2s ease both" }}>
            <div className="inline-flex bg-white/5 backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-1.5 gap-1">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
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

          {/* ── CREATIVE SECTION — Godrej Posts & Creatives ── */}
          {activeTab === "creative" && (
            <div className="mb-8" style={{ animation: "fadeUp 0.5s ease both" }}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/[0.06] hover:border-cyan-400/30 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/15"
                    onClick={() => openImage(index)}
                  >
                    {/* ✅ FIX: image cut nahi hogi (object-contain + padding). Same premium card, same grid. */}
                    <div
                      className="relative overflow-hidden bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-black/40"
                      style={{ aspectRatio: "4/5" }}
                    >
                      {/* subtle inner frame for premium look */}
                      <div className="absolute inset-0 p-2 sm:p-3">
                        <div className="w-full h-full rounded-lg sm:rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                      <p className="text-white text-xs sm:text-sm font-bold truncate">{img.title}</p>
                      <span className="inline-flex items-center gap-1 text-cyan-400 text-[10px] sm:text-xs mt-1 font-semibold">
                        <ZoomIn size={12} /> View Full
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── WALKTHROUGHS & REELS SECTION (Autoplaying, No Popup on Click) ── */}
          {activeTab === "walkthroughs" && (
            <div style={{ animation: "fadeUp 0.5s ease both" }}>
              {/* ── Reels 3-Column Grid ── */}
              {reelVideos.length > 0 && (
                <div className="mb-12 sm:mb-16">
                  <ReelGrid reelVideos={reelVideos} />
                </div>
              )}

              {/* ── Wide Videos Grid ── */}
              {wideVideos.length > 0 && (
                <div>
                  {/* Section Label */}
                  {reelVideos.length > 0 && (
                    <div className="flex items-center gap-3 mb-5">
                      <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/20">
                        <Monitor size={14} className="text-cyan-400" />
                        <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wide uppercase">
                          Walkthroughs
                        </span>
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7">
                    {wideVideos.map((vid, index) => (
                      <WideVideoCard key={`wide-${index}`} video={vid} />
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