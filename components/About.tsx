'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glowing Photo Placeholder */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center overflow-hidden">
                  {/* Replace this div with your actual photo */}
                  <div className="text-6xl text-gray-400"><img 
         src="/profile-pic.jpg" 
         alt="Debaditya Saha" 
         className="w-full h-full object-cover"
       /></div>
                  <div className="absolute bottom-2 text-xs text-gray-500 text-center">
                    Add your photo here
                  </div>
                </div>
              </div>
              
              {/* Floating Elements Around Avatar */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-neon-pink rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-neon-cyan">
              Computer Science Student & AI Enthusiast
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a 3rd year Computer Science student at B.P.C Institute of Technology with a 
              passion for AI/ML, Python programming, and full-stack development. I specialize in 
              creating innovative solutions that solve real-world challenges through practical applications.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in tech started with curiosity and has evolved into expertise in Python, 
              React.js, AI/ML, and full-stack development. I believe in writing clean, maintainable 
              code and staying up-to-date with the latest AI and web technologies.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-neon-cyan">2x Hackathon Winner</h4>
                <p className="text-sm text-gray-400">Proven problem-solving skills</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">🤖</div>
                <h4 className="font-semibold text-neon-cyan">AI & ML Expert</h4>
                <p className="text-sm text-gray-400">Computer Vision & Deep Learning</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">🐍</div>
                <h4 className="font-semibold text-neon-cyan">Python Programmer</h4>
                <p className="text-sm text-gray-400">Advanced Python development</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">⚛️</div>
                <h4 className="font-semibold text-neon-cyan">Full-Stack Developer</h4>
                <p className="text-sm text-gray-400">React.js, PHP, MySQL</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 