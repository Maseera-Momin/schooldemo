import React from 'react';
import { eventsList } from '../data/schoolData';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventsSection({ setActivePage }) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
              UPCOMING EVENTS & TRADITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Life on Campus
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Annual gathering, Independence Day march-past, Teachers' Day, and session opening in Kolhapur.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
          >
            View Full Event Calendar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {eventsList.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 sm:h-44 w-full overflow-hidden">
                  <img
                    src={evt.image || '/images/events/ashadhi-ekadashi.jpg'}
                    alt={evt.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/events/ashadhi-ekadashi.jpg';
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#04439c] text-white rounded-lg p-2 text-center min-w-[54px] shadow-md">
                    <span className="block font-bold text-base leading-none">{evt.day}</span>
                    <span className="block text-[10px] uppercase tracking-wider font-semibold">{evt.month}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#04439c]">
                    {evt.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base line-clamp-2 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2 space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 pt-3">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{evt.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
