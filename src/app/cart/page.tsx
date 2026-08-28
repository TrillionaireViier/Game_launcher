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
          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Your Items</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 1, name: 'Cyber Hunter - Deluxe Edition', price: '$59.99', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=150&q=80' },
                { id: 2, name: 'Space Recon Expansion Pack', price: '$19.99', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b7738?ixlib=rb-4.0.3&w=150&q=80' }
              ].map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-panel)', padding: '1rem', borderRadius: '8px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.name}</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Digital Download</p>
                  </div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.price}</div>
                  <button style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}>
              <div style={{ fontSize: '1.2rem' }}>Total: <strong>$79.98</strong></div>
              <button className="btn-play">Checkout</button>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Looking for more games?</p>
            <button className="btn-play" style={{ background: 'transparent', border: '2px solid var(--accent-secondary)' }} onClick={() => window.location.href = '/feed'}>
              See Feed to see more
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
