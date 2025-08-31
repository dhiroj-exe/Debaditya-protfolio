'use client';

import { motion } from 'framer-motion';
import { experiences, achievements } from '@/data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-200/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            My professional journey and notable accomplishments in the tech industry.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-neon-cyan rounded-full shadow-lg animate-glow"
                  />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-xl hover:neon-glow transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-neon-cyan font-medium">
                        {experience.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg text-neon-purple mb-3">
                      {experience.company}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-neon-cyan">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-sm text-gray-300 flex items-start space-x-2"
                          >
                            <span className="text-neon-cyan mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-neon-cyan mb-8">
            Notable Achievements
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass p-4 rounded-lg text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-2xl mb-2">{achievement}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">
              Ready for the Next Challenge
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm always looking for new opportunities to grow, learn, and contribute to exciting projects. 
              Let's discuss how we can work together to build something amazing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 neon-glow hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 