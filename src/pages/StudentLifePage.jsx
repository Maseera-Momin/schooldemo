import React from 'react';
import StudentLifeSection from '../sections/StudentLifeSection';
import VideosReelsSection from '../sections/VideosReelsSection';
import GallerySection from '../sections/GallerySection';

export default function StudentLifePage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            ARTS, SPORTS & STUDENT ACTIVITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">Arts, Athletics & Student Life</h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Exploring holistic talents through Kho-Kho, Kabaddi, Lezim drills, cultural gatherings, elocution, and moral development.
          </p>
        </div>
      </div>

      <StudentLifeSection setActivePage={setActivePage} />
      <VideosReelsSection setActivePage={setActivePage} />
      <GallerySection setActivePage={setActivePage} />
    </div>
  );
}
