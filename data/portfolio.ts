export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  level: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Face Detection and Recognition App',
    description: 'Advanced computer vision application for detecting and recognizing faces using AI and machine learning algorithms.',
    image: '/projects/face-detection.jpg',
    techStack: ['Python', 'OpenCV', 'AI/ML', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/Debaditya05-gif',
    liveUrl: 'https://face-detection-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Voice Assistant',
    description: 'Intelligent voice assistant powered by AI, capable of understanding natural language and performing various tasks.',
    image: '/projects/ai-voice.jpg',
    techStack: ['Python', 'AI/ML', 'Speech Recognition', 'NLP', 'Machine Learning'],
    githubUrl: 'https://github.com/Debaditya05-gif',
    liveUrl: 'https://ai-voice-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Chatbot',
    description: 'Conversational AI chatbot for customer support and engagement.',
    image: '/projects/ai-chatbot.jpg',
    techStack: ['React.js', 'Node.js', 'AI/ML', 'Full-Stack'],
    githubUrl: 'https://github.com/Debaditya05-gif/nextjs-ai-chatbot',
    liveUrl: 'http://nextjs-ai-chatbot-one-lilac-93.vercel.app',
    featured: true,
  },
  {
    id: '4',
    title: 'Novel AI',
    description: 'AI-powered healthcare solution for disease diagnosis and treatment recommendations using machine learning.',
    image: '/projects/novel-ai.jpg',
    techStack: ['Python', 'AI/ML', 'Healthcare AI', 'Machine Learning', 'React.js'],
    githubUrl: 'https://github.com/Debaditya05-gif',
    liveUrl: 'http://novel-sigma-ecru.vercel.app',
    featured: true,
  },
   {
    id: '5',
    title: 'Odyssey',
    description: 'A marketing website theme built with Astro and carefully crafted for startups and businesses.',
    image: '/projects/odyssey.jpg',
    techStack: ['Astro', 'TailwindCSS', 'JavaScript'],
    githubUrl: 'https://github.com/Debaditya05-gif/odyssey',
    liveUrl: 'https://odyssey-five-tau.vercel.app/',
    featured: true,
  },
  {
    id: '6',
    title: 'E-Commerce',
    description: 'A comprehensive e-commerce platform built with Astro, featuring a modern design and seamless user experience.',
    image: '/projects/e-commerce.jpg',
    techStack: ['Astro', 'TailwindCSS', 'JavaScript'],
    githubUrl: 'https://github.com/Debaditya05-gif/shirt-shop-flags-sdk-example',
    liveUrl: 'https://shirt-shop-flags-sdk-example-mauve.vercel.app/',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', icon: '⚛️', category: 'frontend', level: 95 },
  { name: 'Next.js', icon: '⚡', category: 'frontend', level: 90 },
  { name: 'TypeScript', icon: '📘', category: 'frontend', level: 88 },
  { name: 'TailwindCSS', icon: '🎨', category: 'frontend', level: 92 },
  { name: 'HTML/CSS', icon: '🌐', category: 'frontend', level: 90 },
  
  // Backend
  { name: 'Python', icon: '🐍', category: 'backend', level: 95 },
  { name: 'PHP', icon: '🐘', category: 'backend', level: 88 },
  { name: 'MySQL', icon: '🗄️', category: 'backend', level: 85 },
  { name: 'Node.js', icon: '🟢', category: 'backend', level: 80 },
  { name: 'C++', icon: '⚙️', category: 'backend', level: 85 },
  
  // AI & ML
  { name: 'AI/ML', icon: '🤖', category: 'devops', level: 90 },
  { name: 'Computer Vision', icon: '👁️', category: 'devops', level: 88 },
  { name: 'Deep Learning', icon: '🧠', category: 'devops', level: 85 },
  { name: 'NLP', icon: '💬', category: 'devops', level: 82 },
  
  // Tools
  { name: 'Git', icon: '📚', category: 'tools', level: 90 },
  { name: 'VS Code', icon: '💻', category: 'tools', level: 95 },
  { name: 'Linux', icon: '🐧', category: 'tools', level: 85 },
  { name: 'Jupyter', icon: '📊', category: 'tools', level: 88 },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Computer Science Student',
    company: 'B.P.C Institute of Technology',
    period: '2021 - Present',
    description: '3rd year CSE student specializing in Computer Science with focus on AI/ML, Full-Stack Development, and Python Programming.',
    achievements: [
      'Maintaining strong academic performance in Computer Science',
      'Actively participating in coding challenges and hackathons',
      'Developing practical solutions for real-world problems',
    ],
  },
  {
    id: '2',
    title: 'AI & ML Enthusiast',
    company: 'Self-Learning & Projects',
    period: '2022 - Present',
    description: 'Passionate about artificial intelligence and machine learning, working on various AI projects and certifications.',
    achievements: [
      'Completed AI Engineer Certification and Generative AI courses',
      'Developed AI-powered applications like Face Detection and Voice Assistant',
      'Working on healthcare AI solution (CuroGen)',
    ],
  },
  {
    id: '3',
    title: 'Full-Stack Developer',
    company: 'Freelance & Personal Projects',
    period: '2021 - Present',
    description: 'Building full-stack applications using React.js, PHP, MySQL, and modern web technologies.',
    achievements: [
      'Developed AgriTechHub platform for agricultural technology',
      'Created multiple AI and ML applications',
      'Gained expertise in both frontend and backend development',
    ],
  },
];

export const achievements = [
  '🏆 2x Hackathon Winner',
  '🎯 Computer Science Student',
  '🐍 Python Programmer',
  '⚛️ Full-Stack Developer',
  '🤖 AI & ML Enthusiast',
  '📚 Multiple Certifications',
  '💻 React.js Developer',
  '⚙️ C++ Programmer',
]; 