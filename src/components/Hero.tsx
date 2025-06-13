
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=faces"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Alex Johnson
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Student & Aspiring Software Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building impactful applications. 
            Currently pursuing my degree while gaining hands-on experience through internships and personal projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">3.8</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
