import { Shield, TrendingUp, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Todas nuestras propiedades están en fraccionamientos con vigilancia 24/7 y acceso controlado.",
  },
  {
    icon: TrendingUp,
    title: "Inversión Inteligente",
    description: "Morelos tiene una de las mejores plusvalías del país. Tu patrimonio crece con el tiempo.",
  },
  {
    icon: Heart,
    title: "Calidad de Vida",
    description: "Clima cálido todo el año, naturaleza, tranquilidad y a solo una hora de la CDMX.",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Te acompañamos en todo el proceso, desde la búsqueda hasta la entrega de llaves.",
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
            Descubre las ventajas de invertir en una de las regiones más atractivas de México.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
