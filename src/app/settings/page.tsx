'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Settings() {
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
          <h2 className="section-title">Settings</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Account</h3>
              <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> {user.email}</p>
              <p style={{ marginBottom: '1rem' }}><strong>Role:</strong> {user.role}</p>
              <button style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px' }}>Change Password</button>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Launcher Preferences</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Start Davial on system startup</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Enable hardware acceleration</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Auto-update games</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Language</span>
                <select style={{ background: 'var(--bg-panel)', color: 'white', border: 'none', padding: '0.2rem' }}>
                  <option>English</option>
                  <option>Russian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
