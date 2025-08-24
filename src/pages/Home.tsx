import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Code, 
  Palette, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Cloud,
  Database,
  Lock,
  Rocket,
  Brain
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxElement from "@/components/ParallaxElement";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions and machine learning implementations for business automation",
      gradient: "from-electric-blue to-cyber-purple",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security audits, penetration testing, and advanced threat protection",
      gradient: "from-cyber-purple to-tech-green",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure design and microservices architecture",
      gradient: "from-tech-green to-electric-blue",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Modern web applications with cutting-edge technologies and frameworks",
      gradient: "from-electric-blue to-cyber-purple",
    },
  ];

  const achievements = [
    { number: "100+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Security Audits", icon: Shield },
    { number: "25+", label: "AI Solutions", icon: Brain },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "Python", "TensorFlow", "Docker", 
    "Kubernetes", "AWS", "Azure", "MongoDB", "PostgreSQL", "Redis"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-effect">
        <ParallaxElement speed={0.3}>
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-cyber-purple/5 to-tech-green/10" />
        </ParallaxElement>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cyber-border p-8 rounded-2xl bg-background/5"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-tech-gradient"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              LM TECHNOLOGIES
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Pioneering the future with advanced AI solutions, cybersecurity excellence, 
              and cutting-edge technology innovations
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="tech-glow hover-lift cyber-border bg-gradient-primary"
                asChild
              >
                <Link to="/portfolio">
                  <Rocket className="mr-2" size={20} />
                  Explore Our Work
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                asChild
              >
                <Link to="/booking">
                  <ArrowRight className="mr-2" size={20} />
                  Start Your Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Floating Tech Elements */}
        <ParallaxElement speed={0.5} className="absolute top-20 left-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-electric-blue/30"
          >
            <Cpu size={60} />
          </motion.div>
        </ParallaxElement>
        
        <ParallaxElement speed={0.7} className="absolute bottom-20 right-10">
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-cyber-purple/30"
          >
            <Database size={50} />
          </motion.div>
        </ParallaxElement>
      </section>

      {/* Tech Stack Showcase */}
      <AnimatedSection className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-gradient mb-4">
              Powered by Advanced Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We leverage cutting-edge tools and frameworks to deliver exceptional results
            </p>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Badge 
                  variant="outline" 
                  className="text-sm py-2 px-4 hover-lift border-electric-blue/50 hover:border-electric-blue hover:bg-electric-blue/10"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-gradient mb-4">
              Advanced Solutions We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cutting-edge technology services designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.title}
                delay={index * 0.1}
                direction="up"
              >
                <Card className="tech-card h-full group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements Section */}
      <AnimatedSection className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-gradient mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-muted-foreground text-lg">
              Proven track record of excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection 
                key={achievement.label}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="tech-card p-6 rounded-xl">
                    <achievement.icon className="w-8 h-8 mx-auto mb-4 text-electric-blue group-hover:text-tech-green transition-colors" />
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-tech-gradient mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      {achievement.number}
                    </motion.h3>
                    <p className="text-muted-foreground font-medium">
                      {achievement.label}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="cyber-border p-12 rounded-2xl bg-gradient-to-br from-electric-blue/5 to-cyber-purple/5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Lock className="w-16 h-16 mx-auto mb-6 text-electric-blue" />
            <h2 className="text-3xl md:text-4xl font-bold text-tech-gradient mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the digital revolution with our advanced technology solutions. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="tech-glow hover-lift bg-gradient-primary"
                asChild
              >
                <Link to="/contact">
                  <ArrowRight className="mr-2" size={20} />
                  Get Started Today
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10"
                asChild
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;