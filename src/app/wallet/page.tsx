'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Wallet() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Wallet</h2>
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
            <p>Current Balance: $45.00</p>
          </div>
        </div>
      </main>
    </div>
  );
}
