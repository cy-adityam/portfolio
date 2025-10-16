'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cloud, Brain } from 'lucide-react'

const titles = [
  'AI Architect',
  'Cyber Defender',
  'Cloud Engineer',
  'Ethical Hacker',
  'ML Specialist',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const typingSpeed = isDeleting ? 50 : 150

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTitleIndex((titleIndex + 1) % titles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="cyber-grid absolute inset-0 opacity-20" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="p-4 glass-effect rounded-lg terminal-shadow">
              <Brain className="w-8 h-8 text-cyber-accent" />
            </div>
            <div className="p-4 glass-effect rounded-lg terminal-shadow">
              <Shield className="w-8 h-8 text-cyber-accent" />
            </div>
            <div className="p-4 glass-effect rounded-lg terminal-shadow">
              <Cloud className="w-8 h-8 text-cyber-accent" />
            </div>
            <div className="p-4 glass-effect rounded-lg terminal-shadow">
              <Terminal className="w-8 h-8 text-cyber-accent" />
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-cyber-accent font-mono text-sm tracking-widest">
              {'>'} SYSTEM INITIALIZED
            </span>
          </motion.div>

          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient">MK</span>
          </h1>

          <div className="h-16 md:h-20 mb-6">
            <h2 className="font-orbitron text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
              {displayText}
              <span className="animate-blink text-cyber-accent">|</span>
            </h2>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Where AI Thinks Securely
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-glow/50 transition-all duration-300 neon-border"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 border border-cyber-accent/50"
            >
              Initiate Contact
            </a>
          </motion.div>

          <motion.div
            className="mt-16 font-mono text-xs text-cyber-accent/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>{'>'} Fortifying Intelligence in the Cloud</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-cyber-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-accent rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
