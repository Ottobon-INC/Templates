import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, ArrowUpRight, Users, Globe } from 'lucide-react';
import './Campus.css';

const Campus = () => {
  return (
    <div className="campus-section">
      <div className="container">
        <motion.div 
          className="campus-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-major">BECOME WHO YOU <br/><span className="font-accent text-coral">ARE MEANT TO BE.</span></h2>
        </motion.div>

        <div className="campus-grid">
          <motion.div 
            className="grid-item img-item large"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80" alt="Campus Life" />
            <div className="img-caption">
              <MapPin size={20} /> 19-Acre Green Campus
            </div>
          </motion.div>
          
          <motion.div 
            className="grid-item stat-box dark-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Briefcase size={40} className="icon-coral" />
            <h3>94%</h3>
            <p>Placement Rate within 6 months of graduation.</p>
          </motion.div>
          
          <motion.div 
            className="grid-item img-item tall"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80" alt="Students collaborating" />
            <div className="img-caption">
              <Users size={20} /> Active Student Clubs
            </div>
          </motion.div>
          
          <motion.div 
            className="grid-item stat-box mint-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GraduationCap size={40} className="icon-indigo" />
            <h3>40,000+</h3>
            <p>Alumni Network across the globe.</p>
          </motion.div>
          
          <motion.div 
            className="grid-item img-item wide"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Career Fair" />
            <div className="img-caption">
              <Briefcase size={20} /> 150+ Industry Partners
            </div>
          </motion.div>
          
          <motion.div 
            className="grid-item stat-box coral-bg wide"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Globe size={40} className="icon-white" />
            <h3>Global Network</h3>
            <p>Exchange programs spanning across 30+ countries worldwide.</p>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Campus;
