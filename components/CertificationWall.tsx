'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Shield, Cloud, Brain, Lock } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    year: '2024',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'TensorFlow Developer',
    issuer: 'Google',
    year: '2023',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    year: '2023',
    icon: Lock,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Offensive Security OSCP',
    issuer: 'Offensive Security',
    year: '2024',
    icon: Award,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 6,
    title: 'Kubernetes Administrator',
    issuer: 'CNCF',
    year: '2023',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function CertificationWall() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full mb-4">
            <span className="text-cyber-accent font-mono text-sm">{'<'} CERTIFICATIONS {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Credential Vault
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verified expertise across security, cloud, and AI domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="glass-effect rounded-xl p-6 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>

                    <h3 className="font-orbitron text-lg font-semibold text-white mb-2 group-hover:text-cyber-accent transition-colors">
                      {cert.title}
                    </h3>

                    <div className="space-y-2">
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      <p className="text-cyber-accent text-sm font-mono">
                        Issued: {cert.year}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-cyber-accent/20">
                      <button className="text-cyber-accent text-sm font-mono hover:text-white transition-colors flex items-center gap-2">
                        Verify Credential
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
