import { useState } from 'react';
import {
  Heart,
  Gift,
  Users,
  BookOpen,
  Leaf,
  CreditCard,
  Wallet,
  Building,
  CheckCircle,
  Info,
  AlertCircle,
  WalletCards,
} from 'lucide-react';
import { WaveDecoration } from '../components/WaveDecoration';

const presetAmounts = [
  { amount: 50000, label: 'Rp 50.000' },
  { amount: 100000, label: 'Rp 100.000' },
  { amount: 250000, label: 'Rp 250.000' },
  { amount: 500000, label: 'Rp 500.000' },
  { amount: 1000000, label: 'Rp 1.000.000' },
  { amount: 2500000, label: 'Rp 2.500.000' },
];

const impacts = [
  {
    icon: BookOpen,
    amount: 'Rp 50.000',
    description: 'Satu paket buku tulis untuk anak-anak bimbingan belajar',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    amount: 'Rp 100.000',
    description: 'Konsumsi satu sesi pelatihan bersama peserta',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Leaf,
    amount: 'Rp 250.000',
    description: 'Perlengkapan bersih pantai untuk satu aksi lingkungan',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Gift,
    amount: 'Rp 500.000',
    description: 'Dana operasional satu program komunitas',
    color: 'from-purple-500 to-purple-600',
  },
];

const paymentMethods = [
  { id: 'bank', name: 'Transfer Bank', icon: Building, description: 'BCA, Mandiri, BNI, BRI' },
  { id: 'ewallet', name: 'E-Wallet', icon: Wallet, description: 'GoPay, OVO, DANA, ShopeePay' },
  { id: 'card', name: 'Kartu Kredit/Debit', icon: CreditCard, description: 'Visa, Mastercard' },
];

interface DonationRecord {
  donorName: string;
  amount: number;
  date: string;
  message?: string;
}

const recentDonations: DonationRecord[] = [
  { donorName: 'Anonim', amount: 100000, date: '2024-06-15' },
  { donorName: 'Budi T.', amount: 250000, date: '2024-06-10', message: 'Semangat YouSea!' },
  { donorName: 'Anonim', amount: 50000, date: '2024-06-08' },
  { donorName: 'Siti R.', amount: 500000, date: '2024-06-05' },
];

const usageReports = [
  { category: 'Program Pendidikan', percentage: 40, color: 'bg-teal-500' },
  { category: 'Kegiatan Sosial', percentage: 25, color: 'bg-green-500' },
  { category: 'Operasional', percentage: 20, color: 'bg-blue-500' },
  { category: 'Pengembangan SDM', percentage: 15, color: 'bg-purple-500' },
];

export function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    message: '',
    isAnonymous: false,
  });

  const finalAmount = selectedAmount || parseInt(customAmount.replace(/\D/g, '')) || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount < 10000) return;

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedAmount(null);
      setCustomAmount('');
      setFormData({
        donorName: '',
        email: '',
        phone: '',
        message: '',
        isAnonymous: false,
      });
    }, 3000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
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
              Donasi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dukung Pergerakan Kami
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Setiap kontribusi Anda membantu kami memperluas dampak positif untuk
              pendidikan dan masyarakat.
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Dampak Donasi Anda</h2>
            <p className="section-subtitle">
              Berapa pun jumlahnya, donasi Anda akan memberikan dampak nyata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact) => (
              <div key={impact.amount} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${impact.color} flex items-center justify-center mb-4`}
                >
                  <impact.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy-600 mb-2">{impact.amount}</div>
                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-green-800">Terima kasih atas donasi Anda!</h3>
                <p className="text-green-700 text-sm">Kami akan segera mengirimkan konfirmasi ke email Anda.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-navy-600 mb-4">
                Pilih Nominal Donasi
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(preset.amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 font-medium transition-all ${
                      selectedAmount === preset.amount
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  Rp
                </span>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setCustomAmount(value ? parseInt(value).toLocaleString('id-ID') : '');
                    setSelectedAmount(null);
                  }}
                  placeholder="Atau masukkan nominal lain"
                  className="input-field pl-12"
                />
              </div>
              {finalAmount > 0 && (
                <div className="mt-4 p-4 bg-teal-50 rounded-xl">
                  <p className="text-teal-700 font-medium">
                    Total donasi: {formatCurrency(finalAmount)}
                  </p>
                </div>
              )}
              {finalAmount > 0 && finalAmount < 10000 && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Minimum donasi Rp 10.000
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-navy-600 mb-4">
                Metode Pembayaran
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedPayment === method.id
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <method.icon className={`w-8 h-8 mb-2 ${
                      selectedPayment === method.id ? 'text-teal-600' : 'text-gray-400'
                    }`} />
                    <div className="font-medium text-navy-600">{method.name}</div>
                    <div className="text-sm text-gray-500">{method.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-navy-600 mb-4">
                Informasi Donatur
              </label>

              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onChange={(e) =>
                    setFormData({ ...formData, isAnonymous: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="anonymous" className="text-gray-700">
                  Sembunyikan nama saya (donasi anonim)
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Nama Lengkap {!formData.isAnonymous && '*'}</label>
                  <input
                    type="text"
                    value={formData.donorName}
                    onChange={(e) =>
                      setFormData({ ...formData, donorName: e.target.value })
                    }
                    placeholder="Nama lengkap"
                    className="input-field"
                    disabled={formData.isAnonymous}
                    required={!formData.isAnonymous}
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
                <div>
                  <label className="label">No. HP/WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+62 812-xxxx-xxxx"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label">Pesan/Kata-kata (Opsional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tulis pesan atau dukungan..."
                  rows={3}
                  className="input-field resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={finalAmount < 10000 || !selectedPayment || (!formData.isAnonymous && !formData.donorName) || !formData.email}
              className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donasi Sekarang
            </button>

            <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              Data Anda akan dijaga kerahasiaannya
            </p>
          </form>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Usage Report */}
            <div>
              <h2 className="text-2xl font-bold text-navy-600 mb-6">
                Transparansi Penggunaan Dana
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  {usageReports.map((report) => (
                    <div key={report.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{report.category}</span>
                        <span className="font-medium text-navy-600">{report.percentage}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${report.color} rounded-full`}
                          style={{ width: `${report.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-500 text-sm">
                  *Data penggunaan dana diperbarui setiap kuartal dan dapat diakses
                  oleh anggota yang terdaftar.
                </p>
              </div>
            </div>

            {/* Recent Donations */}
            <div>
              <h2 className="text-2xl font-bold text-navy-600 mb-6">
                Donasi Terbaru
              </h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-navy-600">{donation.donorName}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(donation.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                        {donation.message && (
                          <p className="text-sm text-gray-600 italic mt-1">
                            "{donation.message}"
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-teal-600">
                          {formatCurrency(donation.amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <WalletCards className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy-600 mb-4">
            Punya Pertanyaan tentang Donasi?
          </h2>
          <p className="text-gray-600 mb-8">
            Hubungi kami untuk informasi lebih lanjut tentang cara mendukung
            kegiatan komunitas.
          </p>
          <a
            href="/kontak"
            className="btn-outline inline-flex"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
