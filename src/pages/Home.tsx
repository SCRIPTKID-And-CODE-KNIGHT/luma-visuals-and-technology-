import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Palette, Code, Zap, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-electric-blue" />,
      title: "Graphic Design",
      description: "Creative visual solutions that captivate and communicate your brand message effectively."
    },
    {
      icon: <Code className="w-8 h-8 text-cyber-purple" />,
      title: "Web Development",
      description: "Modern, responsive websites and applications built with cutting-edge technologies."
    },
    {
      icon: <Shield className="w-8 h-8 text-tech-green" />,
      title: "Cybersecurity",
      description: "Ethical hacking and security solutions to protect your digital assets and infrastructure."
    },
    {
      icon: <Zap className="w-8 h-8 text-electric-blue" />,
      title: "System Design",
      description: "Scalable and efficient system architectures tailored to your business needs."
    }
  ];

  const achievements = [
    "10+ System Design Projects",
    "Certified Ethical Hacker",
    "100+ Graphic Design Works",
    "Modern Web Solutions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                LUMA VISUALS
              </span>
              <br />
              <span className="text-foreground">AND TECHNOLOGY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional graphic design, ethical hacking, and cybersecurity expertise combined 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="tech" size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What I Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions from design to security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose LUMA?
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven expertise across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CheckCircle className="w-8 h-8 text-tech-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-foreground font-semibold">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can bring your vision to life with cutting-edge technology and creative design.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;