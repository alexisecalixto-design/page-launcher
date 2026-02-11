import { Phone, MessageCircle, Clock, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
            ¿Listo para encontrar tu <span className="text-gold">hogar</span>?
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(to right, hsl(var(--gold)), hsl(var(--primary)))" }} />
          <p className="text-accent-foreground/70 max-w-2xl mx-auto text-lg">
            Contáctanos hoy y comienza tu nueva vida en Morelos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Teléfono */}
          <div className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-display font-semibold text-accent-foreground mb-3">Teléfono</h4>
            <a href="tel:+527772648784" className="block text-accent-foreground/70 hover:text-gold transition-colors text-sm">
              +52 777 264 8784
            </a>
            <a href="tel:+527771986635" className="block text-accent-foreground/70 hover:text-gold transition-colors text-sm mt-1">
              +52 777 198 6635
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-display font-semibold text-accent-foreground mb-3">WhatsApp</h4>
            <a
              href="https://wa.me/527772648784"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground/70 hover:text-gold transition-colors text-sm"
            >
              +52 777 264 8784
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h4 className="font-display font-semibold text-accent-foreground mb-3">Facebook</h4>
            <a
              href="https://www.facebook.com/share/1776DpMjQV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground/70 hover:text-gold transition-colors text-sm"
            >
              Síguenos
            </a>
          </div>

          {/* Horario */}
          <div className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-display font-semibold text-accent-foreground mb-3">Horario</h4>
            <p className="text-accent-foreground/70 text-sm">Lunes a Domingo:</p>
            <p className="text-accent-foreground/70 text-sm">9am - 5pm</p>
          </div>
        </div>

        {/* Botón WhatsApp */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/527772648784?text=Hola,%20me%20interesa%20una%20propiedad%20en%20Morelos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground px-8 py-4 rounded-xl hover:bg-accent-foreground/20 transition-colors font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      {/* Footer chocolate */}
      <div className="bg-[hsl(20,20%,18%)] mt-20 md:mt-28 px-4 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold text-white/90">
            Casas en <span className="text-gold">Morelos</span>
          </span>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Morelos
          </p>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Casas en Morelos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
