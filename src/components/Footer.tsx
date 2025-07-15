import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Heart, Leaf } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Productos",
      links: [
        "Frutas de Temporada",
        "Verduras Orgánicas", 
        "Horneados Artesanales",
        "Lácteos de Campo",
        "Frutos Secos",
        "Conservas Caseras"
      ]
    },
    {
      title: "Quinta Delia",
      links: [
        "Nuestra Historia",
        "Proceso de Cultivo",
        "Certificaciones",
        "Productores Locales",
        "Visitas a la Quinta",
        "Blog"
      ]
    },
    {
      title: "Atención al Cliente",
      links: [
        "Cómo Comprar",
        "Envíos y Entregas",
        "Políticas de Devolución",
        "Preguntas Frecuentes",
        "Términos y Condiciones",
        "Política de Privacidad"
      ]
    }
  ];

  return (
    <footer className="bg-earth-brown text-white">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Información de la empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-golden-yellow rounded-full flex items-center justify-center">
                <span className="text-earth-brown font-bold text-lg">Q</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Quinta Delia</h3>
                <p className="text-sm text-white/80">Productos del Campo</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Desde Llay-Llay hasta tu mesa, llevamos productos gourmet y campesinos 
              con el sabor auténtico de la tradición familiar.
            </p>

            <div className="flex items-center space-x-2 text-golden-yellow mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">100% Natural y Sostenible</span>
            </div>

            <div className="flex items-center space-x-2 text-golden-yellow">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Hecho con Amor Familiar</span>
            </div>
          </div>

          {/* Secciones de enlaces */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-6 text-golden-yellow">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-golden-yellow transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información de contacto destacada */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-golden-yellow" />
              </div>
              <div>
                <h5 className="font-semibold text-golden-yellow">Ubicación</h5>
                <p className="text-sm text-white/80">Llay-Llay, Valparaíso</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-golden-yellow" />
              </div>
              <div>
                <h5 className="font-semibold text-golden-yellow">WhatsApp</h5>
                <p className="text-sm text-white/80">+56 9 8765 4321</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-golden-yellow" />
              </div>
              <div>
                <h5 className="font-semibold text-golden-yellow">Email</h5>
                <p className="text-sm text-white/80">contacto@quintadelia.cl</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-golden-yellow/20 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-golden-yellow" />
              </div>
              <div>
                <h5 className="font-semibold text-golden-yellow">Horarios</h5>
                <p className="text-sm text-white/80">Lun-Vie 8:00-18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-golden-yellow mb-4">
              Recibe Nuestras Novedades
            </h4>
            <p className="text-white/80 mb-6">
              Suscríbete para conocer nuevos productos, ofertas especiales y noticias de la quinta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden-yellow"
              />
              <Button variant="golden" className="px-6">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pie de página final */}
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70">
              <p>&copy; {currentYear} Quinta Delia. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-golden-yellow transition-colors">
                  Cookies
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>Desarrollado con</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>en Chile</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}