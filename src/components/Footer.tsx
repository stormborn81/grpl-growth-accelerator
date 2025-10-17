import { LinkedinIcon, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-16 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={logo} alt="GRPL" className="h-8 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Enterprise-grade marketing leadership for ambitious ANZ businesses. 
                Transform marketing into your growth engine.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-sm mb-4 tracking-tight">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><a href="#services" className="hover:text-foreground transition-colors">Fractional CMO</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Growth Strategy</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Team Leadership</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Marketing Health Check</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm mb-4 tracking-tight">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#insights" className="hover:text-foreground transition-colors">Insights</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-light">
              © {new Date().getFullYear()} GRPL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
                LinkedIn
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
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
