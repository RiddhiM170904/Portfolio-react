import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Vasudha — SIH '25 Runner-Up",
    role: 'Full Stack Developer | Blockchain & AI',
    type: 'Smart India Hackathon 2025 | National Finalist',
    description: 'Architected a full-stack digital ecosystem for AMU and MRL monitoring serving 6 stakeholder roles. Secured SIH 2025 National Runner-Up among 1200+ teams. Implemented Blockchain-based traceability across all 6 stakeholders for immutable audit records linking prescriptions to retail dispensing.',
    tech: ['React.js', 'Node.js', 'Blockchain', 'AI', 'Mobile App', 'Express.js'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://vasudha-dahd.app',
    image: '/projects/vasudha.png',
    badge: '🏆 SIH Runner-Up',
    accent: '#e879f9',
  },
  {
    title: 'Smart Flow Traffic Management',
    role: 'ML Model Development | Full Stack',
    type: 'Published Patent · Indian Patent Office',
    description: 'Engineered a real-time computer vision system for multi-lane vehicle detection achieving 92%+ accuracy with sub-200ms inference latency. Constructed a full-stack monitoring dashboard with Flask API and React.js frontend for live detection visualization.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'React.js'],
    github: 'https://github.com/RiddhiM170904/Smart-Flow-Traffic-Management-System-',
    live: 'https://github.com/RiddhiM170904/Smart-Flow-Traffic-Management-System-',
    image: '/projects/smartflow.png',
    badge: '📜 Published Patent',
    accent: '#f59e0b',
  },
  {
    title: 'Samvidhan Path',
    role: 'Frontend & Backend Developer',
    type: 'Group Project | Civic Education Platform',
    description: 'Designed and delivered a full-stack constitutional education web application with RESTful APIs and a responsive UI for interactive learning. Integrated quiz, timeline, and article modules using a MongoDB-backed Node.js REST API, supporting 500+ active users.',
    tech: ['React.js', 'Node.js', 'Express.js', 'TailwindCSS', 'MongoDB'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://samvidhan-path.vercel.app',
    image: '/projects/samvidhan.png',
    badge: null,
    usersBadge: '👥 500+ Active Users',
    accent: '#a78bfa',
  },
  {
    title: 'Waste Sort AI',
    role: 'ML Model Development / Backend',
    type: 'Group Project | AI-based',
    description: 'AI-powered waste classification system using real-time object detection and ML model integration to sort waste into categories with a clean web interface.',
    tech: ['Python', 'YOLOv8', 'Streamlit', 'React.js', 'Flask'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://github.com/RiddhiM170904',
    image: '/projects/wastesort.png',
    badge: null,
    accent: '#34d399',
  },
  {
    title: 'Station Saarthi',
    role: 'Fullstack Developer',
    type: 'Smart India Hackathon | Gov Problem Statement',
    description: 'A smart navigation system for railway stations designed to guide passengers in real-time using maps and indoor wayfinding technology.',
    tech: ['React.js', 'Node.js', 'Google Maps API'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://github.com/RiddhiM170904',
    image: '/projects/station.png',
    badge: null,
    accent: '#fb923c',
  },
  {
    title: 'Swasthya Saarthi',
    role: 'Backend Developer',
    type: 'Hackathon | HealthTech',
    description: 'A healthcare accessibility platform simplifying digital health for remote areas and common users, with a focus on seamless UX and robust API architecture.',
    tech: ['Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'React.js'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://github.com/RiddhiM170904',
    image: '/projects/swasthya.png',
    badge: null,
    accent: '#60a5fa',
  },
];

/* ── Project Card ────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;
  const a = project.accent;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({ x: ((e.clientY - cy) / (rect.height / 2)) * -7, y: ((e.clientX - cx) / (rect.width / 2)) * 7 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative"
    >
      {/* Timeline node */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10"
        style={{ background: a, boxShadow: `0 0 12px ${a}` }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ background: a }}
        />
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        className="ml-6 md:ml-8 rounded-2xl overflow-hidden cursor-default holo-card"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
          border: `1px solid ${isHovered ? a + '50' : a + '20'}`,
          boxShadow: isHovered ? `0 8px 40px ${a}18` : 'none',
          transform: isHovered ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'perspective(800px)',
          transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
      >
        <div className="p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {/* Image */}
            <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden flex-shrink-0">
              <motion.img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  {project.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 mt-0.5 flex-shrink-0">
                      {project.badge}
                    </span>
                  )}
                  {project.usersBadge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: `${a}15`, color: a, border: `1px solid ${a}40` }}>
                      {project.usersBadge}
                    </span>
                  )}
                </div>
                <p className="text-sm mb-0.5 font-medium" style={{ color: a }}>{project.role}</p>
                <p className="text-xs text-gray-500">{project.type}</p>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                    style={{ background: `${a}12`, color: a, border: `1px solid ${a}25` }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs">
                  <FiGithub className="w-4 h-4" /> GitHub
                </motion.a>
                <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1.5 transition-colors text-xs"
                  style={{ color: a }}>
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Projects ────────────────────────────────────────────────── */
const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const lineH = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '100%']), { stiffness: 100, damping: 30 });
  const lineO = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const lineGlow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,121,249,0.06),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'rgba(232,121,249,0.08)' }}>
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: lineH,
                opacity: lineO,
                background: 'linear-gradient(180deg, #e879f9 0%, #a78bfa 50%, #34d399 100%)',
                boxShadow: useTransform(lineGlow, [0, 1], ['0 0 0px rgba(232,121,249,0)', '0 0 18px rgba(232,121,249,0.7)']),
              }}
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
