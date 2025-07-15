import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto. Gracias por tu interés en Quinta Delia.",
    });
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Llay-Llay, Región de Valparaíso", "Chile"],
      action: "Ver en Mapa"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+569 64020154"],
      action: "Llamar"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contacto@quintadelia.cl", "ventas@quintadelia.cl"],
      action: "Escribir"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 8:00 - 14:00"],
      action: "Ver más"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+569 64020154",
      color: "bg-green-500 hover:bg-green-600",
      action: () => window.open("https://wa.me/56964020154", "_blank")
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@quintadelia",
      color: "bg-pink-500 hover:bg-pink-600",
      action: () => window.open("https://instagram.com/quintadelia", "_blank")
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Quinta Delia",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => window.open("https://facebook.com/quintadelia", "_blank")
    }
  ];

  return (
    <section className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos? ¿Quieres hacer un pedido personalizado? 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario de contacto */}
          <div>
            <Card className="p-8 border-0 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre" className="text-earth-brown font-medium">
                      Nombre Completo
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono" className="text-earth-brown font-medium">
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+56 9 1234 5678"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-earth-brown font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-earth-brown font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos qué productos te interesan o cualquier consulta que tengas..."
                    rows={5}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" variant="nature" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            {/* Redes sociales destacadas */}
            <Card className="p-8 border-0 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Síguenos y Contáctanos
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    onClick={social.action}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white transition-colors`}>
                        <social.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{social.name}</h4>
                        <p className="text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Contactar
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Información de contacto */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-nature-green/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-nature-green" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-nature-green">
                      {info.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-warm-orange to-golden-yellow p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para probar nuestros productos?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Haz tu primer pedido y descubre la diferencia de los productos auténticos del campo.
            </p>
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Hacer mi Primer Pedido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}