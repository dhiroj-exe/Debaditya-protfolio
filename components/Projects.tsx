'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/portfolio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-dark-200/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="glass rounded-xl overflow-hidden hover:neon-glow transition-all duration-300">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-50">🖼️</div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-neon-cyan text-dark-100 px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-xs rounded-full border border-neon-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-dark-400 text-gray-400 text-xs rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="flex-1 px-4 py-2 bg-dark-400 hover:bg-dark-500 text-white text-sm rounded-lg transition-colors duration-200"
                    >
                      GitHub
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="flex-1 px-4 py-2 bg-neon-cyan hover:bg-neon-cyan/80 text-dark-100 text-sm rounded-lg transition-colors duration-200"
                    >
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 neon-glow hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              return (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="h-48 bg-gradient-to-br from-dark-300 to-dark-400 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-6xl opacity-50">🖼️</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-neon-cyan font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full border border-neon-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1 px-6 py-3 bg-dark-400 hover:bg-dark-500 text-white rounded-lg transition-colors duration-200"
                    >
                      View on GitHub
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1 px-6 py-3 bg-neon-cyan hover:bg-neon-cyan/80 text-dark-100 rounded-lg transition-colors duration-200"
                    >
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects; 