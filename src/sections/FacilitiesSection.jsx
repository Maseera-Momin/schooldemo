import React from 'react';
import { facilitiesList } from '../data/schoolData';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function FacilitiesSection({ setActivePage }) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
              CAMPUS & INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Well-Equipped Modern Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Private school premises with 19 instructional classrooms, 1,373-book library, 5-computer unit, and 22 clean toilets.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('facilities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
          >
            Explore All Facilities <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 h-80 cursor-pointer"
              onClick={() => {
                setActivePage('facilities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-900/80 backdrop-blur-md text-blue-200 border border-blue-700/50">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
