import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_subject", "New Contact Form Submission - LUMA VISUALS");
      form.append("_captcha", "false");

      const response = await fetch("https://formsubmit.co/technociphernet@gmail.com", {
        method: "POST",
        body: form
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-electric-blue" />,
      title: "Email",
      value: "technociphernet@gmail.com",
      link: "mailto:technociphernet@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-tech-green" />,
      title: "Phone",
      value: "+255 756 377 013",
      link: "tel:+255756377013"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-cyber-purple" />,
      title: "WhatsApp",
      value: "+255 756 377 013",
      link: "https://wa.me/255756377013"
    },
    {
      icon: <Clock className="w-6 h-6 text-electric-blue" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity. Simple designs take 3-7 days, web applications 2-6 weeks, and system designs 4-12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance and support packages for all our projects. This includes updates, bug fixes, and technical support."
    },
    {
      question: "Can you work with international clients?",
      answer: "Absolutely! We work with clients worldwide and are experienced in remote collaboration across different time zones."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies (React, Node.js), cybersecurity tools, cloud platforms (AWS, Azure), and design software (Adobe Creative Suite)."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can bring your vision to life.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Send className="w-6 h-6 text-electric-blue mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-electric-blue transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-electric-blue transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background border-border focus:border-electric-blue transition-colors resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-electric-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-tech-green rounded-full mr-3"></div>
                  Professional quality guaranteed
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Fast response time
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></div>
                  Competitive pricing
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-tech-green rounded-full mr-3"></div>
                  Ongoing support included
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-surface p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's schedule a consultation to discuss your requirements in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/255756377013" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="group">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
            <a href="mailto:technociphernet@gmail.com">
              <Button variant="tech" size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;