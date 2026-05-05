const Testimonials = () => {
  const testimonials = [
    {
      text: "B5 Eventory made our college fest a grand success! Everything was so well organized and creative.",
      name: "Riya Sharma",
      role: "Head, Cultural Committee",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Professional team, great ideas and flawless execution. Our corporate event was exceptional.",
      name: "Amit Verma",
      role: "HR Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "They turned my dream birthday into a fairy tale. Highly recommended!",
      name: "Neha Tiwari",
      role: "Private Client",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-semibold text-sm tracking-[2px] uppercase mb-4">
            <span className="w-8 h-px bg-accent"></span>
            CLIENTS LOVE
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-primary">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(41,26,57,0.06)] border border-gray-50 relative">
              <div className="text-6xl text-accent/20 font-heading leading-none absolute top-6 left-6">"</div>
              
              <p className="text-gray-600 mb-8 relative z-10 pt-4 line-clamp-4">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-3 h-3 rounded-full bg-accent"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
