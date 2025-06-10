
import { Button } from "@/components/ui/button";
import { Truck, Clock } from "lucide-react";

const DeliverySection = () => {
  const handleSchedulePickup = () => {
    const message = "Olá! Gostaria de agendar um horário para busca e entrega do meu microondas.";
    window.open(`https://wa.me/5541933328000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="busca-entrega" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Busca e Entrega em Curitiba</h2>
          <p className="text-gray-600 text-lg">Serviço completo na sua casa</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop" 
                  alt="Serviço de busca e entrega"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Truck className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Serviço de Busca e Entrega</h3>
                    <p className="text-gray-600">Comodidade total para você</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Buscamos o seu aparelho em toda Curitiba</p>
                      <p className="text-gray-600 text-sm">Agendamento flexível conforme sua disponibilidade</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Conserto em nossa oficina especializada</p>
                      <p className="text-gray-600 text-sm">Peças originais e técnicos especializados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Entregamos funcionando perfeitamente</p>
                      <p className="text-gray-600 text-sm">Garantia do serviço realizado</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-orange-500 text-xl font-bold mb-4">
                    É só ligar 3332 8000 e agendar horário
                  </p>
                  
                  <Button 
                    onClick={handleSchedulePickup}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors w-full"
                  >
                    Agendar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
