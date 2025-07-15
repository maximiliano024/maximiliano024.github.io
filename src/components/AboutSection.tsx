import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Sprout, Target } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Llay-Llay, Chile",
      description: "Ubicados en el corazón del valle, donde la tierra fértil y el clima privilegiado nos permiten cultivar los mejores productos."
    },
    {
      icon: Sprout,
      title: "3.7 Hectáreas Propias",
      description: "Nuestro terreno familiar donde cultivamos con amor y dedicación, siguiendo prácticas sostenibles y naturales."
    },
    {
      icon: Users,
      title: "Productores Locales",
      description: "Colaboramos con pequeños productores de la región, fortaleciendo la economía local y garantizando variedad."
    },
    {
      icon: Target,
      title: "Directo a tu Mesa",
      description: "Eliminamos intermediarios para llevarte productos frescos, auténticos y a precios justos para todos."
    }
  ];

  return (
    <section id="nuestra-historia" className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quinta Delia nació del sueño familiar de conectar la riqueza del campo chileno 
            con las familias que valoran el origen y la calidad de sus alimentos.
          </p>
        </div>

        {/* Historia principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-earth-brown">
              De Generación en Generación
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada por una familia apasionada por la agricultura, Quinta Delia representa 
              la tradición y el conocimiento transmitido de generación en generación. En nuestras 
              3.7 hectáreas en Llay-Llay, cultivamos con técnicas que respetan la tierra y 
              potencian el sabor natural de cada producto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No solo producimos en nuestros campos. También trabajamos estrechamente con 
              pequeños productores locales de confianza, creando una red que fortalece nuestra 
              comunidad y nos permite ofrecer una variedad excepcional de productos gourmet y campesinos.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="nature" 
                size="lg"
                onClick={() => window.open('https://granjaorganica13.blogspot.com/', '_blank')}
              >
                Visita blog histórico
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/ae47dd40-7d5c-40f9-82c6-d1aeef1bae5c.png" 
              alt="Quinta Delia - Apicultura familiar"
              className="w-full h-96 object-cover rounded-2xl shadow-warm"
            />
          </div>
        </div>

        {/* Características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-warm transition-all duration-300 border-0 bg-card">
              <div className="w-16 h-16 bg-nature-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-nature-green" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}