
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppQuote = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para conserto de microondas.";
    window.open(`https://wa.me/5541933328000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-blue-800 text-3xl md:text-4xl font-bold mb-4">
            "Atender bem para atender sempre"
          </h2>
          <p className="text-gray-600 text-lg mb-8 italic">Nosso lema há anos no mercado</p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-orange-500 text-2xl md:text-3xl font-bold mb-6">
              Conserto com peças e Acessórios Originais
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Contate-nos, buscamos e entregamos seu aparelho
            </p>
            <p className="text-blue-700 text-xl font-semibold mb-6">
              Ligue 98516-3600 ou 98516-3602
            </p>
            
            <Button 
              onClick={handleWhatsAppQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-semibold transition-colors shadow-lg"
            >
              Peça já seu orçamento
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Conserto de Forno</h4>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Conserto de Elétrico</h4>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Reformas de Microondas</h4>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-600 rounded-full"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Acessórios</h4>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Microondas Novos</h4>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-orange-500 font-semibold text-sm">Serviço de Busca e Entrega</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
