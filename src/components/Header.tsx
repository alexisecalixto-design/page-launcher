import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Propiedades", href: "#propiedades" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-foreground">Casas en</span>
          <span className="font-display text-2xl font-bold text-gold">Morelos</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/527772648784"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-foreground/20 px-5 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/527772648784"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-5 py-2.5 rounded-lg text-sm font-medium text-foreground mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
