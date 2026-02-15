import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-horizontal.png";

const serviceLinks = [
  { label: "All Services", path: "/services" },
  { label: "Fractional CMO", path: "/services/fractional-cmo" },
  { label: "Chief Growth Officer", path: "/services/chief-growth-officer" },
  { label: "Marketing Audit", path: "/services/marketing-audit" },
  { label: "Outsourced Marketing", path: "/services/outsourced-marketing-department" },
  { label: "Brand Foundation", path: "/services/brand-foundation" },
  { label: "Growth Projects", path: "/services/growth-projects" },
  { label: "Interim CMO", path: "/services/interim-cmo" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }} className="flex-shrink-0">
            <img src={logo} alt="GRPL" className="h-7" />
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1"
                onClick={() => navigate('/services')}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                    {serviceLinks.map((link) => (
                      <button
                        key={link.path}
                        onClick={() => { navigate(link.path); setServicesOpen(false); }}
                        className="block w-full text-left px-4 py-2 text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => handleNavClick('about')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => navigate('/blog')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Insights
            </button>
            <button onClick={() => navigate('/contact')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </button>
            <button onClick={() => navigate('/growth-diagnostic')} className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
              Growth Diagnostic
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:inline-flex text-xs"
              onClick={() => navigate('/marketing-health-check')}
            >
              Health Check
            </Button>
            <Button 
              variant="hero" 
              size="sm" 
              className="text-xs hidden md:inline-flex"
              onClick={() => window.open('https://calendar.app.google/uQKcAZf3Z9cbxe9o8', '_blank')}
            >
              Book Call
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left w-full flex items-center justify-between"
                      aria-expanded={mobileServicesOpen}
                    >
                      Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-3 ml-4 flex flex-col gap-3">
                        {serviceLinks.map((link) => (
                          <button
                            key={link.path}
                            onClick={() => { navigate(link.path); setMobileMenuOpen(false); }}
                            className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => { navigate('/blog'); setMobileMenuOpen(false); }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Insights
                  </button>
                  <button 
                    onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Contact
                  </button>
                  <button 
                    onClick={() => { navigate('/marketing-health-check'); setMobileMenuOpen(false); }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Health Check
                  </button>
                  <button 
                    onClick={() => { navigate('/growth-diagnostic'); setMobileMenuOpen(false); }} 
                    className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors text-left"
                  >
                    Growth Diagnostic
                  </button>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="mt-4"
                    onClick={() => { window.open('https://calendar.app.google/uQKcAZf3Z9cbxe9o8', '_blank'); setMobileMenuOpen(false); }}
                  >
                    Book Call
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
