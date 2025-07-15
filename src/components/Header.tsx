import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo y navegación principal */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img 
                src="/lovable-uploads/6824807e-48a1-4df0-92a4-78f7ee67dc9d.png" 
                alt="Quinta Delia" 
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Quinta Delia</h1>
              <p className="text-sm text-white/80">De mi huerta y cocina a su hogar</p>
            </div>
          </div>

          {/* Botón de acción desktop */}
          <div className="hidden lg:flex">
            <Button variant="golden" size="lg" className="bg-warm-orange hover:bg-warm-orange/90">
              <ShoppingBag className="w-4 h-4" />
              Pedidos
            </Button>
          </div>

          {/* Menú hamburguesa mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menú mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/5">
            <Button variant="golden" size="lg" className="w-full bg-warm-orange hover:bg-warm-orange/90">
              <ShoppingBag className="w-4 h-4" />
              Pedidos
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}