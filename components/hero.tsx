import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Senior Frontend Developer
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            Admin panels, dashboards and scalable UI systems built with React, Next.js and Vue.
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm text-muted-foreground"
          >
            7+ years experience · Freelance & Company background
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 pt-4"
          >
            <Button size="lg">View Projects</Button>
            <Button
              size="lg"
              variant="outline"
            >
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
