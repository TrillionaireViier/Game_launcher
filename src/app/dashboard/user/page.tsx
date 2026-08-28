'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import ChatBox from '@/components/ChatBox';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  if (!user || user.role !== 'user') {
    return (
      <div className="launcher-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2>Access Denied</h2>
          <button className="btn-play" onClick={() => router.push('/login')}>Go to Login</button>
        </main>
      </div>
    );
  }

  return (
    <div className="launcher-layout">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span>Status: <strong style={{ color: '#10b981' }}>Online</strong></span>
            <span>Total Playtime: <strong>342 Hours</strong></span>
          </div>
        </div>

        <div className="content-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Welcome back, {user.email.split('@')[0]}</h2>
            <button 
              className="btn-play" 
              style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.5rem 1rem' }} 
              onClick={() => { logout(); router.push('/login'); }}
            >
              Logout
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Feature: Library Management */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Recently Played</h3>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                  {[
                    { id: 1, title: 'Game 1', playtime: '42 hrs played', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                    { id: 2, title: 'Game 2', playtime: '12 hrs played', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b7738?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
                    { id: 3, title: 'Game 3', playtime: '150 hrs played', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
                  ].map(game => (
                    <div 
                      key={game.id} 
                      onClick={() => setSelectedGame(game.id)} 
                      style={{ 
                        minWidth: '150px', 
                        background: 'var(--bg-panel)', 
                        borderRadius: '8px', 
                        padding: '1rem', 
                        cursor: 'pointer', 
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        border: selectedGame === game.id ? '2px solid var(--accent-secondary)' : '2px solid transparent',
                        boxShadow: selectedGame === game.id ? '0 0 10px var(--accent-secondary)' : 'none'
                      }} 
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ height: '100px', background: `url(${game.image}) center/cover`, borderRadius: '4px', marginBottom: '1rem' }}></div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{game.title}</p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{game.playtime}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature: Download Queue */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Download Queue</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-panel)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '4px' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>Update: Cyber Hunter</span>
                      <span>45% (12 MB/s)</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                      <div style={{ width: '45%', height: '100%', background: 'var(--accent-secondary)', borderRadius: '2px' }}></div>
                    </div>
                  </div>
                  <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>Pause</button>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Feature: Friends List & Chat */}
              <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Friends Online</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Alex_Pro', 'SniperG', 'Nova001'].map((friend, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem', borderRadius: '4px', transition: 'background 0.2s' }} className="friend-item">
                      <div 
                        style={{ width: '30px', height: '30px', borderRadius: '50%', background: i===0 ? '#10b981' : 'var(--accent-primary)', cursor: 'pointer' }} 
                        onClick={() => router.push(`/profile/${friend}`)}
                        title="View Profile"
                      ></div>
                      <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => router.push(`/profile/${friend}`)} title="View Profile">
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{friend}</p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{i===0 ? 'In Game: Space Recon' : 'Online'}</p>
                      </div>
                      <div style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => setActiveChat(friend)} title="Chat">💬</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      {activeChat && <ChatBox friend={activeChat} onClose={() => setActiveChat(null)} />}
    </div>
  );
}
