import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, User, Camera, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { trusteesList } from '../data/schoolData';

function TrusteeCard({ trustee, idx }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.4 }}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full"
    >
      <div>
        {/* Photo Container / Empty Space for Trustee Photo */}
        <div className="relative p-4 sm:p-5 pb-0">
          <div className="w-full aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/80 border-2 border-dashed border-slate-300 group-hover:border-amber-400/80 transition-colors relative flex flex-col items-center justify-center p-4 sm:p-6 text-center shadow-inner">
            {!hasError && trustee.image ? (
              <img
                src={trustee.image}
                alt={trustee.name}
                onError={() => setHasError(true)}
                className="w-full h-full object-cover object-top rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2.5">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-amber-500 group-hover:scale-105 transition-all">
                  <User className="w-7 h-7 sm:w-10 sm:h-10 text-slate-400" />
                </div>
                <div className="space-y-0.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                    <Camera className="w-3 h-3 text-amber-600" />
                    Photo Space
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    (Ready for Trustee Photo)
                  </p>
                </div>
              </div>
            )}

            {/* Official Emblem Stamp */}
            <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 p-0.5 shadow-sm">
              <img
                src="/images/dattabal_logo.png"
                alt="Shri Dattabal Mission Divine"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Trustee Information */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[#04439c] text-[11px] font-bold uppercase tracking-wider border border-blue-100 mb-1.5">
              {trustee.role}
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-2xl text-slate-900 leading-tight">
              {trustee.name}
            </h3>
            <p className="text-xs text-amber-700 font-semibold mt-0.5">
              {trustee.trust}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5 line-clamp-3 sm:line-clamp-none">
            {trustee.bio}
          </p>
        </div>
      </div>

      {/* Card Footer Badge */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Trust Board Member
          </span>
          <span className="font-semibold text-slate-700">Since 1989</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection({ setActivePage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Photo / Card Swap Animation (Fast 2s cycle)
  useEffect(() => {
    if (isPaused || trusteesList.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trusteesList.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="about-summary" className="py-14 sm:py-20 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            GOVERNANCE & TRUST MANAGEMENT
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            Board of Trustees
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Guiding <strong>Shri Dattabal Vidyamandir</strong> under the divine patronage of <strong>Shri Dattabal Mission Divine, Kolhapur</strong>. Committed to providing character, scientific temperament, and affordable educational excellence since 1989.
          </p>
        </div>

        {/* Mobile Minimal Auto-Swap Carousel (< md screens) */}
        <div 
          className="md:hidden mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              {trusteesList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-7 bg-[#04439c]' 
                      : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to trustee ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {currentIndex + 1} of {trusteesList.length} Trustees
            </span>
          </div>

          {/* Animated Auto-Swapping Card */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={trusteesList[currentIndex].id}
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <TrusteeCard trustee={trusteesList[currentIndex]} idx={0} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop 3-Column Grid (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-14">
          {trusteesList.map((trustee, idx) => (
            <TrusteeCard key={trustee.id} trustee={trustee} idx={idx} />
          ))}
        </div>

        {/* Trust Mission & Heritage Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#021f4a] via-[#043b8c] to-[#011438] p-6 sm:p-10 text-white shadow-xl border border-blue-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 bg-white p-1 shrink-0 shadow-lg">
                <img
                  src="/images/dattabal_logo.png"
                  alt="Shri Dattabal Mission Divine"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-base sm:text-xl text-white">
                  Shri Dattabal Mission Divine Trust
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 max-w-2xl">
                  Private Aided institution registered in Kolhapur, Maharashtra. Serving thousands of families with value-rich English and Semi-English education from Nursery to Grade 10.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => {
                  if (setActivePage) setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex-1 md:flex-initial"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Trust Office</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (setActivePage) setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer flex-1 md:flex-initial"
              >
                <span>School Legacy</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

