
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>(41) 3332-8000</p>
              <p>98516-3600 ou 98516-3602</p>
              <p>Devido à Pandemia do COVID-19 estamos atendendo das 08:30h às 17:30h</p>
              <p>A avaliação na hora é feita até às 16h</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Localização</h3>
            <div className="space-y-2 text-gray-300">
              <p>Opção 1 - Rebouças</p>
              <p>Opção 2 - Santa Felicidade</p>
              <p>Opção 3 - São José dos Pinhais</p>
              <p className="mt-4 font-semibold">Atendemos em Curitiba</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Serviços</h3>
            <div className="space-y-2 text-gray-300">
              <p>Conserto de Microondas</p>
              <p>Conserto de Fornos Elétricos</p>
              <p>Acessórios Originais</p>
              <p>Busca e Entrega</p>
              <p>Microondas Novos</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-400 mb-2">
            © Casa do Microondas em Curitiba - Conserto de Microondas Curitiba
          </p>
          <p className="text-gray-500 text-sm">
            Implantado e Customizado por Emerson Sites e Sistemas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
