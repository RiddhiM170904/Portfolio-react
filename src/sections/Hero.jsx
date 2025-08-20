import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/riddhi_mdt" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com/in/riddhi-mhadgut-3b0a21289" },
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/RiddhiM170904" },
  { name: "LeetCode", icon: <SiLeetcode />, href: "https://leetcode.com/u/Riddhi_Mhadgut/" },
  { name: "Email", icon: <FaEnvelope />, href: "mailto:riddhimhadgut17@gmail.com" },
];

const Hero = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Set viewport after component mounts (avoids SSR/hydration errors)
  useEffect(() => {
    setViewport({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pre-generate particle positions (to prevent jumping on every render)
  const particles = useMemo(() => {
    if (!viewport.width || !viewport.height) return [];
    return [...Array(20)].map(() => ({
      x: Math.random() * viewport.width,
      y: Math.random() * viewport.height,
      duration: Math.random() * 10 + 10,
    }));
  }, [viewport]);

  const scrollToSection = (sectionId) => {
    const id = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        });
      }, 100);
    } else {
      console.error(`Element with ID "${id}" not found`);
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "/riddhinew.pdf";
      link.download = "riddhinew.pdf";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      window.open("/riddhinew.pdf", "_blank");
    }
  };

  if (!viewport.width) return null; // Prevents rendering until viewport is ready

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden gradient-bg"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-400/30"
            initial={{ x: p.x, y: p.y, scale: 0 }}
            animate={{ x: Math.random() * viewport.width, y: Math.random() * viewport.height, scale: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            style={{ pointerEvents: "none" }}
          />
        ))}
      </div>

      {/* Decorative blobs */}
      <motion.div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <motion.div
          className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-primary-500/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full top-20 left-20 w-60 h-60 bg-pink-500/10 blur-2xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div className="text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="mb-6">
              <p className="mb-2 text-lg font-medium text-primary-400">Aiming for the Moon, You will achieve stars 🪄💫</p>
              <p className="mb-2 text-lg font-medium text-primary-400">WELCOME TO MY WORLD ✨</p>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Hi, I'm <span className="text-primary-400">Riddhi Mhadgut</span>
              </h1>
              <div className="mb-6 text-4xl font-bold md:text-6xl">
                <span className="text-primary-400">Web</span>{" "}
                <span className="text-white">Developer</span>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
                Passionate about technology and programming, I'm on a journey to sharpen my skills and explore the vast world of computer science.
                Currently, I am delving into web development and aim to create meaningful and innovative solutions through coding.
              </p>
            </div>

            {/* Buttons */}
            <motion.div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <motion.button
                aria-label="Go to my projects section"
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 font-medium transition-all duration-200 bg-white rounded-full text-dark-900 hover:bg-gray-100"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                My Projects
              </motion.button>
              <motion.button
                aria-label="Download my CV"
                onClick={handleDownloadCV}
                className="px-8 py-3 font-medium text-white transition-all duration-200 border rounded-full border-white/30 hover:bg-white/10"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex justify-center gap-4 lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  aria-label={social.name}
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div className="relative flex justify-center lg:justify-end" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="relative">
              <motion.div className="relative flex items-center justify-center overflow-hidden rounded-full w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-500/20 to-purple-600/20" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <motion.div className="relative overflow-hidden border-4 rounded-full w-72 h-72 md:w-88 md:h-88 border-primary-400/50" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                  <img
                    src="/profile.png"
                    alt="Portrait of Riddhi Mhadgut, Web Developer"
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="flex items-center justify-center w-full h-full text-6xl font-bold text-white bg-gradient-to-br from-primary-400 to-purple-500" style={{ display: "none" }}>
                    R
                  </div>
                </motion.div>

                {/* Floating decorations */}
                <motion.div className="absolute w-8 h-8 rounded-lg -top-4 -left-4 bg-primary-400" animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute w-6 h-6 bg-purple-400 rounded-full -top-8 right-8" animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                <motion.div className="absolute w-10 h-10 bg-pink-400 rounded-lg -bottom-4 -right-4" animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
                <motion.div className="absolute w-4 h-4 bg-yellow-400 rounded-full bottom-8 -left-8" animate={{ y: [0, -20, 0], x: [0, -10, 0], scale: [1, 1.5, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
              </motion.div>

              <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 to-purple-500/30 blur-xl" animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute z-20 transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2" onClick={() => scrollToSection("projects")} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
          <motion.div className="flex items-center justify-center w-12 h-12 transition-colors duration-200 border rounded-full border-white/30 hover:border-primary-400" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <motion.svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={{ y: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
