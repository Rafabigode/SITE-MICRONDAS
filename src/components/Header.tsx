
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541933328000", "_blank");
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(41) 3332-8000</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Opção 1 - Rebouças | Opção 2 - Santa Felicidade | Opção 3 - São José dos Pinhais</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>08:30h às 17:30h</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-orange-500 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-lg p-2 mr-3">
                  <div className="w-full h-full bg-gray-800 rounded flex items-center justify-center">
                    <div className="w-6 h-4 bg-white rounded-sm relative">
                      <div className="absolute top-1 right-1 w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-white text-xl font-bold">Casa do Microondas</h1>
                  <p className="text-orange-100 text-sm">Com estacionamento próprio</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              WhatsApp
            </Button>
          </div>

          {/* Navigation */}
          <nav className="mt-4">
            <ul className="flex flex-wrap gap-6 text-white font-medium">
              <li><a href="#home" className="hover:text-orange-200 transition-colors">HOME</a></li>
              <li><a href="#localizacao" className="hover:text-orange-200 transition-colors">LOCALIZAÇÃO</a></li>
              <li><a href="#fotos" className="hover:text-orange-200 transition-colors">FOTOS</a></li>
              <li><a href="#busca-entrega" className="hover:text-orange-200 transition-colors">BUSCA E ENTREGA</a></li>
              <li><a href="#conserto-rapido" className="hover:text-orange-200 transition-colors cursor-pointer">CONSERTO EM 30 MINUTOS</a></li>
              <li><a href="#contato" className="hover:text-orange-200 transition-colors">CONTATO</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
