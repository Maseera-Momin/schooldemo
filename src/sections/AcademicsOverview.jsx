import React, { useState } from 'react';
import { academicLevels } from '../data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function AcademicsOverview({ setActivePage }) {
  const [selectedTab, setSelectedTab] = useState(academicLevels[0].id);

  const activeLevel = academicLevels.find((tab) => tab.id === selectedTab) || academicLevels[0];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
            ACADEMIC DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Foundations of Wisdom from Pre-Primary to Grade 7
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Following the Maharashtra State Curriculum framework, our curriculum nurtures conceptual clarity, mathematical confidence, and creative expression.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 gap-1.5 flex-wrap justify-center shadow-inner">
            {academicLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedTab(level.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedTab === level.id
                    ? 'bg-[#04439c] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {level.id === 'pre-primary' ? 'Pre-Primary (Nursery / KG)' : level.id === 'primary' ? 'Primary School (Grades 1–4)' : 'Upper Primary (Grades 5–7)'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#be185d] tracking-wider uppercase">
                    {activeLevel.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    {activeLevel.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeLevel.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#04439c]" /> Core Subjects & Key Curriculum Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeLevel.subjects.map((sub, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setActivePage('academics');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
                  >
                    View Full Academic Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Illustration Card */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                  <div className="w-full h-48 rounded-xl overflow-hidden relative">
                    <img
                      src={activeLevel.id === 'pre-primary' ? "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" : activeLevel.id === 'primary' ? "/src/assets/images/library.jpg" : "/src/assets/images/science_lab.jpg"}
                      alt={activeLevel.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white text-xs font-bold bg-black/60 px-2.5 py-1 rounded-md">
                      {activeLevel.id === 'pre-primary' ? '5 Pre-Primary Educators' : '8 Primary & Upper Primary Teachers'}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Teaching Methodology
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeLevel.approach}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
