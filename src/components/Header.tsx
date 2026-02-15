import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-horizontal.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu on navigation
    if (location.pathname === '/') {
      // On homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to homepage with hash
      navigate(`/#${sectionId}`);
      // After navigation, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
            <button onClick={() => handleNavClick('services')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => handleNavClick('about')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => navigate('/blog')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Blog
            </button>
            <button onClick={() => navigate('/hiring-cmo')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Hiring
            </button>
            <button onClick={() => navigate('/contact')} className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Contact
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
                  <button 
                    onClick={() => handleNavClick('services')} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/blog');
                      setMobileMenuOpen(false);
                    }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Blog
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/hiring-cmo');
                      setMobileMenuOpen(false);
                    }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Hiring
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/contact');
                      setMobileMenuOpen(false);
                    }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Contact
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/marketing-health-check');
                      setMobileMenuOpen(false);
                    }} 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    Health Check
                  </button>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="mt-4"
                    onClick={() => {
                      window.open('https://calendar.app.google/uQKcAZf3Z9cbxe9o8', '_blank');
                      setMobileMenuOpen(false);
                    }}
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
