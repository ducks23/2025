import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "IPTA",
      period: "June 2023 – Present",
      description: "Contracted to support the U.S. Army with a security clearance",
      achievements: [
        "Modernized software delivery by architecting a GitLab CI/CD pipeline deploying Next.js applications on AWS ECS & Kubernetes, eliminating manual processes",
        "Developed full-stack applications with React (Next.js) and Express backends to enhance operational workflows",
        "Designed R Shiny dashboards enabling four-star generals to make data-driven, mission-critical decisions",
        "Assessed and resolved cloud development challenges, improving team efficiency and system reliability",
      ],
      technologies: ["Next.js", "AWS ECS", "Kubernetes", "GitLab CI/CD", "Express", "R Shiny"],
    },
    {
      title: "Software Engineer",
      company: "Vectra AI",
      period: "April 2021 – March 2023",
      description: "",
      achievements: [
        "Led monthly product releases, managing Jenkins deployments, testing, and promotions across dev/stage/prod environments",
        "Built a scalable CLI tool to automate customer onboarding, reducing setup time by 40%",
        "Designed Kubernetes ingress rules and auto-scaling policies in AWS EKS, improving system resilience",
        "Developed a Cognito-integrated user management API (Django REST) for secure authentication",
        "Containerized Django apps with Docker and deployed them on ECS, streamlining development workflows",
      ],
      technologies: ["AWS EKS", "Kubernetes", "Jenkins", "Django REST", "Docker", "AWS Cognito"],
    },
    {
      title: "Software Engineer",
      company: "OmniVector Solutions",
      period: "January 2020 – March 2021",
      description: "",
      achievements: [
        "Automated deployment of HPC systems using Juju & Kubernetes, managing 200+ servers",
        "Established CI/CD pipelines for environment setup, testing, and software releases",
        "Configured MaaS (Metal-as-a-Service) environments, including networking, firewalls, and node discovery",
        "Implemented monitoring (Prometheus, ELK Stack) for 100% uptime of critical systems",
      ],
      technologies: ["Kubernetes", "Juju", "MaaS", "Prometheus", "ELK Stack", "CI/CD"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>
                      {exp.title} – {exp.company}
                    </CardTitle>
                    <CardDescription>{exp.period}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {exp.description && <p className="text-muted-foreground">{exp.description}</p>}
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
