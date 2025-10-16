'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#contact', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-cyber-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-2xl font-bold text-gradient mb-2">MK</h3>
            <p className="text-gray-500 text-sm font-mono">
              Where AI Thinks Securely
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-effect rounded-lg border border-cyber-accent/20 hover:border-cyber-accent transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyber-accent transition-colors" />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm font-mono">
              © 2024 MK. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs font-mono mt-1">
              Fortifying Intelligence in the Cloud
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-cyber-accent/10 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            {'>'} SYSTEM STATUS: OPERATIONAL | THREAT LEVEL: GREEN | UPTIME: 99.9%
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
