import React, { useState } from 'react';
import { useApp } from '../store';
import { GlassCard, Button, SectionTitle } from '../components/UI';
import { generateMarketingCopy, generateBlogIdeas } from '../services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { LayoutDashboard, ShoppingBag, Video, FileText, Settings, Users, Plus, Sparkles, Trash2 } from 'lucide-react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Simple tab simulation for the single-file admin constraint
  const tabs = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'products', icon: ShoppingBag, label: 'Products' },
    { id: 'videos', icon: Video, label: 'Videos' },
    { id: 'blogs', icon: FileText, label: 'Blogs' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-20 md:w-64 border-r border-white/10 bg-black/50 hidden md:block">
        <div className="p-6">
          <h2 className="text-brand-red font-display font-bold hidden md:block">ADMIN</h2>
        </div>
        <nav className="mt-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 text-sm transition-colors ${
                activeTab === tab.id ? 'bg-brand-red/10 text-brand-red border-r-2 border-brand-red' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && <DashboardHome />}
        {activeTab === 'products' && <ProductManager />}
        {activeTab === 'videos' && <PlaceholderManager title="Video Manager" />}
        {activeTab === 'blogs' && <PlaceholderManager title="Blog Manager" />}
        {activeTab === 'users' && <PlaceholderManager title="User Management" />}
        {activeTab === 'settings' && <PlaceholderManager title="System Settings" />}
      </div>
    </div>
  );
};

const DashboardHome: React.FC = () => {
  const data = [
    { name: 'Mon', sales: 4000, views: 2400 },
    { name: 'Tue', sales: 3000, views: 1398 },
    { name: 'Wed', sales: 2000, views: 9800 },
    { name: 'Thu', sales: 2780, views: 3908 },
    { name: 'Fri', sales: 1890, views: 4800 },
    { name: 'Sat', sales: 2390, views: 3800 },
    { name: 'Sun', sales: 3490, views: 4300 },
  ];

  return (
    <div className="space-y-8">
      <SectionTitle title="Overview" subtitle="System Status" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '$54,230', color: 'text-brand-blue' },
          { label: 'Active Users', value: '1,240', color: 'text-brand-purple' },
          { label: 'Video Streams', value: '85.2hrs', color: 'text-brand-red' },
          { label: 'New Orders', value: '+142', color: 'text-green-400' }
        ].map((stat, i) => (
           <GlassCard key={i} className="p-4">
             <div className="text-gray-400 text-xs uppercase mb-2">{stat.label}</div>
             <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
           </GlassCard>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-80">
        <GlassCard>
          <h3 className="mb-4 font-bold text-gray-300">Revenue Analytics</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
              <Bar dataKey="sales" fill="#FF0033" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
        <GlassCard>
           <h3 className="mb-4 font-bold text-gray-300">Traffic Growth</h3>
           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
              <Line type="monotone" dataKey="views" stroke="#00C8FF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>
    </div>
  );
};

const ProductManager: React.FC = () => {
  const { products, removeProduct, addProduct } = useApp();
  const [isAiLoading, setAiLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, category: 'Tech', description: '' });

  const handleAiGenerate = async () => {
    if (!newProduct.name) return alert("Enter product name first");
    setAiLoading(true);
    const desc = await generateMarketingCopy(newProduct.name);
    setNewProduct(prev => ({ ...prev, description: desc }));
    setAiLoading(false);
  };

  const handleAdd = () => {
    addProduct({
      id: Math.random().toString(),
      ...newProduct,
      image: 'https://picsum.photos/seed/new/400/400',
      rating: 0
    });
    setNewProduct({ name: '', price: 0, category: 'Tech', description: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Inventory</h2>
        <Button variant="primary" icon={Plus}>Add New</Button>
      </div>

      <GlassCard className="mb-8">
        <h3 className="text-lg font-bold mb-4">Quick Add Product</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input 
            className="bg-black/30 border border-white/10 p-2 text-white" 
            placeholder="Product Name" 
            value={newProduct.name}
            onChange={e => setNewProduct({...newProduct, name: e.target.value})}
          />
          <input 
            className="bg-black/30 border border-white/10 p-2 text-white" 
            placeholder="Price" 
            type="number"
            value={newProduct.price}
            onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
          />
        </div>
        <div className="relative">
          <textarea 
            className="w-full bg-black/30 border border-white/10 p-2 text-white h-24 mb-2" 
            placeholder="Description (AI Generated)"
            value={newProduct.description}
            onChange={e => setNewProduct({...newProduct, description: e.target.value})}
          ></textarea>
          <button 
            onClick={handleAiGenerate}
            disabled={isAiLoading}
            className="absolute right-2 bottom-4 text-xs bg-brand-purple text-white px-2 py-1 rounded flex items-center gap-1 hover:bg-brand-blue transition-colors"
          >
            <Sparkles size={12}/> {isAiLoading ? 'Thinking...' : 'Ask AI'}
          </button>
        </div>
        <Button onClick={handleAdd} className="w-full">Save Product</Button>
      </GlassCard>

      <div className="space-y-2">
        {products.map(p => (
          <div key={p.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-brand-red/30 transition-colors rounded">
            <div className="flex items-center gap-4">
              <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded" />
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-xs text-gray-500">${p.price}</div>
              </div>
            </div>
            <button onClick={() => removeProduct(p.id)} className="text-red-500 hover:text-red-400"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlaceholderManager: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center py-20">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-400">This module is part of the enterprise package.</p>
  </div>
);

export const AdminPage: React.FC = () => (
  <AdminLayout>
    <DashboardHome />
  </AdminLayout>
);
