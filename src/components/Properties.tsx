import { useState } from "react";
import { Bed, Bath, MapPin, ArrowRight, X, ChevronLeft, ChevronRight, Layers, Car, Waves, Droplets, TreePine, Shield, Lock, Snowflake, ShowerHead, Flame, DoorOpen, Sofa, CookingPot, TreePalm, ArrowUp, Mountain } from "lucide-react";
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
import xochitepec8 from "@/assets/xochitepec-8.jpg";
import fraccionamiento1 from "@/assets/fraccionamiento-1.jpg";
import fraccionamiento2 from "@/assets/fraccionamiento-2.jpg";
import fraccionamiento3 from "@/assets/fraccionamiento-3.jpg";
import fraccionamiento4 from "@/assets/fraccionamiento-4.jpg";
import fraccionamiento5 from "@/assets/fraccionamiento-5.jpg";
import depto1 from "@/assets/depto-1.jpg";
import depto2 from "@/assets/depto-2.jpg";
import depto3 from "@/assets/depto-3.jpg";
import depto4 from "@/assets/depto-4.jpg";
import depto5 from "@/assets/depto-5.jpg";
import depto6 from "@/assets/depto-6.jpg";
import propertyNew1 from "@/assets/property-new-1.jpg";

type Property = {
  images: string[];
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  floors: number;
  parking: number;
  area?: string;
  tag: string | null;
  description: string;
  amenities: string[];
};

