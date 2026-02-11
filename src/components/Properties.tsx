import { Bed, Bath, MapPin, ArrowRight } from "lucide-react";
import tlaltizapan1 from "@/assets/tlaltizapan-1.jpg";
import xochitepec2 from "@/assets/xochitepec-2.png";
import fraccionamiento1 from "@/assets/fraccionamiento-1.jpg";
import depto1 from "@/assets/depto-1.jpg";

const properties = [
  {
    image: tlaltizapan1,
    title: "Casa Tlaltizapán",
    location: "Tlaltizapán, Morelos",
    price: "$1,650,000 MXN",
    beds: 3,
    baths: 1.5,
    tag: "Destacada",
  },
  {
    image: xochitepec2,
    title: "Casa Xochitepec",
    location: "Xochitepec, Morelos",
    price: "$1,080,000 MXN",
    beds: 2,
    baths: 1,
    tag: null,
  },
  {
    image: fraccionamiento1,
    title: "Casa La Provincia Crotone",
    location: "La Provincia, Morelos",
    price: "$1,720,000 MXN",
    beds: 3,
    baths: 2.5,
    tag: null,
  },
  {
    image: depto1,
    title: "Departamento La Provincia Génova",
    location: "La Provincia, Morelos",
    price: "$680,000 MXN",
    beds: 2,
    baths: 1,
    tag: null,
  },
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Propiedades <span className="text-gradient">Destacadas</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora nuestra selección de las mejores propiedades en Morelos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.title} className="card-elevated overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {property.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground font-display text-sm font-bold px-3 py-1.5 rounded-lg">
                  {property.price}
                </div>
                <a
                  href="#contacto"
                  className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-primary transition-colors"
                >
                  Ver detalles
                </a>
              </div>

              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Conoce más propiedades
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
