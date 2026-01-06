import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "GRPL — Executive-level growth leadership without the full-time cost",
  description = "GRPL provides fractional executive-level growth leadership. C-suite expertise without full-time cost. Strategy, growth, and execution for scaling businesses.",
  image = "/og-image.jpg",
  url = "https://www.grpl.com.au",
  type = "website",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GRPL",
    description: "Executive-level growth leadership without the full-time cost",
    url,
    logo: `${url}/logo.png`,
    sameAs: ["https://au.linkedin.com/company/grplstrategy"],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="GRPL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="GRPL" />
      <meta name="theme-color" content="#FF5500" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
