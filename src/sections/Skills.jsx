import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaPython, FaDatabase, FaJava,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiCplusplus, SiNumpy, SiMongodb, SiExpress, SiPostman, SiTypescript,
  SiNextdotjs, SiMysql, SiTensorflow, SiOpencv, SiFlask, SiPandas, SiLinux,
} from 'react-icons/si';

const CAT = {
  'Frontend':    '#e879f9',
  'Backend':     '#a78bfa',
  'Languages':   '#f59e0b',
  'Database':    '#fb923c',
  'AI / ML':     '#34d399',
  'DevOps':      '#60a5fa',
  'Design':      '#f43f5e',
  'Core CS':     '#e879f9',
};

const ROW1 = [
  { icon: FaHtml5,      name: 'HTML5',        cat: 'Frontend' },
  { icon: FaCss3Alt,    name: 'CSS3',          cat: 'Frontend' },
  { icon: FaJs,         name: 'JavaScript',    cat: 'Languages' },
  { icon: SiTypescript, name: 'TypeScript',    cat: 'Languages' },
  { icon: SiTailwindcss,name: 'TailwindCSS',   cat: 'Frontend' },
  { icon: FaReact,      name: 'React.js',      cat: 'Frontend' },
  { icon: SiNextdotjs,  name: 'Next.js',       cat: 'Frontend' },
  { icon: FaNodeJs,     name: 'Node.js',       cat: 'Backend' },
  { icon: SiExpress,    name: 'Express.js',    cat: 'Backend' },
  { icon: SiFlask,      name: 'Flask',         cat: 'Backend' },
  { icon: FaPython,     name: 'Python',        cat: 'Languages' },
  { icon: SiCplusplus,  name: 'C++',           cat: 'Languages' },
  { icon: FaJava,       name: 'Java',          cat: 'Languages' },
  { icon: FaDatabase,   name: 'SQL',           cat: 'Database' },
  { icon: SiMongodb,    name: 'MongoDB',       cat: 'Database' },
];

const ROW2 = [
  { icon: SiMysql,      name: 'MySQL',         cat: 'Database' },
  { icon: SiNumpy,      name: 'NumPy',         cat: 'AI / ML' },
  { icon: SiPandas,     name: 'Pandas',        cat: 'AI / ML' },
  { icon: SiTensorflow, name: 'TensorFlow',    cat: 'AI / ML' },
  { icon: SiOpencv,     name: 'OpenCV',        cat: 'AI / ML' },
  { icon: FaFigma,      name: 'Figma',         cat: 'Design' },
  { icon: FaGitAlt,     name: 'Git & GitHub',  cat: 'DevOps' },
  { icon: SiLinux,      name: 'Linux / Bash',  cat: 'DevOps' },
  { icon: SiPostman,    name: 'Postman',       cat: 'DevOps' },
  { icon: FaDatabase,   name: 'Azure',         cat: 'DevOps' },
  { icon: FaDatabase,   name: 'Vercel',        cat: 'DevOps' },
  { icon: FaDatabase,   name: 'CI/CD',         cat: 'DevOps' },
  { icon: FaDatabase,   name: 'DSA',           cat: 'Core CS' },
  { icon: FaDatabase,   name: 'System Design', cat: 'Core CS' },
  { icon: FaDatabase,   name: 'Agile/Scrum',   cat: 'Core CS' },
];

const SkillCard = ({ icon: Icon, name, cat }) => {
  const color = CAT[cat] || '#e879f9';
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -5 }}
      className="flex-shrink-0 flex flex-col items-center p-4 mx-2 rounded-xl glass-hover cursor-default"
      style={{ minWidth: '90px', borderColor: `${color}20` }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-2 rounded-xl" style={{ color, background: `${color}15` }}>
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-white text-[11px] font-medium text-center leading-tight">{name}</span>
      <span className="text-[9px] mt-0.5 font-mono" style={{ color: `${color}80` }}>{cat}</span>
    </motion.div>
  );
};

const MarqueeRow = ({ skills, dir = 'left' }) => {
  const doubled = [...skills, ...skills];
  return (
    <div className="overflow-hidden relative mb-3 marquee-fade">
      <div className={`flex ${dir === 'left' ? 'animate-marquee' : 'animate-marquee-r'}`}>
        {doubled.map((s, i) => <SkillCard key={i} {...s} />)}
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <p className="section-label">My Arsenal</p>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <div className="section-divider mx-auto" />
      </motion.div>
    </div>

    <MarqueeRow skills={ROW1} dir="left" />
    <MarqueeRow skills={ROW2} dir="right" />

    {/* Category legend */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2">
        {Object.entries(CAT).map(([cat, color]) => (
          <span key={cat} className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full"
            style={{ background: `${color}12`, color, border: `1px solid ${color}30` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />{cat}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
