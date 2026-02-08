import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-lg font-bold tracking-wider text-primary">
              NEXVEIOR
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Performance-focused web developer crafting modern, fast, and affordable websites.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigate</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/work", label: "My Work" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-muted-foreground mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            Developer:{" "}
            <Link to="/" className="text-primary hover:underline">
              Nexveior
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://discord.gg/YnewHk5t" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Discord
            </a>
            <a href="mailto:nexveior@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Gmail
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
