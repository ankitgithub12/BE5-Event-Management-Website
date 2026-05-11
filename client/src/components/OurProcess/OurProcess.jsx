import { motion } from 'framer-motion';
import { MessageCircle, Palette, Sparkles, PartyPopper } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageCircle size={32} className="text-accent" />,
      title: 'Consult',
      subtitle: 'Free Discovery Call',
      description:
        'We begin with a relaxed conversation — understanding your vision, preferences, guest count, and budget to map out the perfect event.',
    },
    {
      number: '02',
      icon: <Palette size={32} className="text-accent" />,
      title: 'Curate',
      subtitle: 'Personalised Plan',
      description:
        'Our planners craft a bespoke proposal — handpicking venues, themes, vendors, and timelines tailored just for you.',
    },
    {
      number: '03',
      icon: <Sparkles size={32} className="text-accent" />,
      title: 'Create',
      subtitle: 'Execution & Setup',
      description:
        'We coordinate every vendor, manage every detail, and transform the space so you never have to worry about a thing.',
    },
    {
      number: '04',
      icon: <PartyPopper size={32} className="text-accent" />,
      title: 'Celebrate',
      subtitle: 'Your Perfect Day',
      description:
        'All you have to do is show up, soak in every moment, and let us handle the rest. You deserve to celebrate.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-4"
          >
            <span className="w-8 h-px bg-accent" />
            HOW IT WORKS
            <span className="w-8 h-px bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-primary mb-4"
          >
            From dream to reality — <span className="text-accent italic">4 simple steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed"
          >
            Our seamless process is designed so you can enjoy every moment of your journey — without the stress.
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Dashed connector line — desktop only */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-accent/30 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Number badge */}
              <div className="relative mb-6">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-white border-2 border-accent/20 shadow-[0_8px_30px_rgba(200,158,98,0.15)] flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_8px_30px_rgba(200,158,98,0.3)] transition-all duration-400">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-[10px] font-black flex items-center justify-center shadow-md">
                  {index + 1}
                </span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_10px_40px_rgba(41,26,57,0.06)] border border-gray-100 group-hover:border-accent/20 group-hover:shadow-[0_20px_50px_rgba(200,158,98,0.12)] transition-all duration-400 group-hover:-translate-y-2 w-full">
                <p className="text-[10px] font-bold tracking-[2px] text-accent uppercase mb-2">
                  STEP {step.number}
                </p>
                <h3 className="text-xl font-heading text-primary mb-1">{step.title}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurProcess;
