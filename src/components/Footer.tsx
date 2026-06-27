import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-16 fill-navy-700">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1350,45 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/image.png"
                alt="YouSea Community"
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm mb-4">
              #Education #Dedication #Empowerment
            </p>
            <p className="text-white/60 text-sm">
              Komunitas pemuda berbasis di Lhokseumawe, Aceh, berdiri sejak 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/tentang' },
                { name: 'Program & Divisi', path: '/program' },
                { name: 'Galeri Kegiatan', path: '/galeri' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Layanan</h4>
            <ul className="space-y-2">
              {[
                { name: 'Keanggotaan', path: '/keanggotaan' },
                { name: 'Donasi', path: '/donasi' },
                { name: 'Kontak', path: '/kontak' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Lhokseumawe, Aceh - Area Universitas Malikussaleh</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:contact@youseacommunity.com" className="hover:text-teal-300 transition-colors">
                  contact@youseacommunity.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/70">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/youseacommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@youseacommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.7.81 2.89 2.89 0 0 1 2.27-4.2 3 3 0 0 1 .88.12V9.4a6.55 6.55 0 0 0-1.08-.1 6.31 6.31 0 0 0-5.77 4.15 6.15 6.15 0 0 0 .48 5.33A6.31 6.31 0 0 0 12 21.64a6.31 6.31 0 0 0 6.27-6.31V9.15a8.37 8.37 0 0 0 4.23 1.17V6.69a4.68 4.68 0 0 1-2.91-.93z"/>
                </svg>
              </a>
              <a
                href="https://youseacommunity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"
                aria-label="Website"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} YouSea Community. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Made with heart in Lhokseumawe, Aceh
          </p>
        </div>
      </div>
    </footer>
  );
}
