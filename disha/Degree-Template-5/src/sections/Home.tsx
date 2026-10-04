import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ from, to, duration = 2, suffix = '', decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(progress * (to - from) + from);
        if (progress < 1) {
          window.requestAnimationFrame(animateCount);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(animateCount);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
};

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="hero-container container">
          <div className="hero-left">
            <motion.div 
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ORBITA INSTITUTE · VISAKHAPATNAM · INDIA
            </motion.div>
            
            <motion.h1 
              className="heading-hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              BEGIN<br />
              <span className="font-accent">SOMEWHERE.</span><br />
              GO ANYWHERE.
            </motion.h1>
            
            <motion.p 
              className="text-body hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              An education designed to help you discover your strengths, explore possibilities and build your next chapter.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="btn-primary">Explore Programmes</button>
              <button className="btn-secondary">Apply Now</button>
            </motion.div>

            <motion.div 
              className="hero-stats-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="stat-item">
                <h2 className="heading-sub">
                  <AnimatedCounter from={0} to={5.6} decimals={1} suffix="K+" />
                </h2>
                <p className="text-body">Students</p>
              </div>
              <div className="stat-item">
                <h2 className="heading-sub">
                  <AnimatedCounter from={0} to={34} suffix="+" />
                </h2>
                <p className="text-body">Programmes</p>
              </div>
              <div className="stat-item">
                <h2 className="heading-sub">
                  <AnimatedCounter from={0} to={210} suffix="+" />
                </h2>
                <p className="text-body">Faculty</p>
              </div>
              <div className="stat-item">
                <h2 className="heading-sub">
                  <AnimatedCounter from={0} to={150} suffix="+" />
                </h2>
                <p className="text-body">Partners</p>
              </div>
            </motion.div>
          </div>
          
          <div className="hero-right">
            <div className="hero-circle" />
          </div>
        </div>
      </div>

      <div className="discover-strip">
        <div className="discover-track">
          {/* Duplicated for infinite effect */}
          {[1, 2].map((group) => (
            <div key={group} className="discover-items">
              <span>SCIENCE</span>
              <span className="separator">✦</span>
              <span>COMPUTING</span>
              <span className="separator">✦</span>
              <span>BUSINESS</span>
              <span className="separator">✦</span>
              <span>ARTS</span>
              <span className="separator">✦</span>
              <span>MEDIA</span>
              <span className="separator">✦</span>
              <span>MANAGEMENT</span>
              <span className="separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
