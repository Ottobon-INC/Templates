import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Users, Calendar } from 'lucide-react';
import heroImage from '../assets/cancer.png';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0, left: '40%',
          background: 'radial-gradient(circle at center, var(--color-bg-secondary) 0%, var(--color-bg) 70%)',
          opacity: 0.8,
          zIndex: 0
        }}></div>
        <div className="container relative" style={{zIndex: 1, height: '100%', display: 'flex', alignItems: 'center'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%'}}>
            
            {/* Left Side: Text Content */}
            <div className="animate-fade-in" style={{position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <span style={{color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block'}}>
                Velora Cancer Institute
              </span>
              <h1 style={{marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '4.5rem', lineHeight: 1.1}}>
                Care Beyond Treatment.
              </h1>
              <p style={{fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px'}}>
                Specialized cancer care built around advanced diagnosis, coordinated treatment, and the people who matter most.
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                <Link to="/appointments" className="btn btn-primary">Book an Appointment</Link>
                <Link to="/cancer-care" className="btn btn-secondary">Explore Cancer Care</Link>
              </div>
            </div>

            {/* Right Side: Circular Visual */}
            <div className="animate-fade-in" style={{position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{
                width: '100%', 
                maxWidth: '600px',
                position: 'relative',
                opacity: 0.8
              }}>
                <div className="hero-3d-visual" style={{width: '100%', paddingBottom: '100%', position: 'relative'}}>
                  <img src={heroImage} alt="Cancer Care Artwork" style={{position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', objectFit: 'contain', borderRadius: '50%', zIndex: 10, mixBlendMode: 'multiply', opacity: 0.95, filter: 'contrast(2) brightness(1.15) grayscale(100%)', transform: 'translateZ(0)', WebkitFontSmoothing: 'antialiased'}} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Removed Stats Section */}
      </section>

      {/* About Velora Section */}
      <section className="section" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--color-bg)'}}>
        <div className="container">
          <div className="grid grid-cols-2" style={{gap: '4rem', alignItems: 'center'}}>
            <div>
              <h2 style={{color: 'var(--color-primary)', marginBottom: '2rem'}}>Advanced medicine. Human care.</h2>
              <p style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>
                Velora Cancer Institute is a fictional multidisciplinary cancer care center created as a demonstration template. The concept brings together oncology consultation, diagnostics, treatment coordination, supportive care, and research-oriented services in one patient-centered environment.
              </p>
              <div style={{marginTop: '3rem'}}>
                <h4 style={{color: 'var(--color-secondary)', marginBottom: '1.5rem'}}>Our Journey</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '2px solid var(--color-premium)', paddingLeft: '1.5rem'}}>
                  <div><strong style={{color: 'var(--color-primary)'}}>2008</strong> &mdash; Institute concept established</div>
                  <div><strong style={{color: 'var(--color-primary)'}}>2012</strong> &mdash; First multidisciplinary program</div>
                  <div><strong style={{color: 'var(--color-primary)'}}>2017</strong> &mdash; Advanced diagnostics center</div>
                  <div><strong style={{color: 'var(--color-primary)'}}>2021</strong> &mdash; Integrated patient support program</div>
                  <div><strong style={{color: 'var(--color-primary)'}}>2026</strong> &mdash; Expanded cancer care network</div>
                </div>
              </div>
            </div>
            <div>
              <div className="image-hover-effect" style={{
                width: '100%',
                height: '600px',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                backgroundImage: 'url("https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Care Section */}
      <section className="section" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-surface)'}}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{color: 'var(--color-primary)'}}>Personalized care for every cancer journey.</h2>
            <p style={{maxWidth: '600px', margin: '0 auto'}}>Comprehensive, coordinated pathways designed around your specific diagnosis.</p>
          </div>
          <div className="grid grid-cols-3">
            {[
              { title: 'Breast Cancer', path: '/cancer-care/breast-cancer' },
              { title: 'Lung Cancer', path: '/cancer-care/lung-cancer' },
              { title: 'Gastrointestinal Cancer', path: '/cancer-care/gastrointestinal-cancer' },
              { title: 'Head & Neck Cancer', path: '/cancer-care/head-neck-cancer' },
              { title: 'Blood Cancers', path: '/cancer-care/blood-cancers' },
              { title: 'Gynecologic Cancer', path: '/cancer-care/gynecologic-cancer' }
            ].map(spec => (
              <div key={spec.title} className="card">
                <Shield className="card-icon" />
                <h3 className="card-title" style={{fontSize: '1.25rem'}}>{spec.title}</h3>
                <span className="card-link" style={{marginTop: 'auto', cursor: 'pointer'}}>Learn More <ArrowRight size={16}/></span>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop: '4rem'}}>
            <Link to="/cancer-care" className="btn btn-secondary">View All Specialties</Link>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="section" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg)'}}>
        <div className="container">
          <h2 className="text-center mb-8" style={{color: 'var(--color-primary)'}}>The Patient Journey</h2>
          <div className="grid grid-cols-3" style={{gap: '2rem'}}>
            {[
              { step: '01', title: 'Connect', desc: 'Initial consultation and review of medical history.' },
              { step: '02', title: 'Diagnose', desc: 'Advanced imaging and precise pathological testing.' },
              { step: '03', title: 'Plan', desc: 'Multidisciplinary tumor board develops a tailored plan.' },
              { step: '04', title: 'Treat', desc: 'Coordinated execution of therapies and surgical care.' },
              { step: '05', title: 'Recover', desc: 'Comprehensive rehabilitation and supportive care.' },
              { step: '06', title: 'Follow Up', desc: 'Long-term monitoring and survivorship programs.' }
            ].map(stage => (
              <div key={stage.step} style={{padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)'}}>
                <div style={{fontSize: '2rem', fontWeight: 800, color: 'var(--color-premium)', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{stage.step}</div>
                <h4 style={{color: 'var(--color-primary)', marginBottom: '0.5rem'}}>{stage.title}</h4>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
