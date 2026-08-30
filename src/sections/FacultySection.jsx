import React from 'react';
import { facultyList, schoolDetails } from '../data/schoolData';
import { motion } from 'motion/react';
import { Award, Mail, GraduationCap, Users, Phone } from 'lucide-react';

export default function FacultySection({ setActivePage }) {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
              FACULTY & LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Experienced & Compassionate Educators
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Led by Head Teacher <strong>SAWANT JAYSHREE TANAJI</strong>, with 14 passionate educators (4 Male, 4 Female & 5 Pre-Primary teachers).
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('faculty');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
          >
            View Full Faculty Directory
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyList.map((teacher, idx) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 w-full overflow-hidden bg-slate-200 relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#04439c] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {teacher.department}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#04439c] transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#be185d]">{teacher.role}</p>

                  <div className="flex items-start gap-1.5 text-xs text-slate-500 pt-1">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{teacher.degree}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-3">
                    {teacher.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2 rounded-lg bg-white border border-slate-200 hover:bg-[#04439c] hover:text-white text-xs font-bold text-[#04439c] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" /> Contact School Office
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
