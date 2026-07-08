import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaTrophy, FaFileAlt } from 'react-icons/fa';

/* ── Typewriter ─────────────────────────────────────────────── */
const ROLES = [
  'Full-Stack Developer',
  'AI / ML Engineer',
  'React.js Specialist',
  'SIH 2025 Runner-Up',
  'Patent Holder',
  'Open Source Contributor',
];

const Typewriter = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-primary-300 font-mono">
      {displayed}
      <span className="cursor-blink text-primary-400">|</span>
    </span>
  );
};

/* ── Particle Canvas ────────────────────────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const COLORS = ['#e879f9', '#a78bfa', '#fb7185'];
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + '60';
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.c;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(232,121,249,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-50" />;
};

/* ── Social Link ─────────────────────────────────────────────── */
const SocialLink = ({ href, icon: Icon, label, delay }) => (
  <motion.a
    href={href}
    target={href.startsWith('mailto') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.2, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary-300 hover:border-primary-400/40 transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

/* ── Badge ───────────────────────────────────────────────────── */
const Badge = ({ icon: Icon, text, color = 'primary', delay }) => {
  const cls = color === 'primary'
    ? 'bg-primary-400/10 border-primary-400/30 text-primary-300'
    : 'bg-amber-400/10 border-amber-400/30 text-amber-300';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 120 }}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${cls}`}
    >
      <Icon className="w-3 h-3" />
      {text}
    </motion.div>
  );
};

/* ── Hero ───────────────────────────────────────────────────── */
const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex items-center min-h-screen overflow-hidden bg-dark-900">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" style={{ animation: 'float 12s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-500/4 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-100" />
      </div>

      <ParticleCanvas />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ── Left ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Badges */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-2"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </div>
              <Badge icon={FaTrophy}  text="SIH 2025 Runner-Up"  color="primary" delay={0.2} />
              <Badge icon={FaFileAlt} text="Patent Holder"        color="amber"   delay={0.35} />
            </motion.div>

            {/* Greeting + Name */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="section-label mb-2">Hello World 👋</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                I'm{' '}
                <span className="gradient-text text-glow-primary">Riddhi</span>
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mt-1">
                Mhadgut
              </h2>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-xl md:text-2xl font-mono h-8"
            >
              <Typewriter />
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-gray-400 text-base leading-relaxed max-w-lg border-l-2 border-primary-400/40 pl-4"
            >
              B.Tech CSE @ VIT Bhopal (<span className="text-primary-300 font-semibold">CGPA 9.07</span>). Shipped{' '}
              <span className="text-primary-300 font-semibold">11+</span> production apps using React.js, Node.js, Python &
              TensorFlow. Published Patent holder & SIH 2025 National Runner-Up.{' '}
              <span className="text-primary-300 font-semibold">380+</span> LeetCode problems (Rating: 1513).
            </motion.p>

            {/* Tech pills */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-2"
            >
              {['React.js', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'OpenCV', 'MongoDB', 'Azure'].map((t, i) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="chip text-[11px]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <FiArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/riddhinew.pdf"
                download="Riddhi_Resume.pdf"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-gray-600 font-mono tracking-wider">FIND ME</span>
              <div className="h-px w-8 bg-gray-700" />
              <SocialLink href="https://github.com/RiddhiM170904"                     icon={FaGithub}    label="GitHub"    delay={0.9} />
              <SocialLink href="https://linkedin.com/in/riddhi-mhadgut-3b0a21289"    icon={FaLinkedin}  label="LinkedIn"  delay={1.0} />
              <SocialLink href="https://instagram.com/riddhi_mdt"                    icon={FaInstagram} label="Instagram" delay={1.1} />
              <SocialLink href="https://leetcode.com/u/Riddhi_Mhadgut/"              icon={SiLeetcode}  label="LeetCode"  delay={1.2} />
              <SocialLink href="mailto:riddhimhadgut17@gmail.com"                    icon={FaEnvelope}  label="Email"     delay={1.3} />
            </motion.div>
          </motion.div>

          {/* ── Right: Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-violet-600/10 blur-3xl" />

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-primary-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dotted border-violet-400/25"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-rose-400/15"
              />

              {/* Orbit dots — primary */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-2 rounded-full"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  <div
                    className="absolute w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_8px_#e879f9]"
                    style={{
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translateY(-${138}px) translateX(-50%)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Orbit dots — violet */}
              {[36, 108, 180, 252, 324].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 rounded-full"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  <div
                    className="absolute w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_#a78bfa]"
                    style={{
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translateY(-${100}px) translateX(-50%)`,
                    }}
                  />
                </motion.div>
              ))}

              {/* Profile image */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-primary-400/40 bg-gradient-to-br from-primary-500/10 to-violet-600/10 shadow-[0_0_40px_rgba(232,121,249,0.25)]">
                <img
                  src="/profile.png"
                  alt="Riddhi Mhadgut"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stat chips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-6 top-1/4 glass px-3 py-1.5 text-xs font-mono rounded-xl"
              >
                <span className="text-primary-300 font-bold">9.07</span>
                <span className="text-gray-400"> CGPA</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-6 bottom-1/4 glass px-3 py-1.5 text-xs font-mono rounded-xl"
              >
                <span className="text-violet-300 font-bold">380+</span>
                <span className="text-gray-400"> LeetCode</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-3 py-1.5 text-xs font-mono rounded-xl"
              >
                <span className="text-rose-300 font-bold">11+</span>
                <span className="text-gray-400"> Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-[0.25em] text-gray-600 font-mono uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
