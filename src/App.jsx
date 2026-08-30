import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import FacilitiesPage from './pages/FacilitiesPage';
import StudentLifePage from './pages/StudentLifePage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import NoticesPage from './pages/NoticesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Global Lenis Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <AboutPage setActivePage={setActivePage} />;
      case 'academics': return <AcademicsPage setActivePage={setActivePage} />;
      case 'admissions': return <AdmissionsPage setActivePage={setActivePage} />;
      case 'faculty': return <FacultyPage setActivePage={setActivePage} />;
      case 'facilities': return <FacilitiesPage setActivePage={setActivePage} />;
      case 'student-life': return <StudentLifePage setActivePage={setActivePage} />;
      case 'events': return <EventsPage setActivePage={setActivePage} />;
      case 'gallery': return <GalleryPage setActivePage={setActivePage} />;
      case 'notices': return <NoticesPage setActivePage={setActivePage} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-[#be185d] selection:text-white pb-14 md:pb-0">
      <ScrollToTop activePage={activePage} />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-grow">{renderPage()}</div>
      <Footer setActivePage={setActivePage} />
      <MobileBottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

