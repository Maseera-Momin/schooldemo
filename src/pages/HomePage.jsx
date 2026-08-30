import React from 'react';
import HeroSection from '../sections/HeroSection';
import QuickInfoStrip from '../components/QuickInfoStrip';
import AboutSection from '../sections/AboutSection';
import PrincipalSection from '../sections/PrincipalSection';
import HighlightsSection from '../sections/HighlightsSection';
import AcademicsOverview from '../sections/AcademicsOverview';
import WhyChooseUs from '../sections/WhyChooseUs';
import FacilitiesSection from '../sections/FacilitiesSection';
import VideosReelsSection from '../sections/VideosReelsSection';
import EventsSection from '../sections/EventsSection';
import AchievementsSection from '../sections/AchievementsSection';
import GallerySection from '../sections/GallerySection';
import FacultySection from '../sections/FacultySection';
import AdmissionsTimeline from '../sections/AdmissionsTimeline';
import ContactSection from '../sections/ContactSection';

export default function HomePage({ setActivePage }) {
  return (
    <main className="w-full">
      <HeroSection setActivePage={setActivePage} />
      <QuickInfoStrip setActivePage={setActivePage} />
      <AboutSection setActivePage={setActivePage} />
      <PrincipalSection />
      <HighlightsSection />
      <AcademicsOverview setActivePage={setActivePage} />
      <WhyChooseUs />
      <FacilitiesSection setActivePage={setActivePage} />
      <VideosReelsSection setActivePage={setActivePage} />
      <EventsSection setActivePage={setActivePage} />
      <AchievementsSection />
      <GallerySection setActivePage={setActivePage} />
      <FacultySection setActivePage={setActivePage} />
      <AdmissionsTimeline setActivePage={setActivePage} />
      <ContactSection />
    </main>
  );
}
