import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { Code, Zap, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Who I Am
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  About <span className="text-primary glow-text">Nexveior</span>
                </h1>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="glass-card p-8 md:p-12 mb-12">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  I'm <span className="text-primary font-semibold">Nexveior</span> — a performance-focused, modern web developer who believes everyone deserves a stunning online presence, regardless of budget.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I specialize in building fast, responsive, and visually impressive websites using the latest technologies. My philosophy is simple: premium quality doesn't need a premium price tag. Every project I take on gets the same level of care, attention to detail, and polished finish.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's a personal portfolio, a community hub, or a business landing page — I craft each site to be a digital experience that leaves an impression. Clean code, bold design, blazing performance.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code size={24} />,
                  title: "Modern Stack",
                  desc: "Vite, React, Shadcn UI, TailwindCSS and more. Always using the best tools for the job.",
                },
                {
                  icon: <Zap size={24} />,
                  title: "Performance First",
                  desc: "Every line of code is optimized. Fast load times, smooth animations, minimal bloat.",
                },
                {
                  icon: <Target size={24} />,
                  title: "Detail Oriented",
                  desc: "Pixel-perfect designs with careful attention to spacing, typography, and visual harmony.",
                },
                {
                  icon: <Heart size={24} />,
                  title: "Passion Driven",
                  desc: "I genuinely love what I do. That passion shows in every project I deliver.",
                },
              ].map((item, i) => (
                <SectionReveal key={item.title} delay={0.2 + i * 0.1}>
                  <div className="glass-card p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-sm font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
