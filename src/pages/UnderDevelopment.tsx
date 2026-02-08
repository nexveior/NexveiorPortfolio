import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import { motion } from "framer-motion";

const UnderDevelopment = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="min-h-[70vh] flex items-center justify-center section-padding">
          <div className="text-center max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8 glow-box">
                <Construction size={36} />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Under <span className="text-primary glow-text">Development</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                This page is currently being built. Check back soon for updates — something awesome is on the way.
              </p>
              <Link to="/">
                <Button variant="glow" className="gap-2 font-display text-sm tracking-wider">
                  <ArrowLeft size={16} />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default UnderDevelopment;
