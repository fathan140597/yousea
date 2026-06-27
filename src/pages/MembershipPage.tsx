import { useState, useEffect } from 'react';
import {
  UserPlus,
  LogIn,
  Users,
  MessageSquare,
  Send,
  Mail,
  Lock,
  User,
  Phone,
  Building,
  Target,
  ArrowRight,
  Plus,
  MessageCircle,
  Eye,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { User as UserType, ForumPost } from '../types';
import { WaveDecoration } from '../components/WaveDecoration';

const divisions = [
  'Kaderisasi',
  'Pendidikan & Pelatihan',
  'Sosial & Lingkungan',
  'Media & Publikasi',
];

const mockMembers: UserType[] = [
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
  {
    id: '4',
    name: 'Dewi Anggraini',
    email: 'dewi@yousea.org',
    phone: '+62 815-2345-6789',
    institution: 'Universitas Malikussaleh',
    division: 'Kaderisasi',
    role: 'member',
    avatar: 'https://images.pexels.com/photos/1484792/pexels-photo-1484792.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2023-01-10',
  },
  {
    id: '5',
    name: 'Fajar Ramadhan',
    email: 'fajar@yousea.org',
    phone: '+62 816-3456-7890',
    institution: 'STAIN Lhokseumawe',
    division: 'Pendidikan & Pelatihan',
    role: 'volunteer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinedAt: '2023-05-25',
  },
];

const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    authorId: '1',
    authorName: 'Ahmad Rizki',
    title: 'Tips Sukses Menghadapi Beasiswa LPDP',
    content: 'Halo teman-teman! Saya ingin berbagi pengalaman tentang persiapan beasiswa LPDP. Yang paling penting adalah persiapan proposal penelitian dan konsistensi belajar bahasa Inggris.',
    createdAt: '2024-06-10T10:30:00',
    replies: [
      {
        id: 'r1',
        authorId: '2',
        authorName: 'Siti Nurhaliza',
        content: 'Terima kasih sharingnya! Bisa share referensi untuk proposal?',
        createdAt: '2024-06-10T11:00:00',
      },
    ],
  },
  {
    id: '2',
    authorId: '3',
    authorName: 'Budi Santoso',
    title: 'Ide Aksi Lingkungan di Lhokseumawe',
    content: 'Saya punya ide untuk aksi lingkungan baru. Bagaimana kalau kita adopsi sungai kecil di sekitar kampus? Bisa jadi program jangka panjang.',
    createdAt: '2024-06-08T14:20:00',
    replies: [],
  },
];

type ActiveTab = 'login' | 'register' | 'directory' | 'forum';

