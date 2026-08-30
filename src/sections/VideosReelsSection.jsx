import React, { useState } from 'react';
import { instagramReelsList } from '../data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Instagram, ExternalLink, Sparkles, Video, Film, Eye, X, LayoutGrid, Tv } from 'lucide-react';

export default function VideosReelsSection({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [embedMode, setEmbedMode] = useState(true); // default to embedded playable iframes

  const categories = ['All', 'Cultural Events', 'School Life', 'Sports & Drill', 'Classroom', 'Traditions & Values'];

  const filteredReels = activeCategory === 'All'
    ? instagramReelsList
    : instagramReelsList.filter((item) => item.category === activeCategory);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-900 via-[#0a192f] to-slate-950 text-white relative overflow-hidden" id="video-gallery">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#be185d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#04439c]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400" />
            <span>Official Video & Reels Showcase</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Watch Campus Life in Action
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant spirit of <strong>Shri Dattabal Vidyamandir</strong> through our official Instagram video reels, cultural annual gatherings, morning assemblies, Lezim drills, and student achievements.
          </p>
        </div>

        {/* Controls: Category Filters + Embed Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Category Filters - Smooth Touch Scroll on Mobile */}
          <div className="w-full sm:w-auto overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            <div className="inline-flex p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 gap-1 whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Player Display Mode Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700 text-xs shrink-0">
            <button
              onClick={() => setEmbedMode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                embedMode ? 'bg-pink-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Player</span>
            </button>
            <button
              onClick={() => setEmbedMode(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                !embedMode ? 'bg-pink-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredReels.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/90 border border-slate-700/70 shadow-xl hover:shadow-2xl hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {embedMode ? (
                /* Embedded Playable Instagram Frame Container */
                <div className="relative w-full aspect-[9/16] max-h-[460px] bg-black overflow-hidden flex items-center justify-center">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* Card Preview with Play Trigger */
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Instagram Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>{item.type === 'reel' ? 'Reel' : 'Post'}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-blue-900/80 text-blue-200 text-[10px] font-semibold tracking-wider uppercase border border-blue-700/50">
                    {item.date}
                  </div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      onClick={() => setSelectedVideo(item)}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pink-500 transition-all duration-300 cursor-pointer border-2 border-white/40 active:scale-95"
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom title inside image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-snug line-clamp-2 group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Description & Action Bar */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h4 className="font-serif font-bold text-sm text-white line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 transition-all"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-pink-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner with Direct Instagram Follow */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-900/40 via-purple-900/30 to-blue-900/40 border border-pink-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-2xl">
          <div className="flex items-center gap-3 sm:gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-xl text-white">
                Follow Shri Dattabal Vidyamandir on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Stay updated with daily school routines, sports days, student achievements, and special celebrations.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/reel/DcEXBU1T8p8/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-pink-900/50 transition-all whitespace-nowrap"
          >
            <Instagram className="w-4 h-4" />
            <span>Visit Instagram Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Video Lightbox / Embed Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-slate-900 border border-pink-500/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-3.5 sm:p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-pink-300">
                    Official Video Reel
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded Player in Modal */}
              <div className="relative aspect-[9/16] max-h-[480px] w-full bg-black flex items-center justify-center overflow-hidden">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between shrink-0">
                <div className="space-y-0.5 min-w-0 pr-2">
                  <h4 className="font-bold text-xs sm:text-sm text-white line-clamp-1">{selectedVideo.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Shri Dattabal Vidyamandir, Kolhapur</p>
                </div>
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs shadow transition-all shrink-0"
                >
                  <span>App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

