'use client'

import { motion } from 'framer-motion'
import { Calendar, Zap } from 'lucide-react'

const timelineEvents = [
  {
    year: '2024',
    title: 'AI Security Architect',
    description: 'Deployed enterprise-scale AI threat detection systems with 99.7% accuracy',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Cloud Security Engineer',
    description: 'Architected zero-trust infrastructure for Fortune 500 clients',
    type: 'role',
  },
  {
    year: '2023',
    title: 'OSCP Certification',
    description: 'Earned Offensive Security Certified Professional credential',
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'ML Research',
    description: 'Published research on adversarial ML attacks and defensive strategies',
    type: 'milestone',
  },
  {
    year: '2021',
    title: 'Security Analyst',
    description: 'Led incident response teams handling critical security breaches',
    type: 'role',
  },
  {
    year: '2020',
    title: 'Cybersecurity Journey',
    description: 'Began professional journey in ethical hacking and penetration testing',
    type: 'start',
  },
]

export default function CyberTimeline() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full mb-4">
            <span className="text-cyber-accent font-mono text-sm">{'<'} TIMELINE {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Mission Log
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Journey through the cybersecurity landscape
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-cyber" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-6 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-cyber-accent" />
                    <span className="text-cyber-accent font-mono text-sm font-semibold">
                      {event.year}
                    </span>
                    {event.type === 'milestone' && (
                      <Zap className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </motion.div>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-1/2 bg-cyber-accent rounded-full border-4 border-cyber-dark shadow-lg shadow-cyber-accent/50 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
