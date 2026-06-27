import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  Leaf,
  Megaphone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { WaveDecoration } from '../components/WaveDecoration';

interface Division {
  id: string;
  name: string;
  icon: typeof Users;
  description: string;
  color: string;
  bgGradient: string;
  activities: string[];
  image: string;
}

const divisions: Division[] = [
  {
    id: 'kaderisasi',
    name: 'Kaderisasi',
    icon: Users,
    description:
      'Pengembangan SDM internal untuk pengurus, anggota, dan volunteer. Fokus pada pembentukan karakter dan kepemimpinan.',
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
    activities: [
      'Rekrutmen Pengurus & Anggota',
      'Pembekalan Pengurus',
      'Seagent Leadership Program (SLP)',
      'Makrab (Malam Keakraban)',
      'Musyawarah Besar (Mubes)',
    ],
    image: "/kader.jpg",
    
  },
  {
    id: 'pendidikan',
    name: 'Pendidikan & Pelatihan',
    icon: GraduationCap,
    description:
      'Peningkatan kualitas pendidikan dan keterampilan mahasiswa serta masyarakat melalui berbagai program edukatif.',
    color: 'from-teal-500 to-teal-600',
    bgGradient: 'from-teal-50 to-teal-100',
    activities: [
      'Bimbingan Belajar Mahasiswa',
      'Club Bahasa (English Club)',
      'Pelatihan Penulisan Karya Ilmiah',
      'Bimbingan Beasiswa',
      'YouSea Mengajar',
    ],
    image: "/Pendidikan.jpg",
    
  },
  {
    id: 'sosial',
    name: 'Sosial & Lingkungan',
    icon: Leaf,
    description:
      'Solusi konkret atas isu sosial dan lingkungan dengan pendekatan berbasis komunitas dan kolaborasi.',
    color: 'from-green-500 to-green-600',
    bgGradient: 'from-green-50 to-green-100',
    activities: [
      'Bersih-bersih Pantai',
      'Pelatihan Pengelolaan Sampah',
      'Pelatihan Kewirausahaan',
      'Inkubator Bisnis',
      'Penanaman Mangrove/Reboisasi',
    ],
    image: "/Sosial.jpg",
  },
  {
    id: 'media',
    name: 'Media & Publikasi',
    icon: Megaphone,
    description:
      'Pemanfaatan media digital untuk promosi, publikasi program, dan membangun citra organisasi.',
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
    activities: [
      'Konten Media Sosial (Instagram, TikTok)',
      'Podcast YouSea',
      'Content Creator Training',
      'Video Documentation',
      'Website Management',
    ],
    image: "/pubdok.jpg",
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Seagent Leadership Program 2024',
    date: '25-27 Juli 2024',
    division: 'Kaderisasi',
    description: 'Program kepemimpinan intensif selama 3 hari untuk anggota baru.',
    registrationOpen: true,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    title: 'Bersih Pantai Lhokseumawe',
    date: '10 Agustus 2024',
    division: 'Sosial & Lingkungan',
    description: 'Aksi bersih pantai bersama komunitas dan relawan.',
    registrationOpen: true,
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    title: 'Workshop Penulisan Karya Ilmiah',
    date: '5 September 2024',
    division: 'Pendidikan & Pelatihan',
    description: 'Pelatihan menulis artikel ilmiah untuk publikasi jurnal.',
    registrationOpen: true,
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    title: 'English Club Meeting',
    date: 'Setiap Sabtu',
    division: 'Pendidikan & Pelatihan',
    description: 'Diskusi dan praktik bahasa Inggris bersama.',
    registrationOpen: false,
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    title: 'Podcast YouSea: Youth Talk',
    date: '20 September 2024',
    division: 'Media & Publikasi',
    description: 'Podcast bulanan membahas isu-isu pemuda dan pendidikan.',
    registrationOpen: false,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    title: 'Reboisasi Mangrove',
    date: '15 Oktober 2024',
    division: 'Sosial & Lingkungan',
    description: 'Penanaman mangrove di pesisir Lhokseumawe.',
    registrationOpen: true,
    image: 'https://images.pexels.com/photos/1287086/pexels-photo-1287086.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export function ProgramsPage() {
  const [activeDivision, setActiveDivision] = useState<string>('kaderisasi');

  const currentDivision = divisions.find((d) => d.id === activeDivision);

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-teal-700 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-teal-200 font-medium text-sm mb-6">
              Program & Divisi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wadah untuk Berkembang
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Empat divisi utama dengan berbagai program untuk mengembangkan potensi
              dan menciptakan dampak nyata di masyarakat.
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Divisions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Divisi Kami</h2>
            <p className="section-subtitle">
              Pilih divisi sesuai minat dan passion untuk berkontribusi maksimal
            </p>
          </div>

          {/* Division Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {divisions.map((division) => (
              <button
                key={division.id}
                onClick={() => setActiveDivision(division.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDivision === division.id
                    ? `bg-gradient-to-r ${division.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <division.icon className="w-5 h-5 mr-2" />
                {division.name}
              </button>
            ))}
          </div>

          {/* Division Content */}
          {currentDivision && (
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="order-2 lg:order-1">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${currentDivision.color} mb-6 shadow-lg`}
                >
                  <currentDivision.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy-600 mb-4">
                  {currentDivision.name}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {currentDivision.description}
                </p>

                <h4 className="text-lg font-semibold text-navy-600 mb-4">
                  Contoh Kegiatan:
                </h4>
                <ul className="space-y-3">
                  {currentDivision.activities.map((activity) => (
                    <li key={activity} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSe_PorL04NPjXqp_oKKuZ9iHV7z6o6x46ohquAjy0Oty0J75A/viewform"
                  className="btn-primary mt-8 inline-flex"
                >
                  Bergabung dengan Divisi Ini
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentDivision.bgGradient} rounded-2xl transform rotate-3`}
                  />
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={currentDivision.image}
                        alt={currentDivision.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r ${currentDivision.color} text-white rounded-xl shadow-lg`}
                    >
                      <span className="font-semibold">
                        {currentDivision.activities.length} Kegiatan Aktif
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
              Jadwal & Event
            </span>
            <h2 className="section-title">Kegiatan Mendatang</h2>
            <p className="section-subtitle">
              Catat tanggalnya dan jangan lewatkan berbagai kegiatan seru kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="card overflow-hidden group hover:shadow-xl"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                        event.registrationOpen
                          ? 'bg-teal-500'
                          : 'bg-gray-500'
                      }`}
                    >
                      {event.registrationOpen ? 'Pendaftaran Dibuka' : 'Segera'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-teal-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.division}
                  </div>
                  <h3 className="text-lg font-bold text-navy-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                  {event.registrationOpen && (
                    <button className="w-full btn-primary text-sm py-3">
                      Daftar Sekarang
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4">
            Tertarik dengan Program Kami?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Dapatkan informasi terbaru tentang kegiatan dan program yang akan
            datang. Ikuti media sosial kami!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe_PorL04NPjXqp_oKKuZ9iHV7z6o6x46ohquAjy0Oty0J75A/viewform" className="btn-primary px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Daftar Anggota
            </Link>
            <a
              href="https://instagram.com/youseacommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4"
            >
              <Megaphone className="w-5 h-5 mr-2" />
              Follow Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
