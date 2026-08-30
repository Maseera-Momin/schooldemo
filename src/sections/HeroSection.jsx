import React from 'react';
import BlurText from '../react-bits/BlurText';
import { Info, MapPin, PenTool, ArrowDown, Video, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { schoolDetails } from '../data/schoolData';
import HeroVideoPlayer from '../components/HeroVideoPlayer';

export default function HeroSection({ setActivePage }) {
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
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#022459] via-[#043b8c] to-[#011940] text-white overflow-hidden flex flex-col justify-center">
      {/* Background Pattern and subtle ambient glow */}
      <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Headline & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            {/* School Title */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Nurturing Wisdom &
              </h1>
              <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#a8d4ff] font-light leading-tight">
                <BlurText text="Values for Life" delay={120} animateBy="letters" />
              </div>
            </div>

            {/* Highlights Mini Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1 text-[11px] sm:text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-medium">
                🏛️ 19 Classrooms
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-medium">
                📚 1,373 Books Library
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-medium">
                🚻 22 Clean Toilets
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 text-white font-medium">
                💻 5 Computers
              </span>
            </div>

            {/* Action Buttons Container */}
            <div className="pt-2 sm:pt-3 space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContent}
                  className="inline-flex items-center justify-between gap-3 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-orange-950/40 transition-all cursor-pointer"
                >
                  <span>Explore School Details</span>
                  <ArrowDown className="w-4 h-4 text-slate-950" />
                </motion.button>

                {/* Video Gallery Link */}
                <a
                  href="#video-gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenGallery();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold tracking-wider transition-all cursor-pointer"
                >
                  <Video className="w-4 h-4 text-pink-400" />
                  <span>Watch School Videos</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-300" />
                </a>
              </div>

              {/* Circular Action Icons: INQUIRE, VISIT, APPLY */}
              <div className="flex items-center space-x-6 pt-1 sm:pt-2">
                <button
                  onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5">
                    INQUIRE
                  </span>
                </button>

                <button
                  onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5">
                    VISIT
                  </span>
                </button>

                <button
                  onClick={() => { setActivePage('admissions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-sm">
                    <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-blue-200 group-hover:text-white uppercase mt-1.5">
                    APPLY
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Continuous Full-Bleed Video Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <HeroVideoPlayer onOpenGallery={handleOpenGallery} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

