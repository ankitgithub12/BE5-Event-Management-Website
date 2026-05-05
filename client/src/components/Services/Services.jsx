import { GraduationCap, Briefcase, PartyPopper, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap size={40} className="text-primary" />,
      title: 'College Events',
      description: 'From fests to functions, we create high-energy experiences that students will never forget.',
    },
    {
      icon: <Briefcase size={40} className="text-primary" />,
      title: 'Corporate Events',
      description: 'Professional, impactful and seamless events that represent your brand the right way.',
    },
    {
      icon: <PartyPopper size={40} className="text-primary" />,
      title: 'Private Parties',
      description: 'Birthdays, anniversaries or special celebrations – we make your moments magical.',
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-4">
            <span className="w-8 h-px bg-accent"></span>
            WHAT WE DO
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-primary">Events Crafted to Perfection</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-10 text-center shadow-[0_10px_40px_rgba(41,26,57,0.08)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(200,158,98,0.15)] transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                LEARN MORE <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
