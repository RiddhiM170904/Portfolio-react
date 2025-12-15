
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaJava, FaFigma, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss, SiCanva } from 'react-icons/si';


const Services = () => {
  // Container and bubble sizes for clamping
  const containerW = 900;
  const containerH = 420;
  const pxSizes = { large: 96, medium: 80, small: 56 };
  // Clamp helper
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  // Clamp initial positions so bubbles always start fully inside the box
  const skills = [
    { name: 'React', icon: FaReact, x: -300, y: -90, size: 'large' },
    { name: 'Node.js', icon: FaNodeJs, x: -150, y: -120, size: 'large' },
    { name: 'HTML5', icon: FaHtml5, x: 0, y: -140, size: 'large' },
    { name: 'CSS3', icon: FaCss3Alt, x: 150, y: -120, size: 'large' },
    { name: 'JavaScript', icon: FaJs, x: 300, y: -80, size: 'large' },
    { name: 'Python', icon: FaPython, x: -225, y: 0, size: 'medium' },
    { name: 'Java', icon: FaJava, x: -75, y: 0, size: 'medium' },
    { name: 'Git', icon: FaGitAlt, x: 75, y: 0, size: 'medium' },
    { name: 'Figma', icon: FaFigma, x: 225, y: 0, size: 'medium' },
    { name: 'C++', icon: SiCplusplus, x: -300, y: 100, size: 'medium' },
    { name: 'Tailwind', icon: SiTailwindcss, x: -150, y: 80, size: 'medium' },
    { name: 'Canva', icon: SiCanva, x: 0, y: 100, size: 'medium' },
    { name: 'AWS', icon: FaAws, x: 150, y: 80, size: 'medium' },
    { name: 'TypeScript', icon: FaJs, x: 300, y: 100, size: 'medium' },
  ].map(skill => {
    const pxSize = pxSizes[skill.size];
    const maxX = (containerW / 2) - (pxSize / 2) - 8;
    const maxY = (containerH / 2) - (pxSize / 2) - 8;
    return {
      ...skill,
      x: clamp(skill.x, -maxX, maxX),
      y: clamp(skill.y, -maxY, maxY)
    };
  });

  const sizes = {
    small: 'w-14 h-14 text-base',
    medium: 'w-20 h-20 text-lg',
    large: 'w-24 h-24 text-xl',
  };
  const [bubbleStates, setBubbleStates] = React.useState(
    skills.map(skill => ({ x: skill.x, y: skill.y, isDragging: false }))
  );

  React.useEffect(() => {
    const timeouts = [];
    bubbleStates.forEach((bubble, i) => {
      if (bubble.isDragging) return;
      function move() {
        const maxX = 400, maxY = 180;
        let x = skills[i].x + (Math.random() - 0.5) * 60;
        let y = skills[i].y + (Math.random() - 0.5) * 60;
        x = Math.max(-maxX, Math.min(maxX, x));
        y = Math.max(-maxY, Math.min(maxY, y));
        setBubbleStates(prev => {
          const copy = [...prev];
          copy[i] = { ...copy[i], x, y };
          return copy;
        });
        timeouts[i] = setTimeout(move, 12000 + Math.random() * 3000);
      }
      timeouts[i] = setTimeout(move, 12000 + Math.random() * 3000);
    });
    return () => timeouts.forEach(t => clearTimeout(t));
  }, [bubbleStates, skills]);
  const services = [
    {
      icon: '🌐',
      title: 'Frontend Development',
      description: 'Translating designs into functional and responsive websites using modern tools.',
      features: ['React.js Frontend Development', 'TailwindCSS Styling', 'Responsive Web Layouts', 'Basic Animation & Interactions']
    },
    {
      icon: '🌍',
      title: 'Open Source Design Contributions',
      description: 'Contributing to real-world open-source projects with clean, community-driven designs.',
      features: ['UI/UX for Open Source Tools', 'Figma Mockups for Projects', 'Collaboration with Dev Teams (GSSoC, Hacktoberfest)']
    },
    {
      icon: '🧠',
      title: 'DSA & Coding',
      description: 'Solving complex algorithmic challenges and building DSA skills.',
      features: ['Leetcode, Codeforces, GFG, HackerRank', 'Arrays, Strings, Trees, Graphs, DP, etc.', 'Problem-Solving (Beginner to Intermediate)', 'Concept Explanation with Code Examples']
    },
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Creating modern and responsive web designs that look great on every screen size.',
      features: ['Responsive Web', 'Landing Pages', 'E-commerce', 'Dashboard Design']
    },
    {
      icon: '🏆',
      title: 'Hackathon Experience',
      description: 'Applying design and coding skills to real-world problem statements.',
      features: ['🥇 Smart India Hackathon 2025 – Grand Finalists', 'Fast-paced UI/UX Design + Frontend Implementation', 'Ideation, Collaboration & Final Pitching', 'Creating Scalable, User-Focused Prototypes']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Designing clean, intuitive, and accessible user interfaces.',
      features: ['Figma UI Design (Mobile & Web)', 'Design Systems & Style Guides', 'Wireframing & User Flow Mapping', 'Responsive Layout Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            My <span className="text-primary-400">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            I offer comprehensive UI/UX design services to help bring your digital products to life
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-primary-500"></div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 transform group glass-effect hover:bg-white/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <svg className="flex-shrink-0 w-4 h-4 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 transition-colors duration-300 border-2 border-transparent pointer-events-none rounded-2xl group-hover:border-primary-500/50"></div>
            </div>
          ))}
        </div>

        {/* Floating Bubbles Skills Section */}
        <motion.div 
          className="relative mt-32 mb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          </motion.div>
          {/* Skills Header */}
          <motion.div 
            className="relative z-10 pb-0 mb-0 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="pb-0 mb-4 text-4xl font-bold md:text-5xl">
              My <span className="text-primary-400">Skills</span> 
            </h2>
            <p className="max-w-2xl pb-0 mx-auto mb-0 text-lg text-gray-300" style={{marginTop: '12px', marginBottom: '-8px'}}>
              Explore my technical skills floating in a dynamic digital space
            </p>
          </motion.div>

          {/* Floating Background Bubbles */}
          <div className="inset-0 overflow-hidden ">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`bg-bubble-${i}`}
                className="absolute rounded-full bg-gradient-to-br from-primary-500/10 to-purple-500/10 blur-sm"
                style={{
                  width: Math.random() * 60 + 20,
                  height: Math.random() * 60 + 20,
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.07, 0.18, 0.07],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 7,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Skills Bubbles Container with wider glassy background */}
          <div className="relative min-h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-[900px] h-[420px] bg-gradient-to-br from-purple-400/30 via-indigo-500/30 to-primary-400/30 rounded-2xl shadow-2xl backdrop-blur-2xl border border-white/20" style={{ filter: 'blur(0px)' }}></div>
            </div>
            {/* Skills bubbles container with proper overflow handling */}
            <div className="relative z-10 w-[900px] h-[420px] mx-auto overflow-hidden rounded-2xl" style={{ position: 'relative' }}>
              {/* Glassy Skills Bubble with Dragger and Animated Movement */}
              {/* Bubble rendering */}
              {skills.map((skill, index) => {
                const bubblePos = bubbleStates[index] || { x: skill.x, y: skill.y };
                const isDragging = bubbleStates[index]?.isDragging || false;
                // Bubble size in px (approximate)
                const pxSize = pxSizes[skill.size];
                const maxX = (containerW / 2) - (pxSize / 2) - 8;
                const maxY = (containerH / 2) - (pxSize / 2) - 8;
                // Clamp bubble position for drag
                const clampedX = clamp(bubblePos.x, -maxX, maxX);
                const clampedY = clamp(bubblePos.y, -maxY, maxY);
                // Floating animation range (never exceed available space)
                const floatRangeX = Math.max(0, Math.min(8, maxX - Math.abs(clampedX)));
                const floatRangeY = Math.max(0, Math.min(8, maxY - Math.abs(clampedY)));
                // Define drag constraints for each bubble
                const dragConstraints = { left: -maxX, right: maxX, top: -maxY, bottom: maxY };
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute select-none"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: clampedX,
                      marginTop: clampedY,
                      zIndex: 2,
                      pointerEvents: 'auto',
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.08,
                      type: 'spring',
                      bounce: 0.6,
                    }}
                  >
                    <motion.div
                      className={`${sizes[skill.size]} flex flex-col items-center justify-center border-2 border-white/40 relative overflow-hidden rounded-full shadow-2xl`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(124, 58, 237, 0.6) 100%)',
                        boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4), 0 4px 16px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                        pointerEvents: 'auto',
                        backdropFilter: 'blur(10px)',
                      }}
                      drag
                      dragMomentum={false}
                      dragElastic={0.1}
                      dragConstraints={{
                        left: -maxX,
                        right: maxX,
                        top: -maxY,
                        bottom: maxY
                      }}
                      onDragStart={() => setBubbleStates(prev => {
                        const copy = [...prev];
                        copy[index] = { ...copy[index], isDragging: true };
                        return copy;
                      })}
                      onDragEnd={() => setBubbleStates(prev => {
                        const copy = [...prev];
                        // Clamp to bounds after drag
                        copy[index] = {
                          ...copy[index],
                          isDragging: false,
                          x: clamp(copy[index].x, -maxX, maxX),
                          y: clamp(copy[index].y, -maxY, maxY)
                        };
                        return copy;
                      })}
                      whileHover={isDragging ? {} : { 
                        scale: 1.15, 
                        rotate: 8,
                        boxShadow: '0 16px 50px rgba(168, 85, 247, 0.5), 0 8px 25px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        y: isDragging ? 0 : [0, -floatRangeY * 0.8, 0, floatRangeY * 0.8, 0],
                        x: isDragging ? 0 : [0, floatRangeX * 0.8, 0, -floatRangeX * 0.8, 0],
                        scale: isDragging ? 1 : [1, 1.05, 1, 0.98, 1],
                      }}
                      transition={{
                        duration: 8 + index * 0.3,
                        repeat: isDragging ? 0 : Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: index * 0.3
                      }}
                    >
                      {/* Shine effect overlay */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                        }}
                        animate={{
                          x: [-100, 100],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 3 + index * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
                        <div className={`${skill.size === 'small' ? 'text-2xl' : skill.size === 'medium' ? 'text-3xl' : 'text-4xl'} text-white drop-shadow-md filter`}>
                          {React.createElement(skill.icon)}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Availability & Status */}
          <div className="p-8 text-center glass-effect rounded-2xl">
            <h3 className="mb-6 text-3xl font-bold text-white">
              Current <span className="text-primary-400">Status</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl rounded-full bg-green-500/20">
                  🟢
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">Available for Work</h4>
                <p className="text-gray-300">Open to internships and entry-level positions</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl rounded-full bg-blue-500/20">
                  🎓
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">Currently Studying</h4>
                <p className="text-gray-300">B.Tech Computer Science at VIT Bhopal</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl rounded-full bg-purple-500/20">
                  💼
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">Seeking Opportunities</h4>
                <p className="text-gray-300">Internships, projects, and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      {/* Call to Action */}
      <div className="px-4 mt-24 mb-12 text-center md:px-0">
        <p className="mb-8 text-lg text-gray-300">
          Ready to start your project? Let's work together to create something amazing.
        </p>
        <button className="px-10 py-4 text-lg font-medium text-white transition-all duration-200 transform rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:scale-105" >
          Get Started Today
        </button>
      </div>

      {/* Additional Resume Sections */}
  <div className="px-2 mt-24 space-y-24 md:px-0">
        {/* Achievements & Recognition */}
        <div className="pb-2 text-center md:pb-4">
          <h3 className="mb-10 text-3xl font-bold text-white">
            Achievements & <span className="text-primary-400">Recognition</span>
          </h3>
          <div className="grid gap-8 m-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🏆',
                title: 'Academic Excellence',
                description: 'Maintained 8.94 CGPA in Computer Science',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: '💡',
                title: 'Problem Solver',
                description: 'Solved 300+ coding problems on various platforms',
                color: 'from-blue-400 to-cyan-500'
              },
              {
                icon: '🎯',
                title: 'Project Innovation',
                description: 'Developed 10+ real-world applications',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: '🌟',
                title: 'Leadership',
                description: 'Led multiple team projects and collaborations',
                color: 'from-purple-400 to-pink-500'
              },
              {
                icon: '🚀',
                title: 'Tech Enthusiast',
                description: 'Always learning cutting-edge technologies',
                color: 'from-red-400 to-rose-500'
              },
              {
                icon: '🎨',
                title: 'Creative Designer',
                description: 'Expert in UI/UX design with Figma & Canva',
                color: 'from-indigo-400 to-blue-500'
              }
            ].map((achievement, index) => (
              <div key={index} className="glass-effect p-10 my-4 rounded-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px]">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {achievement.icon}
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="pb-2 text-center md:pb-4">
          <h3 className="mb-10 text-3xl font-bold text-white">
            Certifications & <span className="text-primary-400">Learning</span>
          </h3>
          <div className="grid gap-8 m-5 md:grid-cols-2">
            {[
              {
                icon: '📜',
                title: 'Web Development Foundations',
                provider: 'Self-Directed Learning',
                status: 'Completed',
                color: 'border-green-400'
              },
              {
                icon: '💻',
                title: 'Full Stack Development',
                provider: 'Online Courses & Projects',
                status: 'In Progress',
                color: 'border-blue-400'
              },
              {
                icon: '🎯',
                title: 'Data Structures & Algorithms',
                provider: 'Competitive Programming',
                status: 'Advanced',
                color: 'border-purple-400'
              },
              {
                icon: '🎨',
                title: 'UI/UX Design Principles',
                provider: 'Figma & Canva Mastery',
                status: 'Certified',
                color: 'border-pink-400'
              }
            ].map((cert, index) => (
              <div key={index} className={`glass-effect p-10 my-4 rounded-2xl border-l-4 ${cert.color} hover:scale-105 transition-all duration-300 flex flex-col justify-between min-h-[180px]`}>
                <div className="flex items-center mb-4">
                  <span className="mr-4 text-3xl">{cert.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                    <p className="text-primary-300">{cert.provider}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                    cert.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                    cert.status === 'Advanced' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-pink-500/20 text-pink-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="pb-2 text-center md:pb-4">
          <h3 className="mb-10 text-3xl font-bold text-white">
            Interests & <span className="text-primary-400">Passions</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              { name: 'Competitive Programming', icon: '⚡' },
              { name: 'Open Source', icon: '🌐' },
              { name: 'Tech Blogs', icon: '📚' },
              { name: 'UI/UX Design', icon: '🎨' },
              { name: 'Machine Learning', icon: '🤖' },
              { name: 'Web Technologies', icon: '💻' },
              { name: 'Problem Solving', icon: '🧩' },
              { name: 'Innovation', icon: '💡' },
              { name: 'Team Collaboration', icon: '🤝' },
              { name: 'Continuous Learning', icon: '📈' }
            ].map((interest, index) => (
              <div key={index} className="px-8 py-3 mb-2 transition-all duration-300 rounded-full cursor-default glass-effect hover:scale-110">
                <span className="mr-2 text-lg">{interest.icon}</span>
                <span className="font-medium text-white">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full top-1/4 left-10 bg-primary-400 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-1/3 right-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-yellow-400 rounded-full bottom-1/3 right-1/3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
};

export default Services;
