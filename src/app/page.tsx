'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

const mockGames = [
  { id: 1, title: 'Cyber Hunter 2077', price: '$59.99', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, title: 'Neon Drift', price: '$19.99', img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, title: 'Space Recon', price: 'Free to Play', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, title: 'Fantasy Quest', price: '$29.99', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 5, title: 'Mech Warfare', price: '$49.99', img: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

export default function Store() {
  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />

        <div className="content-wrapper">
          <div className="hero-banner">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Cyber Hunter 2077</h1>
              <p className="hero-desc">The most anticipated RPG of the year. Join the resistance and take back the neon city.</p>
              <button className="btn-play">Купить за $59.99</button>
            </div>
          </div>

          <h2 className="section-title">Featured Games</h2>
          <div className="game-grid">
            {mockGames.map(game => (
              <div className="game-card" key={game.id}>
                <div className="game-cover">
                  <img src={game.img} alt={game.title} />
                </div>
                <div className="game-info">
                  <div className="game-title">{game.title}</div>
                  <div className="game-status" style={{ color: 'var(--text-secondary)' }}>
                    {game.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
