import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { schoolDetails } from '../data/schoolData';

export default function PrincipalSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-[#021f4a] via-[#043b8c] to-[#011a3d] rounded-3xl overflow-hidden text-white shadow-2xl border border-blue-900 grid grid-cols-1 lg:grid-cols-12">
          {/* Headmaster Card & Mission Emblem */}
          <div className="lg:col-span-5 relative bg-gradient-to-b from-[#011438] via-[#021f4a] to-[#043b8c] flex flex-col items-center justify-center p-8 text-center min-h-[260px] lg:min-h-[480px] border-b lg:border-b-0 lg:border-r border-blue-900/60">
            {/* Logo Crest */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-400 overflow-hidden shadow-2xl bg-white p-1 mb-4">
              <img
                src="/images/dattabal_logo.png"
                alt="Shri Dattabal Mission Divine"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                LEADERSHIP & ADMINISTRATION
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                SAWANT JAYSHREE TANAJI
              </h3>
              <p className="text-xs text-blue-200 font-semibold">
                Head Teacher · B.A., B.Ed., D.T.Ed.
              </p>
              <p className="text-[11px] text-slate-400">
                Shri Dattabal Vidyamandir, Kolhapur
              </p>
            </div>
          </div>


          {/* Principal Message Content */}
          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Quote className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#a8d4ff]">
              MESSAGE FROM THE HEAD TEACHER
            </span>

            <blockquote className="font-serif italic text-lg sm:text-xl lg:text-2xl text-blue-50 leading-relaxed font-light">
              "Quality foundational education is the true catalyst for every child's holistic growth. By blending discipline, cultural values, and modern inquiry, we prepare each student for a bright future."
            </blockquote>

            <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
              At <strong>SHRI DATTABAL VIDYAMANDIR</strong>, Kolhapur, we believe that education must build strong character, cultural rootedness, and scientific inquiry. Established in 1989 under <strong>Shri Dattabal Mission Divine</strong>, our 14 dedicated educators (8 primary & 5 pre-primary teachers) nurture curiosity in 19 spacious classrooms, supported by our rich 1,373-book library, sports playground, and computer lab.
            </p>

            <div className="pt-4 border-t border-blue-800/80 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-base sm:text-lg">SAWANT JAYSHREE TANAJI</h4>
                <p className="text-xs text-amber-300 font-semibold">Head Teacher</p>
                <p className="text-[11px] text-slate-300">Shri Dattabal Vidyamandir, Kolhapur</p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs text-blue-200">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Est. 1989</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
