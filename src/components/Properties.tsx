import { useState } from "react";
import { Bed, Bath, MapPin, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import tlaltizapan1 from "@/assets/tlaltizapan-1.jpg";
import tlaltizapan2 from "@/assets/tlaltizapan-2.jpg";
import tlaltizapan3 from "@/assets/tlaltizapan-3.jpg";
import tlaltizapan4 from "@/assets/tlaltizapan-4.jpg";
import tlaltizapan5 from "@/assets/tlaltizapan-5.jpg";
import tlaltizapan6 from "@/assets/tlaltizapan-6.jpg";
import tlaltizapan7 from "@/assets/tlaltizapan-7.jpg";
import xochitepec1 from "@/assets/xochitepec-1.jpg";
import xochitepec2 from "@/assets/xochitepec-2.png";
import xochitepec3 from "@/assets/xochitepec-3.jpg";
import xochitepec4 from "@/assets/xochitepec-4.jpg";
import xochitepec5 from "@/assets/xochitepec-5.jpg";
import xochitepec6 from "@/assets/xochitepec-6.jpg";
import xochitepec7 from "@/assets/xochitepec-7.jpg";
import fraccionamiento1 from "@/assets/fraccionamiento-1.jpg";
import fraccionamiento4 from "@/assets/fraccionamiento-4.jpg";
import depto1 from "@/assets/depto-1.jpg";
import propertyNew1 from "@/assets/property-new-1.jpg";

type Property = {
  images: string[];
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area?: string;
  tag: string | null;
  description: string;
};

const properties: Property[] = [
  {
    images: [tlaltizapan1, tlaltizapan2, tlaltizapan3, tlaltizapan4, tlaltizapan5, tlaltizapan6, tlaltizapan7],
    title: "Casa Tlaltizapán",
    location: "Tlaltizapán, Morelos",
    price: "$1,650,000 MXN",
    beds: 3,
    baths: 1.5,
    area: "120 m²",
    tag: "Destacada",
    description: "Hermosa casa en Tlaltizapán con amplio terreno, ideal para familias. Cuenta con espacios amplios, jardín y excelente ubicación cerca de servicios.",
  },
  {
    images: [xochitepec2, xochitepec1, xochitepec3, xochitepec4, xochitepec5, xochitepec6, xochitepec7],
    title: "Casa Xochitepec",
    location: "Xochitepec, Morelos",
    price: "$1,080,000 MXN",
    beds: 2,
    baths: 1,
    area: "95 m²",
    tag: null,
    description: "Casa con alberca y tobogán en Xochitepec. Perfecta para disfrutar del clima cálido de Morelos con toda la familia.",
  },
  {
    images: [fraccionamiento1, fraccionamiento4, propertyNew1],
    title: "Casa La Provincia Crotone",
    location: "La Provincia, Morelos",
    price: "$1,720,000 MXN",
    beds: 3,
    baths: 2.5,
    area: "130 m²",
    tag: null,
    description: "Casa en fraccionamiento privado La Provincia, con vigilancia 24/7, áreas verdes y acceso controlado. Excelente inversión.",
  },
  {
    images: [depto1],
    title: "Departamento La Provincia Génova",
    location: "La Provincia, Morelos",
    price: "$680,000 MXN",
    beds: 2,
    baths: 1,
    area: "75 m²",
    tag: null,
    description: "Departamento con vista a la montaña en el fraccionamiento La Provincia. Ideal como inversión o primer hogar.",
  },
];

const PropertyModal = ({ property, onClose }: { property: Property; onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Image gallery */}
        <div className="relative h-72 md:h-96">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-foreground/60 text-primary-foreground p-2 rounded-full hover:bg-foreground/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/60 text-primary-foreground p-2 rounded-full hover:bg-foreground/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/60 text-primary-foreground p-2 rounded-full hover:bg-foreground/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {property.images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === currentImage ? "border-primary" : "border-transparent"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Details */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              {property.tag && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {property.tag}
                </span>
              )}
              <h2 className="font-display text-2xl font-bold text-foreground">{property.title}</h2>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-bold text-primary">{property.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-y border-border py-4 mb-4">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              <span>{property.beds} Recámaras</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.baths} Baños</span>
            </div>
            {property.area && (
              <div className="flex items-center gap-1.5">
                <span>{property.area}</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{property.description}</p>

          <a
            href={`https://wa.me/527772648784?text=${encodeURIComponent(`Hola, me interesa la propiedad "${property.title}" en ${property.location} con precio de ${property.price}. ¿Podrían darme más información?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-primary py-3 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

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
            <div key={property.title} className="card-elevated overflow-hidden group cursor-pointer" onClick={() => setSelectedProperty(property)}>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.images[0]}
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
                <button
                  className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-primary transition-colors"
                >
                  Ver detalles
                </button>
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

      {selectedProperty && (
        <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
      )}
    </section>
  );
};

export default Properties;
