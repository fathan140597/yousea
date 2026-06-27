import { Link } from 'react-router-dom';
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Target,
  BookOpen,
  Compass,
  Lightbulb,
  Network,
  UserPlus,
  Shield,
  ArrowRight,
  Award,
} from 'lucide-react';
import { WaveDecoration } from '../components/WaveDecoration';

const missions = [
  {
    icon: Target,
    text: 'Mendorong keterlibatan aktif pemuda dalam isu pendidikan dan sosial.',
  },
  {
    icon: BookOpen,
    text: 'Menyelenggarakan program edukatif, inklusif, dan berbasis komunitas.',
  },
  {
    icon: Compass,
    text: 'Mengembangkan potensi generasi muda dalam kepemimpinan sosial.',
  },
  {
    icon: Lightbulb,
    text: 'Meningkatkan literasi sosial, empati, dan tanggung jawab komunitas.',
  },
  {
    icon: Network,
    text: 'Membangun jaringan sinergis antar relawan, lembaga pendidikan, dan lembaga sosial.',
  },
];

const coreValues = [
  {
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'Belajar bukan untuk sekolah, tapi belajar untuk hidup.',
    description:
      'Proses pembelajaran dari aspek pengetahuan, keterampilan, dan sikap untuk membentuk pribadi unggul. Kami percaya setiap orang memiliki potensi untuk terus belajar dan berkembang.',
    color: 'from-blue-500 to-blue-600',
    points: ['Pengetahuan', 'Keterampilan', 'Sikap'],
  },
  {
    icon: HeartHandshake,
    title: 'Dedication',
    subtitle: 'Commitment → Consistency → Devotion',
    description:
      'Komitmen, pengabdian, dan ketekunan sebagai agen perubahan. Dedikasi adalah kunci untuk menciptakan dampak yang berkelanjutan.',
    color: 'from-teal-500 to-teal-600',
    points: ['Commitment', 'Consistency', 'Devotion'],
  },
  {
    icon: Users,
    title: 'Empowerment',
    subtitle: 'Kuat bersama, bukan kuat sendiri.',
    description:
      'Proses pemberdayaan untuk membangun kemampuan leadership, manajerial, dan organisasi. Kami berkolaborasi untuk menciptakan kekuatan bersama.',
    color: 'from-navy-500 to-navy-600',
    points: ['Leadership', 'Managerial', 'Organization'],
  },
];

const benefits = [
  {
    icon: UserPlus,
    title: 'Pengembangan Diri (SDM)',
    description:
      'Peluang mengembangkan skill kepemimpinan, komunikasi, dan manajemen melalui berbagai program pelatihan dan kegiatan.',
  },
  {
    icon: Shield,
    title: 'Dukungan Program (Support)',
    description:
      'Akses ke berbagai program edukatif dan sosial yang didukung oleh tim profesional dan partner terpercaya.',
  },
  {
    icon: Network,
    title: 'Jaringan Luas (Networking)',
    description:
      'Kesempatan membangun relasi dengan berbagai elemen masyarakat, lembaga pendidikan, dan komunitas sosial.',
  },
];

const timeline = [
  { year: '2020', event: 'Pendirian YouSea Community', description: 'Dimulai dari sekelompok mahasiswa yang memiliki visi yang sama' },
  { year: '2021', event: 'Program Pertama', description: 'Peluncuran program bimbingan belajar dan pengabdian masyarakat' },
  { year: '2022', event: 'Ekspansi Divisi', description: 'Pembentukan 4 divisi utama untuk fokus yang lebih terarah' },
  { year: '2023', event: 'Kolaborasi Luas', description: 'Kerjasama dengan berbagai lembaga pendidikan dan sosial' },
  { year: '2024', event: 'Pertumbuhan Pesat', description: 'Mencapai lebih dari 150 anggota aktif' },
];

export function AboutPage() {
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
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kenalan dengan YouSea
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Wadah bagi generasi muda untuk berkembang, berkolaborasi, dan menciptakan
              dampak positif untuk pendidikan dan masyarakat.
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">Visi Kami</h2>
              <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border-l-4 border-teal-500">
                Menjadi wadah bagi generasi muda untuk meningkatkan kualitas pendidikan
                dan kesadaran sosial demi perubahan yang berdampak luas dan berkelanjutan.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  // src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  src="/abe2.png"
                  alt="YouSea Vision"
                  className="w-full h-full object-cover object-mid" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-xl -z-10 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-500 to-navy-600 mb-6 shadow-lg mx-auto">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h2 className="section-title">Misi Kami</h2>
            <p className="section-subtitle">
              Langkah konkret untuk mewujudkan visi bersama
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <mission.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mission.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nilai Inti</h2>
            <p className="section-subtitle">
              Fondasi yang menjadi pedoman setiap langkah dan keputusan kami
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-600 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-teal-600 font-medium mb-4 italic">
                    "{value.subtitle}"
                  </p>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {value.points.map((point) => (
                      <span
                        key={point}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0
                          ? '4144923/pexels-photo-4144923.jpeg'
                          : index === 1
                          ? '6646976/pexels-photo-6646976.jpeg'
                          : '3184325/pexels-photo-3184325.jpeg'
                      }?auto=compress&cs=tinysrgb&w=800`}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gradient-to-br from-navy-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <Award className="w-8 h-8 text-teal-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tujuan Kami</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Melahirkan generasi muda yang baik dan unggul yang membawa dampak positif
              bagi pendidikan dan masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Mengapa Bergabung?</h2>
            <p className="section-subtitle">
              Manfaat nyata yang akan kamu dapatkan sebagai bagian dari YouSea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Perjalanan Kami</h2>
            <p className="section-subtitle">
              Milestone penting dalam perkembangan YouSea Community
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200" />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-navy-600 mb-1">
                      {item.event}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Jadilah bagian dari generasi muda yang peduli dan beraksi untuk
            menciptakan perubahan positif.
          </p>
          <Link to="/keanggotaan" className="btn-primary px-8 py-4">
            Daftar Sekarang
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
