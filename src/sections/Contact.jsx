import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'riddhimhadgut17@gmail.com',
      description: 'Send me an email anytime',
      url: 'mailto:riddhimhadgut17@gmail.com'
    },
    
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Username - Riddhi Mhadgut',
      description: 'Connect with me professionally',
      url: 'https://www.linkedin.com/in/riddhi-mhadgut-3b0a21289/'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'Username- RiddhiM170904',
      description: 'Check out my code and projects',
      url: 'https://github.com/RiddhiM170904'
    },
    {
      icon: '🧩',
      title: 'LeetCode',
      value: 'Username- RiddhiM170904',
      description: 'See my coding profile',
      url: 'https://leetcode.com/u/Riddhi_Mhadgut/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Ready to start your next project? Let's discuss how I can help bring your vision to life
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-primary-500"></div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-2xl rounded-lg bg-primary-500/20">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 font-semibold text-white">{info.title}</h4>
                    <p className="mb-1 font-medium text-primary-400">{info.value}</p>
                    <p className="mb-2 text-sm text-gray-400">{info.description}</p>
                    {info.url && info.title !== 'Email' && (
                      <button
                        type="button"
                        onClick={() => window.open(info.url, '_blank', 'noopener,noreferrer')}
                        className="inline-block px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-lg bg-primary-500 hover:bg-primary-600"
                      >
                        See Profile
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="relative z-10 mt-8">
              <h4 className="mb-4 font-semibold text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {/* Social links with real URLs */}
                <a
                  href="https://instagram.com/riddhi_mdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-primary-500 hover:border-primary-500 hover:scale-110"
                  title="Instagram"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >📷</a>
                <a
                  href="https://www.linkedin.com/in/riddhi-mhadgut-3b0a21289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-primary-500 hover:border-primary-500 hover:scale-110"
                  title="LinkedIn"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >💼</a>
                <a
                  href="mailto:riddhimhadgut17@gmail.com"
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-primary-500 hover:border-primary-500 hover:scale-110"
                  title="Gmail"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >✉️</a>
                <a
                  href="https://github.com/RiddhiM170904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-primary-500 hover:border-primary-500 hover:scale-110"
                  title="GitHub"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >👨‍💻</a>
                <a
                  href="https://leetcode.com/u/Riddhi_Mhadgut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-200 transform border rounded-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-primary-500 hover:border-primary-500 hover:scale-110"
                  title="LeetCode"
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >🧩</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 glass-effect">
            <h3 className="mb-6 text-2xl font-bold text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 border border-gray-600 rounded-lg bg-dark-700 focus:outline-none focus:border-primary-500"
                    placeholder="Enter Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 border border-gray-600 rounded-lg bg-dark-700 focus:outline-none focus:border-primary-500"
                    placeholder="Enter Your Email Id"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 border border-gray-600 rounded-lg bg-dark-700 focus:outline-none focus:border-primary-500"
                  placeholder="Enter Your Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-200 border border-gray-600 rounded-lg resize-none bg-dark-700 focus:outline-none focus:border-primary-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-500 disabled:to-gray-600 text-white py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
