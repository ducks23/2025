import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              I'm a full-stack software engineer with experience in fast-paced startups and government contracting. I'm
              passionate about implementing cutting-edge technologies to optimize efficiency, reduce costs, and improve
              software delivery.
            </p>
            <p className="text-lg mb-4">
              Currently, I'm working with the U.S. Army as a contracted software engineer at IPTA, where I modernize
              software delivery and develop full-stack applications to enhance operational workflows.
            </p>
            <p className="text-lg">
              I'm actively pursuing AWS Solutions Architect certification and enjoy creating educational content about
              programming on my YouTube channel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">3+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">AWS</div>
                <p className="text-muted-foreground">Cloud Expertise</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">K8s</div>
                <p className="text-muted-foreground">Kubernetes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2">CI/CD</div>
                <p className="text-muted-foreground">DevOps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
