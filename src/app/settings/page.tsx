'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Settings() {
  const { user } = useAuth();
  const router = useRouter();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    if (!newPassword) return;
    alert('Password successfully updated!');
    setNewPassword('');
    setIsChangingPassword(false);
  };

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
              
              {!isChangingPassword ? (
                <button onClick={() => setIsChangingPassword(true)} style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Change Password</button>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                  <input 
                    type="password" 
                    placeholder="Enter new password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color, #333)', background: 'var(--bg-panel)', color: 'white' }}
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={handleChangePassword} style={{ background: 'var(--accent-primary)', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                    <button onClick={() => setIsChangingPassword(false)} style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </div>
              )}
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
