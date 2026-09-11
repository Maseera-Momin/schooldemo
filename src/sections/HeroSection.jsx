import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowDown, ArrowRight, Video } from 'lucide-react';

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
        <div className="max-w-4xl space-y-5 sm:space-y-7">
          

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

          {/* Dual Medium Academic Wings */}
          <motion.div
            style={{
              y: pillsY,
              opacity: pillsOpacity,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-slate-200 hover:text-white text-xs font-medium tracking-wide backdrop-blur-md transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>English Medium (Nursery – 10th)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-slate-200 hover:text-white text-xs font-medium tracking-wide backdrop-blur-md transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Semi-English Medium (Nursery – 10th)</span>
            </button>
          </motion.div>

          {/* Institutional Actions & Fast Links */}
          <motion.div
            style={{
              y: actionsY,
              opacity: actionsOpacity,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 sm:pt-3 space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Admissions CTA */}
              <button
                type="button"
                onClick={() => {
                  if (setActivePage) setActivePage('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              {/* Secondary Campus Tour / Explore CTA */}
              <button
                type="button"
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] border border-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Explore School</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/70" />
              </button>

              {/* Watch Video Link */}
              <button
                type="button"
                onClick={handleOpenGallery}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/5 active:scale-[0.98] text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Video className="w-4 h-4 text-amber-400" />
                <span>Watch Campus Reel</span>
              </button>
            </div>

            {/* Institutional Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs text-slate-300/80 font-normal">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Govt. Recognized (SSC Board)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                Subhashnagar, Kolhapur
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
                Estd. 1989
              </span>
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
