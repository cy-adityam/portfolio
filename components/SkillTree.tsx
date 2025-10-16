'use client'

import { motion } from 'framer-motion'
import { Shield, Brain, Cloud, Terminal, Database, Network, Lock, Code2 } from 'lucide-react'

const skillCategories = [
  {
    category: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Penetration Testing', level: 95 },
      { name: 'Network Security', level: 90 },
      { name: 'Incident Response', level: 85 },
      { name: 'SIEM Tools', level: 88 },
    ],
    color: 'text-red-400',
  },
  {
    category: 'Artificial Intelligence',
    icon: Brain,
    skills: [
      { name: 'Deep Learning', level: 92 },
      { name: 'NLP', level: 88 },
      { name: 'Computer Vision', level: 85 },
      { name: 'MLOps', level: 80 },
    ],
    color: 'text-purple-400',
  },
  {
    category: 'Cloud Computing',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Kubernetes', level: 87 },
      { name: 'Docker', level: 93 },
      { name: 'Terraform', level: 85 },
    ],
    color: 'text-blue-400',
  },
  {
    category: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Go', level: 85 },
      { name: 'Rust', level: 80 },
      { name: 'TypeScript', level: 88 },
    ],
    color: 'text-green-400',
  },
]

export default function SkillTree() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full mb-4">
            <span className="text-cyber-accent font-mono text-sm">{'<'} SKILLS {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Capability Matrix
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interdisciplinary expertise across security, AI, and infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass-effect rounded-xl p-6 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyber-primary/10 rounded-lg border border-cyber-primary/30">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-cyber-accent text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-cyber rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-cyber-accent/50 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-xl p-8 border border-cyber-accent/20 text-center"
        >
          <h4 className="font-orbitron text-2xl font-semibold text-white mb-4">
            Additional Capabilities
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Cryptography', 'Blockchain', 'IoT Security', 'DevSecOps', 'Threat Intelligence', 'API Security', 'Zero Trust'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-cyber-dark border border-cyber-accent/30 text-cyber-accent text-sm font-mono rounded-full hover:bg-cyber-accent/10 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
