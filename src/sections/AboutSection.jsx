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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100 bg-white">
              <img
                src="/images/hero_campus.jpg"
                alt="Shri Dattabal Vidyamandir Campus"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              {/* Floating Mission Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 text-slate-900 shadow-xl flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500 overflow-hidden bg-white shrink-0 shadow-md">
                  <img
                    src="/images/dattabal_logo.png"
                    alt="Shri Dattabal Mission Divine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-slate-900">
                    Shri Dattabal Mission Divine Kolhapur
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    "Fostering wisdom, values, and character through 35+ years of trusted educational excellence."
                  </p>
                </div>
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
              <strong>SHRI DATTABAL VIDYAMANDIR</strong> was established in <strong>1989</strong> and is managed as a <strong>Private Aided</strong> institution under <strong>Shri Dattabal Mission Divine Kolhapur</strong>. Situated in the urban area of Kolhapur block in Kolhapur district, Maharashtra, our school is approachable by all-weather roads and provides a nurturing, disciplined environment for children from <strong>Pre-Primary through Grade 7</strong>.
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
