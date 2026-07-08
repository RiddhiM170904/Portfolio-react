import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Skills',     href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Contact',    href: '/contact' },
];

const SOCIALS = [
  { icon: FaGithub,    href: 'https://github.com/RiddhiM170904',                  label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://linkedin.com/in/riddhi-mhadgut-3b0a21289', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/riddhi_mdt',                 label: 'Instagram' },
  { icon: SiLeetcode,  href: 'https://leetcode.com/u/Riddhi_Mhadgut/',           label: 'LeetCode' },
  { icon: FaEnvelope,  href: 'mailto:riddhimhadgut17@gmail.com',                 label: 'Email' },
];

const Footer = () => (
  <footer className="relative bg-dark-950 border-t border-white/8 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary-500/8 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-violet-500 flex items-center justify-center text-dark-900 font-bold font-mono text-sm shadow-[0_0_15px_rgba(232,121,249,0.4)]">
              R
            </div>
            <span className="font-bold text-white text-lg">Riddhi<span className="text-primary-400">.</span></span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Full-Stack Developer &amp; AI/ML Engineer. Building production-grade web apps and intelligent systems.
          </p>
          <div className="flex gap-3 mt-4">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-primary-300 hover:border-primary-400/30 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-mono">Navigation</h4>
          <div className="grid grid-cols-2 gap-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-gray-500 text-sm hover:text-primary-300 transition-colors duration-200 py-0.5"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 font-mono">Quick Contact</h4>
          <div className="space-y-2">
            <a href="mailto:riddhimhadgut17@gmail.com" className="text-gray-500 text-sm hover:text-primary-300 transition-colors block">
              riddhimhadgut17@gmail.com
            </a>
            <a href="tel:+919109356746" className="text-gray-500 text-sm hover:text-primary-300 transition-colors block">
              +91 9109356746
            </a>
            <p className="text-gray-600 text-sm">Dewas, Madhya Pradesh, India</p>
          </div>
          <motion.a
            href="/Riddhinew.pdf"
            download
            className="inline-flex items-center gap-2 mt-4 text-xs font-mono text-primary-300 border border-primary-400/30 px-3 py-1.5 rounded-lg hover:bg-primary-400/10 transition-all duration-200"
            whileHover={{ scale: 1.04 }}
          >
            ↓ Download Resume
          </motion.a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-600 text-xs font-mono">
          © {new Date().getFullYear()} Riddhi Mhadgut. All rights reserved.
        </p>
        <p className="text-gray-700 text-xs font-mono flex items-center gap-1.5">
          Made with <FaHeart className="text-primary-400 w-3 h-3" /> using React &amp; TailwindCSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
