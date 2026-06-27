import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter, ImageIcon } from 'lucide-react';
import { WaveDecoration } from '../components/WaveDecoration';
import { GalleryItem } from '../types';

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'kaderisasi', name: 'Kaderisasi' },
  { id: 'pendidikan', name: 'Pendidikan' },
  { id: 'sosial-lingkungan', name: 'Sosial & Lingkungan' },
  { id: 'media', name: 'Media' },
];

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Pembekalan Pengurus 2024',
    category: 'kaderisasi',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Kegiatan pembekalan untuk pengurus baru periode 2024-2025.',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'YouSea Mengajar di SMP',
    category: 'pendidikan',
    imageUrl: //'https://images.pexels.com/photos/8617884/pexels-photo-8617884.jpeg?auto=compress&cs=tinysrgb&w=800',
    'mengajar.png',
    description: 'Program mengajar di sekolah-sekolah sekitar Lhokseumawe.',
    date: '2024-02-20',
  },
  {
    id: '3',
    title: 'Bersih Pantai Ujong Blang',
    category: 'sosial-lingkungan',
    imageUrl: 'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Aksi bersih pantai bersama komunitas dan relawan.',
    date: '2024-03-10',
  },
  {
    id: '4',
    title: 'Workshop Content Creator',
    category: 'media',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pelatihan pembuatan konten untuk media sosial.',
    date: '2024-03-25',
  },
  {
    id: '5',
    title: 'Makrab Angkatan IV',
    category: 'kaderisasi',
    imageUrl: 'https://images.pexels.com/photos/6962952/pexels-photo-6962952.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Malam keakraban untuk mempererat hubungan antar anggota.',
    date: '2024-04-05',
  },
  {
    id: '6',
    title: 'Club Bahasa English Day',
    category: 'pendidikan',
    imageUrl: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Kegiatan praktik bahasa Inggris bersama peserta.',
    date: '2024-04-15',
  },
  {
    id: '7',
    title: 'Penanaman Mangrove',
    category: 'sosial-lingkungan',
    imageUrl: 'https://images.pexels.com/photos/1287086/pexels-photo-1287086.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Program reboisasi mangrove di pesisir Lhokseumawe.',
    date: '2024-05-01',
  },
  {
    id: '8',
    title: 'Podcast Recording',
    category: 'media',
    imageUrl: 'https://images.pexels.com/photos/4066352/pexels-photo-4066352.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Rekaman podcast Youth Talk episode baru.',
    date: '2024-05-10',
  },
  {
    id: '9',
    title: 'Seagent Leadership Program',
    category: 'kaderisasi',
    imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Program kepemimpinan intensif selama 3 hari.',
    date: '2024-05-20',
  },
  {
    id: '10',
    title: 'Bimbingan Belajar Mahasiswa',
    category: 'pendidikan',
    imageUrl: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sesi bimbingan belajar untuk mahasiswa Unimal.',
    date: '2024-06-01',
  },
  {
    id: '11',
    title: 'Pelatihan Sampah Organik',
    category: 'sosial-lingkungan',
    imageUrl: 'https://images.pexels.com/photos/4162995/pexels-photo-4162995.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Workshop pengelolaan sampah organik rumah tangga.',
    date: '2024-06-10',
  },
  {
    id: '12',
    title: 'IG Live Youth Talk',
    category: 'media',
    imageUrl: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sesi live Instagram dengan tema kepemudaan.',
    date: '2024-06-15',
  },
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentImage = filteredItems[currentImageIndex];

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
              Galeri Kegiatan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Momen Berharga Kami
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Dokumentasi berbagai kegiatan dan program yang telah kami laksanakan
              bersama komunitas.
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow">
                    <div className="aspect-square">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block px-2 py-1 rounded-full bg-teal-500/80 text-white text-xs font-medium mb-2">
                          {categories.find((c) => c.id === item.category)?.name}
                        </span>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Tidak ada foto dalam kategori ini.
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((cat) => {
              const count = galleryItems.filter(
                (item) => item.category === cat.id
              ).length;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-teal-600">{count}</div>
                  <div className="text-gray-600 text-sm">{cat.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full mx-4">
            <div className="relative">
              <img
                src={currentImage.imageUrl}
                alt={currentImage.title}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-2">
                {categories.find((c) => c.id === currentImage.category)?.name}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-400">{currentImage.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                {new Date(currentImage.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Counter */}
            <div className="mt-4 text-center text-gray-500 text-sm">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto max-w-full">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                  index === currentImageIndex
                    ? 'ring-2 ring-teal-500 opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
