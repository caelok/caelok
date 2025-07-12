/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: FeaturedProject.tsx                    │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { ExternalLink, Github, Users, Zap, Globe, Coins } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "intuitive generation",
      description: "transform text into 3d shapes with advanced ai algorithms"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "real-time collaboration",
      description: "work as a team with live editing and sharing"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "native ai workflow",
      description: "integrated ai tools for creative possibilities"
    },
    {
      icon: <Coins className="w-5 h-5" />,
      title: "decentralized economy",
      description: "powered by via token for sustainable growth"
    }
  ];

  return (
    <section id="viea-project" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-mono mb-4">
              <Zap size={14} className="mr-2" />
              project
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                viea platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-mono mb-2">
              shape ideas, not prompts.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-sans">
              native platform for 3d generation and editing with ai
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Project Visual */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-mono text-sm font-bold">
                        V
                      </div>
                      <span className="font-mono font-bold">viea</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                    <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400 font-mono text-xs">3d generation interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                viea: native platform for 3d generation and editing with ai
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                viea transforms text into editable 3d shapes through an intuitive 
                workflow powered by ai. create, iterate, and collaborate in real-time 
                directly from your browser.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://viea.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition-opacity flex items-center space-x-2 font-mono text-sm"
                >
                  <ExternalLink size={16} />
                  <span>join wait-list</span>
                </a>
                <a 
                  href="https://github.com/caelok/viea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 px-5 py-2 rounded-lg transition-colors flex items-center space-x-2 font-mono text-sm"
                >
                  <Github size={16} />
                  <span>see repo</span>
                </a>
              </div>

            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-3">
                  {feature.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 font-mono">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;