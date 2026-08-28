'use client';
import './globals.css';
import { useState } from 'react';

const mockGames = [
  { id: 1, title: 'Cyber Hunter 2077', status: 'Ready to play', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, title: 'Neon Drift', status: 'Update Required', img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, title: 'Space Recon', status: 'Ready to play', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 4, title: 'Fantasy Quest', status: 'Installing... 45%', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 5, title: 'Mech Warfare', status: 'Ready to play', img: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

export default function Launcher() {
  const [activeTab, setActiveTab] = useState('library');

  return (
    <div className="launcher-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">⚡</span> DAVIAL
        </div>
        
        <nav className="nav-links">
          <div className={`nav-item ${activeTab === 'store' ? 'active' : ''}`} onClick={() => setActiveTab('store')}>
            Store
          </div>
          <div className={`nav-item ${activeTab === 'library' ? 'active' : ''}`} onClick={() => setActiveTab('library')}>
            Library
          </div>
          <div className={`nav-item ${activeTab === 'community' ? 'active' : ''}`} onClick={() => setActiveTab('community')}>
            Community
          </div>
          <div className="nav-item" style={{ marginTop: '2rem' }}>
            Settings
          </div>
        </nav>

        <div className="user-profile">
          <div className="avatar"></div>
          <div className="user-info">
            <h4>TrillionaireViier</h4>
            <p>Online</p>
          </div>
        </div>
      </aside>

      {/* Main View */}
      <main className="main-content">
        <div className="topbar">
          <input type="text" className="search-bar" placeholder="Search games..." />
        </div>

        <div className="content-wrapper">
          {/* Hero Banner */}
          <div className="hero-banner">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">Cyber Hunter 2077</h1>
              <p className="hero-desc">The most anticipated RPG of the year. Join the resistance and take back the neon city.</p>
              <button className="btn-play">▶ Play Now</button>
            </div>
          </div>

          {/* Game Library Grid */}
          <h2 className="section-title">My Collection</h2>
          <div className="game-grid">
            {mockGames.map(game => (
              <div className="game-card" key={game.id}>
                <div className="game-cover">
                  <img src={game.img} alt={game.title} />
                </div>
                <div className="game-info">
                  <div className="game-title">{game.title}</div>
                  <div className="game-status" style={{ color: game.status.includes('Ready') ? '#10b981' : 'var(--accent-primary)' }}>
                    {game.status}
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
