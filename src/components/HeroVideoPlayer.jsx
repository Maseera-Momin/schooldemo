import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VolumeX, Sparkles } from 'lucide-react';

export default function HeroVideoPlayer({ onOpenGallery }) {
  const [currentScene, setCurrentScene] = useState(0);

  // Scenes capturing campus environment, trees, classrooms, and school life
  const scenes = [
    {
      title: "Main Campus Entrance & Tree-lined Pathway",
      sub: "Shri Dattabal Vidyamandir",
      image: "/images/hero_campus.jpg",
      pan: { scale: [1, 1.12], x: [0, -10], y: [0, -8] }
    },
    {
      title: "19 Classrooms & Daily Learning",
      sub: "Active Primary Education",
      image: "/images/classroom.jpg",
      pan: { scale: [1.08, 1.2], x: [8, -8], y: [-4, 4] }
    },
    {
      title: "School Library (1,373+ Books)",
      sub: "Saraswati Library & Reading Center",
      image: "/images/library.jpg",
      pan: { scale: [1, 1.15], x: [-8, 8], y: [0, -10] }
    },
    {
      title: "Sports Playground & Lezim Drills",
      sub: "Athletics & Physical Training",
      image: "/images/sports_ground.jpg",
      pan: { scale: [1.1, 1], x: [0, 10], y: [-8, 0] }
    },
    {
      title: "Annual Gathering & Cultural Celebrations",
      sub: "Student Arts & Heritage",
      image: "/images/cultural_gathering.jpg",
      pan: { scale: [1, 1.16], x: [10, -10], y: [4, -4] }
    }
  ];


  // Continuous auto-rotation every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [scenes.length]);

  const activeScene = scenes[currentScene];

  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[370px] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/50 bg-slate-950 flex flex-col group mx-auto">
      {/* Top Floating Status Pill */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Continuous Campus Video</span>
        </div>

        <div className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-slate-300 text-[9px] sm:text-[10px] font-bold">
          <VolumeX className="w-3 h-3 text-slate-400" />
          <span>Muted</span>
        </div>
      </div>

      {/* Main Video Viewport - Zero white frames, zero play button, 100% pure continuous motion */}
      <div className="relative w-full aspect-[9/16] max-h-[460px] sm:max-h-[520px] bg-black overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={activeScene.image}
              alt={activeScene.title}
              animate={{
                scale: activeScene.pan.scale,
                x: activeScene.pan.x,
                y: activeScene.pan.y,
              }}
              transition={{
                duration: 4,
                ease: "linear",
              }}
              className="w-full h-full object-cover"
            />
            {/* Cinematic subtle gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
          </motion.div>
        </AnimatePresence>

        {/* Scene progress bars at top */}
        <div className="absolute top-10 sm:top-12 left-3 sm:left-4 right-3 sm:right-4 z-20 flex gap-1 sm:gap-1.5">
          {scenes.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden backdrop-blur-sm"
            >
              {currentScene === idx && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.8, ease: "linear" }}
                  className="h-full bg-amber-400"
                />
              )}
              {idx < currentScene && <div className="h-full w-full bg-amber-400" />}
            </div>
          ))}
        </div>

        {/* Bottom scene caption inside viewport */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 space-y-1">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1 drop-shadow">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {activeScene.sub}
          </span>
          <h4 className="font-serif font-bold text-xs sm:text-sm md:text-base text-white leading-snug drop-shadow-md line-clamp-1">
            {activeScene.title}
          </h4>
        </div>
      </div>

      {/* Bottom Info & Action Bar */}
      <div className="p-3 sm:p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs relative z-10">
        <div className="text-slate-400 text-[10px] sm:text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <span>7 Official Videos</span>
        </div>
        <button
          onClick={onOpenGallery}
          className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>All Videos</span>
          <span className="text-sm font-black">→</span>
        </button>
      </div>
    </div>
  );
}

