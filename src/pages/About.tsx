import { Card, CardContent } from "@/components/ui/card";
import { Shield, Palette, Code, Brain, Award, Target } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Palette className="w-6 h-6 text-electric-blue" />,
      name: "Graphic Design",
      level: 95
    },
    {
      icon: <Shield className="w-6 h-6 text-tech-green" />,
      name: "Cybersecurity",
      level: 90
    },
    {
      icon: <Code className="w-6 h-6 text-cyber-purple" />,
      name: "Web Development",
      level: 88
    },
    {
      icon: <Brain className="w-6 h-6 text-electric-blue" />,
      name: "System Design",
      level: 85
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-tech-green" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project, exceeding client expectations."
    },
    {
      icon: <Shield className="w-8 h-8 text-electric-blue" />,
      title: "Security First",
      description: "Prioritizing cybersecurity in all digital solutions to protect clients and their users."
    },
    {
      icon: <Target className="w-8 h-8 text-cyber-purple" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and creative approaches to solve complex challenges."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">LUMA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where creativity meets technology and security expertise
          </p>
        </section>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to LUMA VISUALS AND TECHNOLOGY, where innovation meets expertise. 
                  I am a passionate professional specializing in graphic design, ethical hacking, 
                  and cybersecurity solutions.
                </p>
                <p>
                  With years of experience in the digital landscape, I've developed a unique 
                  blend of creative vision and technical prowess. My journey began with graphic 
                  design, crafting visual narratives that captivate and communicate effectively.
                </p>
                <p>
                  As technology evolved, so did my expertise. I expanded into cybersecurity 
                  and ethical hacking, understanding that in our connected world, security 
                  isn't just important—it's essential. This led me to become a certified 
                  ethical hacker, helping businesses protect their digital assets.
                </p>
                <p>
                  Today, I combine these skills to offer comprehensive digital solutions, 
                  from stunning visual designs to robust web applications and secure 
                  system architectures.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">My Mission</h3>
                  <p className="text-muted-foreground">
                    To bridge the gap between creative design and technical security, 
                    delivering solutions that are not only visually compelling but also 
                    secure and scalable.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">My Vision</h3>
                  <p className="text-muted-foreground">
                    To be the go-to expert for businesses seeking comprehensive digital 
                    solutions that combine aesthetic excellence with robust security 
                    and cutting-edge technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold text-foreground ml-3">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block">
                    {skill.level}% Proficiency
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 bg-surface p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-tech-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Certified Ethical Hacker
                </h3>
                <p className="text-muted-foreground text-sm">
                  Professional cybersecurity certification
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Full-Stack Developer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Modern web technologies expert
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Creative Designer
                </h3>
                <p className="text-muted-foreground text-sm">
                  Visual communication specialist
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;