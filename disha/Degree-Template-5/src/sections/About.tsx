import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const timelineData = [
  { year: '2010', title: 'THE BEGINNING', desc: 'Orbita was founded with a vision to redefine multidisciplinary education.', img: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80' },
  { year: '2014', title: 'ACADEMIC EXPANSION', desc: 'Introduced 15 new programmes across Sciences and Humanities.', img: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&q=80' },
  { year: '2018', title: 'INNOVATION CENTRE', desc: 'Opened the state-of-the-art research and innovation hub.', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { year: '2022', title: 'GLOBAL PARTNERSHIPS', desc: 'Partnered with over 50 international universities for student exchange.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80' },
  { year: '2027', title: '34+ PROGRAMMES', desc: 'Continuing the journey of excellence and multidisciplinary learning.', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80' },
];



const About = () => {
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-section">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-major">KNOW WHERE YOU <br/>ARE GOING.</h2>
          <p className="heading-sub font-accent">First, know where you come from.</p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-nav">
            {timelineData.map((item, index) => (
              <div 
                key={item.year}
                className={`timeline-item ${activeYear === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveYear(index)}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="timeline-content">
            <motion.div 
              key={activeYear}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="timeline-image-wrapper"
            >
              <img src={timelineData[activeYear].img} alt={timelineData[activeYear].title} />
              <div className="timeline-desc">
                <p>{timelineData[activeYear].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="vm-container">
          <motion.div 
            className="vm-flip-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="vm-flip-inner">
              <div className="vm-flip-front vm-block">
                <div className="vm-bg-shape shape-1"></div>
                <h3>VISION</h3>
                <p className="text-body">"To create graduates who think independently, learn continuously and contribute meaningfully."</p>
              </div>
              <div className="vm-flip-back vm-block">
                <h3>OUR VISION IN ACTION</h3>
                <p className="text-body" style={{fontSize: '18px'}}>We invest in an interdisciplinary curriculum, bringing experts together to cultivate a holistic approach to problem-solving.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="vm-flip-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="vm-flip-inner">
              <div className="vm-flip-front vm-block">
                <div className="vm-bg-shape shape-2"></div>
                <h3>MISSION</h3>
                <p className="text-body">"To connect academic knowledge with practical experience, research and industry."</p>
              </div>
              <div className="vm-flip-back vm-block">
                <h3>HOW WE DO IT</h3>
                <p className="text-body" style={{fontSize: '18px'}}>Through industry partnerships, our students engage in real-world projects that bridge theory and practical application.</p>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default About;
