import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
  image?: string;
}

const ProjectCard = ({ title, description, tech, demoLink }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 rounded-xl flex flex-col h-full transition-all duration-300"
    >
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {demoLink ? (
        demoLink.startsWith("/") ? (
          <Link to={demoLink}>
            <Button variant="glow-outline" size="sm" className="w-full gap-2">
              <ExternalLink size={14} />
              View Project
            </Button>
          </Link>
        ) : (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <Button variant="glow-outline" size="sm" className="w-full gap-2">
              <ExternalLink size={14} />
              Live Demo
            </Button>
          </a>
        )
      ) : (
        <Link to="/under-development">
          <Button variant="glow-outline" size="sm" className="w-full gap-2 opacity-60">
            Coming Soon
          </Button>
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
