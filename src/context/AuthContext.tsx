'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type User = { email: string; role: 'admin' | 'user' } | null;

interface AuthContextType {
  user: User;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ user: null, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  // Simple mock persistence
  useEffect(() => {
    const saved = localStorage.getItem('gl_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email: string) => {
    const role = email.includes('admin') ? 'admin' : 'user';
    const newUser: User = { email, role };
    setUser(newUser);
    localStorage.setItem('gl_user', JSON.stringify(newUser));
    
    if (role === 'admin') router.push('/dashboard/admin');
    else router.push('/dashboard/user');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gl_user');
    router.push('/');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
