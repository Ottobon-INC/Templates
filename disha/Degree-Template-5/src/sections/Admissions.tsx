import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle, Users, Award } from 'lucide-react';
import './Admissions.css';

const steps = [
  { icon: <FileText size={32} />, title: '01. Application', desc: 'Submit your online application with academic transcripts.' },
  { icon: <CheckCircle size={32} />, title: '02. Assessment', desc: 'Take the Orbita Aptitude Test (OAT) online.' },
  { icon: <Users size={32} />, title: '03. Interview', desc: 'A conversation to understand your goals and aspirations.' },
  { icon: <Award size={32} />, title: '04. Offer', desc: 'Receive your admission offer and begin your journey.' },
];

const Admissions = () => {
  return (
    <div className="admissions-section">
      <div className="container">
        <div className="admissions-grid">
          <motion.div 
            className="admissions-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-major">READY TO <br/><span className="font-accent">BEGIN?</span></h2>
            <p className="text-body desc-text">
              We look for students who are curious, driven, and ready to make an impact. The admission process is designed to discover who you are beyond your grades.
            </p>
            
            <div className="cta-group">
              <button className="btn-primary">Start Application <ArrowRight size={18} /></button>
              <button className="btn-secondary">Download Prospectus</button>
            </div>
            
            <div className="deadline-banner">
              <strong>Fall 2027 Admissions:</strong> Round 1 closes in 14 days.
            </div>
          </motion.div>
          
          <motion.div 
            className="admissions-process"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-icon">{step.icon}</div>
                <div className="step-info">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
