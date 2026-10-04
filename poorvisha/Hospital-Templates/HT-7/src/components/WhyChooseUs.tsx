import { Shield, Microscope, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Award className="w-8 h-8" />, title: "Experienced Doctors", desc: "Top-tier specialists with decades of combined experience.", count: "150+" },
    { icon: <Microscope className="w-8 h-8" />, title: "Advanced Technology", desc: "State-of-the-art medical equipment for precise diagnosis.", count: "100%" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Support", desc: "Round-the-clock emergency and patient support.", count: "24/7" },
    { icon: <Shield className="w-8 h-8" />, title: "Patient-Focused Care", desc: "Personalized treatment plans tailored to your needs.", count: "50k+" },
  ];

  return (
    <section className="section-padding bg-hospital-text text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 L50,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-hospital-secondary uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">A Legacy of Medical Excellence.</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              We combine compassionate care with cutting-edge medical technology to deliver outcomes that matter. Your health is our highest priority.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {reasons.slice(0, 2).map((item, idx) => (
                <div key={idx} className="border-l-2 border-hospital-accent pl-4">
                  <div className="text-3xl font-bold text-hospital-secondary mb-1">{item.count}</div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-hospital-accent/20 flex items-center justify-center text-hospital-secondary mb-6">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-xl mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
