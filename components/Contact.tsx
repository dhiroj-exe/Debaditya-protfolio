'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Debaditya05-gif', color: 'hover:text-neon-cyan' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/debaditya-saha', color: 'hover:text-neon-blue' },
    { name: 'Portfolio', icon: '🌐', url: 'https://debaditya-saha.vercel.app', color: 'hover:text-neon-purple' },
    { name: 'Email', icon: '📧', url: 'mailto:debaditya.saha@example.com', color: 'hover:text-neon-pink' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Ready to build the future together? Let's discuss your next project or opportunity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-300 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 neon-glow hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main CTA */}
            <div className="glass p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                Let's Build the Future Together
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                I'm always excited to hear about new projects and opportunities. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
              <div className="text-4xl mb-4">🚀</div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-neon-purple mb-4 text-center">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`glass p-4 rounded-lg text-center transition-all duration-300 ${social.color}`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="text-sm font-medium">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-neon-pink mb-4 text-center">
                Quick Info
              </h4>
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-neon-cyan">📍</span>
                  <span className="text-gray-300">Available for remote work</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-neon-cyan">⏰</span>
                  <span className="text-gray-300">Response within 24 hours</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-neon-cyan">💼</span>
                  <span className="text-gray-300">Open to new opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg">
              "The best way to predict the future is to invent it." - Alan Kay
            </p>
            <p className="text-neon-cyan font-medium mt-2">
              Let's invent something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 