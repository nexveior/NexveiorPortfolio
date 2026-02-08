import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Minecraft Server",
    description:
      "A modern Minecraft SMP website designed to showcase the server, share information, and deliver a clean, engaging user experience with smooth animations and responsive design.",
    tech: ["Vite", "React", "Shadcn UI", "Tailwind CSS"],
    demoLink: "https://nexveior.github.io/TestSMP/",
  },
  {
    title: "Portfolio Template",
    description:
      "This very portfolio — a modern showcase site with bold visuals, smooth animations, and a dark, premium aesthetic.",
    tech: ["Vite", "React", "Shadcn UI", "Tailwind CSS"],
    demoLink: "https://nexveior.github.io/NexveiorPortfolio/",
  },
  {
    title: "Fivem Server",
    description:
      "A modern FiveM server website designed to showcase features, rules, and community with a clean, immersive layout.",
    tech: ["Vite", "React", "Shadcn UI", "Tailwind CSS"],
    demoLink: undefined,
  },
];

const MyWork = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Portfolio
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  My <span className="text-primary glow-text">Work</span>
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  A selection of projects I've built — from community platforms to sleek dashboards.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <SectionReveal key={project.title} delay={i * 0.1}>
                  <ProjectCard {...project} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default MyWork;
