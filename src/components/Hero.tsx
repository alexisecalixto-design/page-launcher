import heroImage from "@/assets/hero-morelos.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Propiedad de lujo en Morelos"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase">
              Morelos, México
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Tu hogar ideal en{" "}
            <span className="text-gold">Morelos</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Encuentra la propiedad perfecta para ti y tu familia. Casas, departamentos y terrenos en las mejores zonas de Morelos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#propiedades"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Ver Propiedades
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="btn-outline-light px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center"
            >
              Agenda una Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
