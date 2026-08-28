'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const myGames = [
  { id: 1, title: 'Cyber Hunter 2077', status: 'Ready to play', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, title: 'Space Recon', status: 'Ready to play', img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
];

export default function Library() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-wrapper">
          <h2 className="section-title">My Library</h2>
          <div className="game-grid">
            {myGames.map(game => (
              <div className="game-card" key={game.id}>
                <div className="game-cover">
                  <img src={game.img} alt={game.title} />
                </div>
                <div className="game-info">
                  <div className="game-title">{game.title}</div>
                  <div className="game-status" style={{ color: '#10b981' }}>
                    {game.status}
                  </div>
                  <button className="btn-play" style={{ width: '100%', padding: '0.5rem', marginTop: '1rem', fontSize: '1rem' }}>PLAY</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
