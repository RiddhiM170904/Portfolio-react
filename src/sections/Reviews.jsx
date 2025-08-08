import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'David Johnson',
      position: 'CEO, TechStart',
      company: 'TechStart Inc.',
      image: '👨‍💼',
      rating: 5,
      text: "Sara's design work exceeded our expectations. She transformed our complex product into an intuitive and beautiful user experience. Her attention to detail and user-centric approach made all the difference."
    },
    {
      id: 2,
      name: 'Emily Chen',
      position: 'Product Manager, InnovateCorp',
      company: 'InnovateCorp',
      image: '👩‍💻',
      rating: 5,
      text: "Working with Sara was a game-changer for our product. Her UX research insights and design solutions significantly improved our user engagement rates. Highly recommend her expertise!"
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      position: 'Founder, StartupXYZ',
      company: 'StartupXYZ',
      image: '👨‍🚀',
      rating: 5,
      text: "Sara delivered outstanding results on our mobile app design. Her creativity combined with strategic thinking helped us launch a product that users absolutely love. Professional and talented!"
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Director, BrandCo',
      company: 'BrandCo',
      image: '👩‍🎨',
      rating: 5,
      text: "The brand identity Sara created for us perfectly captured our vision and values. Her design process was thorough and collaborative, resulting in a brand we're proud to represent."
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-primary-400">Reviews</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 text-6xl text-primary-500/20 font-serif">
              "
            </div>
            <div className="absolute bottom-0 right-0 text-6xl text-primary-500/20 font-serif rotate-180">
              "
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
              {testimonials[currentTestimonial].text}
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-2xl mr-4">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary-400 font-medium">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial 
                  ? 'bg-primary-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              <span className="sr-only">{`Go to testimonial ${index + 1}`}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
