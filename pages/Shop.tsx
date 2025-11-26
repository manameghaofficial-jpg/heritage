import React, { useState } from 'react';
import { useApp } from '../store';
import { Button, GlassCard, SectionTitle } from '../components/UI';
import { ShoppingBag, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Shop: React.FC = () => {
  const { products, addToCart } = useApp();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="The Store" subtitle="Future-ready Equipment" />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,0,51,0.4)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <GlassCard key={product.id} className="p-0 flex flex-col h-full group">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                   <Button variant="primary" onClick={() => addToCart(product)} icon={ShoppingBag}>
                      Add
                   </Button>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                  <div className="flex items-center text-yellow-500 text-xs">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto flex justify-between items-center">
                   <span className="text-brand-blue font-display text-lg">${product.price}</span>
                   <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
