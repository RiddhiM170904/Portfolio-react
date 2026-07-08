import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Vasudha — SIH Final 2025',
    role: 'Full Stack Developer | Blockchain & AI',
    type: 'Smart India Hackathon 2025 | Grand Finale',
    description: 'Architected a full-stack digital ecosystem for AMU and MRL monitoring serving 6 stakeholder roles — from manufacturers and distributors to retailers and regulators. Reached the SIH 2025 Grand Finale among 1200+ teams nationwide. Implemented Blockchain-based traceability across all 6 stakeholders for immutable audit records linking prescriptions to retail dispensing.',
    tech: ['React.js', 'Node.js', 'Blockchain', 'AI', 'Mobile App', 'Express.js'],
    github: 'https://github.com/dhairyagothi/VASUDHA',
    live: 'https://www.vasudha-dahd.app/',
    image: '/projects/vasudha.png',
    badge: '🏆 SIH Grand Finale 2025',
    accent: '#e879f9',
  },
  {
    title: 'Smart Flow Traffic Management',
    role: 'ML Model Development | Full Stack',
    type: 'Published Patent · Indian Patent Office',
    description: 'Engineered a real-time computer vision system for adaptive multi-lane vehicle detection achieving 92%+ accuracy with sub-200ms inference latency. Constructed a full-stack monitoring dashboard with Flask API and React.js frontend for live detection visualization and dynamic signal control.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'React.js'],
    github: 'https://github.com/RiddhiM170904/Smart-Flow-Traffic-Management-System-',
    live: 'https://youtu.be/UpaVo8AtwxQ',
    image: '/projects/smartflow.png',
    badge: '📜 Published Patent',
    accent: '#f59e0b',
  },
  {
    title: 'Samvidhan Path',
    role: 'Frontend & Backend Developer',
    type: 'Group Project | Civic Education Platform',
    description: 'Designed and delivered a full-stack constitutional education web application with RESTful APIs and a responsive UI for interactive learning. Integrated quiz, timeline, and article modules using a MongoDB-backed Node.js REST API, supporting 500+ active users across India.',
    tech: ['React.js', 'Node.js', 'Express.js', 'TailwindCSS', 'MongoDB'],
    github: 'https://github.com/RiddhiM170904/Samvidhan-Path',
    live: 'https://samvidhan-path.vercel.app',
    image: '/projects/samvidhan.png',
    badge: null,
    usersBadge: '👥 500+ Active Users',
    accent: '#a78bfa',
  },
  {
    title: 'WasteSort AI',
    role: 'ML Model Development | Backend',
    type: 'Group Project | AI-Powered Sustainability',
    description: 'AI-powered waste classification system using real-time object detection to categorize waste into recyclables, organics, and hazardous materials. Integrates a YOLOv8 model with a responsive web interface for instant visual feedback and disposal guidance.',
    tech: ['Python', 'YOLOv8', 'Streamlit', 'React.js', 'Flask'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://waste-sortai.vercel.app',
    image: '/projects/wastesort.png',
    badge: null,
    accent: '#34d399',
  },
  {
    title: 'Swasthya Saarthi',
    role: 'Backend Developer',
    type: 'Hackathon | HealthTech',
    description: 'A healthcare accessibility platform simplifying digital health services for rural and semi-urban users. Features appointment booking, symptom checker, and health record management with a focus on seamless UX, multilingual support, and a robust REST API architecture.',
    tech: ['Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'React.js'],
    github: 'https://github.com/RiddhiM170904',
    live: 'https://swasthya-saarthi.vercel.app',
    image: '/projects/swasthya.png',
    badge: null,
    accent: '#60a5fa',
  },
  {
    title: 'My Konkan (Konkan Diaries)',
    role: 'Full Stack Developer',
    type: 'Solo Project | Travel & Culture Platform',
    description: 'A visually immersive travel and cultural discovery platform celebrating the Konkan coastline of India. Features curated destination guides, local cuisine, hidden gems, and travel tips with a rich photo-gallery interface and smooth scroll-based storytelling.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'Vercel'],
    github: 'https://github.com/RiddhiM170904/My-Konkan',
    live: 'https://konkandiaries.vercel.app',
    image: '/projects/konkan.png',
    badge: null,
    accent: '#fb923c',
  },
  {
    title: 'DDoS Attack Detection — CIC-DDoS2019',
    role: 'ML Research | Data Science',
    type: 'Academic Project | Cybersecurity',
    description: 'End-to-end machine learning pipeline on the 30GB CIC-DDoS2019 dataset for binary DDoS attack classification. Implemented EDA, feature engineering, PCA-based dimensionality reduction, class balancing, and trained KNN, Logistic Regression, and Random Forest models — with comprehensive visualizations and diagnostic dashboards.',
    tech: ['Python', 'scikit-learn', 'pandas', 'PCA', 'seaborn', 'Jupyter'],
    github: 'https://github.com/RiddhiM170904/CIC-DDOS-2019--Analysis',
    live: 'https://github.com/RiddhiM170904/CIC-DDOS-2019--Analysis',
    image: '/projects/ddos.png',
    badge: null,
    accent: '#f43f5e',
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
