import { Home, Users, Clock, Star, CheckCircle } from "lucide-react";

const stats = [
  { icon: Home, value: "150+", label: "Propiedades vendidas" },
  { icon: Users, value: "200+", label: "Clientes satisfechos" },
  { icon: Clock, value: "15+", label: "Años de experiencia" },
  { icon: Star, value: "5.0", label: "Calificación promedio" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Conoce a tus <span className="text-gradient">Asesores</span>
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-6 text-center">
            Somos un equipo de asesores inmobiliarios apasionados por ayudar a familias a encontrar su hogar perfecto en Morelos. Con más de 15 años de experiencia en el mercado local, conocemos cada rincón del estado.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 text-center">
            Entendemos lo que buscas: mejorar tu calidad de vida con un clima excepcional y rodeado de naturaleza. Te acompañamos en todo el proceso, desde la búsqueda hasta la entrega de llaves.
          </p>

          <ul className="space-y-4 mb-10 max-w-md mx-auto">
            {["Asesoría personalizada y sin presiones", "Tours virtuales y presenciales", "Apoyo en trámites legales y financieros"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
