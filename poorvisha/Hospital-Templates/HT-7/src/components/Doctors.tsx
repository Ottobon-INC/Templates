import { motion } from 'framer-motion';

const Doctors = () => {
  const doctors = [
    { name: "Dr. Sarah Jenkins", specialty: "Chief of Cardiology", exp: "15+ Years", image: "/dr_1.jpg" },
    { name: "Dr. Marcus Chen", specialty: "Neurologist", exp: "12+ Years", image: "/dr_2.jpg" },
    { name: "Dr. Emily Rostova", specialty: "Pediatrician", exp: "8+ Years", image: "/dr_3.jpg" },
    { name: "Dr. James Wilson", specialty: "Orthopedic Surgeon", exp: "20+ Years", image: "/dr_4.jpg" }
  ];

  return (
    <section id="doctors" className="section-padding bg-hospital-bg">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-hospital-accent uppercase mb-3">Our Specialists</h2>
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Meet Our World-Class Medical Team</h3>
          <p className="text-gray-600 text-lg">Our board-certified doctors combine deep expertise with genuine compassion to provide the highest standard of care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] bg-gray-200">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a href="#" className="bg-white text-hospital-text px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Profile
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-1 group-hover:text-hospital-accent transition-colors">{doc.name}</h4>
              <p className="text-hospital-accent font-medium mb-1">{doc.specialty}</p>
              <p className="text-sm text-gray-500">{doc.exp} Experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
