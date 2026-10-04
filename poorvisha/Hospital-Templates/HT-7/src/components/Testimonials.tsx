import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="section-padding bg-hospital-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold tracking-wider text-hospital-accent uppercase mb-3">Patient Stories</h2>
            <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Real Experiences, Real Care.</h3>
            <p className="text-gray-600 mb-8">Hear from our patients about their journey to recovery and the care they received at our facilities.</p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-hospital-text hover:text-white hover:border-hospital-text transition-colors">
                ←
              </button>
              <button className="w-12 h-12 rounded-full bg-hospital-text text-white flex items-center justify-center hover:bg-hospital-accent transition-colors">
                →
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 rounded-3xl shadow-float relative z-10"
            >
              <Quote className="w-16 h-16 text-hospital-secondary/20 absolute top-8 right-8" />
              <div className="flex items-center space-x-4 mb-8">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Patient" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-lg">Eleanor Pena</h4>
                  <p className="text-hospital-accent text-sm font-medium">Cardiology Patient</p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                "The level of care I received was exceptional. From the moment I walked in, the staff made me feel comfortable and informed. Dr. Jenkins took the time to explain every step of my procedure."
              </p>
            </motion.div>
            <div className="absolute top-8 right-8 -bottom-8 -left-8 bg-hospital-secondary/10 rounded-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
