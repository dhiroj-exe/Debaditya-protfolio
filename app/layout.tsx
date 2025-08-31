import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './tailwind.css'
import './animations.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Debaditya Saha - AI & Full-Stack Developer Portfolio',
  description: '2x Hackathon Winner 🎯 || Computer Science Student || Python Programmer || Full-Stack Developer || AI & ML Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-100 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 