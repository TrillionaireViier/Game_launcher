'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Community() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Community Activity</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
            {/* Post 1 */}
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                <div>
                  <h4 style={{ margin: 0 }}>Cyber_Ninja</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Just earned the &quot;Neon God&quot; achievement in Cyber Hunter 2077!</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style={{ width: '100%', borderRadius: '4px' }} alt="Gameplay" />
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <span style={{ cursor: 'pointer' }}>❤️ 452</span>
                <span style={{ cursor: 'pointer' }}>💬 24 Comments</span>
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
                  <span style={{ cursor: 'pointer', color: '#0088cc' }}>↗ Telegram</span>
                  <span style={{ cursor: 'pointer', color: '#1877F2' }}>↗ Facebook</span>
                  <span style={{ cursor: 'pointer', color: '#ff0050' }}>↗ TikTok</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <input type="text" placeholder="Add a comment..." style={{ flex: 1, padding: '0.5rem', borderRadius: '20px', border: '1px solid var(--border-color, #333)', background: 'var(--bg-panel)', color: 'white' }} />
                <button style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', cursor: 'pointer' }}>Post</button>
              </div>
            </div>

            {/* Post 2 */}
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6' }}></div>
                <div>
                  <h4 style={{ margin: 0 }}>Davial Official</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Patch 2.1 is now live for Space Recon! Check out the new zero-gravity mechanics.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <span style={{ cursor: 'pointer' }}>❤️ 1,204</span>
                <span style={{ cursor: 'pointer' }}>💬 156 Comments</span>
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
                  <span style={{ cursor: 'pointer', color: '#0088cc' }}>↗ Telegram</span>
                  <span style={{ cursor: 'pointer', color: '#1877F2' }}>↗ Facebook</span>
                  <span style={{ cursor: 'pointer', color: '#ff0050' }}>↗ TikTok</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <input type="text" placeholder="Add a comment..." style={{ flex: 1, padding: '0.5rem', borderRadius: '20px', border: '1px solid var(--border-color, #333)', background: 'var(--bg-panel)', color: 'white' }} />
                <button style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', cursor: 'pointer' }}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
