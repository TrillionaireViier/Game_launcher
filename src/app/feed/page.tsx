'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useRouter } from 'next/navigation';

export default function Feed() {
  const router = useRouter();

  const gamesForSale = [
    {
      id: 1,
      title: 'Neon Drift',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'High-speed cyberpunk racing.',
      tags: ['Racing', 'Cyberpunk']
    },
    {
      id: 2,
      title: 'Starfall Command',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Conquer the galaxy in this epic RTS.',
      tags: ['Strategy', 'Sci-Fi']
    },
    {
      id: 3,
      title: 'Fantasy Quest',
      price: 'Free to Play',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Explore magical realms and battle monsters.',
      tags: ['RPG', 'Adventure']
    },
    {
      id: 4,
      title: 'Zombie Survival',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Survive the post-apocalyptic wasteland.',
      tags: ['Action', 'Survival']
    }
  ];

  return (
    <div className="launcher-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        
        <div className="content-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Game Feed</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ background: 'var(--bg-panel)', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>New Releases</button>
              <button style={{ background: 'var(--bg-panel)', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Top Sellers</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {gamesForSale.map(game => (
              <div key={game.id} style={{ background: 'var(--bg-card)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ height: '180px', background: `url(${game.image}) center/cover` }}></div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{game.title}</h3>
                    <span style={{ background: 'var(--accent-secondary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>{game.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{game.description}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {game.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', background: 'var(--bg-panel)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--text-secondary)' }}>{tag}</span>
                      ))}
                    </div>
                    <button 
                      className="btn-play" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                      onClick={() => router.push('/cart')}
                    >
                      Buy
                    </button>
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
