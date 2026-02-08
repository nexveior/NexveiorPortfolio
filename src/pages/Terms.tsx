import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const Terms = () => {
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
                  Terms of <span className="text-primary glow-text">Service</span>
                </h1>
                <p className="text-sm text-muted-foreground">Last updated: February 2026</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="glass-card p-8 md:p-12 space-y-8">
                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using this website, you agree to be bound by these terms. If you do not agree, please do not use the site.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nexveior provides web development and design services. Project scope, timelines, and pricing are agreed upon before work begins. All work is delivered as described in the project agreement.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment, clients receive full ownership of the delivered website code and assets. Nexveior reserves the right to showcase completed projects in the portfolio unless otherwise agreed.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nexveior is not liable for any indirect, incidental, or consequential damages arising from the use of our services or this website.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-lg font-semibold text-primary mb-3">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of updated terms.
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

export default Terms;
