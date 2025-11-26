export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  duration: string;
  category: string;
  description: string;
  channel: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Theme = 'dark' | 'light' | 'futuristic';
