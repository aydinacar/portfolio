import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  points: string[]
  href: string
}
export default function ProjectCard({ title, description, tech, points, href }: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map(t => (
              <Badge
                key={t}
                variant="secondary"
              >
                {t}
              </Badge>
            ))}
          </div>

          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {points.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  )
}
