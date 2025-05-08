import React, { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    title: 'Lark Technologies Mobile App',
    description: 'Developed & improved a mobile app for a healthcare company using React Native, Redux, RTK Query, Reanimated, Jotai, and industry best practices.',
    link: 'https://play.google.com/store/apps/details?id=com.lark.meadowlark2&hl=en_US',
    bgColor: 'bg-[#00B926]/50 hover:bg-[#00B926]/70 dark:bg-[#00B926]/30 dark:hover:bg-[#00B926]/50',
  },
  {
    title: "Plumb's Veterinary React App",
    description: "Contributed to a team of 4 engineers to build a full-stack web app to translate the world's leading veterinary guide into a user-friendly system using React with Redux and utilizing industry best practices.",
    link: 'https://plumbs.com',
    bgColor: 'bg-plumbs-gradient hover:bg-plumbs-gradient-hover',
  },
  {
    title: 'LawnWise App',
    description: 'Leverages a mono repo approach to deliver an app that integrates with Google Calendar, Mapbox, Stripe, and Firebase to deliver a full-service lawn service app. Everything from pricing & booking, to payment is handled in the app.',
    link: 'https://github.com/ryekerjh/mvsl',
    bgColor: 'bg-green-100/50 hover:bg-green-100/70 dark:bg-green-900/30 dark:hover:bg-green-900/50',
  },
  {
    title: 'Customer Reward App for Local Restaurants',
    description: 'Allows local small businesses to reward their customers for dining in or ordering takeout. Integrates with Stripe to deliver a full-service app & ensure that the inventory & ordering system of the restaurant do not get out of sync with the app.',
    link: 'https://github.com/ryekerjh/restaraunt_app',
    bgColor: 'bg-orange-100/50 hover:bg-orange-100/70 dark:bg-orange-900/30 dark:hover:bg-orange-900/50',
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    // Check for saved preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme class to <html> and save preference
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 sticky top-0 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="text-xl font-bold mb-2 md:mb-0">
            <span className="block md:hidden">RJH</span>
            <span className="hidden md:block">Ryeker J Herndon</span>
          </h1>
          <div className="flex items-center space-x-4">
            <nav className="flex flex-col items-center md:flex-row">
              <a href="#home" className="mx-2 my-1 md:my-0 hover:underline transition duration-300 text-white dark:text-gray-200">Home</a>
              <a href="#projects" className="mx-2 my-1 md:my-0 hover:underline transition duration-300 text-white dark:text-gray-200">Projects</a>
              <a href="#about" className="mx-2 my-1 md:my-0 hover:underline transition duration-300 text-white dark:text-gray-200">About</a>
              <a href="#contact" className="mx-2 my-1 md:my-0 hover:underline transition duration-300 text-white dark:text-gray-200">Contact</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-white dark:bg-gray-600 py-20 text-center transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Senior Software Engineer</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Specializing in React, React Native, Node.js, and AWS. Passionate about building scalable, user-focused applications.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {projects.map((project, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${project.bgColor}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white font-bold transition duration-300"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white dark:bg-gray-600 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
            As a Senior Software Engineer with over a decade of experience, I architect and deliver robust, scalable web and mobile applications using React, React Native, Node.js, Nest.js, TypeScript, and AWS. My expertise spans full-stack development, from crafting intuitive frontends with Redux, RTK Query, and Reanimated to building secure, efficient backends with Stripe, Firebase, and Mapbox integrations. I’ve led teams to success, reducing bugs by 90% at Lark Technologies and delivering a MEAN stack mobile ordering app in under five months. Passionate about solving complex challenges, I drive innovation through industry best practices, monorepo architectures, and a relentless focus on user-centric solutions. Whether refactoring legacy code or designing dashboards for LawnWise, I’m committed to engineering impactful systems that scale and endure.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get in Touch</h2>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Interested in working together? Reach out today!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:ryekerjh@protonmail.com"
              className="bg-gray-400 dark:bg-gray-600 text-black dark:text-white px-6 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white transition duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/ryekerjherndon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linkedin-blue dark:bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-300 dark:hover:bg-blue-500 hover:text-black dark:hover:text-white transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ryekerjh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-black dark:hover:text-white transition duration-300"
            >
              Github
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {currentYear} Ryeker J Herndon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;