/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: Header.tsx                             │
\*────────────────────────────────────────────────────────────────────*/
import React, { useState } from 'react';
import { Menu, X, Github, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <a 
              href="https://github.com/caelok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity flex items-center space-x-2 font-mono text-sm"
            >
              <Github size={16} />
              <span>github</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 justify-center flex-grow">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-sm"
            >
              about
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-sm"
            >
              projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono text-sm"
            >
              contact
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 dark:text-gray-300 font-mono text-sm"
              >
                about
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-600 dark:text-gray-300 font-mono text-sm"
              >
                projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 dark:text-gray-300 font-mono text-sm"
              >
                contact
              </button>
              <a 
                href="https://github.com/caelok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 w-fit font-mono text-sm"
              >
                <Github size={16} />
                <span>github</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;