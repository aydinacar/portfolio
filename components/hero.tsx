import { Button } from '@/components/ui/button'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Senior Frontend Developer</h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          Admin panels, dashboards and scalable UI systems built with React, Next.js and Vue.
        </p>

        <p className="mt-4 text-sm text-muted-foreground">7+ years experience · Freelance & Company background</p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">View Projects</Button>
          <Button
            size="lg"
            variant="outline"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}
