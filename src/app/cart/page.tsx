'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function Cart() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">Shopping Cart</h2>
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
            <p>Your cart has 1 item.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
