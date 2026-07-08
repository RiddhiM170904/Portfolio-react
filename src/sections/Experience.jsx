import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const ACCENT = { work: '#e879f9', oss: '#a78bfa' };

const expData = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    org: 'Enginow',
    duration: 'Jan 2026 – Feb 2026',
    location: 'Remote',
    type: 'Internship',
    accent: ACCENT.work,
    badge: 'Internship',
    highlights: [
      'Shipped real-time full-stack features using React.js, Node.js, Express.js, and MongoDB on a weekly release cadence within an Agile sprint structure.',
      'Integrated multiple third-party REST APIs and streamlined backend data flow to support consistent weekly production deployments.',
      'Monitored release stability across sprints and collaborated with cross-functional teams for feature delivery.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Agile'],
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC)',
    duration: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    type: 'Open Source',
    accent: ACCENT.oss,
    badge: 'GSSoC 2024',
    highlights: [
      'Contributed to multiple frontend and full-stack open-source repositories using React.js, resolving issues and improving code quality and technical documentation.',
      'Reviewed and merged pull requests across distributed teams, delivering cleaner, more maintainable UI components.',
      'Progressed to Project Admin (SSoC 2025), leading architecture decisions, code reviews, and contributor mentoring.',
    ],
    skills: ['React.js', 'Node.js', 'Open Source', 'Code Review', 'Documentation'],
  },
];

const achievements = [
  {
    icon: '🏆',
    title: 'SIH 2025 National Runner-Up',
    desc: 'Secured Smart India Hackathon 2025 National Runner-Up among 1000+ teams nationwide for a production-ready full-stack solution created for a Government Ministry.',
    color: '#e879f9',
  },
  {
    icon: '📜',
    title: 'Published Indian Patent',
    desc: 'Published an Indian Patent for a real-time AI-based traffic lane prioritization system, recognised by the Government of India.',
    color: '#f59e0b',
  },
  {
    icon: '💼',
    title: 'Industrial Immersion',
    desc: 'Completed a two-week industrial immersion across Bangalore and Chennai, gaining exposure to enterprise Agile workflows and SDLC practices.',
    color: '#34d399',
  },
  {
    icon: '⭐',
    title: 'SSoC 2025 Project Admin',
    desc: 'Progressed to Project Admin in Social Summer of Code 2025 — led architecture decisions, code reviews, and contributor mentoring.',
    color: '#a78bfa',
  },
];

/* ── Exp Card ────────────────────────────────────────────────── */
const ExpCard = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative ml-6 mb-8"
  >
    {/* Timeline line segment */}
    <div className="absolute -left-6 top-5 w-px h-full" style={{ background: `linear-gradient(180deg, ${data.accent} 0%, transparent 100%)` }} />
    {/* Timeline dot */}
    <div className="absolute -left-[28px] top-5 w-4 h-4 rounded-full" style={{ background: data.accent, boxShadow: `0 0 10px ${data.accent}` }}>
      <motion.div
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
        style={{ background: data.accent }}
      />
    </div>

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-hover holo-card p-5 rounded-2xl transition-all duration-300"
      style={{ borderLeft: `2px solid ${data.accent}30` }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${data.accent}60`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = `${data.accent}30`; }}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap mb-3">
        <div>
          <h3 className="font-bold text-white text-base">{data.title}</h3>
          <p className="font-medium text-sm mt-0.5" style={{ color: data.accent }}>{data.org}</p>
          <div className="flex flex-wrap gap-1.5 text-xs text-gray-500 font-mono mt-1">
            <span>{data.duration}</span><span>•</span><span>{data.location}</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono flex-shrink-0"
          style={{ background: `${data.accent}15`, color: data.accent, border: `1px solid ${data.accent}30` }}>
          {data.badge}
        </span>
      </div>

      <div className="space-y-1.5 mb-3">
        {data.highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: data.accent }} />
            {h}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {data.skills.map(s => (
          <span key={s} className="chip text-[10px]" style={{ background: `${data.accent}10`, color: data.accent, borderColor: `${data.accent}25` }}>
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

/* ── Achievement Card ────────────────────────────────────────── */
const AchCard = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.03, y: -4 }}
    className="glass-hover holo-card p-5 rounded-2xl"
    style={{ borderLeft: `3px solid ${data.color}50` }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 25px ${data.color}15`; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div className="text-3xl mb-3">{data.icon}</div>
    <h4 className="font-bold text-white text-sm mb-2">{data.title}</h4>
    <p className="text-gray-400 text-xs leading-relaxed">{data.desc}</p>
  </motion.div>
);

/* ── Experience ──────────────────────────────────────────────── */
const Experience = ({ standalone = false }) => (
  <section id="experience" className={`py-20 md:py-28 bg-dark-800/40 relative overflow-hidden${standalone ? ' pt-32 md:pt-36 min-h-screen' : ''}`}>
    <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/6 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="section-label">Journey</p>
        <h2 className="section-title">Experience & <span className="gradient-text">Achievements</span></h2>
        <div className="section-divider mx-auto" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
            <FiBriefcase className="text-primary-400 w-5 h-5" /> Work Experience
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px opacity-30" style={{ background: 'linear-gradient(180deg, #e879f9, #a78bfa, transparent)' }} />
            {expData.map((e, i) => <ExpCard key={e.id} data={e} index={i} />)}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
            <FiUsers className="text-violet-400 w-5 h-5" /> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => <AchCard key={i} data={a} index={i} />)}
          </div>

          {/* Competitive Programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 glass-hover holo-card p-5 rounded-2xl"
            style={{ borderLeft: '3px solid rgba(232,121,249,0.4)' }}
          >
            <h4 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
              <FaCode className="text-primary-400" /> Competitive Programming & Open Source
            </h4>
            <div className="flex gap-6 text-center mb-4">
              {[
                { label: 'LeetCode', value: '380+', sub: 'Rating: 1513', color: '#e879f9' },
                { label: 'Codeforces', value: '793', sub: 'Rating',       color: '#a78bfa' },
                { label: 'GitHub',    value: '750+', sub: 'Contributions', color: '#34d399' },
              ].map(item => (
                <div key={item.label} className="flex-1">
                  <p className="text-2xl font-bold font-mono" style={{ color: item.color }}>{item.value}</p>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.label}<br />{item.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Active contributor on GSSoC, Hacktoberfest, and SWoC — merging scalable full-stack features across React.js and Node.js repositories.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
