import React, { useState } from 'react';
import { galleryItems } from '../data/schoolData';
import LightboxModal from '../components/LightboxModal';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ChevronDown, ChevronUp, ArrowRight, Images } from 'lucide-react';

export default function GallerySection({ setActivePage, isFullPage = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(isFullPage);

  const categories = ['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Cultural'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const initialLimit = 6;
  const displayedItems = (showAll || isFullPage) ? filteredItems : filteredItems.slice(0, initialLimit);

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full inline-flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5" />
            CAMPUS PHOTO GALLERY
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
            Life at Shri Dattabal Vidyamandir
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Moments capturing our 19 classrooms, 1,373-book library, sports playground, assemblies, and cultural events in Kolhapur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto pb-1.5">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white border border-slate-200 gap-1 sm:gap-1.5 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  if (!isFullPage) setShowAll(false);
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-[11px] sm:text-xs transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#04439c] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 2-Column (Mobile) / 3-Column (Desktop) Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 bg-slate-900 h-40 sm:h-60 lg:h-72 cursor-pointer"
              >
                <img
                  src={item.image || '/images/hero_campus.jpg'}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/hero_campus.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white space-y-0.5 sm:space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-200 inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-xs sm:text-base lg:text-lg text-white group-hover:text-amber-300 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Controls & Show More */}
        {!isFullPage && filteredItems.length > initialLimit && (
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              <span>{showAll ? 'Show Less Photos' : `Show More Photos (+${filteredItems.length - initialLimit})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {setActivePage && (
              <button
                type="button"
                onClick={() => {
                  setActivePage('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Full Media Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal item={selectedImage} items={filteredItems} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}

