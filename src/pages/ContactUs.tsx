import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ContactUs = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src*="copper.com/j/wtpyhfwJG2bScj3GvmyLG2"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://forms.copper.com/j/wtpyhfwJG2bScj3GvmyLG2";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.grpl.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.grpl.com.au/contact" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Book a Discovery Call | GRPL"
        description="Schedule a free discovery call with GRPL to discuss your marketing leadership needs. Fractional CMO and growth strategy for ANZ businesses."
        canonical="https://www.grpl.com.au/contact"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-foreground">Contact</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-foreground/70 mb-4">
                Get in touch to discuss your marketing needs
              </p>
              <p className="text-base text-foreground/70">
                Email us: <a href="mailto:Letsgo@GRPL.com.au" className="text-primary hover:underline">Letsgo@GRPL.com.au</a>
              </p>
            </div>
            
            <div className="flex justify-center" id="copper-form-container" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
