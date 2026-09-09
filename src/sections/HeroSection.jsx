import React, { useRef } from 'react';
import { Info, MapPin, PenTool, ArrowDown, Video, ExternalLink } from 'lucide-react';

export default function HeroSection({ setActivePage }) {
  const bgVideoRef = useRef(null);

  // Single continuous school campus background video
  const heroVideo = {
    title: "Shri Dattabal Vidyamandir - Campus Life",
    url: "/videos/VID20260908152827.mp4",
    poster: "/images/shree dattabal_/IMG20260908152720.jpg"
  };

  const scrollToContent = () => {
    const el = document.getElementById('about-summary');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGallery = () => {
    const el = document.getElementById('video-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActivePage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-70px)] bg-[#011438] text-white overflow-hidden flex flex-col justify-center transform-gpu">
      {/* NATIVE HIGH-PERFORMANCE BACKGROUND VIDEO LAYER - SINGLE SEAMLESS LOOP */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <video
          ref={(el) => {
            bgVideoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.setAttribute('playsinline', '');
              el.setAttribute('webkit-playsinline', 'true');
              const p = el.play();
              if (p !== undefined) {
                p.catch(() => {});
              }
            }
          }}
          src={heroVideo.url}
          poster={heroVideo.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90 transform-gpu"
        />

        {/* Soft Contrast Gradient Overlays for High Visibility & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011438]/85 via-[#011438]/50 to-[#011438]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011438]/90 via-transparent to-[#011438]/50" />
      </div>

      {/* Subtle Pattern Accent */}
      <div className="absolute inset-0 bg-oak-pattern opacity-25 pointer-events-none z-0" />

      {/* Floating Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 sm:py-16 my-auto w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* School Title */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
              Nurturing Wisdom &
            </h1>
            <div className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-serif italic text-[#a8d4ff] font-light leading-tight drop-shadow-2xl">
              Values for Life
            </div>
          </div>

          {/* School Tagline / Description */}
          <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal drop-shadow-md">
            Maharashtra State Board Marathi Medium Education under <strong>Shri Dattabal Mission Divine Kolhapur</strong>. Fostering character, academic excellence, and sportsmanship from <strong>Nursery to Grade 10</strong>.
          </p>

          {/* Highlights Mini Pills */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md">
              🏛️ 19 Classrooms
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md">
              📚 1,373 Books Library
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md">
              🚻 22 Clean Toilets
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md">
              💻 5 Computers
            </span>
          </div>

          {/* Action Buttons Container */}
          <div className="pt-2 sm:pt-4 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <button
                onClick={scrollToContent}
                className="inline-flex items-center justify-between gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-sm tracking-wide shadow-2xl shadow-orange-950/60 transition-all cursor-pointer active:scale-95"
              >
                <span>Explore School Details</span>
                <ArrowDown className="w-4 h-4 text-slate-950" />
              </button>

              {/* Video Gallery Link */}
              <a
                href="#video-gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenGallery();
                }}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-black/60 hover:bg-white/20 border border-white/30 text-white text-sm font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md shadow-xl"
              >
                <Video className="w-4.5 h-4.5 text-pink-400" />
                <span>Watch School Videos</span>
                <ExternalLink className="w-4 h-4 text-pink-300" />
              </a>
            </div>

            {/* Circular Action Icons: INQUIRE, VISIT, APPLY */}
            <div className="flex items-center space-x-8 pt-2">
              <button
                onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-2 drop-shadow">
                  INQUIRE
                </span>
              </button>

              <button
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-2 drop-shadow">
                  VISIT
                </span>
              </button>

              <button
                onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-2 drop-shadow">
                  APPLY
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="relative z-20 pb-4 text-center">
        <button
          onClick={scrollToContent}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
        >
          <span>Scroll Down to Discover Campus</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
        </button>
      </div>
    </section>
  );
}
