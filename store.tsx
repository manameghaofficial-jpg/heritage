import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Video, BlogPost, User, CartItem } from './types';
import { MOCK_PRODUCTS, MOCK_VIDEOS, MOCK_BLOGS } from './constants';

interface AppState {
  products: Product[];
  videos: Video[];
  blogs: BlogPost[];
  cart: CartItem[];
  user: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  login: () => void;
  logout: () => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [videos, setVideos] = useState<Video[]>(MOCK_VIDEOS);
  const [blogs, setBlogs] = useState<BlogPost[]>(MOCK_BLOGS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const login = () => {
    setUser({
      id: 'admin-1',
      name: 'Dr. Sharshi',
      email: 'admin@sharshi.com',
      role: 'admin',
      avatar: 'https://picsum.photos/seed/user/100/100'
    });
  };

  const logout = () => setUser(null);

  const addProduct = (product: Product) => setProducts([...products, product]);
  const removeProduct = (id: string) => setProducts(products.filter(p => p.id !== id));

  return (
    <AppContext.Provider value={{ 
      products, videos, blogs, cart, user, 
      addToCart, removeFromCart, login, logout,
      addProduct, removeProduct 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
