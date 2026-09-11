import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Award, BookOpen, ShieldCheck, Heart } from 'lucide-react';
import { schoolDetails } from '../data/schoolData';

export default function AboutSection({ setActivePage }) {
  return (
    <section id="about-summary" className="py-20 bg-[#f8fafc] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: School Emblem & Campus Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100/60 bg-gradient-to-br from-[#021f4a] via-[#043b8c] to-[#011438] p-6 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[420px] text-white">
              {/* Top Seal */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                  Est. 1989 · 35+ Years Legacy
                </span>
                <span className="text-xs text-blue-200 font-semibold">Kolhapur, Maharashtra</span>
              </div>

              {/* Center Logo Showcase */}
              <div className="my-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-amber-400 overflow-hidden shadow-2xl bg-white p-1 mb-4">
                  <img
                    src="/images/dattabal_logo.png"
                    alt="Shri Dattabal Mission Divine Kolhapur"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide">
                  श्री दत्तबाळ विद्यामंदिर
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold mt-1">
                  SHRI DATTABAL MISSION DIVINE, KOLHAPUR
                </p>
              </div>

              {/* Bottom Mission Strip */}
              <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 text-center">
                <p className="text-xs text-blue-100 italic">
                  "Nurturing wisdom, character, and foundational excellence for every child."
                </p>
              </div>
            </div>

            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100/60 rounded-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#04439c] text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>ABOUT OUR SCHOOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              35+ Years of Dedicated Education & Character Building
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>SHRI DATTABAL VIDYAMANDIR</strong> was established in <strong>1989</strong> and is managed as a <strong>Private Aided</strong> institution under <strong>Shri Dattabal Mission Divine Kolhapur</strong>. Situated in the urban area of Kolhapur block in Kolhapur district, Maharashtra, our school is approachable by all-weather roads and provides a nurturing, disciplined environment for children from <strong>Nursery through Grade 10</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "19 Classrooms in Excellent Condition",
                "Rich Library with 1,373 Curated Books",
                "5 Computers for Digital Literacy",
                "22 Clean Toilets (12 Boys & 10 Girls)",
                "Full Electricity & Purified Tap Water",
                "Dedicated Playground for Sports & Drills"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActivePage('facilities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
              >
                View Facilities
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
