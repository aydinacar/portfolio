// app/projects/business-management/page.tsx

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Management Panel',
  description:
    'Internal business management dashboard for products, orders and users built with React, Vue and Node.js.',
  openGraph: {
    title: 'Business Management Panel',
    description: 'Case study of a modular and scalable business management dashboard.',
    type: 'article'
  }
}

export default function BusinessManagementProject() {
  return (
    <main className="min-h-screen py-24 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-6 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Business Management Panel</h1>
          <p className="text-lg text-muted-foreground">
            Internal dashboard built to manage products, orders and users with a clean, scalable and maintainable
            frontend architecture.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-muted-foreground">
            The goal of this project was to replace fragmented internal tools with a single, consistent management
            panel. The focus was on predictable data flow, reusable UI components and long-term maintainability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>React & Vue (module-based usage)</li>
            <li>Node.js & REST APIs</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Key Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Designed modular and reusable component architecture</li>
            <li>Implemented server-driven tables and filters</li>
            <li>Improved UI consistency across multiple business modules</li>
            <li>Worked closely with backend engineers on API contracts</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-muted-foreground">
            The panel became the main internal tool used daily by operations teams, reducing manual workflows and
            improving data visibility across the company.
          </p>
        </section>
      </div>
    </main>
  )
}
