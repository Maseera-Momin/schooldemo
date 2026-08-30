import React from 'react';
import AcademicsOverview from '../sections/AcademicsOverview';
import AchievementsSection from '../sections/AchievementsSection';
import FacultySection from '../sections/FacultySection';

export default function AcademicsPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            CURRICULUM EXCELLENCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Academics at Shri Dattabal Vidyamandir
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            From joyful Pre-Primary play-way foundations to Primary & Upper Primary conceptual clarity, practical science experiments, mathematics, and digital literacy.
          </p>
        </div>
      </div>

      <AcademicsOverview setActivePage={setActivePage} />
      <AchievementsSection />
      <FacultySection setActivePage={setActivePage} />
    </div>
  );
}
