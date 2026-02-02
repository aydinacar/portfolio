import ThemeToggle from './theme-toggle'
export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <span className="font-semibold">Aydın Acar</span>
        <ThemeToggle />
      </div>
    </header>
  )
}
