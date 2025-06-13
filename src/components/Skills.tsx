
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Linux", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Leadership", level: 75 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Certifications & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">AWS Cloud Practitioner</div>
                  <div className="text-sm text-muted-foreground">Amazon Web Services</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">Google Analytics Certified</div>
                  <div className="text-sm text-muted-foreground">Google</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">Scrum Fundamentals</div>
                  <div className="text-sm text-muted-foreground">ScrumStudy</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