export function MembershipPage() {
  const { user, isAuthenticated, login, register, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<ActiveTab>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    division: '',
    password: '',
    confirmPassword: '',
    motivation: '',
  });

  // Forum state
  const [forumPosts, setForumPosts] = useState(mockForumPosts);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newReplyContent, setNewReplyContent] = useState<{ [key: string]: string }>({});
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  // Members state
  const [members, setMembers] = useState<UserType[]>(mockMembers);

  useEffect(() => {
    const storedMembers = localStorage.getItem('yousea_users');
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setActiveTab('login');
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const success = await login(loginEmail, loginPassword);
      if (!success) {
        setError('Email atau password salah. Gunakan password: yousea123');
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    }
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    if (!registerData.division) {
      setError('Pilih divisi yang diminati');
      return;
    }

    setIsLoading(true);
    try {
      const success = await register(registerData);
      if (!success) {
        setError('Email sudah terdaftar. Silakan gunakan email lain.');
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    }
    setIsLoading(false);
  };

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const post: ForumPost = {
      id: Date.now().toString(),
      authorId: user?.id || '',
      authorName: user?.name || '',
      title: newPostTitle,
      content: newPostContent,
      createdAt: new Date().toISOString(),
      replies: [],
    };
    setForumPosts([post, ...forumPosts]);
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleNewReply = (postId: string) => {
    const content = newReplyContent[postId];
    if (!content?.trim()) return;

    const updatedPosts = forumPosts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [
            ...post.replies,
            {
              id: Date.now().toString(),
              authorId: user?.id || '',
              authorName: user?.name || '',
              content,
              createdAt: new Date().toISOString(),
            },
          ],
        };
      }
      return post;
    });
    setForumPosts(updatedPosts);
    setNewReplyContent({ ...newReplyContent, [postId]: '' });
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
              Keanggotaan & Relawan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bergabung Bersama Kami
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Jadilah bagian dari komunitas pemuda yang berkomitmen untuk menciptakan
              perubahan positif.
            </p>
          </div>
        </div>
        <WaveDecoration variant="hero" />
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto">
              {/* Tabs */}
              <div className="flex rounded-xl bg-white shadow-sm p-1 mb-8">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    activeTab === 'login'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <LogIn className="w-4 h-4 inline mr-2" />
                  Masuk
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    activeTab === 'register'
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <UserPlus className="w-4 h-4 inline mr-2" />
                  Daftar
                </button>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {activeTab === 'login' && (
                <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-navy-600 mb-6">
                    Selamat Datang Kembali!
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label className="label">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="email@example.com"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Masukkan password"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full mt-6 disabled:opacity-50"
                  >
                    {isLoading ? 'Memproses...' : 'Masuk'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    Demo: gunakan email dari daftar anggota dengan password "yousea123"
                  </p>
                </form>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegister} className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-navy-600 mb-6">
                    Daftar Anggota Baru
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label className="label">Nama Lengkap *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={registerData.name}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, name: e.target.value })
                          }
                          placeholder="Nama lengkap"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                          }
                          placeholder="email@example.com"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label">Nomor HP/WhatsApp *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) =>
                            setRegisterData({ ...registerData, phone: e.target.value })
                          }
                          placeholder="+62 812-xxxx-xxxx"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label">Asal Kampus/Institusi *</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={registerData.institution}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              institution: e.target.value,
                            })
                          }
                          placeholder="Universitas Malikussaleh"
                          className="input-field pl-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label">Divisi yang Diminati *</label>
                      <select
                        value={registerData.division}
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            division: e.target.value,
                          })
                        }
                        className="input-field"
                        required
                      >
                        <option value="">Pilih divisi</option>
                        {divisions.map((div) => (
                          <option key={div} value={div}>
                            {div}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label">Motivasi Singkat</label>
                      <textarea
                        value={registerData.motivation}
                        onChange={(e) =>
                          setRegisterData({
                            ...registerData,
                            motivation: e.target.value,
                          })
                        }
                        placeholder="Ceritakan alasan ingin bergabung..."
                        rows={3}
                        className="input-field resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="label">Password *</label>
                        <input
                          type="password"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                          placeholder="Password"
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="label">Konfirmasi *</label>
                        <input
                          type="password"
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder="Ulangi password"
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full mt-6 disabled:opacity-50"
                  >
                    {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
                    <UserPlus className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div>
              {/* User Dashboard */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=065A82&color=fff`}
                      alt={user?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-navy-600">
                        Halo, {user?.name}!
                      </h2>
                      <p className="text-gray-500 text-sm">{user?.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg text-sm font-medium">
                      {user?.division}
                    </span>
                    <button
                      onClick={logout}
                      className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Keluar
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200">
                {[
                  { id: 'directory' as const, label: 'Direktori Anggota', icon: Users },
                  { id: 'forum' as const, label: 'Forum Diskusi', icon: MessageSquare },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all ${
                      activeTab === tab.id
                        ? 'border-teal-600 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Member Directory */}
              {activeTab === 'directory' && (
                <div>
                  <h3 className="text-xl font-bold text-navy-600 mb-6">
                    Anggota & Relawan Aktif
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={member.avatar || `https://ui-avatars.com/api/?name=${member.name}&background=065A82&color=fff`}
                            alt={member.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-navy-600">
                              {member.name}
                            </h4>
                            <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">
                              {member.role === 'admin'
                                ? 'Admin'
                                : member.role === 'volunteer'
                                ? 'Relawan'
                                : 'Anggota'}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-400" />
                            {member.institution}
                          </p>
                          <p className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-gray-400" />
                            {member.division}
                          </p>
                          <p className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            Bergabung:{' '}
                            {new Date(member.joinedAt).toLocaleDateString('id-ID')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Forum */}
              {activeTab === 'forum' && (
                <div>
                  {/* New Post Form */}
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <h3 className="text-lg font-semibold text-navy-600 mb-4">
                      <Plus className="w-5 h-5 inline mr-2" />
                      Buat Postingan Baru
                    </h3>
                    <form onSubmit={handleNewPost} className="space-y-4">
                      <input
                        type="text"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        placeholder="Judul diskusi..."
                        className="input-field"
                        required
                      />
                      <textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="Tulis konten diskusi..."
                        rows={3}
                        className="input-field resize-none"
                        required
                      />
                      <button type="submit" className="btn-primary">
                        <Send className="w-4 h-4 mr-2" />
                        Posting
                      </button>
                    </form>
                  </div>

                  {/* Posts */}
                  <div className="space-y-6">
                    {forumPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-sm overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <img
                              src={`https://ui-avatars.com/api/?name=${post.authorName}&background=1E2761&color=fff`}
                              alt={post.authorName}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <h4 className="font-medium text-navy-600">
                                {post.authorName}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {new Date(post.createdAt).toLocaleDateString('id-ID', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </p>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-navy-600 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600">{post.content}</p>
                        </div>

                        {/* Replies Section */}
                        <div className="border-t border-gray-100">
                          <button
                            onClick={() =>
                              setExpandedPost(expandedPost === post.id ? null : post.id)
                            }
                            className="w-full px-6 py-3 flex items-center gap-2 text-teal-600 hover:bg-teal-50 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            {post.replies.length} Balasan
                            <Eye className="w-4 h-4 ml-auto" />
                          </button>

                          {expandedPost === post.id && (
                            <div className="px-6 pb-6">
                              {post.replies.map((reply) => (
                                <div
                                  key={reply.id}
                                  className="flex gap-3 mt-4 ml-4 pl-4 border-l-2 border-gray-200"
                                >
                                  <img
                                    src={`https://ui-avatars.com/api/?name=${reply.authorName}&background=065A82&color=fff`}
                                    alt={reply.authorName}
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h5 className="font-medium text-navy-600 text-sm">
                                        {reply.authorName}
                                      </h5>
                                      <span className="text-xs text-gray-400">
                                        {new Date(reply.createdAt).toLocaleDateString('id-ID')}
                                      </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{reply.content}</p>
                                  </div>
                                </div>
                              ))}

                              {/* Add Reply */}
                              <div className="flex gap-3 mt-4 ml-4 pl-4">
                                <img
                                  src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=065A82&color=fff`}
                                  alt={user?.name}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div className="flex-1 flex gap-2">
                                  <input
                                    type="text"
                                    value={newReplyContent[post.id] || ''}
                                    onChange={(e) =>
                                      setNewReplyContent({
                                        ...newReplyContent,
                                        [post.id]: e.target.value,
                                      })
                                    }
                                    placeholder="Tulis balasan..."
                                    className="input-field text-sm"
                                  />
                                  <button
                                    onClick={() => handleNewReply(post.id)}
                                    className="btn-primary text-sm py-2 px-3"
                                  >
                                    <Send className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {forumPosts.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Belum ada postingan. Jadilah yang pertama!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
