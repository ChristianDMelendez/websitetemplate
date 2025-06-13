
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "EcoTracker Mobile App",
      description: "A React Native application that helps users track their carbon footprint and suggests eco-friendly alternatives. Features include daily tracking, progress visualization, and community challenges.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "Chart.js"],
      github: "#",
      live: "#",
      highlights: [
        "10,000+ downloads on app stores",
        "4.8/5 star rating",
        "Featured in university tech showcase"
      ]
    },
    {
      title: "StudyBuddy Platform",
      description: "A web platform connecting students for study groups and collaborative learning. Includes real-time chat, document sharing, and scheduling features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      highlights: [
        "500+ active users",
        "Winner of university hackathon",
        "Reduced study group formation time by 70%"
      ]
    },
    {
      title: "Smart Budget Analyzer",
      description: "A data analysis project that uses machine learning to analyze spending patterns and provide personalized budgeting recommendations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      github: "#",
      live: "#",
      highlights: [
        "92% accuracy in expense categorization",
        "Open-source with 50+ GitHub stars",
        "Presented at data science conference"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
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
