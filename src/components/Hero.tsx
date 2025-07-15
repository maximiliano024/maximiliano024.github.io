import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowDown, Heart, Leaf } from "lucide-react";
export function Hero() {
  const heroImages = [
    "/lovable-uploads/cbc4b026-ddf6-4645-9cb8-a187e2e7632d.png",
    "/lovable-uploads/6da01805-4cbd-4969-b96d-4985481b4d78.png"
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de imágenes de fondo */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`Quinta Delia - Nuestra granja familiar ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-black/30 border-white/30 text-white hover:bg-black/50" />
          <CarouselNext className="right-4 bg-black/30 border-white/30 text-white hover:bg-black/50" />
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-warm-orange/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Productos Naturales del Campo</span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bienvenidos a
            <span className="block text-golden-yellow">Quinta Delia</span>
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desde Llay-Llay hasta tu mesa, llevamos productos gourmet y campesinos 
            con el sabor auténtico de la tradición familiar.
          </p>

          {/* Estadísticas */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-yellow">+30</div>
              <div className="text-sm opacity-90">Productores Locales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-yellow">100%</div>
              <div className="text-sm opacity-90">Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-yellow">+50</div>
              <div className="text-sm opacity-90">Productos</div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="golden" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => {
                const element = document.getElementById('nuestros-productos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Heart className="w-5 h-5" />
              Ver Productos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                const element = document.getElementById('nuestra-historia');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nuestra Historia
            </Button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}