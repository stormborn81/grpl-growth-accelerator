import { LinkedinIcon, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-horizontal.png";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer id="contact" className="bg-background py-16 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 lg:col-span-1">
              <img src={logo} alt="GRPL" className="h-8 mb-6" />
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Executive level marketing leadership for ambitious ANZ businesses. 
                Transform marketing into your growth engine.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 tracking-tight">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li>
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground font-medium">Mobile:</span>
                    <a href="tel:+61414838210" className="hover:text-foreground transition-colors">
                      +61 414 838 2100
                    </a>
                    <span className="text-xs">(voice • SMS)</span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground font-medium">Email:</span>
                    <a href="mailto:LetsGo@GRPL.com.au" className="hover:text-foreground transition-colors">
                      LetsGo@GRPL.com.au
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground font-medium">Location:</span>
                    <span>Australia</span>
                  </div>
                </li>
              </ul>
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
                <li><button onClick={() => navigate('/privacy')} className="hover:text-foreground transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-light">
              © {new Date().getFullYear()} GRPL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/grplstrategy" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
