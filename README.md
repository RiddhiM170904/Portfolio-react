# Sara Howari - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing UI/UX design work and professional experience.

## ✨ Features

- **Modern Design**: Clean, professional design with purple gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations and transitions for better UX
- **Interactive Components**: Dynamic testimonial carousel, project filters, and smooth scrolling
- **Contact Form**: Functional contact form for client inquiries
- **SEO Optimized**: Structured content for better search engine visibility

## 🚀 Tech Stack

- **React 19** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **React Icons** - Icon library
- **Modern CSS** - Custom animations and effects

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Main navigation component
│   └── Footer.jsx       # Footer component
├── sections/           # Page sections
│   ├── Hero.jsx        # Hero/landing section
│   ├── About.jsx       # About me section
│   ├── Services.jsx    # Services offered
│   ├── Projects.jsx    # Portfolio projects
│   ├── Reviews.jsx     # Client testimonials
│   └── Contact.jsx     # Contact form
├── assets/             # Static assets
│   └── images/         # Image files
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── index.css           # Global styles & Tailwind imports
└── main.jsx            # App entry point
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with purple accents (#a855f7)
- **Typography**: Inter font family for modern readability
- **Glass Effects**: Frosted glass components with backdrop blur
- **Gradient Backgrounds**: Smooth gradient overlays and backgrounds
- **Hover Effects**: Interactive hover states and transitions
- **Mobile-First**: Responsive design starting from mobile devices

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Sections Overview

### Hero Section
- Eye-catching introduction with animated 3D character
- Call-to-action buttons
- Social media links
- Smooth scroll indicator

### About Section
- Professional background and experience
- Skills with animated progress bars
- Experience timeline
- Contact information

### Services Section
- UI/UX Design services offered
- Interactive service cards with hover effects
- Feature lists for each service

### Projects Section
- Portfolio showcase with category filtering
- Project cards with overlay effects
- Responsive grid layout

### Reviews Section
- Client testimonials carousel
- Star ratings
- Client information and photos
- Statistics counter

### Contact Section
- Contact form with validation
- Contact information cards
- Social media links
- Newsletter subscription

## 🎯 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
- Update personal information in each section component
- Replace placeholder images with actual project images
- Modify social media links and contact information

### Animations
Customize animations in the CSS files:
- `index.css` for global animations
- Component files for specific animations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Sara Howari - [sara@example.com](mailto:sara@example.com)

Project Link: [https://github.com/yourusername/portfolio-react](https://github.com/yourusername/portfolio-react)

---

⭐ If you like this project, please give it a star on GitHub!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
