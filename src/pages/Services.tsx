import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Palette, Rocket, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Full Website Development",
    description:
      "Complete website from scratch — responsive design, modern UI, fast performance, and SEO optimization included.",
    price: "50₹",
  },
  {
    icon: <Palette size={24} />,
    title: "Landing Page Design",
    description:
      "A single, high-impact landing page designed to convert visitors into customers with bold visuals and clear CTAs.",
    price: "30₹",
  },
  {
    icon: <Rocket size={24} />,
    title: "Website Redesign",
    description:
      "Transform your existing site with a modern overhaul — improved aesthetics, better UX, and enhanced performance.",
    price: "10₹",
  },
  {
    icon: <Wrench size={24} />,
    title: "Maintenance & Updates",
    description:
      "Ongoing support to keep your site updated, secure, and running smoothly. Bug fixes and feature additions.",
    price: "10₹/mo",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  What I Offer
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary glow-text">Premium</span> Services,{" "}
                  <span className="text-primary glow-text">Affordable</span> Prices
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  High-quality web development that doesn't break the bank. Get a stunning website at a fraction of the usual cost.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {services.map((service, i) => (
                <SectionReveal key={service.title} delay={i * 0.1}>
                  <ServiceCard {...service} />
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <div className="glass-card p-8 md:p-12 text-center glow-border">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Need something custom?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Every project is unique. Let's chat about your specific needs and I'll put together a personalized quote.
                </p>
                <Link to="/contact">
                  <Button variant="glow" size="lg" className="gap-2 font-display text-sm tracking-wider">
                    Contact Me
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Services;
