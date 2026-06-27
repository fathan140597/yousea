export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  institution: string;
  division: string;
  role: 'member' | 'volunteer' | 'admin';
  avatar?: string;
  joinedAt: string;
}

export interface Division {
  id: string;
  name: string;
  description: string;
  activities: string[];
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  division: string;
  description: string;
  registrationOpen: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'kaderisasi' | 'pendidikan' | 'sosial-lingkungan' | 'media';
  imageUrl: string;
  description: string;
  date: string;
}

export interface ForumPost {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  createdAt: string;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  message?: string;
  createdAt: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
