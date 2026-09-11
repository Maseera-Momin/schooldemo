import React, { useState, useEffect, useMemo } from 'react';
import { instagramReelsList } from '../data/schoolData';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Unlock
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* LUXURY REEL CARD (CONCENTRIC DOUBLE-BEZEL)                                 */
/* -------------------------------------------------------------------------- */
function ModernReelCard({
  reel,
  direction,
  onSwipe,
  interactMode,
  setInteractMode,
  currentIndex,
  total,
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-240, 0, 240], [-12, 0, 12]);
  const likeOpacity = useTransform(x, [25, 90], [0, 1]);
  const passOpacity = useTransform(x, [-25, -90], [0, 1]);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const velocityThreshold = 180;
    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      onSwipe('right');
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onSwipe('left');
    }
  };

  return (
    <motion.div
      key={reel.id}
      style={{ x, rotate, touchAction: 'pan-y' }}
      drag={!interactMode ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      variants={{
        enter: () => ({
          scale: 0.95,
          y: 12,
          opacity: 0.7,
        }),
        center: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 360, damping: 26 },
        },
        exit: (dir) => ({
          x: dir === 'right' ? 440 : dir === 'left' ? -440 : 0,
          rotate: dir === 'right' ? 18 : dir === 'left' ? -18 : 0,
          opacity: 0,
          scale: 0.9,
          transition: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
        }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      className="absolute inset-0 z-30 p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col select-none touch-pan-y"
    >
      {/* Inner Concentric Core Frame */}
      <div className="relative w-full h-full rounded-[calc(2rem-0.5rem)] bg-slate-950 overflow-hidden flex flex-col border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
        
        {/* Subtle Minimalist Swipe Stamp: NEXT */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="pointer-events-none absolute top-14 left-4 z-40 px-3 py-1 rounded-full border border-emerald-400/80 bg-emerald-950/90 text-emerald-300 text-[10px] font-mono font-bold tracking-wider uppercase rotate-[-8deg] shadow-[0_0_20px_rgba(52,211,153,0.4)] backdrop-blur-md flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>NEXT REEL</span>
        </motion.div>

        {/* Subtle Minimalist Swipe Stamp: PASS */}
        <motion.div
          style={{ opacity: passOpacity }}
          className="pointer-events-none absolute top-14 right-4 z-40 px-3 py-1 rounded-full border border-rose-400/80 bg-rose-950/90 text-rose-300 text-[10px] font-mono font-bold tracking-wider uppercase rotate-[8deg] shadow-[0_0_20px_rgba(244,63,94,0.4)] backdrop-blur-md flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          <span>PREVIOUS</span>
        </motion.div>

        {/* Card Header Bar */}
        <div className="px-3.5 py-2.5 bg-slate-950/90 border-b border-white/10 flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shrink-0">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-white tracking-tight truncate">
                  shridattabalvidyamandir
                </span>
                <CheckCircle2 className="w-3 h-3 text-blue-400 fill-blue-400/20 shrink-0" />
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide font-mono">
                {reel.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
              {String(currentIndex + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Middle Video Container (Instagram Embed) */}
        <div className="relative flex-grow w-full bg-black overflow-hidden flex items-center justify-center">
          <iframe
            key={reel.id}
            src={reel.embedUrl}
            title={reel.title}
            className={`w-full h-full border-0 ${!interactMode ? 'pointer-events-none' : 'pointer-events-auto'}`}
            allowFullScreen
            scrolling="no"
            loading="lazy"
          />

          {/* Swipe Mode Touch Shield */}
          {!interactMode ? (
            <div
              className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing flex flex-col justify-between p-3.5 touch-pan-y"
              title="Swipe card left or right"
            >
              <div className="mx-auto mt-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-medium tracking-wide flex items-center gap-1.5 shadow-lg pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                <span>Swipe left / right to browse</span>
              </div>

              <div className="mt-auto flex justify-center pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInteractMode(true);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-white/20 text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-xl transition-all cursor-pointer backdrop-blur-md active:scale-95"
                >
                  <Unlock className="w-3 h-3 text-pink-400" />
                  <span>Tap to Play / Unmute</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setInteractMode(false);
                }}
                className="px-3.5 py-1.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white border border-pink-400/50 text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-2xl transition-all cursor-pointer active:scale-95"
              >
                <Lock className="w-3 h-3" />
                <span>Lock to Swipe Mode</span>
              </button>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="px-3.5 py-2.5 bg-slate-950/95 border-t border-white/10 flex items-center justify-between gap-3 shrink-0 z-30">
          <div className="min-w-0 space-y-0.5">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-white truncate">
              {reel.title}
            </h4>
            <p className="text-[10px] text-slate-400 truncate">
              {reel.description}
            </p>
          </div>

          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all shrink-0 cursor-pointer group"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN VIDEOS & REELS SHOWCASE COMPONENT                                     */
/* -------------------------------------------------------------------------- */
export default function VideosReelsSection({ setActivePage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [interactMode, setInteractMode] = useState(false);

  // Exclusively official Instagram reels
  const reels = useMemo(() => {
    return instagramReelsList.filter((item) => !item.isLocal && item.embedUrl);
  }, []);

  const total = reels.length;
  const safeIndex = total > 0 ? ((currentIndex % total) + total) % total : 0;
  const currentReel = reels[safeIndex];
  const nextReel = total > 1 ? reels[(safeIndex + 1) % total] : null;
  const nextNextReel = total > 2 ? reels[(safeIndex + 2) % total] : null;

  const handleNext = () => {
    setSwipeDirection('right');
    setCurrentIndex((prev) => (prev + 1) % total);
    setInteractMode(false);
  };

  const handlePrev = () => {
    setSwipeDirection('left');
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setInteractMode(false);
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, total]);

  return (
    <section
      className="py-12 sm:py-20 bg-[#030712] text-white relative overflow-hidden"
      id="video-gallery"
    >
      {/* Cinematic Ambient Radial Glow Mesh */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Clean Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-pink-300 text-[11px] font-mono tracking-widest uppercase backdrop-blur-md">
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>CAMPUS REELS & STORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Watch Campus Life in Action
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Experience the vibrant spirit of <strong>Shri Dattabal Vidyamandir</strong> through our official Instagram video reels, cultural gatherings, and student achievements.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* CENTERPIECE: 3D CARD STACK DECK                                    */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-col items-center">
          {/* Card Stack Deck */}
          <div className="relative w-[88vw] max-w-[340px] sm:max-w-[370px] h-[490px] xs:h-[520px] sm:h-[560px] mx-auto flex items-center justify-center">
            
            {/* Card 2 (Bottom Layer) */}
            {nextNextReel && (
              <div
                style={{
                  transform: 'scale(0.88) translateY(28px)',
                  opacity: 0.4,
                  zIndex: 10,
                }}
                className="absolute inset-0 rounded-[2rem] bg-slate-900 border border-white/10 shadow-xl overflow-hidden pointer-events-none transition-all duration-300 flex flex-col justify-between p-4"
              >
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{nextNextReel.category}</span>
                </div>
                <p className="text-xs text-slate-400 font-medium truncate">{nextNextReel.title}</p>
              </div>
            )}

            {/* Card 1 (Middle Layer) */}
            {nextReel && (
              <div
                style={{
                  transform: 'scale(0.94) translateY(14px)',
                  opacity: 0.75,
                  zIndex: 20,
                }}
                className="absolute inset-0 rounded-[2rem] bg-slate-900/90 border border-white/15 shadow-xl overflow-hidden pointer-events-none transition-all duration-300 flex flex-col justify-between p-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>{nextReel.category}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">Up Next</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-white truncate">{nextReel.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{nextReel.description}</p>
                </div>
              </div>
            )}

            {/* Card 0 (Active Top Card) */}
            {currentReel && (
              <AnimatePresence custom={swipeDirection} mode="popLayout">
                <ModernReelCard
                  key={currentReel.id}
                  reel={currentReel}
                  direction={swipeDirection}
                  onSwipe={(dir) => (dir === 'right' ? handleNext() : handlePrev())}
                  interactMode={interactMode}
                  setInteractMode={setInteractMode}
                  currentIndex={safeIndex}
                  total={total}
                />
              </AnimatePresence>
            )}
          </div>

          {/* Minimalist Floating Glass Control Island */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-xl">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 group"
              aria-label="Previous reel"
              title="Previous Reel"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* 7 Reel Dot Indicators */}
            <div className="flex items-center gap-1.5 px-2">
              {reels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSwipeDirection(i > safeIndex ? 'right' : 'left');
                    setCurrentIndex(i);
                    setInteractMode(false);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === safeIndex
                      ? 'w-5 bg-gradient-to-r from-pink-500 to-rose-500 shadow-sm shadow-pink-500/50'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to reel ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 group"
              aria-label="Next reel"
              title="Next Reel"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Banner: Direct Profile Follow */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-[2rem] bg-gradient-to-r from-pink-950/30 via-slate-900/50 to-blue-950/30 border border-white/10 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                Follow @shridattabalvidyamandir on Instagram
              </h3>
              <p className="text-xs text-slate-400">
                Official updates, student achievements, Lezim drills, and school events.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/reel/DcEXBU1T8p8/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm tracking-wide shadow-xl transition-all whitespace-nowrap cursor-pointer active:scale-95"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Visit Instagram Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
