'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Topbar() {
  const { user } = useAuth();
  
  return (
    <div className="topbar">
      <input type="text" className="search-bar" placeholder="Search games, friends, news..." />
      {!user && (
        <Link href="/login" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
          Login / Sign Up
        </Link>
      )}
      {user && (
        <Link href={`/dashboard/${user.role}`} style={{ color: 'white', background: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}>
          My Dashboard
        </Link>
      )}
    </div>
  );
}
