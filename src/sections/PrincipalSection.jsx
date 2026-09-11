import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function PrincipalSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
            SCHOOL LEADERSHIP & PRINCIPALS' DESK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Guiding with Vision, Discipline & Values
          </h2>
          <p className="text-sm text-slate-600">
            Dedicated leadership steering academic excellence across our English Medium and Semi-English Medium wings since 1989.
          </p>
        </div>

        {/* Dual Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 1. English Medium Principal */}
          <div className="bg-gradient-to-br from-[#021f4a] via-[#043b8c] to-[#011a3d] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-blue-900 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl border-4 border-amber-400/80 overflow-hidden shadow-2xl bg-slate-900">
                <img
                  src="/images/principal.jpg"
                  alt="Principal Sawant Jayshree Tanaji - English Medium"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-amber-400 bg-white p-0.5 shadow-lg">
                <img
                  src="/images/dattabal_logo.png"
                  alt="Shri Dattabal Mission Divine"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[10px] font-bold uppercase tracking-widest">
                ENGLISH MEDIUM WING
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                SAWANT JAYSHREE TANAJI
              </h3>
              <p className="text-xs text-amber-300 font-semibold">
                Principal · B.A., B.Ed., D.T.Ed.
              </p>
              <p className="text-xs text-blue-100/80 leading-relaxed pt-1">
                Fostering complete English immersion, scientific curiosity, and holistic development from Nursery to Grade 10.
              </p>
            </div>
          </div>

          {/* 2. Semi-English Medium Principal */}
          <div className="bg-gradient-to-br from-[#01353b] via-[#0d5c58] to-[#012229] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-teal-900 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative shrink-0">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl border-4 border-emerald-400/80 overflow-hidden shadow-2xl bg-slate-900">
                <img
                  src="/images/semi-english-principal.jpg"
                  alt="Principal - Semi-English Medium Wing"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/dattabal_logo.png';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-emerald-400 bg-white p-0.5 shadow-lg">
                <img
                  src="/images/dattabal_logo.png"
                  alt="Shri Dattabal Mission Divine"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-[10px] font-bold uppercase tracking-widest">
                SEMI-ENGLISH MEDIUM WING
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                PRINCIPAL
              </h3>
              <p className="text-xs text-emerald-300 font-semibold">
                Principal · Semi-English Medium Wing
              </p>
              <p className="text-xs text-teal-100/80 leading-relaxed pt-1">
                Empowering students with a bilingual technical edge in Science & Mathematics while anchoring strong Marathi cultural roots.
              </p>
            </div>
          </div>
        </div>

        {/* Message from the Principals' Desk */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mx-auto">
            <Quote className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c]">
            MESSAGE FROM THE PRINCIPALS' DESK
          </span>
          <blockquote className="font-serif italic text-lg sm:text-xl text-slate-800 font-normal leading-relaxed">
            "Quality foundational education is the true catalyst for every child's holistic growth. By blending discipline, cultural values, and modern inquiry across our English and Semi-English wings, we prepare every student for a bright future."
          </blockquote>
          <div className="pt-2 text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Shri Dattabal Mission Divine · Established 1989 · Kolhapur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
