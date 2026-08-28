'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="launcher-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'var(--bg-card)', padding: '4rem', borderRadius: '16px', width: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <div className="brand" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <span className="brand-icon">⚡</span> DAVIAL
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem' }}>Authentication</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Email (use 'admin' in email for Admin)" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1rem',
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'inherit'
              }}
            />
            <input 
              type="password" 
              placeholder="Password (any)" 
              required 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1rem',
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'inherit'
              }}
            />
            <button type="submit" className="btn-play" style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}>
              LOGIN
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
