'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Friends() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Friends List</h2>
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
            <p>3 Friends Online</p>
          </div>
        </div>
      </main>
    </div>
  );
}
