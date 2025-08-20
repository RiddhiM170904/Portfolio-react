import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/riddhi_mdt' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/riddhi-mhadgut-3b0a21289' },
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/RiddhiM170904' },
    { name: 'LeetCode', icon: <SiLeetcode />, href: 'https://leetcode.com/u/Riddhi_Mhadgut/' },
    { name: 'Email', icon: <FaEnvelope />, href: 'mailto:riddhimhadgut17@gmail.com' },
  ];
  const scrollToSection = (sectionId) => {
    console.log('Attempting to scroll to:', sectionId); // Debug log
    
    // Remove the # if it exists
    const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
    console.log('Looking for element with ID:', id); // Debug log
    
    // Try multiple methods to find the element
    let element = document.getElementById(id);
    if (!element) {
      element = document.querySelector(`#${id}`);
    }
    if (!element) {
      element = document.querySelector(`[id="${id}"]`);
    }
    
    console.log('Found element:', element); // Debug log
    
    if (element) {
      // Method 1: Using scrollIntoView
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Backup method: Manual scroll calculation
      setTimeout(() => {
        const elementPosition = element.offsetTop - 100; // 100px offset for navigation
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      console.error(`Element with ID "${id}" not found`);
      // List all sections for debugging
      console.log('Available sections:', 
        Array.from(document.querySelectorAll('section')).map(s => s.id || s.className)
      );
    }
  };

  const handleDownloadCV = () => {
    console.log('Download CV button clicked!'); // Debug log
    try {
      const link = document.createElement('a');
      link.href = '/riddhinew.pdf'; // Path to your resume file
      link.download = 'riddhinew.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('CV download initiated'); // Debug log
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/riddhinew.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Background decoration with animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-20 left-20 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <p className="text-primary-400 text-lg font-medium mb-2">Aiming for the Moon, You will achieve stars 🪄💫</p>
              <p className="text-primary-400 text-lg font-medium mb-2">WELCOME TO MY WORLD ✨</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary-400">Riddhi Mhadgut</span>
              </h1>
              <div className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary-400">Web</span>{' '}
                <span className="text-white">Developer</span>
              </div>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Passionate about technology and programming, I'm on a journey to sharpen my skills and explore the vast world of computer science.
                Currently, I am delving into web development and aim to create meaningful and innovative solutions through coding.
              </p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  console.log('My Projects button clicked!'); // Debug log
                  scrollToSection('projects'); // Remove the # since function handles it
                }}
                className="bg-white text-dark-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                My Projects
              </motion.button>
              <motion.button 
                onClick={() => {
                  console.log('Download CV button clicked!'); // Debug log
                  handleDownloadCV();
                }}
                className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 pointer-events-auto"
                  title={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  onClick={e => {
                    // Always allow default for mailto
                    if (social.href.startsWith('mailto:')) return;
                    e.preventDefault();
                    window.open(social.href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main image container with gradient background */}
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-500/20 to-purple-600/20 rounded-full flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image container */}
                <motion.div 
                  className="w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden border-4 border-primary-400/50 relative"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Replace this src with your actual image path */}
                  <img 
                    src="/profile.png" // Add your image to public/images folder and update this path
                    alt="Riddhi Mhadgut"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback avatar if image doesn't load */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-6xl text-white font-bold" style={{ display: 'none' }}>
                    R
                  </div>
                </motion.div>

                {/* Floating animated elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-8 h-8 bg-primary-400 rounded-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-8 right-8 w-6 h-6 bg-purple-400 rounded-full"
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-10 h-10 bg-pink-400 rounded-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-8 -left-8 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
              </motion.div>

              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-full blur-xl"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:border-primary-400 transition-colors duration-200"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
