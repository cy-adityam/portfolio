'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const commands = {
  help: 'Available commands: help, projects, skills, certifications, contact, clear',
  projects: 'Navigating to projects section...',
  skills: 'Loading skill tree dashboard...',
  certifications: 'Opening certification vault...',
  contact: 'Initializing secure communication channel...',
  clear: 'CLEAR_SCREEN',
}

export default function CLITerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>([
    { type: 'output', text: 'AI Command Center Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" for available commands.' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const historyEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    setHistory(prev => [...prev, { type: 'input', text: `> ${cmd}` }])

    if (trimmedCmd === 'clear') {
      setTimeout(() => setHistory([]), 100)
      return
    }

    if (trimmedCmd in commands) {
      const response = commands[trimmedCmd as keyof typeof commands]
      setHistory(prev => [...prev, { type: 'output', text: response }])

      if (['projects', 'skills', 'certifications', 'contact'].includes(trimmedCmd)) {
        setTimeout(() => {
          const section = document.getElementById(trimmedCmd)
          section?.scrollIntoView({ behavior: 'smooth' })
          setIsOpen(false)
        }, 500)
      }
    } else if (trimmedCmd) {
      setHistory(prev => [
        ...prev,
        { type: 'output', text: `Command not found: ${cmd}. Type "help" for available commands.` },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-button rounded-full shadow-lg hover:shadow-cyber-glow/50 transition-all duration-300 neon-border group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Terminal className="w-6 h-6 text-white group-hover:animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-50"
            >
              <div className="bg-cyber-darker/95 backdrop-blur-lg border border-cyber-accent/30 rounded-lg shadow-2xl terminal-shadow">
                <div className="flex items-center justify-between p-4 border-b border-cyber-accent/30">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-cyber-accent" />
                    <span className="font-mono text-sm text-cyber-accent">
                      terminal@mk-command-center
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 h-96 overflow-y-auto scrollbar-hide font-mono text-sm">
                  {history.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`mb-2 ${
                        item.type === 'input' ? 'text-cyber-accent' : 'text-gray-300'
                      }`}
                    >
                      {item.text}
                    </motion.div>
                  ))}
                  <div ref={historyEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t border-cyber-accent/30">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-accent font-mono">{'>'}</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-white font-mono"
                      placeholder="Type a command..."
                      autoComplete="off"
                    />
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
