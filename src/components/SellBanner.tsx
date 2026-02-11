import { CheckCircle, ArrowRight } from "lucide-react";
import property4 from "@/assets/property-4.jpg";

const SellBanner = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={property4}
          alt="Propiedad con alberca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-accent-foreground mb-6">
          ¿Buscas vender tu propiedad?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Te ayudamos a vender tu casa al mejor precio. Con 15 años de experiencia en el mercado inmobiliario de Morelos.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-accent-foreground/90 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-gold" />
            <span>Acompañamiento en todo momento</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-gold" />
            <span>Promoción en portales</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-gold" />
            <span>Asesoría personalizada</span>
          </div>
        </div>

        <a
          href="#contacto"
          className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
        >
          Quiero vender mi propiedad
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default SellBanner;
