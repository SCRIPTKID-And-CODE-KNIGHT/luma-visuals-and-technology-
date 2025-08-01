import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              LUMA VISUALS AND TECHNOLOGY
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional graphic design, cybersecurity expertise, and innovative technology solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2 text-electric-blue" />
                <a href="mailto:technociphernet@gmail.com" className="hover:text-electric-blue transition-colors">
                  technociphernet@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2 text-electric-blue" />
                <a href="tel:+255756377013" className="hover:text-electric-blue transition-colors">
                  +255 756 377 013
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-electric-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-electric-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-electric-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 LUMA VISUALS AND TECHNOLOGY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;