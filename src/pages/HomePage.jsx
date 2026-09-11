import React from 'react';
import HeroSection from '../sections/HeroSection';
import QuickInfoStrip from '../components/QuickInfoStrip';
import AboutSection from '../sections/AboutSection';
import PrincipalSection from '../sections/PrincipalSection';
import HighlightsSection from '../sections/HighlightsSection';
import AcademicsOverview from '../sections/AcademicsOverview';
import MediumsShowcase from '../sections/MediumsShowcase';
import WhyChooseUs from '../sections/WhyChooseUs';
import VideosReelsSection from '../sections/VideosReelsSection';
import EventsSection from '../sections/EventsSection';
import AchievementsSection from '../sections/AchievementsSection';
import GallerySection from '../sections/GallerySection';
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
      <MediumsShowcase setActivePage={setActivePage} />
      <AcademicsOverview setActivePage={setActivePage} />
      <WhyChooseUs />
      <VideosReelsSection setActivePage={setActivePage} />
      <EventsSection setActivePage={setActivePage} />
      <AchievementsSection />
      <GallerySection setActivePage={setActivePage} />
      <AdmissionsTimeline setActivePage={setActivePage} />
      <ContactSection />
    </main>
  );
}
