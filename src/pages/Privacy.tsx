import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const Privacy = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="mb-12">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Legal
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Privacy <span className="text-primary glow-text">Policy</span>
                </h1>
                <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="glass-card p-8 md:p-12 space-y-8">
                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect basic information when you interact with our services, including your name, email address, and any details you voluntarily provide through contact forms or direct communication.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any information collected is used solely to respond to your inquiries, deliver requested services, and improve the quality of our work. We do not sell, trade, or share your data with third parties.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Cookies & Analytics</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website may use minimal analytics to understand traffic patterns. No personally identifiable information is tracked without your consent.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this privacy policy, please reach out through our contact page.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Privacy;
