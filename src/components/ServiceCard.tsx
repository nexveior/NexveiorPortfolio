import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-8 rounded-xl flex flex-col items-start h-full transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="font-display text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{description}</p>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-2xl font-bold text-primary">{price}</span>
        <span className="text-xs text-muted-foreground">starting</span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
