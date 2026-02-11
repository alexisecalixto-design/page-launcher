import { Phone, Clock, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="pb-0 pt-20 md:pt-28 bg-accent">
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
              <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl hover:bg-gold/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      {/* Footer chocolate */}
      <div className="bg-[hsl(20,20%,18%)] mt-12 md:mt-16 px-4 py-6">
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
