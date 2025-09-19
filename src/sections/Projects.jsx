import React, { useState } from 'react';
import samvidhanproject from '/projects/samvidhan.png';
import stationproject from '/projects/station.png';
import swasthyaproject from '/projects/swasthya.png';
import smartflowproject from '/projects/smartflow.png';
import wastesortproject from '/projects/wastesort.png';
import hundredDaysproject from '/projects/konkan.png';
import simhastha from '/projects/simhastha.png';
const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');


    
    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Individual Projects' },
        { id: 'mobile', name: 'Group Projects' },
        { id: 'branding', name: 'UI/UX Designs' }
    ];

    const projects = [
        // Individual Projects
        {
            id: 1,
            title: 'Konkan Diaries',
            category: 'web',
            description: 'A comprehensive platform showcasing the beauty and culture of the Konkan region with interactive features and detailed information.',
            image: hundredDaysproject,
            tags: ['React', 'Tourism', 'Cultural Heritage'],
            year: '2025',
            client: 'Personal Project',
            githubUrl: 'https://github.com/RiddhiM170904/My-Konkan',
            websiteUrl: 'https://konkandiaries.vercel.app/' // Add your deployed URL here
        },

        // Group Projects
        {
            id: 2,
            title: 'Samvidhan Path',
            category: 'mobile',
            description: 'Educational platform focused on Indian Constitution awareness, making constitutional knowledge accessible to everyone.',
            image: samvidhanproject,
            tags: ['Education', 'Constitution', 'Awareness'],
            year: '2024',
            client: 'Group Project',
            githubUrl: 'https://github.com/dhairyagothi/Samvidhan--Path',
            websiteUrl: 'https://samvidhan-path.vercel.app/' // Add deployed URL when available
        },
        {
            id: 3,
            title: 'Station Guide',
            category: 'mobile',
            description: 'Smart navigation and assistance system for railway stations, helping travelers with real-time information and guidance.',
            image: stationproject,
            tags: ['Navigation', 'Railway', 'Real-time'],
            year: '2024',
            client: 'Group Project',
            githubUrl: 'https://github.com/dhairyagothi/StationGuide',
            websiteUrl: 'https://stationguide.onrender.com/' // Add deployed URL when available
        },
        {
            id: 4,
            title: 'Swasthya Saarthi',
            category: 'mobile',
            description: 'Healthcare companion application providing medical assistance, appointment booking, and health tracking features.',
            image: swasthyaproject,
            tags: ['Healthcare', 'Medical', 'Tracking'],
            year: '2024',
            client: 'Group Project',
            githubUrl: 'https://github.com/dhairyagothi/Swasthya-Saarthi',
            websiteUrl: 'https://swasthya-saarthi.vercel.app/' // Add deployed URL when available
        },
        {
            id: 5,
            title: 'SmartFlow Traffic System',
            category: 'mobile',
            description: 'Intelligent traffic management system using AI to optimize traffic flow and reduce congestion in urban areas.',
            image: smartflowproject,
            tags: ['AI', 'Traffic Management', 'Smart City'],
            year: '2024',
            client: 'Group Project',
            githubUrl: 'https://github.com/dhairyagothi/SmartFlow-Traffic-System',
            websiteUrl: 'https://www.youtube.com/watch?v=UpaVo8AtwxQ' // Add deployed URL when available
        },
        {
            id: 6,
            title: 'WasteSort AI',
            category: 'mobile',
            description: 'AI-powered waste sorting application that helps users identify and properly dispose of different types of waste materials.',
            image: wastesortproject,
            tags: ['AI', 'Environment', 'Sustainability'],
            year: '2024',
            client: 'Group Project',
            githubUrl: 'https://github.com/dhairyagothi/wastesort-ai-deployment',
            websiteUrl: 'https://waste-sortai.vercel.app' // Add deployed URL when available
        },

        // Figma Designs
        {
            id: 7,
            title: 'Swasthya Saarthi Design',
            category: 'branding',
            description: 'Complete UI/UX design for the healthcare companion application with intuitive user interface and seamless user experience.',
            image: swasthyaproject,
            tags: ['UI/UX', 'Healthcare', 'Mobile Design'],
            year: '2024',
            client: 'Design Project',
            figmaUrl: 'https://www.figma.com/design/qozVwtzHId1WOKJR3hOaMV/Swasthya-Saarthi-(Copy)?node-id=3514-231&t=tUAurUEAFYcy0ivj-0',
            websiteUrl: 'https://www.figma.com/design/qozVwtzHId1WOKJR3hOaMV/Swasthya-Saarthi-(Copy)?node-id=3514-231&t=tUAurUEAFYcy0ivj-0'
        },
        {
            id: 8,
            title: 'Simhastha Saarthi',
            category: 'branding',
            description: 'Comprehensive design system for a spiritual and cultural event management platform with modern aesthetics.',
            image: simhastha,
            tags: ['UI/UX', 'Cultural', 'Event Management'],
            year: '2024',
            client: 'Design Project',
            figmaUrl: 'https://www.figma.com/design/GlxepeVAuOKySX04LJr7sY/Simhastha-Saarthi?node-id=0-1&t=7FspdNPIH9Gsvq51-1',
            websiteUrl: 'https://www.figma.com/design/GlxepeVAuOKySX04LJr7sY/Simhastha-Saarthi?node-id=0-1&t=7FspdNPIH9Gsvq51-1'
        },
        {
            id: 9,
            title: 'Station Saarthi Design',
            category: 'branding',
            description: 'User-centered design for railway station navigation system with focus on accessibility and ease of use.',
            image: stationproject,
            tags: ['UI/UX', 'Navigation', 'Accessibility'],
            year: '2024',
            client: 'Design Project',
            figmaUrl: 'https://www.figma.com/design/LOWz9504nj0HYRLNb7RfKP/Station-Saarthi?t=7FspdNPIH9Gsvq51-1',
            websiteUrl: 'https://www.figma.com/design/LOWz9504nj0HYRLNb7RfKP/Station-Saarthi?t=7FspdNPIH9Gsvq51-1'
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
                        Explore my latest work and see how I create amazing digital experiences
                    </p>
                    <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
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
                          {project.image && typeof project.image === 'string' ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="text-6xl opacity-50">🖼️</div>
                          )}
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex gap-4">
                            {/* Eye Icon - View GitHub/Figma Repository */}
                            <button
                              onClick={() => {
                                if (project.githubUrl) {
                                  window.open(project.githubUrl, '_blank');
                                } else if (project.figmaUrl) {
                                  window.open(project.figmaUrl, '_blank');
                                }
                              }}
                              className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200"
                              title={project.githubUrl ? 'View on GitHub' : 'View on Figma'}
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>

                            {/* External Link Icon - Open Live Website */}
                            <button
                              onClick={() => {
                                if (project.websiteUrl && project.websiteUrl !== '#') {
                                  window.open(project.websiteUrl, '_blank');
                                }
                              }}
                              className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors duration-200 ${project.websiteUrl && project.websiteUrl !== '#'
                                  ? 'bg-white/20 hover:bg-white/30 cursor-pointer'
                                  : 'bg-gray-500/50 cursor-not-allowed opacity-50'
                                }`}
                              title={project.websiteUrl && project.websiteUrl !== '#' ? 'Visit Live Website' : 'Website coming soon'}
                              disabled={!project.websiteUrl || project.websiteUrl === '#'}
                            >
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
