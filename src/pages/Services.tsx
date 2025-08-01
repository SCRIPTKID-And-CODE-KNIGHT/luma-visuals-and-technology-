import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Code, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Smartphone,
  Server,
  Lock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-electric-blue" />,
      title: "Graphic Design",
      description: "Professional visual design solutions that communicate your brand message effectively.",
      features: [
        "Logo Design & Branding",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Illustrations",
        "Brand Identity Systems"
      ],
      price: "Starting from $50"
    },
    {
      icon: <Code className="w-12 h-12 text-cyber-purple" />,
      title: "Website & App Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Custom Web Applications",
        "Mobile App Development",
        "API Development",
        "Database Design"
      ],
      price: "Starting from $500"
    },
    {
      icon: <Shield className="w-12 h-12 text-tech-green" />,
      title: "Ethical Hacking & Cybersecurity",
      description: "Comprehensive security assessments and protection strategies for your digital assets.",
      features: [
        "Penetration Testing",
        "Vulnerability Assessments",
        "Security Audits",
        "Incident Response",
        "Security Consulting",
        "Compliance Assessment"
      ],
      price: "Starting from $300"
    },
    {
      icon: <Zap className="w-12 h-12 text-electric-blue" />,
      title: "System Design & Architecture",
      description: "Scalable and efficient system architectures tailored to your business needs.",
      features: [
        "System Architecture Design",
        "Database Optimization",
        "Cloud Solutions",
        "Microservices Architecture",
        "Performance Optimization",
        "Technical Consulting"
      ],
      price: "Starting from $400"
    }
  ];

  const additionalServices = [
    {
      icon: <Monitor className="w-8 h-8 text-electric-blue" />,
      title: "UI/UX Design",
      description: "User-centered design for optimal user experience"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyber-purple" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: <Server className="w-8 h-8 text-tech-green" />,
      title: "DevOps & Deployment",
      description: "Automated deployment and infrastructure management"
    },
    {
      icon: <Lock className="w-8 h-8 text-electric-blue" />,
      title: "Security Training",
      description: "Cybersecurity awareness and training programs"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions from creative design to robust cybersecurity
          </p>
        </section>

        {/* Main Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                    <div className="ml-4">
                      <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-tech-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="tech" className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Additional Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 group text-center">
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20 bg-surface p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Developing a strategic approach" },
              { step: "03", title: "Execution", desc: "Implementing the solution" },
              { step: "04", title: "Delivery", desc: "Testing and final delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary text-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="cyber" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;