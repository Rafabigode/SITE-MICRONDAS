
const PhotoGallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1556909195-f4d6d6e4e2b8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1556909195-4c36e4d5b5d3?w=400&h=300&fit=crop"
  ];

  return (
    <section id="fotos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fotos Casa do Microondas</h2>
          <p className="text-gray-600">Conheça nossas instalações e serviços</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={photo} 
                alt={`Foto da Casa do Microondas ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">Feedback de Clientes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Excelente atendimento! Meu microondas ficou como novo. Recomendo!"</p>
              <p className="text-blue-600 font-semibold">- Maria S.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Serviço rápido e preço justo. Já é o segundo microondas que conserto aqui!"</p>
              <p className="text-blue-600 font-semibold">- João P.</p>
            </div>
          </div>
        </div>

        {/* Before/After Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Antes e Depois</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-red-600 mb-4">ANTES</h4>
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop" 
                alt="Microondas antes do conserto"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="text-gray-600 mt-2">Microondas com problemas</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-green-600 mb-4">DEPOIS</h4>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" 
                alt="Microondas depois do conserto"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="text-gray-600 mt-2">Totalmente restaurado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
