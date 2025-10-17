import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-horizontal.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <img src={logo} alt="GRPL" className="h-7" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#insights" className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Insights
            </a>
            <a href="#contact" className="text-xs font-medium text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-xs">
              Health Check
            </Button>
            <Button variant="hero" size="sm" className="text-xs">
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
