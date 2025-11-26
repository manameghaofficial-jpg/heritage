import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './store';
import { Layout } from './components/Layout';
import HomePage from './pages/Home';
import { Shop } from './pages/Shop';
import { Videos, Blog } from './pages/Content';
import { About, Contact, Hope, Services } from './pages/Info';
import { AdminPage } from './pages/Admin';

const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useApp();
  // For demo, we might allow access or show login prompt, here we redirect if not logged in
  if (!user || user.role !== 'admin') {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Access Denied. Please Login as Admin in the header.</div>;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/admin" element={
        <ProtectedAdminRoute>
           <AdminPage />
        </ProtectedAdminRoute>
      } />
      <Route path="*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hope" element={<Hope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<div className="min-h-screen bg-black pt-20 text-center text-white">Cart functionality simulated in state.</div>} />
          </Routes>
        </Layout>
      } />
    </Routes>
  </Router>
);

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
