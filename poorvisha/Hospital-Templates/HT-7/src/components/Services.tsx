import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const departments = [
    { title: "Cardiology", desc: "Advanced heart care and cardiovascular surgery", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-8" },
    { title: "Neurology", desc: "Expert care for brain and nervous system", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4" },
    { title: "Pediatrics", desc: "Specialized care for infants and children", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4" },
    { title: "Orthopedics", desc: "Comprehensive bone and joint treatments", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4" },
    { title: "Oncology", desc: "State-of-the-art cancer diagnosis and care", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4" },
  ];

  return (
    <section id="departments" className="section-padding bg-white min-h-screen flex flex-col justify-center">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-wider text-hospital-accent uppercase mb-3">Departments & Services</h2>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight">Comprehensive Care <br/>Across Specialties</h3>
          </div>
          <a href="#" className="btn-secondary group whitespace-nowrap">
            View All Departments
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {departments.map((dept, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${dept.colSpan} group relative rounded-3xl overflow-hidden h-[300px] lg:h-[400px]`}
            >
              <img src={dept.image} alt={dept.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{dept.title}</h4>
                <p className="text-gray-300 text-sm mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{dept.desc}</p>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 transform translate-y-4 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
