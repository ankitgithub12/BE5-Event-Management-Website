import { motion } from 'framer-motion';

const AwardsSection = () => {
  const awards = [
    {
      year: '2024',
      title: 'Best Wedding Planner',
      org: 'Rajasthan Tourism Awards',
      badge: '🏆'
    },
    {
      year: '2023',
      title: 'Excellence in Corporate Events',
      org: 'Event Management Association',
      badge: '🎖️'
    },
    {
      year: '2023',
      title: 'Top 10 Emerging Planners',
      org: 'Luxury Living India',
      badge: '🌟'
    },
    {
      year: '2022',
      title: 'Most Creative Decor',
      org: 'National Event Expo',
      badge: '🎨'
    }
  ];

  const publications = [
    'The Times of India', 'Vogue Weddings', 'YourStory', 'Economic Times', 'Hindustan Times'
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* As Seen In Strip */}
        <div className="mb-20">
          <p className="text-center text-gray-400 text-xs font-bold tracking-[3px] uppercase mb-10">AS SEEN IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {publications.map((pub, i) => (
              <span key={i} className="text-xl md:text-2xl font-heading font-bold text-primary italic whitespace-nowrap">
                {pub}
              </span>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {award.badge}
              </div>
              <div className="text-accent font-bold text-xs tracking-wider mb-2">
                {award.year}
              </div>
              <h3 className="text-lg font-heading text-primary mb-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-tighter">
                {award.org}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
