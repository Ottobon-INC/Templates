import { useState } from 'react';

export default function Appointments() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = (e) => {
    e.preventDefault();
    setStep(s => s + 1);
  };

  if (step === 8) {
    return (
      <div className="section container text-center">
        <h1 style={{color: 'var(--color-primary)'}}>Appointment Confirmed</h1>
        <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>Your appointment request has been received.</p>
        <div className="card" style={{maxWidth: '500px', margin: '0 auto', backgroundColor: 'var(--color-bg-secondary)'}}>
          <p style={{fontWeight: 600}}>Reference ID:</p>
          <p style={{fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>VEL-2026-18492</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section container">
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{color: 'var(--color-primary)', textAlign: 'center'}}>Book an Appointment</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative'}}>
          <div style={{position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', backgroundColor: 'var(--color-border)', zIndex: -1}}></div>
          {[1,2,3,4,5,6,7].map(s => (
            <div key={s} style={{
              width: '32px', height: '32px', borderRadius: '50%', 
              backgroundColor: step >= s ? 'var(--color-primary)' : 'var(--color-surface)',
              color: step >= s ? '#fff' : 'var(--color-text-secondary)',
              border: `2px solid ${step >= s ? 'var(--color-primary)' : 'var(--color-border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 600, fontSize: '0.875rem'
            }}>
              {s}
            </div>
          ))}
        </div>

        <div className="card">
          <form onSubmit={nextStep}>
            {step === 1 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 1: Choose Care Type</h3>
                <div className="grid grid-cols-2">
                  <label className="card" style={{cursor: 'pointer', border: '2px solid var(--color-border)'}}>
                    <input type="radio" name="careType" required style={{marginBottom: '1rem'}} />
                    <span style={{fontWeight: 600, display: 'block'}}>Consultation</span>
                  </label>
                  <label className="card" style={{cursor: 'pointer', border: '2px solid var(--color-border)'}}>
                    <input type="radio" name="careType" required style={{marginBottom: '1rem'}} />
                    <span style={{fontWeight: 600, display: 'block'}}>Second Opinion</span>
                  </label>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 2: Choose Specialty</h3>
                <select required style={{width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '1rem', fontSize: '1rem'}}>
                  <option value="">Select Specialty...</option>
                  <option value="medical-oncology">Medical Oncology</option>
                  <option value="surgical-oncology">Surgical Oncology</option>
                  <option value="radiation-oncology">Radiation Oncology</option>
                  <option value="pediatric-oncology">Pediatric Oncology</option>
                </select>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 3: Choose Doctor</h3>
                <div className="grid grid-cols-2">
                  <label className="card" style={{cursor: 'pointer', border: '2px solid var(--color-border)'}}>
                    <input type="radio" name="doctor" required style={{marginBottom: '1rem'}} />
                    <span style={{fontWeight: 600, display: 'block'}}>Dr. Ananya Rao</span>
                    <span style={{color: 'var(--color-text-secondary)', fontSize: '0.875rem'}}>Medical Oncology</span>
                  </label>
                  <label className="card" style={{cursor: 'pointer', border: '2px solid var(--color-border)'}}>
                    <input type="radio" name="doctor" required style={{marginBottom: '1rem'}} />
                    <span style={{fontWeight: 600, display: 'block'}}>Dr. Vikram Shah</span>
                    <span style={{color: 'var(--color-text-secondary)', fontSize: '0.875rem'}}>Surgical Oncology</span>
                  </label>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 4: Choose Date</h3>
                <input type="date" required style={{width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem'}} />
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 5: Choose Time</h3>
                <div className="grid grid-cols-3">
                  {['9:00 AM', '9:30 AM', '10:30 AM', '11:00 AM', '3:30 PM', '4:30 PM'].map(time => (
                    <label key={time} className="card" style={{cursor: 'pointer', border: '1px solid var(--color-border)', padding: '1rem', textAlign: 'center'}}>
                      <input type="radio" name="time" required style={{marginBottom: '0.5rem'}} />
                      <span style={{fontWeight: 500, display: 'block'}}>{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 6: Patient Information</h3>
                <div className="grid grid-cols-2">
                  <input type="text" placeholder="Full Name" required style={{padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem'}} />
                  <input type="date" placeholder="Date of Birth" required style={{padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem'}} />
                  <input type="tel" placeholder="Phone" required style={{padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem'}} />
                  <input type="email" placeholder="Email" required style={{padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem'}} />
                </div>
                <textarea placeholder="Reason for Visit" required style={{width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', marginTop: '2rem', minHeight: '120px'}}></textarea>
              </div>
            )}

            {step === 7 && (
              <div>
                <h3 style={{marginBottom: '1.5rem'}}>Step 7: Review</h3>
                <div style={{backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)'}}>
                  <p><strong>Care Type:</strong> Consultation</p>
                  <p><strong>Doctor:</strong> Dr. Ananya Rao</p>
                  <p><strong>Date & Time:</strong> October 8, 2026 at 10:30 AM</p>
                  <p><strong>Patient Name:</strong> John Doe</p>
                  <p style={{marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)'}}>By confirming, you agree to our terms and fictional data policies.</p>
                </div>
              </div>
            )}

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3rem'}}>
              {step > 1 ? (
                <button type="button" className="btn btn-secondary" onClick={() => setStep(s => s - 1)}>Back</button>
              ) : <div></div>}
              <button type="submit" className="btn btn-primary">{step === 7 ? 'Confirm Appointment' : 'Next Step'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
