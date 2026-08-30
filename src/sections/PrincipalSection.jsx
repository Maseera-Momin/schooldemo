import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { schoolDetails } from '../data/schoolData';

export default function PrincipalSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-[#021f4a] via-[#043b8c] to-[#011a3d] rounded-3xl overflow-hidden text-white shadow-2xl border border-blue-900 grid grid-cols-1 lg:grid-cols-12">
          {/* Headmaster Image & Mission Emblem */}
          <div className="lg:col-span-5 relative bg-slate-900 flex flex-col justify-end">
            <img
              src="/images/principal.jpg"
              alt="Sawant Jayshree Tanaji - Head Teacher"
              className="w-full h-full object-cover min-h-[380px] lg:min-h-[480px] opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021f4a] via-transparent to-transparent" />

            {/* Emblem badge over photo */}
            <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                <img
                  src="/images/dattabal_logo.png"
                  alt="Shri Dattabal Mission Divine"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-bold text-amber-300">Shri Dattabal Vidyamandir</span>
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
