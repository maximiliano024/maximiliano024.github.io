import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export function WhoWeAreSection() {
  // 6 espacios para fotos de integrantes del equipo
  const teamSlots = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: `Miembro ${index + 1}`,
    role: "Rol por definir",
    photo: null // Placeholder para las fotos
  }));

  return (
    <section className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quienes Somos
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce al equipo detrás de Quinta Delia, la familia y colaboradores que hacen posible 
            llevar productos frescos y naturales directamente del campo a tu mesa.
          </p>
        </div>

        {/* Grid de miembros del equipo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamSlots.map((member) => (
            <Card key={member.id} className="p-6 text-center hover:shadow-warm transition-all duration-300 border-0 bg-card">
              {/* Espacio para foto del miembro */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-warm-orange/20 to-golden-yellow/20 flex items-center justify-center border-2 border-warm-orange/30">
                <User className="w-16 h-16 text-warm-orange/60" />
              </div>
              
              {/* Información del miembro */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground/80 italic">
                    Foto próximamente
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mensaje adicional */}
        <div className="text-center mt-16">
          <div className="bg-background p-8 rounded-2xl inline-block border border-warm-orange/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Familia Quinta Delia
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Somos una familia comprometida con la calidad y la tradición. Cada miembro de nuestro equipo 
              aporta su experiencia y pasión para garantizar que nuestros productos lleguen frescos a tu hogar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}