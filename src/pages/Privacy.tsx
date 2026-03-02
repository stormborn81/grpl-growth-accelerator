import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Privacy = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.grpl.com.au/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.grpl.com.au/privacy" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | GRPL"
        description="GRPL's Privacy Policy — how we collect, use, and protect your personal information under Australian Privacy Principles."
        canonical="https://www.grpl.com.au/privacy"
        jsonLd={breadcrumbJsonLd}
      />
      <Header />

      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li>/</li>
                <li className="text-foreground">Privacy Policy</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p className="text-center text-muted-foreground mb-4 text-sm">Last updated: February 2026</p>
            <p className="text-center text-sm text-muted-foreground mb-12">
              See also our <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
            </p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">1. Introduction</h2>
                <p>GRPL Pty Ltd (ABN 78 420 400 824) ("we", "us", or "our") is committed to protecting your privacy and handling your personal information in an open and transparent way.</p>
                <p>This Privacy Policy explains how we collect, hold, use, and disclose your personal information in accordance with the Privacy Act 1988 (Cth) ("Privacy Act") and the Australian Privacy Principles ("APPs").</p>
                <p>This Privacy Policy applies to all personal information collected through our website located at grpl.com.au ("Website"), as well as any personal information collected in the course of providing our fractional CMO and marketing consulting services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">2. What Personal Information We Collect</h2>
                <p>We may collect the following types of personal information:</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">2.1 Information you provide directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your name, email address, phone number, and business name (when you contact us via our contact form, email, or phone)</li>
                  <li>Your name and email address (when you subscribe to our newsletter, download a resource, or register for a lead magnet)</li>
                  <li>Any other information you choose to provide in correspondence with us</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2">2.2 Information collected automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your IP address, browser type and version, operating system, and device information</li>
                  <li>Pages visited, time spent on pages, links clicked, and referring website addresses</li>
                  <li>Information collected through cookies and similar tracking technologies (see Section 8)</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2">2.3 Sensitive information</h3>
                <p>We do not collect sensitive information (as defined in the Privacy Act) such as information about your health, racial or ethnic origin, political opinions, religious beliefs, or criminal record. If we ever need to collect sensitive information, we will obtain your explicit consent first.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">3. How We Collect Personal Information</h2>
                <p>We collect personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Directly from you, when you fill in a form on our Website, subscribe to our newsletter, contact us by email or phone, or engage our services</li>
                  <li>Automatically, through cookies and analytics tools when you visit our Website</li>
                  <li>From third parties, such as referrals from existing clients or business contacts (with your knowledge)</li>
                </ul>
                <p className="mt-4">Where practicable, we will collect personal information directly from you. We will not collect personal information unless it is reasonably necessary for one or more of our functions or activities.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">4. Why We Collect, Hold, Use, and Disclose Personal Information</h2>
                <p>We collect, hold, use, and disclose your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your enquiries and communicate with you about our services</li>
                  <li>To provide, manage, and administer our fractional CMO and consulting services</li>
                  <li>To send you our newsletter, blog updates, and marketing communications (where you have opted in)</li>
                  <li>To improve our Website, services, and user experience</li>
                  <li>To comply with our legal obligations</li>
                  <li>For any other purpose with your consent or as required or authorised by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">5. Disclosure of Personal Information</h2>
                <p>We may disclose your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our professional advisers, including accountants and lawyers, as reasonably required</li>
                  <li>Third-party service providers who assist us in operating our Website and delivering our services (e.g. web hosting, email marketing, analytics providers)</li>
                  <li>Government agencies or law enforcement bodies, as required or authorised by law</li>
                  <li>Any other party with your prior consent</li>
                </ul>
                <p className="mt-4">We do not sell, rent, or trade your personal information to any third party for marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">6. Overseas Disclosure</h2>
                <p>Some of our third-party service providers may store or process your personal information outside of Australia. Where this occurs, we take reasonable steps to ensure that the overseas recipient handles your personal information in accordance with the APPs.</p>
                <p>The countries where your information may be processed include the United States, due to the location of our service providers' servers (e.g. email marketing platform, website hosting, analytics tools).</p>
                <p>By providing us with your personal information, you consent to the disclosure of your information to these overseas recipients.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">7. Security of Personal Information</h2>
                <p>We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, and disclosure. These steps include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using secure (SSL/TLS) connections on our Website</li>
                  <li>Restricting access to personal information to authorised personnel only</li>
                  <li>Using password protection and encryption where appropriate</li>
                  <li>Regularly reviewing our information security practices</li>
                </ul>
                <p className="mt-4">We will destroy or de-identify personal information when it is no longer needed for the purpose for which it was collected, unless we are required by law to retain it.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">8. Cookies and Tracking Technologies</h2>
                <p>Our Website uses cookies and similar technologies to improve your experience and to help us understand how our Website is used.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">8.1 What are cookies?</h3>
                <p>Cookies are small text files placed on your device by our Website. They allow us to recognise your browser and remember certain information about your visit.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">8.2 Types of cookies we use</h3>
                <div className="my-4 not-prose">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cookie Type</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Examples</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Essential</TableCell>
                        <TableCell>Required for the Website to function</TableCell>
                        <TableCell>Session management, security</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Analytics</TableCell>
                        <TableCell>Help us understand how visitors use the site</TableCell>
                        <TableCell>Google Analytics</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Marketing</TableCell>
                        <TableCell>Track effectiveness of our marketing</TableCell>
                        <TableCell>LinkedIn Insight Tag, Meta Pixel (if applicable)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Please note that some features of our Website may not function properly if cookies are disabled.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">9. Direct Marketing</h2>
                <p>We may use your personal information to send you marketing communications about our services, blog updates, and resources that may be of interest to you. We will only do so where you have opted in to receive such communications (for example, by subscribing to our newsletter).</p>
                <p>You can opt out of receiving marketing communications from us at any time by clicking the "unsubscribe" link in any marketing email, or by contacting us using the details in Section 13.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">10. Access and Correction</h2>
                <p>You have the right to request access to the personal information we hold about you, and to request that we correct any information that is inaccurate, incomplete, out-of-date, irrelevant, or misleading.</p>
                <p>To make a request, please contact us using the details in Section 13. We will respond to your request within a reasonable period (and in any event within 30 days). We may require you to verify your identity before processing your request.</p>
                <p>We will not charge you for making a request or for correcting your personal information. If we refuse access for a lawful reason, we will provide you with a written explanation.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">11. Notifiable Data Breaches</h2>
                <p>In the event of a data breach that is likely to result in serious harm to any individuals whose personal information is involved, we will comply with the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act. This includes notifying affected individuals and the Office of the Australian Information Commissioner (OAIC) as required.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">12. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated version will be indicated by the "Last updated" date at the top of this page.</p>
                <p>We encourage you to review this Privacy Policy periodically. Your continued use of our Website after any changes constitutes your acceptance of the updated Privacy Policy.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">13. How to Contact Us or Make a Complaint</h2>
                <p>If you have any questions about this Privacy Policy, wish to make a request regarding your personal information, or wish to make a complaint about how we have handled your personal information, please contact us:</p>
                <p className="mt-2">
                  GRPL Pty Ltd<br />
                  Privacy Officer: Matt<br />
                  Email: <a href="mailto:matt@grpl.com.au" className="text-primary hover:underline">matt@grpl.com.au</a><br />
                  Website: <a href="https://www.grpl.com.au" className="text-primary hover:underline">grpl.com.au</a>
                </p>
                <p className="mt-4">We will acknowledge your complaint within 7 days and aim to resolve it within 30 days.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Privacy;
