import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Skills',     href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Contact',    href: '/contact' },
];

const Navigation = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-violet-500 flex items-center justify-center text-dark-900 font-bold font-mono text-sm shadow-[0_0_15px_rgba(232,121,249,0.5)]">
                  R
                </div>
                <span className="font-bold text-white text-lg tracking-wide group-hover:text-primary-300 transition-colors">
                  Riddhi<span className="text-primary-400">.</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={link.href}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block ${
                        active
                          ? 'text-primary-300'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-lg bg-primary-400/10 border border-primary-400/20"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/riddhinew.pdf"
                download="Riddhi_Resume.pdf"
                className="btn-primary text-xs px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-3.5 h-3.5" />
                Resume
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-900/98 backdrop-blur-xl border-b border-white/8 md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-primary-400/10 text-primary-300 border border-primary-400/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <a href="/riddhinew.pdf" download="Riddhi_Resume.pdf" className="btn-primary w-full justify-center text-sm">
                  <FiDownload className="w-4 h-4" /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
