import { Phone, ArrowRight } from "lucide-react";
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
          ¿Quieres vender tu propiedad?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Nosotros te ayudamos. Contamos con una amplia red de compradores
          y estrategias de marketing inmobiliario para vender tu propiedad al mejor precio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            Quiero Vender
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+527771234567"
            className="btn-outline-light px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Llámanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default SellBanner;
