import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MK | AI Command Center',
  description: 'A fusion of AI precision, cybersecurity resilience, and cloud intelligence — engineered by MK. Where AI Thinks Securely.',
  keywords: ['AI', 'Cybersecurity', 'Cloud Computing', 'Ethical Hacking', 'Machine Learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cyber-dark text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
