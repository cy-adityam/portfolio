'use client'

import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProjectsDashboard from '@/components/ProjectsDashboard'
import SkillTree from '@/components/SkillTree'
import CertificationWall from '@/components/CertificationWall'
import CyberTimeline from '@/components/CyberTimeline'
import IntelReports from '@/components/IntelReports'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import CLITerminal from '@/components/CLITerminal'
import ThemeToggle from '@/components/ThemeToggle'

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), {
  ssr: false,
})

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gradient-dark text-white relative">
        <NeuralBackground />
        <Navigation />
        <ThemeToggle />

        <Hero />
        <ProjectsDashboard />
        <SkillTree />
        <CertificationWall />
        <CyberTimeline />
        <IntelReports />
        <ContactForm />
        <Footer />
        <CLITerminal />
      </main>
    </ThemeProvider>
  )
}
