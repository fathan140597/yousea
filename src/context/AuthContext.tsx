import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'role' | 'joinedAt'> & { password: string }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'yousea_user';
const USERS_KEY = 'yousea_users';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmad Rizki',
    email: 'ahmad@yousea.org',
    phone: '+62 812-3456-7890',
    institution: 'Universitas Malikussaleh',
    division: 'Pendidikan & Pelatihan',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2020-06-01',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    email: 'siti@yousea.org',
    phone: '+62 813-9876-5432',
    institution: 'Universitas Malikussaleh',
    division: 'Media & Publikasi',
    role: 'member',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2021-03-15',
  },
  {
    id: '3',
    name: 'Budi Santoso',
    email: 'budi@yousea.org',
    phone: '+62 814-5678-9012',
    institution: 'Politeknik Lhokseumawe',
    division: 'Sosial & Lingkungan',
    role: 'volunteer',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2022-09-20',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }

    const storedUsers = localStorage.getItem(USERS_KEY);
    if (!storedUsers) {
      localStorage.setItem(USERS_KEY, JSON.stringify(mockUsers));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const foundUser = users.find((u) => u.email === email);

    if (foundUser && password === 'yousea123') {
      setUser(foundUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'role' | 'joinedAt'> & { password: string }): Promise<boolean> => {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');

    if (users.some((u) => u.email === userData.email)) {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      institution: userData.institution,
      division: userData.division,
      role: 'member',
      joinedAt: new Date().toISOString().split('T')[0],
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
