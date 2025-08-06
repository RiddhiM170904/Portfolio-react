import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'branding', name: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Modern e-commerce platform with intuitive user experience and seamless checkout process.',
      image: '/api/placeholder/400/300',
      tags: ['UI/UX', 'E-commerce', 'Responsive'],
      year: '2024',
      client: 'ShopTech Inc.'
    },
    {
      id: 2,
      title: 'Banking Mobile App',
      category: 'mobile',
      description: 'Secure and user-friendly mobile banking application with advanced features.',
      image: '/api/placeholder/400/300',
      tags: ['Mobile', 'Fintech', 'Security'],
      year: '2024',
      client: 'FinanceBank'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'web',
      description: 'Comprehensive healthcare management dashboard for medical professionals.',
      image: '/api/placeholder/400/300',
      tags: ['Dashboard', 'Healthcare', 'Data Viz'],
      year: '2023',
      client: 'MedCare Solutions'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Intuitive food delivery app with real-time tracking and personalized recommendations.',
      image: '/api/placeholder/400/300',
      tags: ['Mobile', 'Food Tech', 'Real-time'],
      year: '2023',
      client: 'FoodieApp'
    },
    {
      id: 5,
      title: 'Tech Startup Branding',
      category: 'branding',
      description: 'Complete brand identity design for an innovative AI startup company.',
      image: '/api/placeholder/400/300',
      tags: ['Branding', 'Logo', 'Identity'],
      year: '2023',
      client: 'AI Innovations'
    },
    {
      id: 6,
      title: 'Learning Platform',
      category: 'web',
      description: 'Educational platform with interactive learning modules and progress tracking.',
      image: '/api/placeholder/400/300',
      tags: ['EdTech', 'Interactive', 'Learning'],
      year: '2022',
      client: 'EduTech Pro'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work and see how I help businesses create amazing digital experiences
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="text-6xl opacity-50">🖼️</div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-400 text-sm font-medium">{project.year}</span>
                  <span className="text-gray-400 text-sm">{project.client}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
