export default function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="text-muted-foreground">{children}</div>
    </div>
  )
}
