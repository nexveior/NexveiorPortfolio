import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Twitter } from "lucide-react";

const contactLinks = [
  {
    icon: <MessageCircle size={24} />,
    label: "Discord",
    description: "Join my server or DM me directly for the fastest response.",
    href: "https://discord.gg/YnewHk5t",
    color: "from-primary/20 to-accent/10",
  },
  {
    icon: <Mail size={24} />,
    label: "Email",
    description: "For formal inquiries or project proposals, email works best.",
    href: "mailto:nexveior@gmail.com",
    color: "from-primary/20 to-accent/10",
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Let's Connect
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Get in <span className="text-primary glow-text">Touch</span>
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Have a project in mind? Want a quote? Or just want to say hi? Reach out through any of these channels.
                </p>
              </div>
            </SectionReveal>

            <div className="space-y-6">
              {contactLinks.map((link, i) => (
                <SectionReveal key={link.label} delay={i * 0.1}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <div className={`glass-card p-6 flex items-center gap-6 bg-gradient-to-r ${link.color}`}>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-base font-semibold text-foreground mb-1">
                          {link.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <Button variant="glow-outline" size="sm" className="shrink-0 font-display text-xs tracking-wider hidden sm:flex">
                        Open
                      </Button>
                    </div>
                  </motion.a>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
