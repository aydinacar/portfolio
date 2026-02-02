'use client'

import Projects from '@/components/projects'
import Hero from '@/components/hero'
import Header from '@/components/header'
import Experience from '@/components/experience'
import About from '@/components/about'
import Contact from '@/components/contact'
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
