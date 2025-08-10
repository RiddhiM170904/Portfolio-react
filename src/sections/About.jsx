
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
  const skills = [
    { name: 'C++', percentage: 95, icon: '⚡', color: 'from-blue-400 to-blue-600' },
    { name: 'Full Stack Development', percentage: 60, icon: '🌐', color: 'from-green-400 to-green-600' },
    { name: 'Canva & Figma', percentage: 80, icon: '🎨', color: 'from-pink-400 to-pink-600' },
    { name: 'Java', percentage: 50, icon: '☕', color: 'from-orange-400 to-orange-600' },
    { name: 'Python', percentage: 45, icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Web Designing', percentage: 65, icon: '💻', color: 'from-purple-400 to-purple-600' },
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Years of Learning', value: '3+', icon: '📚' },
    { label: 'Technologies', value: '15+', icon: '⚙️' },
    { label: 'Contributions', value: '370+', icon: '💻' },
  ];

  const experiences = [
    {
      year: '2023 - 2027',
      title: 'Bachelor of Technology - Computer Science',
      company: 'Vellore Institute of Technology, Bhopal',
      description: 'CGPA - 8.94',
      icon: '🎓',
      color: 'from-blue-500 to-purple-600'
    },
    {
      year: '2021 - 2022',
      title: '12th SENIOR SECONDARY SCHOOL EXAMINATION',
      company: 'Central Board of Secondary Education (CBSE)',
      description: 'Percentage - 87%',
      icon: '📖',
      color: 'from-green-500 to-blue-500'
    },
    {
      year: '2019 - 2020',
      title: '10th SECONDARY SCHOOL EXAMINATION',
      company: 'Central Board of Secondary Education (CBSE)',
      description: 'Percentage - 95%',
      icon: '🌟',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/riddhinew.pdf'; // Path to your resume file
    link.download = 'riddhinew.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-dark-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-primary-400">me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Passionate developer crafting digital experiences with code and creativity
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-2xl md:text-3xl font-bold text-primary-400 mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - About Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* About Text with Creative Cards */}
            <div className="space-y-6 mb-12">
              <motion.div 
                className="glass-effect p-6 rounded-2xl border-l-4 border-primary-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderLeftColor: "#8B5CF6" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-400 flex items-center gap-3">
                  <span className="text-3xl">👋</span>
                  Welcome to my world!
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate and curious learner, deeply interested in the ever-evolving world of technology. My journey in computer science has been driven by a strong enthusiasm for problem-solving and building real-world applications.
                </p>
              </motion.div>

              <motion.div 
                className="glass-effect p-6 rounded-2xl border-l-4 border-green-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderLeftColor: "#10B981" }}
              >
                <h4 className="text-xl font-bold mb-3 text-green-400 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Current Focus
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Currently diving deeper into web development, exploring both frontend and backend technologies to build clean, responsive, and user-focused experiences. Strengthening my foundation in Data Structures and Algorithms.
                </p>
              </motion.div>

              <motion.div 
                className="glass-effect p-6 rounded-2xl border-l-4 border-purple-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderLeftColor: "#A855F7" }}
              >
                <h4 className="text-xl font-bold mb-3 text-purple-400 flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  My Vision
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I believe in continuous learning, collaboration, and the power of technology to make a difference. Whether it's creating impactful solutions or contributing to innovative teams — I'm always eager for new challenges!
                </p>
              </motion.div>
            </div>

            {/* Enhanced Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                Skills & Expertise
              </h4>
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-lg">{skill.name}</span>
                      </div>
                      <span className="text-primary-400 font-bold text-lg">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Education & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education Timeline */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Education Journey
              </h3>
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <motion.div 
                  className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-400 via-purple-500 to-pink-500 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-6">
                      {/* Enhanced Timeline dot */}
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center text-2xl shadow-lg relative z-10`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {exp.icon}
                        <motion.div 
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </motion.div>
                      
                      {/* Enhanced Content Card */}
                      <motion.div 
                        className="glass-effect p-6 flex-1 rounded-2xl hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-primary-400"
                        whileHover={{ y: -5, borderLeftColor: "#60A5FA" }}
                      >
                        <motion.div 
                          className="text-primary-400 font-bold mb-2 text-lg"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          {exp.year}
                        </motion.div>
                        <h4 className="text-xl font-bold text-white mb-2 leading-tight">{exp.title}</h4>
                        <p className="text-primary-300 font-semibold mb-3">{exp.company}</p>
                        <motion.p 
                          className="text-gray-300 font-medium"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          {exp.description}
                        </motion.p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-3xl">📞</span>
                Get In Touch
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Email', value: 'riddhimhadgut17@gmail.com', icon: '📧' },
                  { label: 'Phone', value: '+91-910935647', icon: '📱' },
                  { label: 'Location', value: 'Dewas, India', icon: '📍' },
                  { label: 'Experience', value: '3+ Years', icon: '⭐' },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{contact.icon}</span>
                      <p className="text-gray-400 font-medium">{contact.label}</p>
                    </div>
                    <p className="text-white font-semibold ml-8">{contact.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Download CV Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 hover:from-primary-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.div>
                <span>Download My Resume</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
