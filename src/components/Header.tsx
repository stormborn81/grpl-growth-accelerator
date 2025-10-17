import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-horizontal.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="GRPL" className="h-6 opacity-90" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
              About
            </a>
            <a href="#insights" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
              Insights
            </a>
            <a href="#contact" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex font-light">
              Health Check
            </Button>
            <Button variant="hero" size="sm" className="font-light">
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
