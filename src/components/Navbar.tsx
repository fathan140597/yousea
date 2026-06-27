import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang' },
  { name: 'Program & Divisi', path: '/program' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Keanggotaan', path: '/keanggotaan' },
  { name: 'Donasi', path: '/donasi' },
  { name: 'Kontak', path: '/kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-600/95 backdrop-blur-md shadow-lg'
          : 'bg-navy-600/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/image.png"
              alt="YouSea Community"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/keanggotaan"
                  className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Halo, {user?.name.split(' ')[0]}
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-teal-200 border border-teal-400/50 rounded-lg hover:bg-teal-500/20 transition-all"
                >
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/keanggotaan"
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/keanggotaan"
                  className="btn-primary text-sm"
                >
                  Gabung Sekarang
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-700/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                location.pathname === link.path
                  ? 'text-white bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            {isAuthenticated ? (
              <>
                <div className="px-4 py-2 text-teal-300">
                  Login sebagai: {user?.name}
                </div>
                <button
                  onClick={logout}
                  className="w-full px-4 py-3 text-base font-medium text-red-300 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/keanggotaan"
                  className="block w-full text-center btn-primary"
                >
                  Gabung Sekarang
                </Link>
                <Link
                  to="/keanggotaan"
                  className="block w-full text-center px-4 py-3 text-white/80 hover:text-white transition-colors"
                >
                  Sudah punya akun? Masuk
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
