import TimelineItem from '@/components/timeline-item'
export default function Experience() {
  return (
    <section className="py-24 border-t">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />

          <TimelineItem
            period="2023 – 2026"
            title="Freelance Frontend Developer"
            points={[
              'Admin dashboards & data-heavy UIs',
              'Startup MVPs and internal tools',
              'Client-focused, scalable UI architecture'
            ]}
          />

          <TimelineItem
            period="2021 – 2023"
            title="Frontend Developer"
            points={['React & Next.js applications', 'REST API integrations', 'Code reviews & refactoring']}
          />
        </div>
      </div>
    </section>
  )
}
