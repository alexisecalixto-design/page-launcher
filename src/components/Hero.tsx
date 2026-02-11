import heroImage from "@/assets/hero-morelos.jpg";
import { MapPin, Sun, TreePine, ChevronDown } from "lucide-react";

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
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <p className="text-primary-foreground/70 text-sm md:text-base font-medium tracking-wider uppercase mb-6">
            Bienes Raíces en Morelos
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Tu refugio en Morelos{" "}
            <br />
            <span className="text-gold italic">te espera</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Descubre tu hogar ideal en el corazón de México. Clima primaveral todo el año, naturaleza exuberante y la tranquilidad que mereces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#propiedades"
              className="btn-primary px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Ver Propiedades
            </a>
            <a
              href="#contacto"
              className="btn-outline-light px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center"
            >
              Contáctanos
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex justify-center">
            <a href="#beneficios" className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors animate-bounce">
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>

          {/* Feature badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ubicación central</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              <span>Clima primaveral</span>
            </div>
            <div className="flex items-center gap-2">
              <TreePine className="w-4 h-4" />
              <span>Naturaleza viva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
