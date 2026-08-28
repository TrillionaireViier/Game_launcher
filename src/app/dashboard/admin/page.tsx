'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user || user.role !== 'admin') {
    return (
      <div className="launcher-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2>Admin Access Required</h2>
          <button className="btn-play" onClick={() => router.push('/login')}>Login as Admin</button>
        </main>
      </div>
    );
  }

  return (
    <div className="launcher-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar" style={{ backgroundColor: '#0d0d12' }}>
        <div className="brand"><span className="brand-icon">⚡</span> ADMIN</div>
        
        <nav className="nav-links" style={{ fontSize: '0.9rem' }}>
          <div className="nav-item active">📊 Overview & Revenue</div>
          <div className="nav-item">👥 User Manager</div>
          <div className="nav-item">🚫 Ban System</div>
          <div className="nav-item">🎮 Game Manager</div>
          <div className="nav-item">💲 Price Editor</div>
          <div className="nav-item">🎟️ Promo Codes</div>
          <div className="nav-item">📈 Sales Reports</div>
          <div className="nav-item">🖥️ Server Status</div>
          <div className="nav-item">🎫 Support Tickets</div>
          <div className="nav-item">📢 Announcements</div>
          <div className="nav-item">⚙️ Client Version</div>
          <div className="nav-item">💬 Review Moderation</div>
          <div className="nav-item">🎖️ Badge System</div>
          <div className="nav-item">📊 Hardware Analytics</div>
          <div className="nav-item">💾 Database Backup</div>
        </nav>

        <div className="user-profile" onClick={logout} style={{ marginTop: 'auto', border: '1px solid var(--accent-primary)' }}>
          <div className="avatar" style={{ background: 'var(--accent-primary)' }}></div>
          <div className="user-info">
            <h4>{user.email.split('@')[0]}</h4>
            <p style={{ color: 'var(--accent-primary)' }}>Logout</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar" style={{ background: '#0d0d12' }}>
          <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span>Live Users: <strong style={{ color: '#10b981' }}>12,458</strong></span>
            <span>Server Health: <strong style={{ color: '#10b981' }}>99.9%</strong></span>
          </div>
        </div>

        <div className="content-wrapper">
          <h2 className="section-title">Control Center</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Daily Revenue</p>
              <h3 style={{ fontSize: '2rem' }}>$45,231.00</h3>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-secondary)' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>New Registrations</p>
              <h3 style={{ fontSize: '2rem' }}>+1,204</h3>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Open Support Tickets</p>
              <h3 style={{ fontSize: '2rem' }}>34</h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            {/* User Management & Bans */}
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>User Moderation</h3>
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '1rem' }}>User ID</th>
                    <th style={{ padding: '1rem' }}>Email</th>
                    <th style={{ padding: '1rem' }}>Status</th>
                    <th style={{ padding: '1rem' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>#8821</td>
                    <td style={{ padding: '1rem' }}>toxic_player@x.com</td>
                    <td style={{ padding: '1rem', color: 'var(--accent-primary)' }}>Reported</td>
                    <td style={{ padding: '1rem' }}><button style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Ban IP</button></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>#8822</td>
                    <td style={{ padding: '1rem' }}>normal@x.com</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>Clean</td>
                    <td style={{ padding: '1rem' }}><button style={{ background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--text-secondary)', padding: '0.5rem 1rem', borderRadius: '4px' }}>Edit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Server Status */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Server Controls</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>US-East (Matchmaking)</span>
                    <span style={{ color: '#10b981' }}>Online</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>EU-West (Store API)</span>
                    <span style={{ color: '#10b981' }}>Online</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>Asia (CDN)</span>
                    <span style={{ color: 'var(--accent-primary)' }}>High Load</span>
                  </div>
                  <button className="btn-play" style={{ padding: '0.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>Trigger DB Backup</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
