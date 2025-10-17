import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-horizontal.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="GRPL" className="h-8" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#insights" className="text-sm font-medium hover:text-accent transition-colors">
              Insights
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="default" className="hidden sm:inline-flex">
              Run Health Check
            </Button>
            <Button variant="outline" size="default" className="hidden lg:inline-flex">
              Book Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
