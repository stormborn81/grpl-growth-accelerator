import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEO
        title="Page Not Found | GRPL"
        description="The page you're looking for doesn't exist. Return to GRPL's homepage to explore our fractional CMO and growth leadership services."
        canonical="https://www.grpl.com.au/404"
        noindex={true}
      />
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-black text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity">
            Back to Home
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-border rounded-md font-medium text-foreground hover:bg-muted transition-colors">
            Contact Us
          </Link>
          <Link to="/hiring-cmo" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
            Hiring a CMO?
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
