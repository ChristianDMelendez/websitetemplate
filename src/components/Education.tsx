
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      period: "2022 - Present",
      gpa: "3.8/4.0",
      relevant: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Mobile App Development"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Central High School",
      period: "2018 - 2022",
      gpa: "3.9/4.0",
      relevant: [
        "AP Computer Science A",
        "AP Calculus BC",
        "AP Physics",
        "Honor Roll (4 years)",
        "Valedictorian"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{edu.school}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-muted-foreground">{edu.period}</p>
                      <p className="font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Relevant Coursework & Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.relevant.map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </div>
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
