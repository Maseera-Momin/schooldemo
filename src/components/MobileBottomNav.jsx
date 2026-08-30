import React from 'react';
import { Phone, GraduationCap, PlayCircle, MapPin, Home } from 'lucide-react';

export default function MobileBottomNav({ activePage, setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#00173b]/95 backdrop-blur-lg border-t border-blue-900/80 px-2 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto text-center">
        {/* Home */}
        <button
          onClick={() => handleNav('home')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'home' ? 'text-amber-300' : 'text-slate-300 hover:text-white'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* Call Now */}
        <a
          href="tel:+912312654890"
          className="flex flex-col items-center justify-center py-1 text-slate-300 hover:text-emerald-400 transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

        {/* Center Highlight: Apply 2026 */}
        <button
          onClick={() => handleNav('admissions')}
          className="relative -top-2 flex flex-col items-center justify-center"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#be185d] to-[#e11d48] text-white flex items-center justify-center shadow-lg shadow-pink-900/60 border-2 border-white/30 active:scale-95 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black text-pink-300 uppercase tracking-tighter mt-0.5">Apply</span>
        </button>

        {/* Videos / Reels */}
        <button
          onClick={() => handleNav('gallery')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'gallery' ? 'text-amber-300' : 'text-slate-300 hover:text-white'
          }`}
        >
          <PlayCircle className="w-4 h-4 mb-0.5 text-pink-400" />
          <span className="text-[10px] font-bold">Videos</span>
        </button>

        {/* Location / Directions */}
        <button
          onClick={() => handleNav('contact')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePage === 'contact' ? 'text-amber-300' : 'text-slate-300 hover:text-white'
          }`}
        >
          <MapPin className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[10px] font-bold">Contact</span>
        </button>
      </div>
    </div>
  );
}
