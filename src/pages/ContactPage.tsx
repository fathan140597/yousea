import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { WaveDecoration } from '../components/WaveDecoration';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    content: 'Lhokseumawe, Aceh - Area Universitas Malikussaleh',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'mubfathanm@gmail.com',
    link: 'mailto:contact@youseacommunity.com',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '+62 851-5691-7839',
    link: 'https://wa.me/6281234567890',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/youseacommunity',
    username: '@youseacommunity',
    color: 'hover:bg-pink-500',
  },
  {
    name: 'TikTok',
    icon: MessageCircle,
    url: 'https://tiktok.com/@youseacommunity',
    username: '@youseacommunity',
    color: 'hover:bg-black',
  },
  {
    name: 'Website',
    icon: ExternalLink,
    url: 'https://youseacommunity.com',
    username: 'youseacommunity.com',
    color: 'hover:bg-teal-600',
  },
];

const faqs = [
  {
    question: 'Bagaimana cara bergabung dengan YouSea Community?',
    answer:
      'Anda dapat mendaftar melalui halaman Keanggotaan di website kami. Isi formulir pendaftaran dengan lengkap, dan tim kami akan menghubungi Anda untuk proses selanjutnya.',
  },
  {
    question: 'Apakah keanggotaan gratis?',
    answer:
      'Ya, keanggotaan YouSea Community sepenuhnya gratis. Kami percaya setiap pemuda berhak berkontribusi tanpa hambatan finansial.',
  },
  {
    question: 'Program apa saja yang tersedia?',
    answer:
      'Kami memiliki 4 divisi: Kaderisasi, Pendidikan & Pelatihan, Sosial & Lingkungan, dan Media & Publikasi. Setiap divisi memiliki berbagai program edukatif dan sosial.',
  },
  {
    question: 'Apakah harus mahasiswa untuk bergabung?',
    answer:
      'Prioritas kami adalah pemuda dan mahasiswa, namun kami menerima siapa saja yang memiliki semangat untuk berkontribusi dalam bidang pendidikan dan sosial.',
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
              Kontak
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin berkolaborasi? Kami senang mendengar
              dari Anda!
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-600 mb-6">
                Kirim Pesan
              </h2>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium text-green-800">Pesan terkirim!</p>
                    <p className="text-green-700 text-sm">
                      Kami akan merespons dalam 1-2 hari kerja.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="label">Nama Lengkap *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama Anda"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Subjek *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Topik pesan Anda"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Pesan *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="input-field resize-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              {/* Contact Info Cards */}
              <h2 className="text-2xl font-bold text-navy-600 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-600 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-teal-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="text-lg font-semibold text-navy-600 mb-4">
                Media Sosial
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm hover:text-white transition-all ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <div>
                      <p className="font-medium text-sm">{social.name}</p>
                      <p className="text-xs opacity-75">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video relative bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2902934!2d97.1458!3d5.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTEnMDQuOSJOIDk3wrA4OCcwNC45IkU!5e0!3m2!1sen!2sid!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="YouSea Community Location"
                    className="absolute inset-0"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                    <p className="text-sm font-medium text-navy-600">
                      YouSea Community
                    </p>
                    <p className="text-xs text-gray-500">
                      Area Unimal, Lhokseumawe
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <h3 className="font-semibold text-navy-600">Jam Operasional</h3>
                </div>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-medium text-navy-600">09:00 - 17:00 WIB</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium text-navy-600">09:00 - 15:00 WIB</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Minggu & Libur</span>
                    <span className="text-gray-400">Tutup</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-navy-600">{faq.question}</span>
                  <span
                    className={`transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-600 mb-4">
            Siap Bergabung?
          </h2>
          <p className="text-gray-600 mb-8">
            Jangan ragu untuk menghubungi kami atau langsung daftarkan diri Anda
            menjadi bagian dari komunitas.
          </p>
          <a
            href="/keanggotaan"
            className="btn-primary px-8 py-4"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
