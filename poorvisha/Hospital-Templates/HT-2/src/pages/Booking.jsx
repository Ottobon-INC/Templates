import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Booking() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-off)', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div 
        className="booking-container"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ padding: '40px', maxWidth: '600px', width: '100%' }}
      >
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: '500' }}>
          <ArrowLeft size={18} /> Back to Home
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '16px' }}>
          Book an Appointment
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
          Please fill out the form below to schedule your visit. Our team will contact you shortly to confirm the appointment.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>First Name</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input type="text" placeholder="John" style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Last Name</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input type="text" placeholder="Doe" style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Phone Number</label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input type="tel" placeholder="(555) 123-4567" style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Preferred Date</label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input type="date" style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', color: 'var(--text-main)' }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Preferred Time</label>
              <div style={{ position: 'relative' }}>
                <Clock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <select style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', color: 'var(--text-main)', appearance: 'none', backgroundColor: 'white' }}>
                  <option value="">Select a time</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Department (Optional)</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none', color: 'var(--text-main)', backgroundColor: 'white' }}>
              <option value="">General Inquiry</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
          </div>

          <button 
            type="button" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '16px', padding: '16px', fontSize: '1.1rem' }}
            onClick={() => alert("Appointment request sent successfully!")}
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Booking;
