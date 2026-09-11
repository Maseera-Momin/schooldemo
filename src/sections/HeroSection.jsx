import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Info, MapPin, PenTool, ArrowDown, Video, ExternalLink, Sparkles } from 'lucide-react';

export default function HeroSection({ setActivePage }) {
  const containerRef = useRef(null);
  const bgVideoRef = useRef(null);

  // Background campus video
  const heroVideo = {
    title: "Shri Dattabal Vidyamandir - Campus Life",
    url: "/videos/VID_20260910_073358_262_bsl.mp4",
    poster: null
  };

  // Scroll-Driven Animation Engine (Awwwards 60 FPS Parallax)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Spring physics interpolation for buttery smooth response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // 1. Background Video Layer (Cinematic Dolly Zoom & Parallax Shift)
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const videoY = useTransform(smoothProgress, [0, 1], ["0%", "16%"]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.8, 1], [0.95, 0.7, 0.35]);

  // 2. Primary Heading Layer (Accelerated Multiplane Float + Liquid Blur Exit)
  const titleY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.65], [1, 0]);
  const titleScale = useTransform(smoothProgress, [0, 0.75], [1, 0.92]);
  const titleBlur = useTransform(smoothProgress, [0, 0.55], ["blur(0px)", "blur(12px)"]);

  // 3. Subtitle Description Layer
  const subtitleY = useTransform(smoothProgress, [0, 1], [0, -135]);
  const subtitleOpacity = useTransform(smoothProgress, [0, 0.55], [1, 0]);

  // 4. Feature Highlight Pills Layer
  const pillsY = useTransform(smoothProgress, [0, 1], [0, -95]);
  const pillsOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);

  // 5. Actions & Buttons Layer
  const actionsY = useTransform(smoothProgress, [0, 1], [0, -65]);
  const actionsOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

  // 6. Bottom Scroll Indicator (Clears smoothly on initial scroll)
  const indicatorOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const indicatorY = useTransform(smoothProgress, [0, 0.12], [0, 25]);

  // 7. Ambient Lighting Orbs (Dynamic Spatial Drift)
  const glow1X = useTransform(smoothProgress, [0, 1], [0, 70]);
  const glow1Y = useTransform(smoothProgress, [0, 1], [0, -50]);
  const glow2X = useTransform(smoothProgress, [0, 1], [0, -70]);
  const glow2Y = useTransform(smoothProgress, [0, 1], [0, 50]);

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
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] bg-[#011438] text-white overflow-hidden flex flex-col justify-center py-12 sm:py-0 transform-gpu select-none"
    >
      {/* ------------------------------------------------------------------ */}
      {/* 1. CINEMATIC BACKGROUND VIDEO WITH SCROLL-DRIVEN DOLLY ZOOM        */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        style={{
          scale: videoScale,
          y: videoY,
          opacity: videoOpacity,
        }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu origin-center"
      >
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
          className="w-full h-full object-cover transform-gpu"
        />

        {/* Soft Contrast Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011438]/90 via-[#011438]/55 to-[#011438]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011438] via-transparent to-[#011438]/60" />
      </motion.div>

      {/* Subtle Pattern Accent */}
      <div className="absolute inset-0 bg-oak-pattern opacity-20 pointer-events-none z-0" />

      {/* Dynamic Ambient Glow Orbs with Parallax Drift */}
      <motion.div
        style={{ x: glow1X, y: glow1Y }}
        className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div
        style={{ x: glow2X, y: glow2Y }}
        className="absolute -bottom-32 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* ------------------------------------------------------------------ */}
      {/* 2. MAIN HERO FOREGROUND CONTENT WITH MULTIPLANE PARALLAX           */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-10 sm:py-16 my-auto w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-7">
          

          {/* School Main Heading with Liquid Blur & Parallax Exit */}
          <motion.div
            style={{
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
              filter: titleBlur,
            }}
            initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 sm:space-y-2 origin-left"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl">
              Nurturing Wisdom &
            </h1>
            <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-gold-shimmer font-light leading-tight drop-shadow-2xl">
              Values for Life
            </div>
          </motion.div>

          {/* School Tagline / Description */}
          <motion.p
            style={{
              y: subtitleY,
              opacity: subtitleOpacity,
            }}
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-blue-100 text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal drop-shadow-md"
          >
            Premier <strong>English Medium & Semi-English Medium</strong> education under <strong>Shri Dattabal Mission Divine Kolhapur</strong>. Fostering character, scientific curiosity, and state board excellence from <strong>Nursery to Grade 10</strong>.
          </motion.p>

          {/* Dual Medium Quick Showcase Pills */}
          <motion.div
            style={{
              y: pillsY,
              opacity: pillsOpacity,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            <button
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-100 backdrop-blur-md transition-all text-[11px] sm:text-xs font-semibold cursor-pointer shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
              <span>English Medium (Nursery – 10th)</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/40 text-emerald-100 backdrop-blur-md transition-all text-[11px] sm:text-xs font-semibold cursor-pointer shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              <span>Semi-English Medium (1st – 10th)</span>
            </button>
          </motion.div>

          {/* Highlights Mini Pills with Independent Float */}
          <motion.div
            style={{
              y: pillsY,
              opacity: pillsOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm"
          >
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md hover:border-amber-400/50 transition-colors">
              🏛️ 19 Classrooms
            </span>
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md hover:border-amber-400/50 transition-colors">
              📚 1,373 Books Library
            </span>
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md hover:border-amber-400/50 transition-colors">
              🚻 22 Clean Toilets
            </span>
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-black/50 border border-white/20 text-white font-semibold backdrop-blur-md shadow-md hover:border-amber-400/50 transition-colors">
              💻 5 Computers
            </span>
          </motion.div>

          {/* Action Buttons & Fast Links */}
          <motion.div
            style={{
              y: actionsY,
              opacity: actionsOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 sm:pt-4 space-y-4 sm:space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Button with Micro-Spring Press */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(245,158,11,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContent}
                className="inline-flex items-center justify-between gap-2.5 px-5 py-3 sm:px-7 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-2xl transition-all cursor-pointer"
              >
                <span>Explore School Details</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              </motion.button>

              {/* Video Gallery Link */}
              <motion.a
                whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.97 }}
                href="#video-gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenGallery();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full bg-black/60 border border-white/30 text-white text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md shadow-xl"
              >
                <Video className="w-4 h-4 text-pink-400" />
                <span>Watch Reels & Videos</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-300" />
              </motion.a>
            </div>

            {/* Circular Action Icons: INQUIRE, VISIT, APPLY */}
            <div className="flex items-center space-x-6 sm:space-x-8 pt-1 sm:pt-2">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <Info className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5 drop-shadow">
                  INQUIRE
                </span>
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5 drop-shadow">
                  VISIT
                </span>
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md backdrop-blur-md">
                  <PenTool className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5 drop-shadow">
                  APPLY
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. BOTTOM SCROLL INDICATOR (Fades out immediately on scroll)        */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        style={{
          opacity: indicatorOpacity,
          y: indicatorY,
        }}
        className="relative z-20 pb-4 text-center"
      >
        <button
          onClick={scrollToContent}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-all cursor-pointer backdrop-blur-md"
        >
          <span>Scroll Down to Discover Campus</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
        </button>
      </motion.div>
    </section>
  );
}
