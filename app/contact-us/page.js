import siteMetadata from "../../data/metadata.json";

export const metadata = siteMetadata["contact-us"];

export default function ContactUs() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Contact <span className="gradient-text">Us</span>
        </h1>
        <p className="text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or want to report an issue with the platform, feel free to reach out.
        </p>

        <div className="bg-surface-high border border-outline-variant rounded-2xl p-8 max-w-2xl">
          <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-on-surface-variant mb-6">
            You can email us directly for any inquiries. We strive to respond to all messages as quickly as possible.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="bg-surface-highest p-4 rounded-xl border border-outline-variant">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a href="mailto:Bhairavi.co@gmail.com" className="text-primary hover:underline font-medium">Bhairavi.co@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
