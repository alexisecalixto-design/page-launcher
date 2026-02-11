import { Phone, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-gold">Casas en Morelos</span>
            <p className="text-accent-foreground/70 mt-4 leading-relaxed">
              Tu socio de confianza en bienes raíces. Más de 15 años ayudando a familias
              a encontrar su hogar ideal en Morelos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Enlaces</h4>
            <nav className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Propiedades", href: "#propiedades" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-accent-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-gold">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+527772648784" className="flex items-center gap-3 text-accent-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                +52 777 264 8784
              </a>
              <a href="https://wa.me/527772648784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent-foreground/70 hover:text-gold transition-colors">
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp
              </a>
              <div className="flex items-center gap-3 text-accent-foreground/70">
                <MapPin className="w-4 h-4 text-gold" />
                Morelos, México
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center text-accent-foreground/50 text-sm">
          © {new Date().getFullYear()} Casas en Morelos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
