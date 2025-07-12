/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: Contact.tsx                            │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { MessageCircle, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 font-sans">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-mono mb-4">
              <MessageCircle size={14} className="mr-2" />
              connect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                contact me
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              ready to bring your ideas to life? let's discuss your next project
            </p>
          </div>

          <div className="bg-gray-900 dark:bg-gray-100 rounded-xl p-6 text-white dark:text-gray-900 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center text-gray-900 dark:text-white">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono">github profile</h3>
                    <p className="text-gray-300 dark:text-gray-600 text-sm font-sans">open source contributions</p>
                  </div>
                </div>
                <p className="text-gray-300 dark:text-gray-600 max-w-md text-sm font-sans">
                  explore my repositories, contributions, and coding journey. see the latest projects and collaborate on open source initiatives.
                </p>
              </div>
              <a
                href="https://github.com/caelok"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-xl hover:opacity-80 transition-opacity flex items-center space-x-2 font-mono"
                aria-label="go to github profile"
              >
                <span>github.com/caelok</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-mono">
              ready to start your project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              whether you need a full-stack web application, stunning design, or technical consulting,
              i'm here to help bring your vision to reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/caelok080004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:opacity-80 transition-opacity flex items-center space-x-2 justify-center font-mono text-lg"
                aria-label="start conversation on telegram"
              >
                <MessageCircle size={24} />
                <span>start conversation</span>
              </a>
              <a
                href="https://github.com/caelok"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-300 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900 px-8 py-3 rounded-xl transition-colors flex items-center space-x-2 justify-center font-mono text-lg"
                aria-label="view my work on github"
              >
                <Github size={24} />
                <span>view my work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
