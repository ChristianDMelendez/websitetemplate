
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop"
                alt="About me"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science student with a passion for technology and innovation. 
                My journey in programming started in high school, and since then, I've been constantly 
                learning and growing in this ever-evolving field.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of technology to solve real-world problems and make a positive 
                impact on people's lives. Whether it's developing web applications, mobile apps, or 
                diving into data science, I approach every project with curiosity and determination.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Problem Solver</div>
                    <p className="text-sm text-muted-foreground">
                      Love tackling complex challenges
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">Team Player</div>
                    <p className="text-sm text-muted-foreground">
                      Collaborative and communicative
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
