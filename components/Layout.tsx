import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User as UserIcon, Search, Globe } from 'lucide-react';
import { Logo, Button } from './UI';
import { useApp } from '../store';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, user, login, logout } = useApp();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Stream', path: '/videos' },
    { name: 'Services', path: '/services' },
    { name: 'Hope', path: '/hope' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path) 
                    ? 'text-brand-red shadow-[0_0_10px_rgba(255,0,51,0.2)]' 
                    : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative text-gray-400 hover:text-white transition-colors">
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            
            {user ? (
               <div className="flex items-center gap-3">
                 <Link to="/admin" className="text-brand-blue text-sm">Dashboard</Link>
                 <button onClick={logout} className="text-gray-400 hover:text-white text-sm">Logout</button>
               </div>
            ) : (
              <button onClick={login} className="flex items-center gap-2 text-gray-400 hover:text-white">
                <UserIcon size={20} />
              </button>
            )}
          </div>

          <div className="md:hidden flex">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
             <div className="mt-4 pt-4 border-t border-white/10 flex justify-around">
                <Link to="/cart" className="flex items-center gap-2 text-gray-300"><ShoppingBag size={20}/> Cart ({cart.length})</Link>
                <button onClick={login} className="flex items-center gap-2 text-gray-300"><UserIcon size={20}/> {user ? 'Dashboard' : 'Login'}</button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/5 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <Logo className="mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Preserving the wisdom of the past while pioneering the technologies of the future. A bridge between heritage and the quantum age.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-display font-bold mb-6">Explore</h3>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-red transition-colors">Innovations</Link></li>
            <li><Link to="/shop" className="hover:text-brand-red transition-colors">Store</Link></li>
            <li><Link to="/blog" className="hover:text-brand-red transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold mb-6">Legal</h3>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Returns</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold mb-6">Global Connect</h3>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all">
              <Globe size={18} />
            </a>
            {/* Add more social icons as placeholders */}
          </div>
          <p className="text-gray-500 text-sm">New York • Tokyo • London • Dubai</p>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Sharshi Science Heritage. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <Header />
    <main className="flex-grow pt-20">
      {children}
    </main>
    <Footer />
  </div>
);
