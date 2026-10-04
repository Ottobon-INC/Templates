import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAF9F6]">
      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-soft"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-hospital-text">Accepting New Patients</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Excellence in <br />
              <span className="text-hospital-accent">Healthcare</span> <br />
              With Compassion.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              Experience world-class medical care with a human touch. Our dedicated team of specialists is here to support your journey to optimal health.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/appointment" className="btn-primary group">
                Book an Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/doctors" className="btn-secondary">
                Find a Doctor
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3] max-h-[450px] mx-auto w-full shadow-2xl">
              <img 
                src="/hero_3d.jpg" 
                alt="3D Healthcare Illustration" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-8 -left-8 lg:-left-16 bg-white p-6 rounded-2xl shadow-float max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Patient" />
                  ))}
                </div>
                <div>
                  <div className="flex text-hospital-secondary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xs font-semibold mt-1">4.9/5 from 2,000+ patients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-hospital-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] bg-hospital-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
