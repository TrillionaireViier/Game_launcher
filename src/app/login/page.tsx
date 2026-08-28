'use client';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="launcher-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'var(--bg-card)', padding: '4rem', borderRadius: '16px', width: '500px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', textAlign: 'center' }}>
          <div className="brand" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span className="brand-icon">⚡</span> DAVIAL
          </div>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Select Role</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Choose how you want to enter the Game Launcher.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <button 
              onClick={() => login('player@davial.com')}
              className="btn-play" 
              style={{ padding: '1rem', fontSize: '1.1rem', background: 'transparent', border: '2px solid #3b82f6', color: '#3b82f6' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#3b82f6'; }}
            >
              👤 LOGIN AS PLAYER
            </button>

            <button 
              onClick={() => login('admin@davial.com')}
              className="btn-play" 
              style={{ padding: '1rem', fontSize: '1.1rem' }}
            >
              👑 LOGIN AS ADMINISTRATOR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
