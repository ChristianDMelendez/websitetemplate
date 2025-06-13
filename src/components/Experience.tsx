
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "TechStart Inc.",
      period: "Summer 2024",
      type: "Internship",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
      achievements: [
        "Built a customer dashboard that improved user engagement by 25%",
        "Optimized database queries reducing load times by 40%",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "Git"]
    },
    {
      title: "IT Support Assistant",
      company: "University IT Department",
      period: "2023 - Present",
      type: "Part-time",
      description: "Provide technical support to students and faculty. Troubleshoot hardware and software issues, maintain computer labs.",
      achievements: [
        "Resolved 95% of tickets within 24 hours",
        "Trained 5 new student assistants",
        "Implemented new ticketing system improving efficiency by 30%"
      ],
      technologies: ["Windows", "macOS", "Linux", "Networking", "Hardware"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      type: "Freelance",
      description: "Create custom websites for small businesses and individuals. Handle everything from design to deployment and maintenance.",
      achievements: [
        "Completed 8+ projects with 100% client satisfaction",
        "Increased client web traffic by average of 60%",
        "Built responsive, SEO-optimized websites"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Shopify"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-blue-100 text-blue-800";
      case "Part-time": return "bg-green-100 text-green-800";
      case "Freelance": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                      <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                      <p className="text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
