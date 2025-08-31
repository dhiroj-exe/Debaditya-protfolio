'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const categories = [
    { name: 'Frontend', color: 'neon-cyan' },
    { name: 'Backend', color: 'neon-purple' },
    { name: 'AI & ML', color: 'neon-pink' },
    { name: 'Tools', color: 'neon-blue' },
  ];

  const getSkillsByCategory = (category: string) => {
    if (category === 'AI & ML') {
      return skills.filter(skill => skill.category === 'devops');
    }
    return skills.filter(skill => skill.category === category.toLowerCase());
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className={`text-2xl font-bold text-${category.color} mb-2`}>
                  {category.name}
                </h3>
                <div className={`w-16 h-1 bg-${category.color} mx-auto rounded-full`} />
              </div>

              <div className="space-y-4">
                {getSkillsByCategory(category.name).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="glass p-4 rounded-lg hover:neon-glow transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-white group-hover:text-neon-cyan transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-dark-400 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full relative overflow-hidden ${
                          category.color === 'neon-cyan' ? 'bg-gradient-to-r from-neon-cyan to-neon-cyan/60' :
                          category.color === 'neon-purple' ? 'bg-gradient-to-r from-neon-purple to-neon-purple/60' :
                          category.color === 'neon-pink' ? 'bg-gradient-to-r from-neon-pink to-neon-pink/60' :
                          'bg-gradient-to-r from-neon-blue to-neon-blue/60'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              My passion for learning drives me to explore new tools and frameworks that can improve 
              the quality and efficiency of my work.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan">
                  {skills.length}+
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple">
                  {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                </div>
                <div className="text-sm text-gray-400">Average Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-pink">
                  {categories.length}
                </div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue">
                  ∞
                </div>
                <div className="text-sm text-gray-400">Learning Potential</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 