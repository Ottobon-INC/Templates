import { Calendar, MapPin, Phone, Users, ShieldAlert, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickAccess = () => {
  const items = [
    { icon: <Users className="w-6 h-6" />, title: "Find a Doctor", desc: "Browse our specialists" },
    { icon: <Calendar className="w-6 h-6" />, title: "Book Appointment", desc: "Schedule a visit" },
    { icon: <MapPin className="w-6 h-6" />, title: "Locations", desc: "Find clinics near you" },
    { icon: <HeartPulse className="w-6 h-6" />, title: "Patient Portal", desc: "Access your records" },
    { icon: <Phone className="w-6 h-6" />, title: "Contact Us", desc: "Get in touch" },
    { icon: <ShieldAlert className="w-6 h-6 text-red-500" />, title: "Emergency", desc: "24/7 Immediate care", highlight: true },
  ];

  return (
    <div className="relative -mt-16 z-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-float p-4 lg:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {items.map((item, idx) => (
          <a href="#" key={idx} className={`flex flex-col items-center text-center p-4 rounded-2xl transition-colors ${item.highlight ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-hospital-bg'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${item.highlight ? 'bg-red-100 text-red-600' : 'bg-hospital-bg text-hospital-accent'}`}>
              {item.icon}
            </div>
            <h3 className={`font-semibold text-sm ${item.highlight ? 'text-red-600' : 'text-hospital-text'}`}>{item.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default QuickAccess;
