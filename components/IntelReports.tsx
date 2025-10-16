'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, ArrowRight } from 'lucide-react'

const reports = [
  {
    id: 1,
    title: 'Zero-Day Vulnerability Analysis in Modern Cloud Infrastructure',
    excerpt: 'Deep dive into emerging attack vectors targeting containerized environments and mitigation strategies.',
    date: '2024-10-10',
    readTime: '8 min',
    classification: 'CRITICAL',
  },
  {
    id: 2,
    title: 'Adversarial ML: Defending AI Models from Poisoning Attacks',
    excerpt: 'Exploring techniques to protect machine learning systems from adversarial manipulation and data poisoning.',
    date: '2024-10-05',
    readTime: '12 min',
    classification: 'HIGH',
  },
  {
    id: 3,
    title: 'Implementing Zero Trust Architecture in Multi-Cloud Environments',
    excerpt: 'Practical guide to deploying zero trust security models across AWS, Azure, and GCP infrastructures.',
    date: '2024-09-28',
    readTime: '10 min',
    classification: 'MEDIUM',
  },
  {
    id: 4,
    title: 'API Security Best Practices for Modern Applications',
    excerpt: 'Comprehensive analysis of API security vulnerabilities and defense mechanisms in RESTful and GraphQL APIs.',
    date: '2024-09-20',
    readTime: '7 min',
    classification: 'HIGH',
  },
]

const classificationColors = {
  CRITICAL: 'bg-red-500/20 text-red-400 border-red-500/30',
  HIGH: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  MEDIUM: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
}

export default function IntelReports() {
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
            <span className="text-cyber-accent font-mono text-sm">{'<'} INTEL REPORTS {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Intelligence Briefings
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Classified insights and technical analysis from the field
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reports.map((report, index) => (
            <motion.article
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl p-6 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyber-primary/10 rounded-lg border border-cyber-primary/30">
                    <FileText className="w-5 h-5 text-cyber-accent" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-mono rounded-full border ${classificationColors[report.classification as keyof typeof classificationColors]}`}>
                    {report.classification}
                  </span>
                </div>
              </div>

              <h3 className="font-orbitron text-xl font-semibold text-white mb-3 group-hover:text-cyber-accent transition-colors">
                {report.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {report.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-cyber-accent/20">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="font-mono">{report.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{report.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-cyber-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-cyber-accent/50 hover:border-cyber-accent">
            Access Full Archive
          </button>
        </motion.div>
      </div>
    </section>
  )
}
