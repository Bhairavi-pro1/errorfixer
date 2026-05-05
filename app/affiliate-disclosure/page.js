import siteMetadata from "../../data/metadata.json";

export const metadata = siteMetadata["affiliate-disclosure"];

export default function AffiliateDisclosure() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Affiliate <span className="gradient-text">Disclosure</span>
        </h1>
        <p className="text-sm text-on-surface-variant mb-10">Last Updated: May 1, 2026</p>

        <div className="space-y-8 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">1. Affiliate Links</h2>
            <p>
              Some of the links on ErrorFixer may be "affiliate links." This means if you click on the link and purchase an item, we may receive an affiliate commission at no extra cost to you. We use these commissions to help maintain and operate this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">2. No Responsibility for Third-Party Actions</h2>
            <p>
              Please note that we have not been given any free products, services, or anything else by these companies in exchange for mentioning them on the site. The only consideration is in the form of affiliate commissions. ErrorFixer is not responsible for any actions you take on third-party websites or the quality, accuracy, or effectiveness of the products or services you purchase from them. Your interactions and transactions with any third-party website are solely between you and the respective third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-foreground">3. Transparency</h2>
            <p>
              We aim to be completely transparent about our relationships with third parties. Any page or post that contains affiliate links will be clearly marked, but you should assume that any links leading you to products or services are affiliate links.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
