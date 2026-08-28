'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function CloudSaves() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Cloud Saves</h2>
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
            <p>Cloud Saves are ON.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
