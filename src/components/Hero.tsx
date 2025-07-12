/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: Hero.tsx                               │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { Github, ArrowRight, Terminal, TextSelectIcon, DoorClosedIcon, PanelTopClose, TerminalIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#000000 1px, transparent 1px),
            linear-gradient(90deg, #000000 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-mono">
              caelok
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            
            <p className="text-lg text-gray-700 dark:text-gray-300 font-mono">
              [ fullstack developer ]
            </p>  {/* <TerminalIcon size={24} className="text-gray-500 dark:text-gray-400" /> */} 
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            creating innovation, design, technology and code
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/caelok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-80 transition-opacity flex items-center space-x-2 font-mono"
            >
              <Github size={20} />
              <span>view github</span>
              <ArrowRight size={16} />
            </a>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors font-mono"
            >
              explore projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;