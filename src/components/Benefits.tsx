import { MapPin, Sun, TreePine, Heart, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "A 1 Hora de CDMX",
    description: "Conectividad perfecta con la capital. Vive lejos del caos, pero cerca de todo.",
  },
  {
    icon: Sun,
    title: "Clima Primaveral",
    description: "Conocida como 'la ciudad de la eterna primavera', con temperaturas ideales todo el año.",
  },
  {
    icon: TreePine,
    title: "Naturaleza Exuberante",
    description: "Rodeado de jardines, barrancas y vegetación tropical. El escape perfecto.",
  },
  {
    icon: Heart,
    title: "Calidad de Vida",
    description: "Menos estrés, aire más limpio y una comunidad cálida y acogedora.",
  },
  {
    icon: TrendingUp,
    title: "Mejor Inversión",
    description: "Propiedades con excelente plusvalía a precios más accesibles que en CDMX.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Fraccionamientos con vigilancia 24/7 y ambiente familiar tranquilo.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Por qué elegir <span className="text-gradient">Morelos</span>?
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre todo lo que esta hermosa región tiene para ofrecerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-elevated p-8 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
