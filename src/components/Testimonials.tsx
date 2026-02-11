import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";
import client7 from "@/assets/client-7.jpg";
import client8 from "@/assets/client-8.jpg";

const clientImages = [client1, client2, client3, client5, client6, client7, client8];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Clientes <span className="text-gradient">Satisfechos</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Familias que ya encontraron su hogar ideal en Morelos con nuestra ayuda
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clientImages.map((img, i) => (
            <div key={i} className="card-elevated overflow-hidden aspect-square">
              <img
                src={img}
                alt={`Cliente satisfecho ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
          {/* CTA card */}
          <div className="card-elevated overflow-hidden aspect-square flex items-center justify-center bg-primary/10 p-4">
            <p className="text-center font-display text-sm font-semibold text-foreground leading-snug">
              ¡Tú puedes ser el próximo en encontrar tu hogar soñado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
