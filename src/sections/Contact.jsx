import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const SOCIALS = [
  { label: 'GitHub',    href: 'https://github.com/RiddhiM170904',                     icon: FaGithub,    color: '#e879f9' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/riddhi-mhadgut-3b0a21289',     icon: FaLinkedin,  color: '#a78bfa' },
  { label: 'Instagram', href: 'https://instagram.com/riddhi_mdt',                     icon: FaInstagram, color: '#fb7185' },
  { label: 'LeetCode',  href: 'https://leetcode.com/u/Riddhi_Mhadgut/',               icon: SiLeetcode,  color: '#f59e0b' },
];

const CONTACT_INFO = [
  { icon: FaEnvelope,      label: 'Email',    value: 'riddhimhadgut17@gmail.com', href: 'mailto:riddhimhadgut17@gmail.com' },
  { icon: FaPhone,         label: 'Phone',    value: '+91 9109356746',           href: 'tel:+919109356746' },
  { icon: FaMapMarkerAlt,  label: 'Location', value: 'Dewas, Madhya Pradesh, India', href: null },
];

const Contact = () => {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoad]  = useState(false);

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    // Using mailto as fallback (no backend configured)
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:riddhimhadgut17@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setLoad(false); setSent(true); }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark-800/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <div className="section-divider mx-auto" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            I'm open to exciting opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-4">
              {CONTACT_INFO.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 glass-hover p-4 rounded-xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-400/15 flex items-center justify-center text-primary-300 flex-shrink-0 group-hover:bg-primary-400/25 transition-colors">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[11px] font-mono uppercase tracking-wider">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-white text-sm font-medium hover:text-primary-300 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Social Links</p>
              <div className="flex gap-3">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center transition-all duration-300"
                    style={{ color: s.color }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}50`; e.currentTarget.style.background = `${s.color}15`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.background = ''; }}
                  >
                    <s.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-hover p-5 rounded-2xl border-l-4 border-emerald-400/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently seeking full-time, internship, or freelance opportunities in Full-Stack Development and AI/ML.
                Available for remote and on-site roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass holo-card p-6 md:p-8 rounded-2xl">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                >
                  <FiCheckCircle className="w-16 h-16 text-emerald-400" />
                  <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm mt-2">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Name</label>
                      <input
                        name="name" value={form.name} onChange={onChange} required
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary-400/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
                      <input
                        name="email" value={form.email} onChange={onChange} required type="email"
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary-400/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Subject</label>
                    <input
                      name="subject" value={form.subject} onChange={onChange}
                      placeholder="What's it about?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary-400/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={onChange} required
                      rows={5} placeholder="Your message..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary-400/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 mt-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <><FiSend className="w-4 h-4" /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
