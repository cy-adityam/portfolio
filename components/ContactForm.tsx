'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSuccess(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-full mb-4">
            <span className="text-cyber-accent font-mono text-sm">{'<'} CONTACT {'/>'}</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Secure Channel
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Initiate encrypted communication protocol
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-xl border border-cyber-accent/30 overflow-hidden">
            <div className="bg-cyber-darker/80 p-4 border-b border-cyber-accent/30 flex items-center gap-3">
              <Lock className="w-5 h-5 text-green-400" />
              <span className="font-mono text-sm text-green-400">
                ENCRYPTION: AES-256 | STATUS: SECURE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="relative">
                <label className="block text-sm font-mono text-cyber-accent mb-2">
                  IDENTITY VERIFICATION
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg pl-12 pr-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-mono text-cyber-accent mb-2">
                  COMMUNICATION ADDRESS
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg pl-12 pr-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-accent transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-mono text-cyber-accent mb-2">
                  MESSAGE SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-accent transition-colors"
                  placeholder="Brief description"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-mono text-cyber-accent mb-2">
                  ENCRYPTED PAYLOAD
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-cyber-darker border border-cyber-accent/30 rounded-lg pl-12 pr-4 py-3 text-white font-mono focus:outline-none focus:border-cyber-accent transition-colors resize-none"
                    placeholder="Enter your message..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold font-mono flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSuccess
                    ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                    : 'bg-gradient-button text-white border-2 border-cyber-accent hover:shadow-lg hover:shadow-cyber-glow/50'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    MESSAGE SENT
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    TRANSMIT MESSAGE
                  </>
                )}
              </motion.button>
            </form>

            <div className="bg-cyber-darker/80 p-4 border-t border-cyber-accent/30">
              <p className="text-xs text-gray-500 font-mono text-center">
                {'>'} All communications are logged and encrypted | Response time: 24-48 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
