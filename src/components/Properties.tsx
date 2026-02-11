import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import depto1 from "@/assets/depto-1.jpg";
import fraccionamiento1 from "@/assets/fraccionamiento-1.jpg";
import fraccionamiento4 from "@/assets/fraccionamiento-4.jpg";

const properties = [
  {
    image: property1,
    title: "Casa con Alberca en Jiutepec",
    location: "Jiutepec, Morelos",
    price: "$1,850,000",
    beds: 3,
    baths: 2,
    area: "120 m²",
    tag: "Destacada",
  },
  {
    image: fraccionamiento4,
    title: "Casa en Fraccionamiento Privado",
    location: "Temixco, Morelos",
    price: "$1,450,000",
    beds: 3,
    baths: 2,
    area: "110 m²",
    tag: "Nueva",
  },
  {
    image: depto1,
    title: "Departamento con Vista a la Montaña",
    location: "Cuernavaca, Morelos",
    price: "$980,000",
    beds: 2,
    baths: 1,
    area: "75 m²",
    tag: "Oportunidad",
  },
  {
    image: property3,
    title: "Casa Estilo Colonial",
    location: "Centro, Cuernavaca",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    area: "200 m²",
    tag: "Premium",
  },
  {
    image: fraccionamiento1,
    title: "Casa Verde en Fraccionamiento",
    location: "Yautepec, Morelos",
    price: "$1,100,000",
    beds: 3,
    baths: 2,
    area: "95 m²",
    tag: null,
  },
  {
    image: property2,
    title: "Residencia con Alberca Infinita",
    location: "Tepoztlán, Morelos",
    price: "$5,500,000",
    beds: 4,
    baths: 3,
    area: "280 m²",
    tag: "Exclusiva",
  },
];

const Properties = () => {
  return (
    <section id="propiedades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Propiedades <span className="text-gradient">Disponibles</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora nuestra selección de casas, departamentos y terrenos en las mejores ubicaciones de Morelos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.title} className="card-elevated overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
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
                <div className="absolute bottom-4 right-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground font-display text-xl font-bold px-4 py-2 rounded-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Rec.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
