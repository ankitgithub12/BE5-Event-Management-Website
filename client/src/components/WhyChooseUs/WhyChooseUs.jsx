import { PiggyBank, Palette, Clock, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <PiggyBank size={32} className="text-accent" />,
      title: 'Budget Friendly',
      description: 'Premium experiences that fit your budget.',
    },
    {
      icon: <Palette size={32} className="text-accent" />,
      title: 'Creative Designs',
      description: 'Unique ideas tailored to your vision.',
    },
    {
      icon: <Clock size={32} className="text-accent" />,
      title: 'On-Time Execution',
      description: 'We value your time as much as you do.',
    },
    {
      icon: <Handshake size={32} className="text-accent" />,
      title: 'End-to-End Management',
      description: 'Relax, we take care of every little detail.',
    }
  ];

  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="text-center mb-12 hidden">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-4">
            <span className="w-8 h-px bg-accent"></span>
            WHY CHOOSE US?
            <span className="w-8 h-px bg-accent"></span>
          </div>
        </div>

        <h2 className="text-center text-white text-sm tracking-[2px] uppercase mb-12 font-semibold">
          WHY CHOOSE US?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-6 py-6 sm:py-0 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center shrink-0 bg-accent/5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative stars/sparkles */}
      <div className="absolute top-10 left-[10%] text-accent/20 text-4xl">✦</div>
      <div className="absolute bottom-10 right-[10%] text-accent/20 text-4xl">✦</div>
      <div className="absolute top-20 right-[30%] text-accent/10 text-2xl">✦</div>
    </section>
  );
};

export default WhyChooseUs;
