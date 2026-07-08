import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
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

/* ── Page Transition Wrapper ─────────────────────────────────── */
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

/* ── Animated Routes ─────────────────────────────────────────── */
const AnimatedRoutes = () => {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about"      element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/skills"     element={<PageWrapper><SkillsPage /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
        <Route path="/projects"   element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/contact"    element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

/* ── App ─────────────────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        {/* Global effects */}
        <CursorSpotlight />

        {/* Global ambient orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[140px]" style={{ animation: 'float 18s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-violet-600/4 rounded-full blur-[120px]" style={{ animation: 'float 22s ease-in-out infinite reverse' }} />
        </div>

        <Navigation />

        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
