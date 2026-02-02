import { motion } from 'framer-motion'
interface TimelineItemProps {
  period: string
  title: string
  points: string[]
}
export default function TimelineItem({ period, title, points }: TimelineItemProps) {
  return (
    <motion.div
      className="relative mb-10 pl-6 group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="relative mb-10 pl-6">
        <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-foreground transition-transform group-hover:scale-125" />

        <span className="text-sm text-muted-foreground">{period}</span>
        <h3 className="mt-1 text-lg font-medium flex items-center gap-2">
          {title}
          <a
            href="#projects"
            className="text-xs underline text-muted-foreground"
          >
            Related projects
          </a>
        </h3>

        <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground">
          {points.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
