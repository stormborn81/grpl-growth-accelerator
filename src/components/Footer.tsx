import { LinkedinIcon, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-20 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <img src={logo} alt="GRPL" className="h-6 mb-8 opacity-90" />
              <p className="text-muted-foreground font-extralight leading-relaxed max-w-md text-lg">
                Enterprise-grade marketing leadership for ambitious ANZ businesses. 
                Transform marketing into your growth engine.
              </p>
            </div>
            
            <div>
              <h4 className="font-light text-sm mb-6 tracking-wide uppercase text-foreground/80">Services</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-extralight">
                <li><a href="#services" className="hover:text-foreground transition-colors duration-300">Fractional CMO</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors duration-300">Growth Strategy</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors duration-300">Team Leadership</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors duration-300">Marketing Health Check</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-light text-sm mb-6 tracking-wide uppercase text-foreground/80">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-extralight">
                <li><a href="#about" className="hover:text-foreground transition-colors duration-300">About</a></li>
                <li><a href="#insights" className="hover:text-foreground transition-colors duration-300">Insights</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-10 opacity-30" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-extralight">
              © {new Date().getFullYear()} GRPL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-extralight">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-extralight">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
