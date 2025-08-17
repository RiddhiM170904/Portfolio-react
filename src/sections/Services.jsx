
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
    { name: 'React', icon: FaReact, x: -300, y: -80, size: 'large' },
    { name: 'Node.js', icon: FaNodeJs, x: -150, y: -120, size: 'large' },
    { name: 'HTML5', icon: FaHtml5, x: 0, y: -140, size: 'large' },
    { name: 'CSS3', icon: FaCss3Alt, x: 150, y: -120, size: 'large' },
    { name: 'JavaScript', icon: FaJs, x: 300, y: -80, size: 'large' },
    { name: 'Python', icon: FaPython, x: -225, y: 0, size: 'medium' },
    { name: 'Java', icon: FaJava, x: -75, y: 0, size: 'medium' },
    { name: 'Git', icon: FaGitAlt, x: 75, y: 0, size: 'medium' },
    { name: 'Figma', icon: FaFigma, x: 225, y: 0, size: 'medium' },
    { name: 'C++', icon: SiCplusplus, x: -300, y: 100, size: 'medium' },
    { name: 'Tailwind', icon: SiTailwindcss, x: -150, y: 140, size: 'medium' },
    { name: 'Canva', icon: SiCanva, x: 0, y: 160, size: 'medium' },
    { name: 'AWS', icon: FaAws, x: 150, y: 140, size: 'medium' },
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
      features: ['🥇 Smart India Hackathon 2024 – Internal Hackathon Winning Team', 'Fast-paced UI/UX Design + Frontend Implementation', 'Ideation, Collaboration & Final Pitching', 'Creating Scalable, User-Focused Prototypes']
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I offer comprehensive UI/UX design services to help bring your digital products to life
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating Bubbles Skills Section */}
        <motion.div 
          className="mt-32 mb-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          </motion.div>
          {/* Skills Header */}
          <motion.div 
            className="text-center mb-0 pb-0 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-0 pb-0">
              My <span className="text-primary-400">Skills</span> 
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-0 pb-0" style={{marginBottom: '-8px'}}>
              Explore my technical skills floating in a dynamic digital space
            </p>
          </motion.div>

          {/* Floating Background Bubbles */}
          <div className="absolute inset-0 overflow-hidden">
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[900px] h-[420px] bg-gradient-to-br from-purple-400/20 via-indigo-500/20 to-primary-400/20 rounded-2xl shadow-2xl backdrop-blur-2xl border border-white/10" style={{ filter: 'blur(0px)' }}></div>
            </div>
            <div className="relative w-full max-w-8xl mx-auto px-2 md:px-4 z-10 flex flex-wrap justify-center items-center md:block" style={{ minHeight: '320px' }}>
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
                      className={`${sizes[skill.size]} flex flex-col items-center justify-center border-2 border-white/20 relative overflow-hidden bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full shadow-lg`}
                      drag
                      dragMomentum={false}
                      dragElastic={0.2}
                      dragConstraints={dragConstraints}
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
                      style={{
                        boxShadow: '0 2px 8px 0 rgba(168,85,247,0.10)',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none',
                        pointerEvents: 'auto',
                      }}
                      whileHover={isDragging ? {} : { scale: 1.13, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        y: [0, -floatRangeY, 0, floatRangeY, 0],
                        x: [0, floatRangeX, 0, -floatRangeX, 0],
                        scale: [1, 1.07, 1, 0.97, 1],
                      }}
                      transition={{
                        duration: 6 + index * 0.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: index * 0.2
                      }}
                    >
                      <div className="relative z-10 text-center flex flex-col items-center justify-center select-none">
                        <div className={`${skill.size === 'small' ? 'text-lg' : skill.size === 'medium' ? 'text-xl' : 'text-2xl'} mb-1 text-white/90`}>
                          {React.createElement(skill.icon)}
                        </div>
                        <div className="text-white font-bold leading-tight text-xs md:text-sm mt-1">{skill.name}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Availability & Status */}
          <div className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Current <span className="text-primary-400">Status</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-3xl mb-4">
                  🟢
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Available for Work</h4>
                <p className="text-gray-300">Open to internships and entry-level positions</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-3xl mb-4">
                  🎓
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Currently Studying</h4>
                <p className="text-gray-300">B.Tech Computer Science at VIT Bhopal</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-3xl mb-4">
                  💼
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Seeking Opportunities</h4>
                <p className="text-gray-300">Internships, projects, and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      {/* Call to Action */}
      <div className="text-center mt-24 mb-12 px-4 md:px-0">
        <p className="text-gray-300 text-lg mb-8">
          Ready to start your project? Let's work together to create something amazing.
        </p>
        <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-lg shadow-lg" >
          Get Started Today
        </button>
      </div>

      {/* Additional Resume Sections */}
  <div className="mt-24 space-y-24 px-2 md:px-0">
        {/* Achievements & Recognition */}
        <div className="text-center pb-2 md:pb-4">
          <h3 className="text-3xl font-bold text-white mb-10">
            Achievements & <span className="text-primary-400">Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
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
                description: 'Solved 100+ coding problems on various platforms',
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
                <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="text-center pb-2 md:pb-4">
          <h3 className="text-3xl font-bold text-white mb-10">
            Certifications & <span className="text-primary-400">Learning</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 m-5">
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
                  <span className="text-3xl mr-4">{cert.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                    <p className="text-primary-300">{cert.provider}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
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
        <div className="text-center pb-2 md:pb-4">
          <h3 className="text-3xl font-bold text-white mb-10">
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
              <div key={index} className="glass-effect px-8 py-3 rounded-full hover:scale-110 transition-all duration-300 cursor-default mb-2">
                <span className="text-lg mr-2">{interest.icon}</span>
                <span className="text-white font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
};

export default Services;
