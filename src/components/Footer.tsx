import { LinkedinIcon, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="GRPL" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground">
              Enterprise-grade marketing leadership for ambitious ANZ businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-sm uppercase mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-accent transition-colors">Fractional CMO</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Chief Growth Officer</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Marketing Strategy</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Team Development</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black text-sm uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#insights" className="hover:text-accent transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-sm uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@grpl.com.au" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@grpl.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61400000000" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  +61 400 000 000
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} GRPL. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
