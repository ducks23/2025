import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Golang", "JavaScript"],
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "React", "Express", "Django REST Framework"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (ECS, EKS, Cognito)", "Kubernetes", "Terraform", "CI/CD (GitLab, Jenkins)"],
    },
    {
      title: "Networking & Infrastructure",
      skills: ["Linux", "Distributed Systems", "MaaS", "Prometheus", "Logstash", "Kibana"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      {skill}
                    </li>
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
