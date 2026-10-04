import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import './App.css';

function Login({ onBack }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Simple Header */}
      <nav style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Playfair Display' }}>
            <Heart size={24} /> Veridia Health
          </div>
          <button 
            onClick={onBack} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '1rem' }}
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </nav>

      {/* Login Form Container */}
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--primary)' }}>Welcome Back</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>Please enter your details to sign in.</p>
          
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
              <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', border: 'none', fontSize: '1rem' }}>
              Sign In
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
