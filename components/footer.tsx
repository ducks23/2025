export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Jesse Leonard. All rights reserved.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Full-Stack Software Engineer | Austin, TX</p>
        </div>
      </div>
    </footer>
  )
}
