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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2 lg:col-span-1">
              <img src={logo} alt="GRPL - Fractional CMO and Growth Leadership" className="h-8 mb-6" />
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
                <li><button onClick={() => navigate('/services/fractional-cmo')} className="hover:text-foreground transition-colors">Fractional CMO</button></li>
                <li><button onClick={() => navigate('/services/chief-growth-officer')} className="hover:text-foreground transition-colors">Chief Growth Officer</button></li>
                <li><button onClick={() => navigate('/services/marketing-audit')} className="hover:text-foreground transition-colors">Marketing Audit</button></li>
                <li><button onClick={() => navigate('/services/outsourced-marketing-department')} className="hover:text-foreground transition-colors">Outsourced Marketing</button></li>
                <li><button onClick={() => navigate('/services/brand-foundation')} className="hover:text-foreground transition-colors">Brand Foundation</button></li>
                <li><button onClick={() => navigate('/services/growth-projects')} className="hover:text-foreground transition-colors">Growth Projects</button></li>
                <li><button onClick={() => navigate('/services/interim-cmo')} className="hover:text-foreground transition-colors">Interim CMO</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm mb-4 tracking-tight">Locations</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><button onClick={() => navigate('/fractional-cmo-sydney')} className="hover:text-foreground transition-colors">Fractional CMO Sydney</button></li>
                <li><button onClick={() => navigate('/fractional-cmo-melbourne')} className="hover:text-foreground transition-colors">Fractional CMO Melbourne</button></li>
                <li><button onClick={() => navigate('/fractional-cmo-brisbane')} className="hover:text-foreground transition-colors">Fractional CMO Brisbane</button></li>
                <li><button onClick={() => navigate('/fractional-cmo-perth')} className="hover:text-foreground transition-colors">Fractional CMO Perth</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-4 tracking-tight">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                <li><button onClick={() => navigate('/about')} className="hover:text-foreground transition-colors">About</button></li>
                <li><button onClick={() => navigate('/blog')} className="hover:text-foreground transition-colors">Insights</button></li>
                <li><button onClick={() => navigate('/faq')} className="hover:text-foreground transition-colors">FAQ</button></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><button onClick={() => navigate('/privacy')} className="hover:text-foreground transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => navigate('/terms')} className="hover:text-foreground transition-colors">Terms & Conditions</button></li>
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
