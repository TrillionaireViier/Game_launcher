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
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Just earned the "Neon God" achievement in Cyber Hunter 2077!</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" style={{ width: '100%', borderRadius: '4px' }} alt="Gameplay" />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <span>❤️ 452</span>
                <span>💬 24</span>
                <span>↗ Share</span>
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
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <span>❤️ 1,204</span>
                <span>💬 156</span>
                <span>↗ Share</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
