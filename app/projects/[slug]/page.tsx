import { notFound } from 'next/navigation'
import { Metadata } from 'next'

const projects = {
  'admin-dashboard': {
    title: 'Admin Dashboard Platform',
    description: 'Role-based admin dashboard built with Next.js, React and Tailwind CSS.',
    overview:
      'A scalable admin dashboard designed for managing complex datasets with role-based access and reusable UI components.',
    tech: ['Next.js', 'React', 'Tailwind', 'REST API'],
    contributions: [
      'Designed reusable table & form components',
      'Implemented role-based access control',
      'Optimized rendering performance'
    ],
    outcome: 'Used as the main admin tool across teams with improved performance and maintainability.'
  },

  'business-management': {
    title: 'Business Management Panel',
    description: 'Internal business management dashboard for products, orders and users.',
    overview:
      'A unified internal panel replacing multiple fragmented tools with a clean and maintainable architecture.',
    tech: ['React', 'Vue', 'Node.js'],
    contributions: [
      'Built modular frontend architecture',
      'Implemented server-driven tables',
      'Worked closely with backend teams'
    ],
    outcome: 'Reduced manual workflows and became the core internal business tool.'
  }
}

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
