'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">⚡</span> DAVIAL
      </div>
      
      <nav className="nav-links">
        <Link href="/">
          <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            Store
          </div>
        </Link>
        <Link href="/library">
          <div className={`nav-item ${pathname === '/library' ? 'active' : ''}`}>
            Library
          </div>
        </Link>
        <Link href="/community">
          <div className={`nav-item ${pathname === '/community' ? 'active' : ''}`}>
            Community
          </div>
        </Link>
        <Link href="/settings">
          <div className="nav-item" style={{ marginTop: '2rem' }}>
            Settings
          </div>
        </Link>
      </nav>

      <div className="user-profile">
        <div className="avatar"></div>
        <div className="user-info">
          <h4>{user ? user.email.split('@')[0] : 'Guest'}</h4>
          <p>{user ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </aside>
  );
}
