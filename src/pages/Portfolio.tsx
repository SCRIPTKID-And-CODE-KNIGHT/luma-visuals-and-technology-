import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "graphic", name: "Graphic Design" },
    { id: "web", name: "Website Design" },
    { id: "system", name: "System Design" }
  ];

  const projects = [
    // Graphic Design Projects
    {
      id: 1,
      title: "Brand Identity for Tech Startup",
      category: "graphic",
      image: "/placeholder.svg",
      description: "Complete brand identity including logo, color palette, and marketing materials for a fintech startup.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Social Media Campaign Design",
      category: "graphic",
      image: "/placeholder.svg",
      description: "Creative social media graphics and campaign materials for a digital marketing agency.",
      technologies: ["Figma", "Adobe Creative Suite", "Canva"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "E-commerce Product Catalog",
      category: "graphic",
      image: "/placeholder.svg",
      description: "Product photography and catalog design for an online fashion retailer.",
      technologies: ["Lightroom", "Photoshop", "InDesign"],
      link: "#",
      github: "#"
    },
    
    // Website Design Projects
    {
      id: 4,
      title: "E-commerce Platform",
      category: "web",
      image: "/placeholder.svg",
      description: "Full-featured e-commerce website with payment integration and inventory management.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "web",
      image: "/placeholder.svg",
      description: "Secure patient management system with appointment scheduling and medical records.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "JWT"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web",
      image: "/placeholder.svg",
      description: "Property listing platform with advanced search and virtual tour capabilities.",
      technologies: ["Next.js", "Prisma", "Supabase", "Tailwind"],
      link: "#",
      github: "#"
    },
    
    // System Design Projects
    {
      id: 7,
      title: "Microservices Architecture for Banking",
      category: "system",
      image: "/placeholder.svg",
      description: "Scalable microservices architecture for a digital banking platform with high availability.",
      technologies: ["Docker", "Kubernetes", "Redis", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 8,
      title: "IoT Data Processing Pipeline",
      category: "system",
      image: "/placeholder.svg",
      description: "Real-time data processing system for IoT sensors with analytics dashboard.",
      technologies: ["Apache Kafka", "Elasticsearch", "Docker", "Python"],
      link: "#",
      github: "#"
    },
    {
      id: 9,
      title: "Content Delivery Network",
      category: "system",
      image: "/placeholder.svg",
      description: "Global CDN architecture with edge caching and load balancing for media streaming.",
      technologies: ["AWS CloudFront", "Redis", "Nginx", "Terraform"],
      link: "#",
      github: "#"
    },
    {
      id: 10,
      title: "Distributed Chat System",
      category: "system",
      image: "/placeholder.svg",
      description: "Scalable real-time messaging system supporting millions of concurrent users.",
      technologies: ["WebSockets", "Redis Cluster", "MongoDB", "Node.js"],
      link: "#",
      github: "#"
    },
    {
      id: 11,
      title: "Machine Learning Pipeline",
      category: "system",
      image: "/placeholder.svg",
      description: "End-to-end ML pipeline for recommendation system with automated model training.",
      technologies: ["Apache Airflow", "TensorFlow", "Kubernetes", "Python"],
      link: "#",
      github: "#"
    },
    {
      id: 12,
      title: "Blockchain Network Architecture",
      category: "system",
      image: "/placeholder.svg",
      description: "Private blockchain network design for supply chain transparency and tracking.",
      technologies: ["Hyperledger Fabric", "Docker", "Go", "CouchDB"],
      link: "#",
      github: "#"
    },
    {
      id: 13,
      title: "Video Streaming Platform",
      category: "system",
      image: "/placeholder.svg",
      description: "Scalable video streaming architecture with adaptive bitrate and global distribution.",
      technologies: ["HLS", "DASH", "FFmpeg", "AWS S3", "CloudFront"],
      link: "#",
      github: "#"
    },
    {
      id: 14,
      title: "Gaming Backend Infrastructure",
      category: "system",
      image: "/placeholder.svg",
      description: "High-performance gaming backend with real-time multiplayer support and anti-cheat.",
      technologies: ["WebRTC", "Redis", "PostgreSQL", "Docker Swarm"],
      link: "#",
      github: "#"
    },
    {
      id: 15,
      title: "Financial Trading System",
      category: "system",
      image: "/placeholder.svg",
      description: "Low-latency trading system with risk management and regulatory compliance.",
      technologies: ["C++", "Apache Kafka", "TimescaleDB", "Redis"],
      link: "#",
      github: "#"
    },
    {
      id: 16,
      title: "Enterprise Search Engine",
      category: "system",
      image: "/placeholder.svg",
      description: "Distributed search engine for enterprise documents with AI-powered relevance.",
      technologies: ["Elasticsearch", "Apache Solr", "Python", "Docker"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "graphic": return "bg-electric-blue text-background";
      case "web": return "bg-cyber-purple text-background";
      case "system": return "bg-tech-green text-background";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of our creative design work, innovative web solutions, and robust system architectures
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "shadow-neon" 
                    : "hover:shadow-neon hover:border-electric-blue"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Badge 
                    className={`absolute top-4 left-4 ${getCategoryColor(project.category)}`}
                  >
                    {categories.find(cat => cat.id === project.category)?.name.replace(" Design", "").replace(" Projects", "")}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="tech" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    {project.github && (
                      <Button size="sm" variant="outline" className="hover:border-electric-blue">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {project.link && (
                      <Button size="sm" variant="outline" className="hover:border-electric-blue">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 bg-surface p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Project Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                16+
              </div>
              <p className="text-muted-foreground">Total Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-muted-foreground">System Designs</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                3+
              </div>
              <p className="text-muted-foreground">Web Applications</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                3+
              </div>
              <p className="text-muted-foreground">Design Projects</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;