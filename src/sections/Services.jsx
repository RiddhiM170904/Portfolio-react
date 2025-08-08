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
