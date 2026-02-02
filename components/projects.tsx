import ProjectCard from '@/components/project-card'
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-10">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Admin Dashboard Platform"
            description="Role-based admin panel with dynamic tables, filters and API-driven architecture."
            tech={['Next.js', 'React', 'Tailwind', 'REST API']}
            points={['Role-based access control', 'Reusable table & form components', 'Performance-focused rendering']}
          />

          <ProjectCard
            title="Business Management Panel"
            description="Internal dashboard for managing products, orders and users."
            tech={['React', 'Vue', 'Node.js']}
            points={['Modular component architecture', 'Server-driven data tables', 'Clean & maintainable UI']}
          />
        </div>
      </div>
    </section>
  )
}
