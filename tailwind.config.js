/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        dark: {
          950: '#04010d',
          900: '#0a0118',
          800: '#110328',
          700: '#1c0540',
          600: '#2a0d58',
        },
      },
      fontFamily: {
        'sans':  ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        'mono':  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out infinite',
        'glow':         'glow 3s ease-in-out infinite alternate',
        'shimmer':      'shimmer 2.5s linear infinite',
        'spin-slow':    'spin 20s linear infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up':     'slideUp 0.6s ease-out',
        'marquee':      'marquee 30s linear infinite',
        'marquee-r':    'marqueeR 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 8px #e879f9, 0 0 18px #e879f9' },
          '100%': { boxShadow: '0 0 16px #e879f9, 0 0 40px #e879f9, 0 0 60px #8b5cf6' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',     opacity: 1 },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeR: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at 70% 30%, #2a0d58 0%, #0a0118 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(232,121,249,0.08) 0%, rgba(139,92,246,0.05) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(232,121,249,0.25), transparent)',
      },
    },
  },
  plugins: [],
}
