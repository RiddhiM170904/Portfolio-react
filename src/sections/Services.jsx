import React from 'react';
import { motion } from 'framer-motion';


const Services = () => {
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
          {/* Skills Header */}
          <motion.div 
            className="text-center mb-0 pb-0 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-0 pb-0">
              My <span className="text-primary-400">Skills</span> Universe
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

          {/* Main Skills Bubbles Container */}
          <div className="relative min-h-[800px] flex items-center justify-center">
            <div className="relative w-full max-w-8xl mx-auto px-4">
              {/* Center Core Bubble - Main Identity */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 30px rgba(96, 165, 250, 0.5)",
                      "0 0 50px rgba(168, 85, 247, 0.8)",
                      "0 0 30px rgba(96, 165, 250, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-1">👩‍💻</div>
                    <div className="text-white font-bold text-sm">Full Stack</div>
                    <div className="text-white/80 text-xs">Developer</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Skill Bubbles */}
              {(
                [
                  // Programming Languages
                  { name: 'C++', icon: '⚡', x: -280, y: -180, delay: 0.8, color: 'from-blue-500 to-cyan-400', size: 'large' },
                  { name: 'JavaScript', icon: '🔥', x: 300, y: -150, delay: 1.0, color: 'from-yellow-400 to-orange-500', size: 'large' },
                  { name: 'Python', icon: '🐍', x: -350, y: 120, delay: 1.2, color: 'from-green-500 to-emerald-400', size: 'medium' },
                  { name: 'Java', icon: '☕', x: 260, y: 160, delay: 1.4, color: 'from-orange-500 to-red-500', size: 'medium' },
                  // Web Technologies
                  { name: 'React', icon: '⚛️', x: -150, y: -300, delay: 1.6, color: 'from-cyan-400 to-blue-500', size: 'large' },
                  { name: 'HTML/CSS', icon: '🎨', x: 160, y: -320, delay: 1.8, color: 'from-pink-500 to-purple-500', size: 'large' },
                  { name: 'Tailwind', icon: '💨', x: -400, y: -60, delay: 2.0, color: 'from-teal-400 to-cyan-500', size: 'medium' },
                  { name: 'Node.js', icon: '🟢', x: 380, y: 0, delay: 2.2, color: 'from-green-400 to-emerald-500', size: 'medium' },
                  // Design Tools
                  { name: 'Figma', icon: '🎭', x: -120, y: 280, delay: 2.4, color: 'from-purple-500 to-pink-500', size: 'medium' },
                  { name: 'Canva', icon: '✨', x: 120, y: 300, delay: 2.6, color: 'from-blue-500 to-purple-500', size: 'medium' },
                  // Other Skills
                  { name: 'Git', icon: '🌟', x: -450, y: 200, delay: 2.8, color: 'from-gray-500 to-gray-700', size: 'small' },
                  { name: 'DSA', icon: '🧠', x: 420, y: -240, delay: 3.0, color: 'from-indigo-500 to-purple-600', size: 'small' },
                  { name: 'MongoDB', icon: '🍃', x: -200, y: 380, delay: 3.2, color: 'from-green-600 to-emerald-700', size: 'small' },
                  { name: 'UI/UX', icon: '🎪', x: 340, y: 240, delay: 3.4, color: 'from-pink-400 to-rose-500', size: 'small' },
                ]
              ).map((skill, index) => {
                const sizes = {
                    small: 'w-24 h-24 text-base',
                    medium: 'w-32 h-32 text-lg', 
                    large: 'w-40 h-40 text-xl'
                };
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    style={{ 
                      left: '50%', 
                      top: '50%',
                      marginLeft: skill.x * 1.1, // More horizontal scatter
                      marginTop: skill.y * 0.5   // Less vertical scatter
                    }}
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: skill.delay,
                      type: "spring",
                      bounce: 0.6
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`${sizes[skill.size]} bg-gradient-to-br ${skill.color} rounded-full flex flex-col items-center justify-center shadow-xl border-2 border-white/30 cursor-pointer relative overflow-hidden`}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, Math.sin(index * 0.5) * 8, 0],
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 6,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Enhanced floating shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full blur-sm"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <motion.div 
                          className={`${skill.size === 'small' ? 'text-lg' : skill.size === 'medium' ? 'text-xl' : 'text-2xl'} mb-1`}
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="text-white font-bold leading-tight">{skill.name}</div>
                      </div>
                    </motion.div>
                    
                    {/* Connecting lines to center (subtle) */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent origin-left"
                      style={{
                        height: '1px',
                        width: Math.sqrt(skill.x * skill.x + skill.y * skill.y) * 0.6,
                        transform: `rotate(${Math.atan2(skill.y, skill.x) * 180 / Math.PI}deg) translateY(-50%)`
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 0.2 }}
                      transition={{ duration: 1.5, delay: skill.delay + 1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                );
              })}

              {/* Orbit rings around center */}
              {[1, 2].map((ring, index) => (
                <motion.div
                  key={`ring-${ring}`}
                  className="absolute top-1/2 left-1/2 border border-primary-400/20 rounded-full pointer-events-none"
                  style={{
                    width: `${(ring + 1) * 120}px`,
                    height: `${(ring + 1) * 120}px`,
                    marginLeft: `-${(ring + 1) * 60}px`,
                    marginTop: `-${(ring + 1) * 60}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 16 + ring * 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>

          {/* Skills Legend */}
          <motion.div
            className="text-center mt-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🌌
                </motion.span>
                Skills in Motion
                <motion.span
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  ⭐
                </motion.span>
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Each bubble represents a skill in my ever-expanding universe of knowledge. 
                The size and glow indicate my proficiency level. 
                Hover over any skill to see it come to life with enhanced animations!
              </p>
              
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">Primary Technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-300 text-sm">Growing Skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-300 text-sm">Specialized Tools</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-8">
            Ready to start your project? Let's work together to create something amazing.
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-lg" >
            Get Started Today
          </button>
        </div>

        {/* Additional Resume Sections */}
        <div className="mt-20 space-y-16">
          {/* Achievements & Recognition */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Achievements & <span className="text-primary-400">Recognition</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div key={index} className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300">
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
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Certifications & <span className="text-primary-400">Learning</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                <div key={index} className={`glass-effect p-6 rounded-xl border-l-4 ${cert.color} hover:scale-105 transition-all duration-300`}>
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
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">
              Interests & <span className="text-primary-400">Passions</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
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
                <div key={index} className="glass-effect px-6 py-3 rounded-full hover:scale-110 transition-all duration-300 cursor-default">
                  <span className="text-lg mr-2">{interest.icon}</span>
                  <span className="text-white font-medium">{interest.name}</span>
                </div>
              ))}
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
