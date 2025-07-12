/*─────────────────────────────── æ’’ ────────────────────────────────*\                                                               │
│ github/caelok/caelok/ -> file: About.tsx                              │
\*────────────────────────────────────────────────────────────────────*/

import React from 'react';
import { Code2, Palette, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "fullstack development",
      description: "modern web applications with cutting-edge technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "ui/ux design",
      description: "intuitive interfaces focused on user experience"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "brand strategy",
      description: "cohesive identities that connect with audiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ai integration",
      description: "intelligent solutions for enhanced experiences"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                about me
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 overflow-hidden rounded-2xl">
                <img 
                  src="https://i.imgur.com/wtbEFi4_d.webp?maxwidth=760&fidelity=grand"
                  alt="Carlos Lurqui"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                transforming ideas into digital reality
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                i'm carlos lurqui, my personal brand is caelok, even though i'm 15 years old, 
                i have an infinitely creative mind and a unique approach to solving complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                i have a solid track record of over 5 years in the industry, specializing in web and desktop application development. my professional profile includes deep experience in building apis, managing databases (sql and nosql), backend and frontend development. furthermore, i have an advanced command of video and image editing, fluently handling the entire adobe suite.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-mono">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-sans">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;