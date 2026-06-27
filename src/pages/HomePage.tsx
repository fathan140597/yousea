import { Link } from 'react-router-dom';
import {
  GraduationCap,
  HeartHandshake,
  Users,
  ArrowRight,
  Quote,
  Calendar,
} from 'lucide-react';
import { WaveDecoration, WaveBackground } from '../components/WaveDecoration';

const stats = [
  { number: '150+', label: 'Anggota Aktif' },
  { number: '25+', label: 'Program Terlaksana' },
  { number: '5', label: 'Tahun Berdiri' },
  { number: '10+', label: 'Partner & Kolaborator' },
];

const coreValues = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Proses pembelajaran dari aspek pengetahuan, keterampilan, dan sikap untuk membentuk pribadi unggul.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: HeartHandshake,
    title: 'Dedication',
    description: 'Komitmen, pengabdian, dan ketekunan sebagai agen perubahan dalam setiap langkah.',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Proses pemberdayaan untuk membangun kemampuan leadership, manajerial, dan organisasi.',
    color: 'from-navy-400 to-navy-600',
  },
];

const upcomingEvents = [
  {
    title: 'Seagent Leadership Program',
    date: '25 Juli 2024',
    division: 'Kaderisasi',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Bersih Pantai Lhokseumawe',
    date: '10 Agustus 2024',
    division: 'Sosial & Lingkungan',
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Workshop Penulisan Karya Ilmiah',
    date: '5 September 2024',
    division: 'Pendidikan',
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const galleryPreview = [
  {
    title: 'YouSea Mengajar',
    image: 'https://images.pexels.com/photos/8617884/pexels-photo-8617884.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Pelatihan Pengurus',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Bersih Pantai',
    image: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Makrab angkatan',
    image: 'https://images.pexels.com/photos/6962952/pexels-photo-6962952.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-navy-600 via-navy-700 to-teal-700 flex items-center overflow-hidden">
        <WaveBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-teal-200 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Berdiri sejak 2020
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bersama Membangun
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                Generasi Berkualitas
              </span>
            </h1>

            <p className="font-bold text-xl md:text-2xl text-white/90 mb-4">
              YOUSEA Community 
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Youth Social Education Awareness
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {['#Education', '#Dedication', '#Empowerment'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-teal-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Komunitas pemuda berbasis di Lhokseumawe, Aceh yang berkomitmen untuk
              meningkatkan kualitas pendidikan dan kesadaran sosial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/keanggotaan" className="btn-primary text-lg px-8 py-4">
                Gabung Komunitas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/program" className="btn-secondary text-lg px-8 py-4">
                Lihat Program
              </Link>
            </div>
          </div>
        </div>

        <WaveDecoration variant="hero" />
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
                Tentang Kami
              </span>
              <h2 className="section-title">Wadah Pemuda untuk Perubahan</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                YouSea Community adalah organisasi kepemudaan yang berfokus pada
                pendidikan dan pemberdayaan sosial. Berawal dari sekelompok mahasiswa
                yang memiliki visi yang sama, kami berkembang menjadi komunitas yang
                aktif menyelenggarakan berbagai program edukatif dan sosial.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Dengan semangat kolaborasi dan dedikasi, kami percaya bahwa pemuda
                memiliki kekuatan untuk menciptakan perubahan positif di masyarakat.
              </p>
              <Link to="/tentang" className="btn-outline inline-flex items-center">
                Selengkapnya
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="YouSea Community Activities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl -z-10 opacity-20" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-navy-400 to-navy-600 rounded-2xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
              Nilai Inti
            </span>
            <h2 className="section-title">Nilai yang Kami Pegang</h2>
            <p className="section-subtitle">
              Tiga pilar utama yang menjadi fondasi setiap aktivitas dan program kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="card p-8 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-navy-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
                Kegiatan Mendatang
              </span>
              <h2 className="section-title mb-2">Event & Program Terbaru</h2>
              <p className="text-gray-600 max-w-xl">
                Jangan lewatkan berbagai kegiatan seru dan bermanfaat yang akan kami selenggarakan
              </p>
            </div>
            <Link to="/program" className="mt-4 md:mt-0 btn-outline inline-flex items-center">
              Lihat Semua
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="card overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-teal-500 text-white text-sm font-medium">
                      {event.division}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-lg font-bold text-navy-600 mb-4">{event.title}</h3>
                  <button className="text-teal-600 font-medium hover:text-teal-700 inline-flex items-center transition-colors">
                    Daftar Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-4">
              Galeri Kegiatan
            </span>
            <h2 className="section-title">Momen Berharga Kami</h2>
            <p className="section-subtitle">
              Dokumentasi berbagai kegiatan dan program yang telah kami laksanakan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((item, index) => (
              <Link
                key={item.title}
                to="/galeri"
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div
                  className={`${
                    index === 0 ? 'aspect-square md:aspect-video' : 'aspect-square'
                  } bg-gray-200`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/galeri" className="btn-outline inline-flex items-center">
              Lihat Semua Galeri
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-24 bg-gradient-to-br from-navy-600 via-navy-700 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-12 h-12 text-teal-300 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
            "Dunia terlalu besar untuk dihadapi sendiri. Kita butuh orang lain untuk
            menciptakan perubahan yang lebih besar."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-teal-400" />
            <span className="text-teal-200 font-medium">YouSea Community</span>
            <div className="h-px w-12 bg-teal-400" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy-200/30 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4">
                Siap Menjadi Bagian dari Perubahan?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Bergabunglah dengan YouSea Community dan jadilah bagian dari generasi
                muda yang peduli dan berdaya. Bersama kita bisa menciptakan dampak
                positif untuk pendidikan dan masyarakat.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/keanggotaan" className="btn-primary px-8 py-4">
                  <Users className="w-5 h-5 mr-2" />
                  Daftar Sekarang
                </Link>
                <Link to="/donasi" className="btn-outline px-8 py-4">
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Dukung Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
