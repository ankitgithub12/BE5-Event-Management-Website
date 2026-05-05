import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-6">
            <span>✨</span> WE DESIGN. YOU CELEBRATE.
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] text-primary mb-6">
            Where Every Event <br/> Becomes a <span className="text-primary-light italic relative">Story</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            B5 Eventory turns your ideas into unforgettable experiences. From college fests to corporate galas and private parties, we handle it all with creativity and perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
            <a href="/#contact" className="btn btn-primary">
              PLAN YOUR EVENT <ArrowRight size={18} />
            </a>
            <a href="/#portfolio" className="btn btn-outline">
              VIEW PORTFOLIO <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="flex">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')"}}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light -ml-3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80')"}}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light -ml-3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')"}}></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-light -ml-3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')"}}></div>
            </div>
            <div>
              <p className="m-0 text-sm text-gray-800"><strong className="text-primary font-bold">100+</strong> Happy Clients</p>
              <div className="flex items-center gap-2 text-sm font-semibold mt-0.5">
                <span>4.9</span>
                <span className="text-accent tracking-widest text-xs">★★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] lg:h-[600px] flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="w-full sm:w-[90%] h-full relative rounded-[20px] lg:rounded-[200px_20px_20px_200px] overflow-hidden shadow-[0_30px_60px_rgba(41,26,57,0.2)] border-[8px] lg:border-[10px] border-white group">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80" 
              alt="Beautiful Wedding Stage Decoration" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Decorative border behind image */}
            <div className="absolute inset-[-20px] border-2 border-accent rounded-[220px_40px_40px_220px] -z-10 pointer-events-none hidden lg:block"></div>
          </div>
        </div>
        
      </div>
      
      {/* Background decorations */}
      <div className="absolute rounded-full blur-[80px] z-0 opacity-50 w-[400px] h-[400px] bg-accent/20 -top-[100px] -left-[100px]"></div>
      <div className="absolute rounded-full blur-[80px] z-0 opacity-50 w-[500px] h-[500px] bg-primary/10 -bottom-[200px] -right-[100px]"></div>
    </section>
  );
};

export default Hero;
