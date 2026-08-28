'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon">⚡</span> DAVIAL
      </div>
      
      <nav className="nav-links">
        <Link href="/dashboard/user" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/dashboard/user' ? 'active' : ''}`}>
            👤 Profile
          </div>
        </Link>
        <Link href="/library" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/library' ? 'active' : ''}`}>
            🎮 My Library
          </div>
        </Link>
        <Link href="/community" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/community' ? 'active' : ''}`}>
            📰 Community
          </div>
        </Link>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}>
            ⚙️ Settings
          </div>
        </Link>
        <Link href="/achievements" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/achievements' ? 'active' : ''}`}>🏆 Achievements</div>
        </Link>
        <Link href="/wallet" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/wallet' ? 'active' : ''}`}>💰 Wallet ($45.00)</div>
        </Link>
        <Link href="/friends" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/friends' ? 'active' : ''}`}>👥 Friends List (3 Online)</div>
        </Link>
        <Link href="/cart" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/cart' ? 'active' : ''}`}>🛒 Shopping Cart (1)</div>
        </Link>
        <Link href="/wishlist" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/wishlist' ? 'active' : ''}`}>❤️ Wishlist</div>
        </Link>
        <Link href="/downloads" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/downloads' ? 'active' : ''}`}>⬇️ Downloads (Idle)</div>
        </Link>
        <Link href="/cloud-saves" style={{ textDecoration: 'none' }}>
          <div className={`nav-item ${pathname === '/cloud-saves' ? 'active' : ''}`}>☁️ Cloud Saves (ON)</div>
        </Link>
      </nav>

      <div className="user-profile" onClick={logout} style={{ marginTop: 'auto', border: '1px solid var(--accent-primary)', cursor: 'pointer' }}>
        <div className="avatar"></div>
        <div className="user-info">
          <h4>{user ? user.email.split('@')[0] : 'Guest'}</h4>
          <p style={{ color: 'var(--accent-primary)' }}>{user ? 'Logout' : 'Login'}</p>
        </div>
      </div>
    </aside>
  );
}