const properties: Property[] = [
  {
    images: [tlaltizapan1, tlaltizapan2, tlaltizapan3, tlaltizapan4, tlaltizapan5, tlaltizapan6, tlaltizapan7],
    title: "Casa Tlaltizapán",
    location: "Tlaltizapán, Morelos",
    price: "$1,650,000 MXN",
    beds: 3,
    baths: 1.5,
    floors: 2,
    parking: 1,
    area: "120 m²",
    tag: "Destacada",
    description: "Hermosa casa con amplios espacios exteriores ideal para disfrutar del clima cálido de Morelos. Cuenta con una encantadora palapa, chapoteadero perfecto para toda la familia, área de asador para reuniones y portón eléctrico para mayor comodidad y seguridad. Los interiores son luminosos y acogedores, con acabados modernos y funcionales.",
    amenities: ["Chapoteadero", "Palapa", "Asador", "Portón eléctrico", "Jardín amplio"],
  },
  {
    images: [xochitepec2, xochitepec1, xochitepec3, xochitepec4, xochitepec5, xochitepec6, xochitepec7, xochitepec8],
    title: "Casa Xochitepec",
    location: "Xochitepec, Morelos",
    price: "$1,080,000 MXN",
    beds: 2,
    baths: 1,
    floors: 1,
    parking: 1,
    area: "95 m²",
    tag: null,
    description: "¡Tu refugio de fin de semana a precio de oportunidad! Imagina despertar cada mañana con el clima perfecto de Morelos, disfrutar de un parque acuático privado con tobogán y chapoteadero, organizar las mejores parrilladas bajo la palapa y vivir en una comunidad segura con acceso controlado. Esta casa de un nivel, lista para habitar con 3 aires acondicionados incluidos, te ofrece todo lo que siempre soñaste: tranquilidad, diversión y calidad de vida. ¿Lo mejor? Está en una ubicación privilegiada de Xochitepec con plusvalía en crecimiento. ¡No dejes pasar esta oportunidad única!",
    amenities: ["Parque acuático", "Alberca", "Chapoteadero", "Palapa", "Regaderas y baños", "Áreas verdes", "Acceso controlado", "Seguridad", "3 aires acondicionados"],
  },
  {
    images: [fraccionamiento1, fraccionamiento2, fraccionamiento3, fraccionamiento4, fraccionamiento5],
    title: "Casa La Provincia Crotone",
    location: "La Provincia, Morelos",
    price: "$1,720,000 MXN",
    beds: 3,
    baths: 2.5,
    floors: 2,
    parking: 1,
    area: "130 m²",
    tag: null,
    description: "Hermosa casa de dos pisos en fraccionamiento con acceso controlado. Cuenta con alberca con chapoteadero, palapa y área de asador perfecta para reuniones familiares. Incluye cocina equipada, portón eléctrico y amplios espacios. Una excelente opción para disfrutar del clima cálido de Morelos con toda la seguridad y comodidad.",
    amenities: ["Alberca", "Chapoteadero", "Palapa", "Asador", "Portón eléctrico", "Acceso controlado", "Cocina equipada"],
  },
  {
    images: [depto1, depto2, depto3, depto4, depto5, depto6],
    title: "Departamento La Provincia Génova",
    location: "La Provincia, Morelos",
    price: "$680,000 MXN",
    beds: 2,
    baths: 1,
    floors: 1,
    parking: 1,
    area: "75 m²",
    tag: null,
    description: "Excelente departamento en último nivel con vista panorámica. Cuenta con dos recámaras, un baño completo, cocina y sala comedor. El condominio ofrece alberca y chapoteadero para disfrutar del clima cálido de Morelos. Una oportunidad perfecta para quienes buscan comodidad y calidad de vida a un precio accesible.",
    amenities: ["Alberca", "Chapoteadero", "Último nivel", "Vista panorámica"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Parque acuático": <Waves className="w-5 h-5 text-primary" />,
  "Alberca": <Droplets className="w-5 h-5 text-primary" />,
  "Chapoteadero": <Waves className="w-5 h-5 text-primary" />,
  "Palapa": <TreePalm className="w-5 h-5 text-primary" />,
  "Regaderas y baños": <ShowerHead className="w-5 h-5 text-primary" />,
  "Áreas verdes": <TreePine className="w-5 h-5 text-primary" />,
  "Acceso controlado": <Lock className="w-5 h-5 text-primary" />,
  "Seguridad": <Shield className="w-5 h-5 text-primary" />,
  "2 aires acondicionados": <Snowflake className="w-5 h-5 text-primary" />,
  "Jardín amplio": <TreePine className="w-5 h-5 text-primary" />,
  "Vigilancia 24/7": <Shield className="w-5 h-5 text-primary" />,
  "Asador": <Flame className="w-5 h-5 text-primary" />,
  "Portón eléctrico": <DoorOpen className="w-5 h-5 text-primary" />,
  "Muebles incluidos": <Sofa className="w-5 h-5 text-primary" />,
  "Cocina equipada": <CookingPot className="w-5 h-5 text-primary" />,
  "Último nivel": <ArrowUp className="w-5 h-5 text-primary" />,
  "Vista panorámica": <Mountain className="w-5 h-5 text-primary" />,
};

const PropertyModal = ({ property, onClose }: { property: Property; onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative" onClick={(e) => e.stopPropagation()}>
        {/* Close button - fixed position over the modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground transition-colors bg-card/90 backdrop-blur-sm rounded-full p-1.5 shadow-md"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Image gallery */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto md:min-h-[500px] flex-shrink-0">
          <img
            src={property.images[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
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
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? "bg-primary" : "bg-primary-foreground/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 pt-12 md:pt-8 pr-14">

          {/* Price */}
          <div className="mb-6">
            <p className="text-muted-foreground text-sm">Precio</p>
            <p className="font-display text-3xl font-bold text-primary">{property.price}</p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="border border-border rounded-xl p-3 text-center flex flex-col items-center justify-center">
              <Bed className="w-5 h-5 text-muted-foreground mb-1" />
              <p className="font-bold text-foreground text-lg">{property.beds}</p>
              <p className="text-muted-foreground text-xs">Recámaras</p>
            </div>
            <div className="border border-border rounded-xl p-3 text-center">
              <Bath className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
              <p className="font-bold text-foreground text-lg">{property.baths}</p>
              <p className="text-muted-foreground text-xs">Baños</p>
            </div>
            <div className="border border-border rounded-xl p-3 text-center">
              <Layers className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
              <p className="font-bold text-foreground text-lg">{property.floors}</p>
              <p className="text-muted-foreground text-xs">Pisos</p>
            </div>
            <div className="border border-border rounded-xl p-3 text-center">
              <Car className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
              <p className="font-bold text-foreground text-lg">{property.parking}</p>
              <p className="text-muted-foreground text-xs">Parking</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-3">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{property.description}</p>
          </div>

          {/* Amenities */}
          {property.amenities.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Amenidades</h3>
              <div className="grid grid-cols-2 gap-3">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 border border-border rounded-xl px-4 py-3">
                    {amenityIcons[amenity] || <TreePine className="w-5 h-5 text-primary" />}
                    <span className="text-foreground text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <a
            href={`https://wa.me/527772648784?text=${encodeURIComponent(`Hola, me interesa la propiedad "${property.title}" en ${property.location} con precio de ${property.price}. ¿Podrían darme más información?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gold text-gold-foreground py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 hover:bg-gold/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Solicitar Información
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-sans">
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
                <div className="flex items-center gap-1 text-muted-foreground text-sm font-sans mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans border-t border-border pt-3">
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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
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
