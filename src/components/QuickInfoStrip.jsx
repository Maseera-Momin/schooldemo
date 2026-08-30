import React from 'react';
import { quickInfoItems } from '../data/schoolData';
import { ArrowRight, Calendar, Clock, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function QuickInfoStrip({ setActivePage }) {
  const getIcon = (idx) => {
    switch(idx) {
      case 0: return <UserCheck className="w-5 h-5 text-[#be185d]" />;
      case 1: return <Calendar className="w-5 h-5 text-[#04439c]" />;
      case 2: return <Clock className="w-5 h-5 text-amber-600" />;
      default: return <Sparkles className="w-5 h-5 text-[#04439c]" />;
    }
  };

  return (
    <section className="bg-white border-y border-slate-200 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {quickInfoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex flex-col justify-between p-3 ${idx !== 0 ? 'sm:pl-6' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {getIcon(idx)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#04439c]">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium mb-1">{item.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description}</p>
              </div>

              <button
                onClick={() => {
                  setActivePage(item.actionLink);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors group cursor-pointer"
              >
                {item.actionText}
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
