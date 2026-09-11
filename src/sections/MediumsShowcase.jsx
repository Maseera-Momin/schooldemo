import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { mediumStreams } from '../data/schoolData';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Languages,
  Layers,
  HelpCircle,
  Award
} from 'lucide-react';

export default function MediumsShowcase({ setActivePage }) {
  const [activeMediumId, setActiveMediumId] = useState('english');
  const [showComparison, setShowComparison] = useState(false);

  const activeStream =
    mediumStreams.find((stream) => stream.id === activeMediumId) ||
    mediumStreams[0];

  return (
    <section
      id="mediums-showcase"
      className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#04439c] text-xs font-bold uppercase tracking-widest">
            <Languages className="w-3.5 h-3.5" />
            <span>TWO ACADEMIC PATHWAYS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            English & Semi-English Medium Wings
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Shri Dattabal Vidyamandir, we understand that every child thrives in a tailored linguistic environment. We offer two dedicated streams under the Maharashtra State Board, both built on academic rigour and moral values.
          </p>

          {/* Interactive Wing Switcher Buttons */}
          <div className="pt-3 flex flex-wrap justify-center gap-2.5 sm:gap-4">
            {mediumStreams.map((stream) => {
              const isSelected = activeMediumId === stream.id;
              const isEnglish = stream.id === 'english';

              return (
                <button
                  key={stream.id}
                  onClick={() => setActiveMediumId(stream.id)}
                  className={`relative px-5 py-3 sm:px-7 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-sm flex items-center gap-2.5 ${
                    isSelected
                      ? isEnglish
                        ? 'bg-[#04439c] text-white shadow-blue-900/25 shadow-lg scale-102 ring-2 ring-blue-400/30'
                        : 'bg-[#0d9488] text-white shadow-teal-900/25 shadow-lg scale-102 ring-2 ring-teal-400/30'
                      : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected
                        ? 'bg-amber-300 animate-pulse'
                        : isEnglish
                        ? 'bg-blue-600'
                        : 'bg-teal-600'
                    }`}
                  />
                  <span>{stream.title}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {stream.grades}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stream Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStream.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-12"
          >
            {/* Top Accent Strip */}
            <div
              className={`h-2.5 w-full ${
                activeStream.id === 'english'
                  ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500'
                  : 'bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-500'
              }`}
            />

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Stream Details & Highlights */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          activeStream.id === 'english'
                            ? 'bg-blue-50 text-[#04439c] border border-blue-200'
                            : 'bg-teal-50 text-teal-800 border border-teal-200'
                        }`}
                      >
                        {activeStream.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {activeStream.grades}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                      {activeStream.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                      {activeStream.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeStream.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-1">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" /> Key Features of this Wing
                    </h4>
                    <div className="space-y-2.5">
                      {activeStream.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              activeStream.id === 'english'
                                ? 'text-blue-600'
                                : 'text-teal-600'
                            }`}
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div
                    className={`p-4 rounded-2xl border ${
                      activeStream.id === 'english'
                        ? 'bg-blue-50/60 border-blue-100 text-blue-950'
                        : 'bg-teal-50/60 border-teal-100 text-teal-950'
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">
                      <strong>Best Suited For:</strong> {activeStream.idealFor}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => {
                        setActivePage('admissions');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer ${
                        activeStream.id === 'english'
                          ? 'bg-[#04439c] hover:bg-[#022c6b]'
                          : 'bg-[#0d9488] hover:bg-[#0f766e]'
                      }`}
                    >
                      Apply for {activeStream.title.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setShowComparison(!showComparison)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-slate-600" />
                      {showComparison ? 'Hide Comparison Table' : 'Compare Both Streams Side-by-Side'}
                    </button>
                  </div>
                </div>

                {/* Right Column: Medium of Instruction Per Subject */}
                <div className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <h4 className="font-serif font-bold text-slate-900 text-base flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#04439c]" />
                      Curriculum Subject Matrix
                    </h4>
                    <span className="text-[10px] font-mono uppercase bg-slate-200 px-2 py-0.5 rounded font-semibold text-slate-700">
                      MSBSHSE Board
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">
                    Teaching language distribution for subjects in the <strong>{activeStream.title}</strong>:
                  </p>

                  <div className="space-y-2">
                    {activeStream.subjectBreakdown.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3 text-xs"
                      >
                        <span className="font-semibold text-slate-800">
                          {item.subject}
                        </span>
                        <span
                          className={`shrink-0 font-bold text-[11px] px-2.5 py-1 rounded-md ${
                            item.medium.includes('English')
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {item.medium}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#04439c] shrink-0" />
                    <span>Follows the Maharashtra State Board (SSC) syllabus standard.</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Side-by-Side Direct Comparison Section (Collapsible / Expandable) */}
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-lg overflow-x-auto mb-8"
          >
            <div className="mb-6">
              <span className="text-xs font-bold text-[#04439c] uppercase tracking-wider">
                TRANSPARENT EVALUATION
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                English Medium vs. Semi-English Medium at a Glance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                A clear overview to help families make the right choice for their student's educational trajectory.
              </p>
            </div>

            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 font-bold text-slate-900 w-1/3">Feature / Academic Area</th>
                  <th className="py-3 px-4 font-bold text-[#04439c] w-1/3">
                    🇬🇧 English Medium Wing
                  </th>
                  <th className="py-3 px-4 font-bold text-teal-700 w-1/3">
                    🇮🇳 Semi-English Medium Wing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Grades Offered</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Nursery to Grade 10</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Grade 1 to Grade 10</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Science & Mathematics</td>
                  <td className="py-3 px-4 text-blue-700 font-semibold">Taught 100% in English</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">Taught 100% in English</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Social Studies (Hist / Geo / Civics)</td>
                  <td className="py-3 px-4 text-blue-700 font-semibold">Taught in English</td>
                  <td className="py-3 px-4 text-amber-700 font-semibold">Taught in Marathi</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Language Subjects</td>
                  <td className="py-3 px-4 text-slate-700">English (1st Lang), Marathi, Hindi</td>
                  <td className="py-3 px-4 text-slate-700">Marathi (1st Lang), English, Hindi</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Primary Linguistic Focus</td>
                  <td className="py-3 px-4 text-slate-700">Spoken English fluency, phonics, global terminology</td>
                  <td className="py-3 px-4 text-slate-700">Strong concept clarity, effortless retention in mother tongue</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-semibold text-slate-800">Board Examination (SSC)</td>
                  <td className="py-3 px-4 text-slate-700">Maharashtra SSC Board in English</td>
                  <td className="py-3 px-4 text-slate-700">Maharashtra SSC Board (Semi-English stream)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-800">Ideal Career Pathways</td>
                  <td className="py-3 px-4 text-slate-700">Engineering, Medicine, International Studies, Corporate</td>
                  <td className="py-3 px-4 text-slate-700">Engineering, Medicine, State Services (MPSC), Science stream</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Quick Assurance Strip */}
        <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#04439c] text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                Need Guidance Choosing Between English & Semi-English?
              </h5>
              <p className="text-[11px] sm:text-xs text-slate-600">
                Our academic counselors and teachers evaluate every student during admission to recommend the best medium.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-[#04439c] font-bold text-xs border border-slate-200 shadow-xs cursor-pointer shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consult Counselor</span>
          </button>
        </div>

      </div>
    </section>
  );
}
