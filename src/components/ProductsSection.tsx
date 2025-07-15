import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

// Importar imágenes
import frutasFrescas from "@/assets/frutas-frescas.jpg";
import verdurasOrganicas from "@/assets/verduras-organicas.jpg";
import panArtesanal from "@/assets/pan-artesanal.jpg";
import lacteosArtesanales from "@/assets/lacteos-artesanales.jpg";
import productosGourmet from "@/assets/productos-gourmet.jpg";

interface ProductsSectionProps {
  activeCategory: string;
}

const productos = [
  {
    id: 1,
    nombre: "Frutas de Temporada",
    categoria: "Frutas",
    descripcion: "Frutas frescas recién cosechadas: manzanas, peras, duraznos y más.",
    precio: "$2.500 - $4.000",
    imagen: frutasFrescas,
    destacado: true,
    oferta: false
  },
  {
    id: 2,
    nombre: "Verduras Orgánicas",
    categoria: "Verduras", 
    descripcion: "Lechugas, tomates, zanahorias y verduras de hoja cultivadas sin químicos.",
    precio: "$1.800 - $3.200",
    imagen: verdurasOrganicas,
    destacado: true,
    oferta: true
  },
  {
    id: 3,
    nombre: "Horneados de Campo",
    categoria: "Horneados",
    descripcion: "Nuestro famoso pan más vigente que nunca. Rico, natural y fresco.",
    imagen: "/lovable-uploads/f3dbb9bb-f26d-471e-8fc8-093bddb86b54.png",
    imagenes: [
      "/lovable-uploads/f3dbb9bb-f26d-471e-8fc8-093bddb86b54.png",
      "/lovable-uploads/94cd6551-f4e1-49bf-a9f7-7ee830b6558a.png"
    ],
    destacado: true,
    oferta: false
  },
  {
    id: 4,
    nombre: "Lácteos de Campo",
    categoria: "Lácteos",
    descripcion: "Quesos artesanales, leche fresca y productos lácteos tradicionales.",
    precio: "$2.800 - $6.500",
    imagen: lacteosArtesanales,
    destacado: true,
    oferta: false
  },
  {
    id: 5,
    nombre: "Frutos Secos Premium",
    categoria: "Frutos secos",
    descripcion: "Almendras, nueces, avellanas y mix de frutos secos seleccionados.",
    precio: "$3.500 - $7.200",
    imagen: productosGourmet,
    destacado: false,
    oferta: false
  },
  {
    id: 6,
    nombre: "Conservas Caseras",
    categoria: "Conservas",
    descripcion: "Mermeladas y conservas preparadas con recetas familiares tradicionales.",
    precio: "$2.200 - $4.800",
    imagen: productosGourmet,
    imagenes: [
      "/lovable-uploads/90aea5a0-ea3a-4784-9a58-ef4bfd49a121.png",
      "/lovable-uploads/a52ce888-59eb-415e-bcaf-80919793d12e.png"
    ],
    destacado: true,
    oferta: true
  }
];

export function ProductsSection({ activeCategory }: ProductsSectionProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const productosFiltrados = activeCategory === "Todos" 
    ? productos 
    : productos.filter(producto => producto.categoria === activeCategory);

  const productosDestacados = productos.filter(producto => producto.destacado);

  return (
    <section id="nuestros-productos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {activeCategory === "Todos" ? "Nuestros Productos" : activeCategory}
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {activeCategory === "Todos" 
              ? "Descubre nuestra selección de productos frescos y naturales, elaborados con el sabor auténtico de la tradición familiar."
              : `Explora nuestra selección de ${activeCategory.toLowerCase()} frescos y naturales.`
            }
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === "Todos" ? productosDestacados : productosFiltrados).map((producto) => (
            <Card 
              key={producto.id}
              className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredProduct(producto.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Imagen del producto */}
              <div className="relative overflow-hidden h-64">
                {producto.imagenes ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {producto.imagenes.map((imagen, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={imagen} 
                            alt={`${producto.nombre} ${index + 1}`}
                            className={`w-full h-full object-contain bg-gray-50 transition-transform duration-300 ${
                              hoveredProduct === producto.id ? "scale-105" : "scale-100"
                            }`}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hoveredProduct === producto.id ? "scale-110" : "scale-100"
                    }`}
                  />
                )}
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                  {producto.destacado && (
                    <Badge className="bg-golden-yellow text-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Destacado
                    </Badge>
                  )}
                  {producto.oferta && (
                    <Badge className="bg-warm-orange text-foreground">
                      Oferta
                    </Badge>
                  )}
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-earth-brown border-earth-brown">
                    {producto.categoria}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{producto.nombre}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {producto.descripcion}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-cream-light p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Contáctanos y te ayudaremos a encontrar el producto perfecto para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="nature" size="lg">
                Ver Catálogo Completo
              </Button>
              <Button variant="whatsapp" size="lg">
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}