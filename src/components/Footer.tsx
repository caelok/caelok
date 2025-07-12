/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: Footer.tsx                             │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { Heart, Github, MessageCircle, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold font-mono">caelok</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            creating innovative digital experiences through code, design, and cutting-edge technology.
          </p>

          {/* Links Section */}
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm px-4 py-2 rounded-[22%] border border-gray-300 dark:border-gray-600"
            >
              about
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm px-4 py-2 rounded-[22%] border border-gray-300 dark:border-gray-600"
            >
              projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm px-4 py-2 rounded-[22%] border border-gray-300 dark:border-gray-600"
            >
              contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/caelok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://t.me/caelok080004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <a 
              href="https://discord.gg/yWhTghc5x8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
            >
              <Users size={16} />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <p>© 2025 caelok. all rights reserved.</p>
            <p className="flex items-center justify-center">
              made with <Heart size={14} className="mx-1 text-red-400" /> by caelok
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;