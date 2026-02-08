import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 cyber-grid opacity-30" />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 red-gradient-bg" />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Web Developer & Designer
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                <span className="text-foreground">NEX</span>
                <span className="text-primary glow-text">VEIOR</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Building high-performance, modern websites that look premium — at prices that make sense.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/work">
                <Button variant="glow" size="lg" className="gap-2 px-8 font-display text-sm tracking-wider">
                  View My Work
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glow-outline" size="lg" className="gap-2 px-8 font-display text-sm tracking-wider">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features strip */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Zap size={24} />,
                    title: "Lightning Fast",
                    desc: "Optimized for speed and performance. Your site loads in milliseconds.",
                  },
                  {
                    icon: <Code size={24} />,
                    title: "Clean Code",
                    desc: "Modern tech stack with maintainable, scalable architecture.",
                  },
                  {
                    icon: <Globe size={24} />,
                    title: "Fully Responsive",
                    desc: "Pixel-perfect on every device — desktop, tablet, and mobile.",
                  },
                ].map((feature, i) => (
                  <SectionReveal key={feature.title} delay={i * 0.1}>
                    <div className="glass-card p-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="font-display text-sm font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-primary glow-text">level up</span> your online presence?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's build something incredible together. Affordable pricing, premium quality.
              </p>
              <Link to="/services">
                <Button variant="glow" size="lg" className="gap-2 font-display text-sm tracking-wider">
                  Explore Services
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </SectionReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
