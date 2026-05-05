import { FaInstagram } from 'react-icons/fa';

const SocialGrid = () => {
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1540039155732-d674140af310?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-full">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-2">
            FOLLOW OUR JOURNEY
          </div>
          <h2 className="text-3xl font-heading italic text-primary">@b5eventory</h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {images.map((img, index) => (
            <div key={index} className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer">
              <img 
                src={img} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-sm hover:border-primary hover:text-primary transition-colors duration-300">
            <FaInstagram size={18} /> FOLLOW US ON INSTAGRAM
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default SocialGrid;
