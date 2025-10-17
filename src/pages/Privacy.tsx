import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Privacy Policy</h1>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-foreground/70 leading-relaxed">
                  GRPL ("we", "us", "our", "GRPL") is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, store, and protect personal information through our website www.grpl.com.au (the "Site") and related services.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  By using our Site or providing us with your personal information, you agree to the practices described in this Policy. If you do not agree, please do not use or access the Site or provide us with personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Scope and legal basis</h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>This Policy applies to personal information collected via the Site, forms, emails, or other interactions with us (unless otherwise stated).</li>
                  <li>We comply (as applicable) with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</li>
                  <li>If you are located outside Australia, additional or different privacy laws (e.g. GDPR) may also apply to you; we endeavour to respect those rights.</li>
                  <li>If we materially change this Policy, we will update the "Last updated" date and notify users where practical.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. What personal information we collect</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may collect the following types of personal information, depending on your interactions with us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li><strong>Contact & identity details:</strong> name, email address, phone number, job title, organisation</li>
                  <li><strong>Usage data:</strong> IP address, browser type, device identifiers, pages visited, referrer, timestamps</li>
                  <li><strong>Communications:</strong> messages, enquiries, feedback you send us</li>
                  <li><strong>Marketing data:</strong> preferences, whether you opt in or out of communications</li>
                  <li><strong>Third-party data:</strong> information we receive from analytics providers, social media platforms, or other integration partners</li>
                  <li><strong>Other information:</strong> any other data you voluntarily provide to us (e.g. in surveys, forms, attachments)</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  We do not collect (unless you explicitly provide) sensitive information (e.g. health data, racial or ethnic origin, religious beliefs, criminal record).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. How we collect personal information</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We collect personal information by various means, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>When you fill out forms, contact us, or subscribe to communications</li>
                  <li>Through analytics services (e.g. Google Analytics) and cookies/tracking technologies</li>
                  <li>Via email or other direct communication</li>
                  <li>From third-party services, where you've given them permission (e.g. social media login)</li>
                  <li>Automatically via server logs, browser data, or usage tracking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Purpose of collection and use</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We collect and use personal information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>To respond to your enquiries, provide services, manage our client relationships</li>
                  <li>To send you marketing or promotional communications (where you have consented)</li>
                  <li>To improve our website, services, content, and user experience</li>
                  <li>To analyse usage patterns, trends, or statistics</li>
                  <li>To comply with legal or regulatory obligations</li>
                  <li>To prevent fraud, unauthorised access, or misuse</li>
                  <li>For any other purpose you consent to or which is reasonably related to the above</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  If you choose not to provide some information, we may not be able to provide certain services or respond effectively to your requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Disclosure & cross-border transfers</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We may disclose your personal information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>Service providers and contractors (e.g. email providers, hosting, analytics, CRM)</li>
                  <li>Affiliates, partners, or consultants engaged in service delivery</li>
                  <li>Law enforcement, regulators, or courts, where legally compelled or permitted</li>
                  <li>Other third parties, with your consent or as permitted by law</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  If we transfer personal information outside Australia, we will take reasonable steps to ensure the overseas recipient handles the data in a way consistent with this Policy and relevant privacy laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cookies, tracking & third-party tools</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We (and our third-party partners) use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>Recognise your device and remember settings</li>
                  <li>Analyse how users use our Site (e.g. which pages are visited)</li>
                  <li>Improve our services and content</li>
                  <li>Deliver targeted or relevant advertising</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  You can control or block cookies via your browser settings, but note this may affect functionality. Our Site may also integrate third-party tools (e.g. Google Analytics, Facebook Pixel, advertising networks) which collect data about your use of our Site—this may be governed by their respective privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Data security & retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>We take reasonable technical, administrative, and physical measures to protect personal information from unauthorised access, disclosure, alteration, or destruction.</li>
                  <li>We limit access to personal information to those employees, contractors, or agents who need it to fulfil their roles.</li>
                  <li>We retain personal information only as long as needed to fulfil the purposes for which it was collected (or as required by law). When no longer needed, we will delete or de-identify it.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Access, correction & rights</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/70">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction or updating of your personal information</li>
                  <li>Withdraw your consent (where applicable)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request deletion (subject to legal or contractual retention obligations)</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  To exercise these rights, contact us using the details in Section 12. We may ask you to verify your identity before processing requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Complaints & dispute resolution</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you believe we have breached this Policy or applicable privacy law, please contact us (see Section 12). We will investigate and endeavour to resolve your complaint within a reasonable time.
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  If we cannot resolve your complaint satisfactorily, you may have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Changes to this Privacy Policy</h2>
                <p className="text-foreground/70 leading-relaxed">
                  We may update this Policy from time to time (for example, to reflect changes to our practices or legal obligations). When we make significant changes, we will notify you (via email or prominent notice on the Site). The "Last updated" date above reflects the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact us</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you have any questions, requests, or complaints related to this Privacy Policy or your personal information, please contact: <a href="mailto:letsgo@GRPL.com.au" className="text-primary hover:underline">letsgo@GRPL.com.au</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
