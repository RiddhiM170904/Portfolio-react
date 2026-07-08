import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './index.css';

/* ── Cursor Spotlight ───────────────────────────────────────── */
const CursorSpotlight = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[3]"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(232,121,249,0.04) 0%, transparent 70%)`,
      }}
    />
  );
};

/* ── Route → Section scroll handler ────────────────────────── */
// Maps URL path to section id
const PATH_TO_SECTION = {
  '/about':      'about',
  '/skills':     'skills',
  '/experience': 'experience',
  '/projects':   'projects',
  '/contact':    'contact',
};

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = PATH_TO_SECTION[location.pathname];
    if (sectionId) {
      // Small delay so the page has fully rendered before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return null;
};

/* ── App ─────────────────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <CursorSpotlight />

        {/* Global ambient orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[140px]" style={{ animation: 'float 18s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-violet-600/4 rounded-full blur-[120px]" style={{ animation: 'float 22s ease-in-out infinite reverse' }} />
        </div>

        <Navigation />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
