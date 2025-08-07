import React from 'react';


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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-8">
            Ready to start your project? Let's work together to create something amazing.
          </p>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-lg" >
            Get Started Today
          </button>
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
