import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaProjectDiagram, FaTools, FaGithub, FaBrain, FaTrophy,
  FaGraduationCap, FaCertificate, FaMedal, FaLaptopCode,
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

/* ── Animated Counter ───────────────────────────────────────── */
const useCounter = (target, start) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let n = 0;
    const steps = 60, inc = target / steps;
    const id = setInterval(() => {
      n += inc;
      if (n >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(n));
    }, 1800 / steps);
    return () => clearInterval(id);
  }, [start, target]);
  return count;
};

/* ── Stat Card ──────────────────────────────────────────────── */
const StatCard = ({ number, suffix = '+', label, icon: Icon, color, delay, inView }) => {
  const count = useCounter(number, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative glass-hover holo-card p-5 text-center"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)` }} />
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
        style={{ background: `${color}18`, color }}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold font-mono mb-1"
        style={{ background: `linear-gradient(135deg, ${color}, #ffffff80)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {count}{suffix}
      </div>
      <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">{label}</p>
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: color }} />
    </motion.div>
  );
};

/* ── Education Card ─────────────────────────────────────────── */
const EduCard = ({ data, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ scale: 1.02 }}
    className="relative glass-hover holo-card p-5 ml-8"
    style={{ borderLeft: `2px solid ${data.color}40` }}
  >
    {/* Timeline dot */}
    <div className="absolute -left-10 top-5 w-4 h-4 rounded-full border-2 border-dark-900 flex-shrink-0"
      style={{ background: data.color, boxShadow: `0 0 10px ${data.color}` }} />

    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
        style={{ background: `${data.color}18` }}>
        {data.icon}
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h3 className="font-bold text-white text-sm">{data.degree}</h3>
          <span className="chip text-[10px]" style={{ background: `${data.color}15`, color: data.color, borderColor: `${data.color}30` }}>
            {data.grade}
          </span>
        </div>
        <p className="text-primary-300 text-sm font-medium mb-0.5">{data.institution}</p>
        <p className="text-gray-500 text-xs font-mono">{data.duration}</p>
        {data.coursework && (
          <div className="flex flex-wrap gap-1 mt-2">
            {data.coursework.map(c => (
              <span key={c} className="chip chip-violet text-[10px]">{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

/* ── Cert Card ──────────────────────────────────────────────── */
const CertCard = ({ data, index, inView }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-36 cursor-pointer"
      style={{ perspective: 900 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div className="absolute inset-0 glass holo-card rounded-2xl p-4 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', borderColor: `${data.color}30` }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${data.color}18`, color: data.color }}>
              <data.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xs leading-snug line-clamp-2">{data.title}</h3>
              <p className="font-mono text-[10px] mt-0.5" style={{ color: data.color }}>{data.org}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-[10px] font-mono">{data.date}</span>
            <span className="text-[9px] text-gray-600 font-mono">Hover →</span>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-4 flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: `linear-gradient(135deg, ${data.color}20, rgba(10,1,24,0.98))`, border: `1px solid ${data.color}40` }}>
          <p className="text-gray-300 text-xs leading-relaxed">{data.desc}</p>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: data.color }} />
            <span className="font-mono text-[10px]" style={{ color: data.color }}>{data.org} · {data.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── About ──────────────────────────────────────────────────── */
const About = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { number: 11,  suffix: '+', label: 'Projects',         icon: FaProjectDiagram, color: '#e879f9', delay: 0 },
    { number: 380, suffix: '+', label: 'LeetCode',         icon: FaBrain,          color: '#a78bfa', delay: 0.1 },
    { number: 750, suffix: '+', label: 'GitHub Contribs',  icon: FaGithub,         color: '#fb7185', delay: 0.2 },
    { number: 9,   suffix: '.07', label: 'CGPA',           icon: FaGraduationCap,  color: '#34d399', delay: 0.3 },
  ];

  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'VIT Bhopal University',
      duration: 'Aug 2023 – Present',
      grade: 'CGPA: 9.07',
      icon: '🎓', color: '#e879f9',
      coursework: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks', 'System Design'],
    },
    {
      degree: 'Class XII — Senior Secondary (CBSE)',
      institution: 'Vindhyachal Academy, Dewas',
      duration: 'May 2022',
      grade: '85.6%',
      icon: '📖', color: '#a78bfa',
      coursework: null,
    },
    {
      degree: 'Class X — Secondary (CBSE)',
      institution: 'Vindhyachal Academy, Dewas',
      duration: 'Apr 2020',
      grade: '95.0%',
      icon: '🌟', color: '#34d399',
      coursework: null,
    },
  ];

  const certs = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Data Science Professional',
      org: 'Oracle', date: 'Sep 2025', color: '#f80000',
      icon: SiOracle,
      desc: 'Highest-tier Oracle certification validating advanced data science and ML skills on Oracle Cloud Infrastructure.',
    },
    {
      title: 'Ethnus MERN Fullstack Developer',
      org: 'Ethnus', date: 'Jul 2025', color: '#00FF7F',
      icon: FaCode,
      desc: 'Comprehensive MERN stack training — MongoDB, Express.js, React.js, and Node.js — with hands-on full-stack app deployment.',
    },
    {
      title: 'Azure Data Fundamentals (DP-900)',
      org: 'Microsoft', date: 'Jun 2025', color: '#0078d4',
      icon: FaLaptopCode,
      desc: 'Foundational Microsoft certification covering Azure data services, relational/non-relational data, and analytics.',
    },
    {
      title: 'ServiceNow Virtual Internship Program (CSA Track)',
      org: 'ServiceNow University', date: 'May 2026', color: '#62e87a',
      icon: FaCertificate,
      desc: 'Hands-on enterprise ITSM workflow automation and platform configuration using ServiceNow.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-dark-800/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I <span className="gradient-text">Am</span></h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => <StatCard key={i} {...s} inView={inView} />)}
        </div>

        {/* Bio + Education */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-6">My Story</h3>

            {[
              {
                emoji: '👩‍💻', color: 'border-primary-400', titleColor: 'text-primary-300',
                title: 'Developer & Problem Solver',
                text: "I'm a passionate Full-Stack Developer and AI/ML Engineer building production-grade web applications and intelligent systems. I've shipped 11+ real-world apps with end-to-end ownership from architecture to deployment.",
              },
              {
                emoji: '🏆', color: 'border-violet-400', titleColor: 'text-violet-300',
                title: 'Achievements',
                text: 'SIH 2025 National Runner-Up (1000+ teams), Published Patent Holder (Indian Patent Office) for an AI-based traffic management system. Active open-source contributor in GSSoC, Hacktoberfest, and SWoC — progressed to Project Admin (SSoC 2025).',
              },
              {
                emoji: '🚀', color: 'border-rose-400', titleColor: 'text-rose-300',
                title: 'Current Focus',
                text: 'Deepening expertise in scalable system design, cloud-native architectures, and AI-powered applications. 380+ LeetCode problems solved (Rating 1513). Always building and always learning.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className={`glass-hover p-5 rounded-2xl border-l-4 ${card.color}`}
              >
                <h4 className={`font-bold mb-2 flex items-center gap-2 ${card.titleColor}`}>
                  <span>{card.emoji}</span>{card.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-primary-400" /> Education
            </h3>
            <div className="relative space-y-5">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 via-violet-500 to-transparent" />
              {education.map((e, i) => <EduCard key={i} data={e} index={i} inView={inView} />)}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <FaCertificate className="text-primary-400" /> Certifications
            <span className="text-gray-600 text-sm font-normal ml-2">— hover to see details</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c, i) => <CertCard key={i} data={c} index={i} inView={inView} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
