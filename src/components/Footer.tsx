import { Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-google-blue" />
                <div className="w-2 h-2 rounded-full bg-google-red" />
                <div className="w-2 h-2 rounded-full bg-google-yellow" />
                <div className="w-2 h-2 rounded-full bg-google-green" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-foreground text-sm leading-tight">
                  Google Developer Groups
                </span>
                <span className="text-xs text-muted-foreground">OnCampus • MLRIT</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building a community of passionate developers and innovators at MLRIT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-red/20 hover:text-google-red transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-blue/20 hover:text-google-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-blue/20 hover:text-google-blue transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-google-green/20 hover:text-google-green transition-all"
                aria-label="Discord"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GDG On Campus MLRIT. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ by the GDGC Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};
