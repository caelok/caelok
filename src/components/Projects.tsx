/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: Project.tsx                            │
\*────────────────────────────────────────────────────────────────────*/
import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "fuzzy",
      description: "a robust Python library for penetration testing, focusing on HTTP/S requests, vulnerability scanning, and detection engineering.",
      technologies: ["python", "http", "vulnerability", "pentesting", "security"],
      category: "cybersecurity",
      githubUrl: "https://github.com/caelok/fuzzy",
      url: "https://github.com/caelok/fuzzy",
      imageOverlay: (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <span className="text-green-400 font-mono text-2xl tracking-widest">FUZZY</span>
        </div>
      )
    },
    {
      title: "TON Battleground",
      description: "Strategic multiplayer battle arena on TON blockchain. Features real-time combat mechanics, NFT integration, and Web3 rewards system.",
      technologies: ["typescript", "ton", "smart contracts", "multiplayer", "gamefi"],
      category: "gamefi",
      githubUrl: "https://github.com/ton-community/ton-battleground",
      url: "https://www.playdeck.io/",
      imageUrl: "https://i.imgur.com/9w4GSra_d.webp?maxwidth=760&fidelity=grand",
      imageOverlay: (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <span className="text-white font-mono text-xl">TON Battleground</span>
        </div>
      )
    },
    {
      title: "viea",
      description: "Innovative 3D generation platform powered by AI, enabling intuitive creation and real-time collaboration.",
      technologies: ["react", "threejs", "ai", "webgl"],
      category: "platform",
      githubUrl: "https://github.com/caelok/viea",
      url: "https://viea.vercel.app",
      imageUrl: "https://i.imgur.com/NmBO932_d.webp?maxwidth=760&fidelity=grand"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 font-sans">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-mono mb-4">
              <Folder size={14} className="mr-2" />
              showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                featured projects
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              collection of projects showcasing expertise in web development, design, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow relative"
              >
                <div className="relative">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                      className="w-full h-48 object-cover"
                    />
                  ) : project.imageOverlay ? (
                    <div className="w-full h-48 bg-gray-900 flex items-center justify-center">
                      {project.imageOverlay}
                    </div>
                  ) : null}
                  
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-mono">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://github.com/caelok" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-80 transition-opacity font-mono space-x-2">
              <Github size={20} />
              <span>view more on github</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
