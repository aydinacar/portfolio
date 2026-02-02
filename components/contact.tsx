export default function Contact() {
  return (
    <section className="py-24 border-t">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-muted-foreground mb-8">Let’s build something solid together.</p>

        <div className="flex gap-6 text-sm">
          <a
            href="mailto:acaraydin01@gmail.com"
            className="underline underline-offset-4"
          >
            Email
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aydın-acar-52a83116a//"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aydinacar"
            target="_blank"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
