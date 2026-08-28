'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user || user.role !== 'user') {
    return (
      <div className="launcher-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2>Access Denied</h2>
          <button className="btn-play" onClick={() => router.push('/login')}>Go to Login</button>
        </main>
      </div>
    );
  }

  return (
    <div className="launcher-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon">⚡</span> DAVIAL</div>
        
        <nav className="nav-links">
          <div className="nav-item active">👤 Profile</div>
          <div className="nav-item">🎮 My Library</div>
          <div className="nav-item">🏆 Achievements</div>
          <div className="nav-item">💰 Wallet ($45.00)</div>
          <div className="nav-item">👥 Friends List (3 Online)</div>
          <div className="nav-item">🛒 Shopping Cart (1)</div>
          <div className="nav-item">❤️ Wishlist</div>
          <div className="nav-item">⬇️ Downloads (Idle)</div>
          <div className="nav-item">☁️ Cloud Saves (ON)</div>
          <div className="nav-item">📰 Activity Feed</div>
          <div className="nav-item">🔒 Security & 2FA</div>
          <div className="nav-item">💻 System Requirements</div>
        </nav>

        <div className="user-profile" onClick={logout} style={{ marginTop: 'auto', border: '1px solid var(--accent-primary)' }}>
          <div className="avatar"></div>
          <div className="user-info">
            <h4>{user.email.split('@')[0]}</h4>
            <p style={{ color: 'var(--accent-primary)' }}>Logout</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span>Status: <strong style={{ color: '#10b981' }}>Online</strong></span>
            <span>Total Playtime: <strong>342 Hours</strong></span>
          </div>
        </div>

        <div className="content-wrapper">
          <h2 className="section-title">Welcome back, {user.email.split('@')[0]}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Feature: Library Management */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Recently Played</h3>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ minWidth: '150px', background: 'var(--bg-panel)', borderRadius: '8px', padding: '1rem' }}>
                      <div style={{ height: '100px', background: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80) center/cover', borderRadius: '4px', marginBottom: '1rem' }}></div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Game {i}</p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>42 hrs played</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature: Download Queue */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Download Queue</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-panel)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '4px' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>Update: Cyber Hunter</span>
                      <span>45% (12 MB/s)</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                      <div style={{ width: '45%', height: '100%', background: 'var(--accent-secondary)', borderRadius: '2px' }}></div>
                    </div>
                  </div>
                  <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>Pause</button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Feature: Friends List & Chat */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Friends Online</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Alex_Pro', 'SniperG', 'Nova001'].map((friend, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '4px', transition: 'background 0.2s' }}>
                      <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: i===0 ? '#10b981' : 'var(--accent-primary)' }}></div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{friend}</p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{i===0 ? 'In Game: Space Recon' : 'Online'}</p>
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>💬</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
