import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import Block from '@/components/project/block'
export const metadata: Metadata = {
  title: 'Admin Dashboard Platform',
  description: 'Role-based admin dashboard built with Next.js, React and Tailwind CSS.',
  openGraph: {
    title: 'Admin Dashboard Platform',
    description: 'Case study: scalable admin dashboard with role-based access and optimized performance.'
  }
}
export default function AdminDashboardProject() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard Platform</h1>

          <p className="text-muted-foreground mb-8">
            Role-based admin dashboard built for managing large datasets and internal operations.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['Next.js', 'React', 'Tailwind', 'REST API'].map(t => (
              <Badge
                key={t}
                variant="secondary"
              >
                {t}
              </Badge>
            ))}
          </div>

          <section className="space-y-10">
            <Block title="Problem">
              The application needed to handle large amounts of data while keeping the UI fast and maintainable.
            </Block>

            <Block title="Solution">
              Implemented server-driven tables, reusable components and optimized rendering strategies.
            </Block>

            <Block title="Technical Decisions">
              <ul className="list-disc list-inside">
                <li>Role-based access control</li>
                <li>Reusable table and form components</li>
                <li>Performance-focused rendering</li>
              </ul>
            </Block>

            <Block title="Outcome">Improved maintainability and reduced rendering issues in data-heavy views.</Block>
          </section>
        </div>
      </section>
    </main>
  )
}
