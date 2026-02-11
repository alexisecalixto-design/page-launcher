import { Award, Clock, Home, CheckCircle } from "lucide-react";
import client5 from "@/assets/client-5.jpg";

const stats = [
  { icon: Home, value: "200+", label: "Propiedades Vendidas" },
  { icon: Clock, value: "10+", label: "Años de Experiencia" },
  { icon: Award, value: "98%", label: "Clientes Satisfechos" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="card-elevated overflow-hidden">
              <img
                src={client5}
                alt="Nuestro equipo profesional"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="text-sm text-primary-foreground/80">Años de experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Sobre <span className="text-gradient">Nosotros</span>
            </h2>
            <div className="section-divider mb-8 !mx-0" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos una empresa inmobiliaria con más de 10 años de experiencia en el mercado de
              Morelos. Nos especializamos en ayudar a familias a encontrar su hogar ideal,
              ofreciendo un servicio personalizado y transparente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro compromiso es acompañarte en cada paso del proceso, desde la búsqueda
              hasta la entrega de llaves de tu nuevo hogar.
            </p>

            <ul className="space-y-4 mb-10">
              {["Asesoría legal y financiera incluida", "Red de contactos con desarrolladoras", "Acompañamiento en trámites de crédito", "Servicio post-venta garantizado"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
