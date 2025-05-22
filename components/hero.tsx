import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Jesse Leonard</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">Full-Stack Software Engineer</h2>
        <p className="max-w-[42rem] text-muted-foreground mb-8 text-lg">
          Building scalable cloud solutions with AWS, Kubernetes, and modern web technologies. Based in Austin, TX.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
        <Link
          href="#about"
          className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full border"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
