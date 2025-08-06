import React from 'react';

const About = () => {
  const skills = [
    { name: 'UI Design', percentage: 95 },
    { name: 'UX Research', percentage: 90 },
    { name: 'Prototyping', percentage: 88 },
    { name: 'User Testing', percentage: 85 },
    { name: 'Figma', percentage: 95 },
    { name: 'Adobe XD', percentage: 90 },
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior UI/UX Designer',
      company: 'TechCorp Inc.',
      description: 'Leading design team for enterprise applications and mobile products.'
    },
    {
      year: '2021 - 2023',
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      description: 'Designed user interfaces for various web and mobile applications.'
    },
    {
      year: '2019 - 2021',
      title: 'Junior Designer',
      company: 'StartupXYZ',
      description: 'Worked on user experience research and interface design.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary-400">me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              Welcome to my portfolio
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm Sara Howari, a passionate UI/UX designer with over 5 years of experience 
              creating digital experiences that users love. I specialize in crafting intuitive 
              interfaces and conducting thorough user research to ensure every design decision 
              is backed by data and user needs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My approach combines creativity with analytical thinking, always keeping the user 
              at the center of the design process. I believe great design should be both 
              beautiful and functional, creating seamless experiences that delight users 
              while achieving business goals.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-white">Skills & Expertise</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium">sara@example.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-white font-medium">New York, USA</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Experience</p>
                <p className="text-white font-medium">5+ Years</p>
              </div>
            </div>
          </div>

          {/* Right Content - Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-primary-500/30"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot */}
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass-effect p-6 flex-1">
                      <div className="text-primary-400 font-medium mb-1">{exp.year}</div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-primary-300 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
