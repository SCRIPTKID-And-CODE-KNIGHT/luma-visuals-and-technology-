import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock, User, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeSlot: "",
    message: "",
  });
  const { toast } = useToast();

  const services = [
    { value: "graphic-design", label: "Graphic Design", price: "Starting from $50" },
    { value: "web-development", label: "Website & App Development", price: "Starting from $500" },
    { value: "cybersecurity", label: "Ethical Hacking & Cybersecurity", price: "Starting from $300" },
    { value: "system-design", label: "System Design & Architecture", price: "Starting from $400" },
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.service || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including date, service, and time slot.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to Supabase
    toast({
      title: "Booking Submitted Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      timeSlot: "",
      message: "",
    });
    setDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Book a <span className="bg-gradient-primary bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a free consultation to discuss your project needs and requirements
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Calendar className="mr-2 text-electric-blue" />
                Schedule Your Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground flex items-center">
                      <User size={16} className="mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground flex items-center">
                      <Mail size={16} className="mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground flex items-center">
                    <Phone size={16} className="mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <Label className="text-foreground">Service Needed *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          <div>
                            <div className="font-medium">{service.label}</div>
                            <div className="text-sm text-muted-foreground">{service.price}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-foreground">Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="text-foreground flex items-center">
                      <Clock size={16} className="mr-2" />
                      Preferred Time *
                    </Label>
                    <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Side */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-electric-blue/20 p-2 rounded-lg mr-3 mt-1">
                    <Clock className="h-5 w-5 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">30-60 Minute Consultation</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive discussion about your project needs and objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyber-purple/20 p-2 rounded-lg mr-3 mt-1">
                    <User className="h-5 w-5 text-cyber-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Guidance</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional advice on best practices and solution approaches
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-tech-green/20 p-2 rounded-lg mr-3 mt-1">
                    <Mail className="h-5 w-5 text-tech-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Detailed Proposal</h4>
                    <p className="text-muted-foreground text-sm">
                      Custom proposal with timeline, pricing, and project scope
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {services.map((service) => (
                  <div key={service.value} className="flex justify-between items-center p-3 bg-surface rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{service.label}</h4>
                      <p className="text-sm text-muted-foreground">{service.price}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;