import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
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
      { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: "https://www.grpl.com.au/terms" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms and Conditions | GRPL"
        description="Terms and Conditions governing the use of the GRPL website. Read our terms for accessing fractional CMO and marketing consulting services information."
        canonical="https://www.grpl.com.au/terms"
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
                <li className="text-foreground">Terms and Conditions</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Terms and Conditions</h1>
            <p className="text-center text-muted-foreground mb-4 text-sm">Last updated: February 2026</p>
            <p className="text-center text-sm text-muted-foreground mb-12">
              See also our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">1. About These Terms</h2>
                <p>These Terms and Conditions ("Terms") govern your access to and use of the website located at grpl.com.au ("Website"), which is owned and operated by GRPL Pty Ltd (ABN 78 420 400 824) ("we", "us", or "our").</p>
                <p>By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Website.</p>
                <p>We may update these Terms from time to time. The updated version will be indicated by the "Last updated" date at the top of this page. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">2. Use of the Website</h2>
                <p>Our Website provides information about our fractional Chief Marketing Officer (CMO) and marketing consulting services, along with blog content, resources, and contact information.</p>
                <p>You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited conduct includes, but is not limited to:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>using the Website in any way that breaches any applicable local, state, national, or international law or regulation;</li>
                  <li>using the Website to transmit or procure the sending of any unsolicited or unauthorised advertising or promotional material;</li>
                  <li>attempting to gain unauthorised access to any part of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website;</li>
                  <li>using any automated means, including robots, crawlers, or scrapers, to access the Website for any purpose without our prior written consent.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">3. Services Information</h2>
                <p>The information provided on this Website about our services is general in nature and is intended to give you an overview of what we offer. It does not constitute an offer to provide services and is not intended to be relied upon as professional marketing advice specific to your circumstances.</p>
                <p>Any engagement of our services will be subject to a separate written consulting agreement between us and you, which will set out the specific scope, fees, deliverables, and other terms applicable to that engagement.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">4. Intellectual Property</h2>
                <p>All content on this Website, including but not limited to text, graphics, logos, images, blog posts, articles, downloadable resources, and the design, selection, and arrangement thereof, is the property of GRPL Pty Ltd or its content suppliers and is protected by Australian and international copyright, trade mark, and other intellectual property laws.</p>
                <p>You may view, download, and print content from the Website for your personal, non-commercial use only, provided you do not modify the content and you retain all copyright and proprietary notices.</p>
                <p>You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content on our Website for commercial purposes without our prior written consent.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">5. Blog Content and Resources</h2>
                <p>Our Website may include blog posts, articles, guides, and other educational content ("Blog Content"). This Blog Content is provided for general informational purposes only and does not constitute professional advice.</p>
                <p>While we endeavour to keep the Blog Content accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the Blog Content for any particular purpose.</p>
                <p>Any reliance you place on the Blog Content is at your own risk. We recommend seeking professional advice before making any business or marketing decisions based on the Blog Content.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">6. Third-Party Links</h2>
                <p>Our Website may contain links to third-party websites or services that are not owned or controlled by GRPL Pty Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
                <p>The inclusion of any link does not imply endorsement, approval, or recommendation by us. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods, or services available on or through any such third-party websites or services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">7. Disclaimers</h2>
                <p>To the maximum extent permitted by law, including the Australian Consumer Law:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>The Website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.</li>
                  <li>We do not warrant that the Website will be available at all times, uninterrupted, secure, or free from errors or viruses.</li>
                  <li>We do not warrant the accuracy, completeness, or usefulness of any information on the Website.</li>
                </ol>
                <p className="mt-4">Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred on you by the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or any other applicable law that cannot be excluded, restricted, or modified by agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>GRPL Pty Ltd, its directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of, or inability to use, the Website.</li>
                  <li>Our total liability to you for all claims arising out of or relating to the use of the Website shall not exceed AUD $100.</li>
                  <li>This limitation of liability applies to all causes of action, whether based in contract, tort (including negligence), strict liability, or any other basis.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">9. Indemnity</h2>
                <p>You agree to indemnify, defend, and hold harmless GRPL Pty Ltd, its directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with your use of the Website, your violation of these Terms, or your violation of any rights of a third party.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">10. Privacy</h2>
                <p>Your use of the Website is also governed by our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is available on our Website. Our Privacy Policy sets out how we collect, use, disclose, and manage your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">11. Cookies and Analytics</h2>
                <p>Our Website uses cookies and similar tracking technologies to improve your browsing experience and to analyse Website traffic. By continuing to use the Website, you consent to our use of cookies in accordance with our Privacy Policy.</p>
                <p>You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of the Website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">12. Termination</h2>
                <p>We reserve the right to terminate or suspend your access to the Website at any time, without prior notice or liability, for any reason, including if you breach these Terms.</p>
                <p>All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">13. General Provisions</h2>

                <h3 className="text-lg font-semibold mt-6 mb-2">13.1 Governing Law</h3>
                <p>These Terms are governed by and construed in accordance with the laws of New South Wales. You irrevocably submit to the exclusive jurisdiction of the courts of that State or Territory and the Federal Court of Australia.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">13.2 Severability</h3>
                <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">13.3 Entire Agreement</h3>
                <p>These Terms constitute the entire agreement between you and GRPL Pty Ltd regarding your use of the Website and supersede all prior agreements and understandings.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">13.4 Waiver</h3>
                <p>No failure or delay by us in exercising any right or remedy under these Terms shall operate as a waiver of that right or remedy.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-accent">14. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p className="mt-2">
                  GRPL Pty Ltd<br />
                  Email: <a href="mailto:matt@grpl.com.au" className="text-primary hover:underline">matt@grpl.com.au</a><br />
                  Website: <a href="https://www.grpl.com.au" className="text-primary hover:underline">grpl.com.au</a>
                </p>
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

export default Terms;
