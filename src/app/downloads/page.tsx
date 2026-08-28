'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Downloads() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Downloads</h2>
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
            <p>Downloads (Idle)</p>
          </div>
        </div>
      </main>
    </div>
  );
}
