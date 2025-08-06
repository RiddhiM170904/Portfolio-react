import React from 'react';

const Hero = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'GitHub', icon: '👨‍💻', href: '#' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-primary-400 text-lg font-medium mb-2">WELCOME TO MY WORLD ✨</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary-400">Sara Howari</span>
              </h1>
              <div className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary-400">UI&UX</span>{' '}
                <span className="text-white">Designer</span>
              </div>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                Passionate UI/UX designer, I create intuitive and visually appealing digital 
                experiences. I transform ideas into seamless designs that meet users' 
                expectations.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-white text-dark-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                My Projects
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-200 transform hover:scale-105">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Character Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main character container with gradient background */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary-500/20 to-purple-600/20 rounded-full flex items-center justify-center relative">
                {/* Character placeholder - You can replace this with an actual 3D model or illustration */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Character face */}
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full">
                    {/* Eyes */}
                    <div className="absolute top-16 left-16 w-8 h-8 bg-dark-900 rounded-full">
                      <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-dark-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-16 right-16 w-8 h-8 bg-dark-900 rounded-full">
                      <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full">
                        <div className="absolute top-1 right-1 w-4 h-4 bg-dark-900 rounded-full"></div>
                      </div>
                    </div>
                    {/* Glasses */}
                    <div className="absolute top-14 left-12 right-12 h-12 border-2 border-dark-700 rounded-lg bg-white/20">
                      <div className="absolute top-1 left-1 right-1/2 bottom-1 border border-dark-700 rounded-lg"></div>
                      <div className="absolute top-1 right-1 left-1/2 bottom-1 border border-dark-700 rounded-lg"></div>
                    </div>
                    {/* Hair */}
                    <div className="absolute -top-2 left-4 right-4 h-20 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-400 rounded-lg animate-float"></div>
                <div className="absolute -top-8 right-8 w-6 h-6 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-pink-400 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-8 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:border-primary-400 transition-colors duration-200">
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
