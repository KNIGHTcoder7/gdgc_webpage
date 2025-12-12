import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-4 left-2 right-2 z-50 transition-all duration-300 rounded-full',
        isScrolled ? 'glass-nav' : 'bg-background/10 backdrop-blur-sm'
      )}
    >
      <div className="max-w-8xl mx-auto px-4">
        <div className="w-full rounded-full flex items-center justify-between px-6 py-3 gap-6">
          {/* Logo (left) */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="rounded-lg bg-card/90 px-3 py-2 flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="GDG logo"
                    className="w-28 h-auto block"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/gdg-logo.svg'; }}
                  />
                  {/* If both fail, inline SVG fallback (kept hidden unless needed) */}
                  <svg viewBox="0 0 48 48" className="w-8 h-8 hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="14" y="4" width="20" height="20" rx="6" fill="hsl(var(--google-red))" transform="rotate(45 24 14)" />
                    <rect x="4" y="14" width="20" height="20" rx="6" fill="hsl(var(--google-blue))" transform="rotate(45 14 24)" />
                    <rect x="24" y="14" width="20" height="20" rx="6" fill="hsl(var(--google-yellow))" transform="rotate(45 34 24)" />
                    <rect x="14" y="24" width="20" height="20" rx="6" fill="hsl(var(--google-green))" transform="rotate(45 24 34)" />
                  </svg>
                </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-foreground text-base leading-tight">
                  Google Developer Groups
                </span>
                <span className="text-sm text-muted-foreground">OnCampus • MLRIT</span>
              </div>
            </div>
          </a>

          {/* Centered Navigation (desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="relative flex items-center gap-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'nav-link relative',
                    activeSection === link.href.replace('#', '') && 'nav-link-active'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 glass-nav border-t border-border/30 transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors',
                activeSection === link.href.replace('#', '') && 'text-foreground bg-secondary'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
