import React, { useState } from 'react';
import { schoolDetails, nearbySchools } from '../data/schoolData';
import { Phone, Mail, MapPin, Clock, ArrowUp, Facebook, Instagram, Youtube, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const [showNearby, setShowNearby] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00173b] text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-blue-950 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
        {/* Col 1: School Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-amber-400 overflow-hidden bg-white shrink-0">
              <img
                src="/src/assets/images/dattabal_logo.png"
                alt="Shri Dattabal Mission Divine Kolhapur"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-serif font-extrabold text-sm sm:text-base leading-tight">
                SHRI DATTABAL VIDYAMANDIR
              </div>
              <div className="text-[#a8d4ff] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                Kolhapur, Maharashtra (Est. 1989)
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Established in 1989 under the auspices of <strong>Shri Dattabal Mission Divine Kolhapur</strong>. A Private Aided Co-educational institution providing quality foundational education from Pre-Primary to Grade 7.
          </p>
          <div className="flex space-x-3 pt-1">
            <a
              href="https://www.instagram.com/reel/DcEXBU1T8p8/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center text-white hover:scale-110 transition-all shadow-md active:scale-95"
              aria-label="Instagram Reels"
              title="Official Instagram Reels"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={schoolDetails.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#04439c] transition-colors active:scale-95"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={schoolDetails.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors active:scale-95"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: School Links */}
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-5 border-b border-blue-900/60 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">About Shri Dattabal Vidyamandir</button></li>
            <li><button onClick={() => handleNav('academics')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Academics (Pre-Primary to Grade 7)</button></li>
            <li><button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Admissions 2026–27 (Enrollment)</button></li>
            <li><button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">19 Classrooms & 1,373-Book Library</button></li>
            <li><button onClick={() => handleNav('faculty')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Head Teacher & Faculty (14 Teachers)</button></li>
            <li><button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Videos & Instagram Reels Hub</button></li>
          </ul>
        </div>

        {/* Col 3: Quick Info & Campus */}
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-5 border-b border-blue-900/60 pb-2">
            Campus & Information
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><button onClick={() => handleNav('events')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">School Annual Events Calendar</button></li>
            <li><button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Official Videos & Photo Gallery</button></li>
            <li><button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">19 Classrooms & Sports Ground</button></li>
            <li><button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Admissions Criteria & Checklist</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer text-left py-0.5">Kolhapur Campus Location & Route</button></li>
          </ul>
        </div>

        {/* Col 4: Contact Information */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-5 border-b border-blue-900/60 pb-2">
            School Office
          </h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{schoolDetails.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="tel:+912312654890" className="hover:text-white">{schoolDetails.phone}</a>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="mailto:dattabalvidyamandir.kop@gmail.com" className="hover:text-white break-all">{schoolDetails.email}</a>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{schoolDetails.officeHours}</span>
          </div>
        </div>
      </div>

      {/* Nearby Schools in Kolhapur Accordion */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
          <button
            onClick={() => setShowNearby(!showNearby)}
            className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-amber-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>⛿ Schools in Nearby Areas (Kolhapur District)</span>
            {showNearby ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showNearby && (
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {nearbySchools.map((sch, i) => (
                <a
                  key={i}
                  href={sch.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-slate-300 hover:text-amber-200 flex items-center gap-1 transition-colors p-1.5 rounded hover:bg-white/5"
                >
                  <ExternalLink className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{sch.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 sm:pt-8 border-t border-blue-950/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3 sm:gap-4 text-center md:text-left">
        <p>© 2026 SHRI DATTABAL VIDYAMANDIR, KOLHAPUR (Shri Dattabal Mission Divine). All rights reserved.</p>

        <div className="flex items-center space-x-5 sm:space-x-6">
          <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
          <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">Terms</button>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-amber-400 hover:text-white transition-colors cursor-pointer font-semibold"
          >
            Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

