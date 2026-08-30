import React from 'react';
import { achievementStats } from '../data/schoolData';
import CountUp from '../react-bits/CountUp';
import { motion } from 'motion/react';

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 px-3.5 py-1 bg-white/10 rounded-full border border-amber-400/30">
            KEY MILESTONES & STATISTICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            35+ Years of Educational Excellence
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90">
            Empowering generations of students in Kolhapur with quality education, values, discipline, and modern infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {achievementStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-1.5 shadow-lg hover:border-amber-400/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-300">
                <CountUp to={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <h3 className="font-bold text-white text-xs sm:text-sm">{stat.label}</h3>
              <p className="text-[11px] text-blue-200/80">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
