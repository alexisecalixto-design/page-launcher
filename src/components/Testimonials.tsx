import { Star, Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client6 from "@/assets/client-6.jpg";
import client7 from "@/assets/client-7.jpg";
import client8 from "@/assets/client-8.jpg";

const testimonials = [
  {
    image: client1,
    name: "Familia Hernández",
    text: "Gracias a Morelos Real Estate encontramos la casa perfecta para nuestra familia. El proceso fue transparente y nos sentimos acompañados en todo momento.",
    rating: 5,
  },
  {
    image: client2,
    name: "Laura y Carlos",
    text: "Excelente servicio. Nos ayudaron con todo el trámite del crédito y en menos de 3 meses ya teníamos las llaves de nuestra casa nueva.",
    rating: 5,
  },
  {
    image: client3,
    name: "Familia Martínez",
    text: "Profesionales y muy atentos. Nos mostraron varias opciones hasta encontrar exactamente lo que buscábamos. ¡Totalmente recomendados!",
    rating: 5,
  },
  {
    image: client6,
    name: "Familia Guerrero",
    text: "El mejor regalo que le pudimos dar a nuestra familia. Gracias por hacer realidad nuestro sueño de tener casa propia en Morelos.",
    rating: 5,
  },
  {
    image: client7,
    name: "Ana López",
    text: "El proceso de escrituración fue muy sencillo gracias a su asesoría. Me sentí segura en todo momento. ¡Gracias por todo!",
    rating: 5,
  },
  {
    image: client8,
    name: "Don Roberto y familia",
    text: "Después de mucho buscar, encontramos la propiedad ideal. El equipo es muy profesional y siempre están disponibles para resolver dudas.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Familias <span className="text-gradient">Felices</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Más de 200 familias ya cumplieron su sueño de tener casa propia con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-elevated p-8 relative">
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
