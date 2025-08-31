'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300"
    >
      {/* New Animation Background System */}
      
      {/* Layer 1: DNA Helix Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dna-${i}`}
            className={`absolute w-2 h-2 bg-neon-cyan rounded-full dna-left ${i < 20 ? `dna-top-${i + 1}` : ''}`}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dna2-${i}`}
            className={`absolute w-2 h-2 bg-neon-purple rounded-full dna-right ${i < 20 ? `dna-top-${i + 1}` : ''}`}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1 + 1.5,
            }}
          />
        ))}
      </div>

      {/* Layer 2: Floating Tech Cards */}
      <div className="absolute inset-0">
        {['Python', 'React', 'AI/ML', 'Node.js', 'MySQL', 'C++'].map((tech, i) => (
          <motion.div
            key={`tech-${i}`}
            className={`absolute ${i < 6 ? `tech-grid-${i + 1}` : ''} float-${(i % 6) + 1}`}
            initial={{
              scale: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1, 0.8, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className="glass px-4 py-2 rounded-lg text-xs font-medium text-neon-cyan border border-neon-cyan/30">
              {tech}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Layer 3: Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className={`absolute text-neon-cyan text-sm font-mono ${i < 10 ? `matrix-col-${i + 1}` : `matrix-col-${(i % 10) + 1}`} ${i < 40 ? `matrix-top-${i + 1}` : ''}`}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </motion.div>
        ))}
      </div>

      {/* Layer 4: Interactive Cursor Glow */}
      <motion.div
        className="fixed w-80 h-80 bg-gradient-radial from-neon-cyan/40 via-neon-purple/20 to-transparent rounded-full blur-3xl pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 60, 
          damping: 25,
          mass: 0.2
        }}
      />

      {/* Layer 5: Floating Achievement Badges */}
      <div className="absolute inset-0">
        {['🏆', '🎯', '🤖', '💻', '🚀', '⭐'].map((badge, i) => (
          <motion.div
            key={`badge-${i}`}
            className={`absolute text-3xl ${i < 6 ? `badge-${i + 1}` : ''} float-${(i % 6) + 1}`}
            initial={{
              scale: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.3 }
            }}
          >
            {badge}
          </motion.div>
        ))}
      </div>

      {/* Layer 6: Energy Waves */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className={`absolute inset-0 border border-neon-cyan/20 rounded-full ${
              i === 0 ? 'border-2' : i === 1 ? 'border-4' : 'border-6'
            }`}
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.5, 2],
              opacity: [1, 0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-20 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5, rotateY: -45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4 
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: [0, -5, 5, 0],
              transition: { duration: 0.6 }
            }}
          >
            <motion.span 
              className="text-gradient block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Debaditya Saha
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1 
            }}
          >
            2x Hackathon Winner 🎯 || Computer Science Student || Python Programmer || Full-Stack Developer || AI & ML Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.2 
            }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                rotateY: [0, -5, 5, 0],
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink text-white font-semibold rounded-full text-lg relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        {['def hackathon()', 'const AI = true', 'async function', 'class Developer'].map((code, i) => (
          <motion.div
            key={code}
            className={`absolute text-xs font-mono text-neon-cyan/30 ${i < 4 ? `code-${i + 1}` : ''} float-${(i % 6) + 1}`}
            initial={{
              opacity: 0,
              x: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero; 