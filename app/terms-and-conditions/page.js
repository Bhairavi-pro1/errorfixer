import siteMetadata from "../../data/metadata.json";

export const metadata = siteMetadata["terms-and-conditions"];

export default function TermsAndConditions() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Terms and <span className="gradient-text">Conditions</span>
        </h1>
        <p className="text-sm text-on-surface-variant mb-10">Last Updated: May 1, 2026</p>

        <div className="space-y-8 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ErrorFixer ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">2. Description of Service</h2>
            <p>
              ErrorFixer provides users with access to a rich collection of resources related to understanding, identifying, and resolving HTTP error codes. You understand and agree that the service is provided "AS-IS" and that ErrorFixer assumes no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">3. Third-Party Services and Advertising</h2>
            <p className="mb-3">
              To provide, maintain, and improve our services, ErrorFixer utilizes certain third-party platforms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Google Analytics & Search Console:</strong> We use these tools to understand site traffic and usage patterns. This data helps us improve the user experience.</li>
              <li><strong className="text-foreground">Google AdSense:</strong> We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</li>
            </ul>
            <p className="mt-3">
              By using ErrorFixer, you consent to the processing of data about you by these third parties in the manner and for the purposes set out above and in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">4. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, and button icons, is the property of ErrorFixer or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of ErrorFixer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
            <p>
              ErrorFixer shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the service or for cost of procurement of substitute goods and services or resulting from any goods or services purchased or obtained or messages received or transactions entered into through the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">6. Modifications to Terms</h2>
            <p>
              ErrorFixer reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">7. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:Bhairavi.co@gmail.com" className="text-primary hover:underline">Bhairavi.co@gmail.com</a>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
