'use client'

import { motion } from 'framer-motion'
import { Shield, Brain, Cloud, Terminal, Lock, Network, Database, Code } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'SecureNet AI',
    description: 'AI-powered threat detection system using deep learning for real-time network anomaly detection',
    category: 'Cybersecurity',
    icon: Shield,
    tech: ['TensorFlow', 'Python', 'Docker'],
    status: 'Active',
  },
  {
    id: 2,
    title: 'CloudGuard',
    description: 'Automated cloud security compliance monitoring and vulnerability assessment platform',
    category: 'Cloud Security',
    icon: Cloud,
    tech: ['AWS', 'Kubernetes', 'Go'],
    status: 'Production',
  },
  {
    id: 3,
    title: 'Neural Fortress',
    description: 'Machine learning model for predictive cybersecurity threat intelligence',
    category: 'AI/ML',
    icon: Brain,
    tech: ['PyTorch', 'FastAPI', 'Redis'],
    status: 'Active',
  },
  {
    id: 4,
    title: 'PenTest Automation Suite',
    description: 'Ethical hacking toolkit for automated penetration testing and vulnerability scanning',
    category: 'Ethical Hacking',
    icon: Terminal,
    tech: ['Python', 'Nmap', 'Metasploit'],
    status: 'Active',
  },
  {
    id: 5,
    title: 'CryptoVault',
    description: 'Zero-knowledge encryption system for secure data storage and transmission',
    category: 'Cryptography',
    icon: Lock,
    tech: ['Rust', 'WebAssembly', 'libsodium'],
    status: 'Beta',
  },
  {
    id: 6,
    title: 'NetFlow Analyzer',
    description: 'Real-time network traffic analysis with ML-based threat classification',
    category: 'Network Security',
    icon: Network,
    tech: ['Elasticsearch', 'Python', 'Grafana'],
    status: 'Active',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsDashboard() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full mb-4">
            <span className="text-cyber-accent font-mono text-sm">{'<'} PROJECTS {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Mission Archives
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deployed solutions securing the digital frontier
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative glass-effect rounded-xl p-6 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-cyber-primary/10 rounded-lg border border-cyber-primary/30 group-hover:border-cyber-accent group-hover:shadow-lg group-hover:shadow-cyber-accent/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyber-accent" />
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded-full border border-green-500/30">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-orbitron text-xl font-semibold text-white mb-2 group-hover:text-cyber-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyber-dark border border-cyber-accent/30 text-cyber-accent text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">{project.category}</span>
                    <Code className="w-4 h-4 text-cyber-accent/60 group-hover:text-cyber-accent transition-colors" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-glow/50 transition-all duration-300 neon-border">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
