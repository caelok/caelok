/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: App.tsx                                │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <meta name="description" content="caelok - carlos lurqui's professional portfolio. fullstack developer specialized in web development, ui/ux design, brand strategy and ai integration." />
        <meta name="keywords" content="carlos lurqui, caelok, portfolio, web design, fullstack developer, ai, 3d generation, viea, react, typescript" />
        <meta name="author" content="carlos lurqui" />
        <title>æ | fstack. dev</title>

        <Header />
        <main>
          <Hero />
          <About />
          <FeaturedProject />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;