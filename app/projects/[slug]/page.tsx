import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { projects } from '@/data/projects'

// ---- SEO ----
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects[slug as keyof typeof projects]
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article'
    }
  }
}
export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const project = projects[slug as keyof typeof projects]

  if (!project) notFound()

  return (
    <main className="min-h-screen py-24 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-6 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">{project.overview}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            {project.tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Key Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            {project.contributions.map(c => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-muted-foreground">{project.outcome}</p>
        </section>
      </div>
    </main>
  )
}
