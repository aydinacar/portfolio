// data/projects.ts

export type Project = {
  title: string
  description: string
  overview: string
  tech: string[]
  contributions: string[]
  outcome: string
}

export const projects: Record<string, Project> = {
  'admin-dashboard': {
    title: 'Admin Dashboard Platform',
    description: 'Role-based admin dashboard built with Next.js, React and Tailwind CSS.',
    overview: 'Scalable admin dashboard with reusable UI components and role-based access control.',
    tech: ['Next.js', 'React', 'Tailwind', 'REST API'],
    contributions: ['Reusable table & form components', 'Role-based access control', 'Performance optimizations'],
    outcome: 'Used as the main admin tool across teams.'
  },

  'business-management': {
    title: 'Business Management Panel',
    description: 'Internal business management dashboard for products, orders and users.',
    overview: 'Unified internal panel replacing fragmented tools with a clean architecture.',
    tech: ['React', 'Vue', 'Node.js'],
    contributions: ['Modular frontend architecture', 'Server-driven tables', 'Backend collaboration'],
    outcome: 'Reduced manual workflows significantly.'
  }
}
