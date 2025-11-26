import React from 'react';
import { ArrowRight, Play, Zap, Globe, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, SectionTitle, GlassCard } from '../components/UI';
import { useApp } from '../store';

const Hero: React.FC = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/futurecity/1920/1080')] bg-cover bg-center opacity-30"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-transparent to-transparent opacity-40 animate-pulse-slow"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs uppercase tracking-[0.2em] backdrop-blur-md">
        Welcome to the Future
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight">
        WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-crimson">SCIENCE</span><br />
        MEETS THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">FUTURE</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
        Merging ancient wisdom with quantum innovation. Shop knowledge, stream vision, and build the world of tomorrow.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/shop">
          <Button variant="primary" icon={Zap} className="w-full sm:w-auto">Explore Store</Button>
        </Link>
        <Link to="/videos">
          <Button variant="glass" icon={Play} className="w-full sm:w-auto">Watch Stream</Button>
        </Link>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => {
  const features = [
    { icon: Atom, title: "Scientific Heritage", desc: "Discover the roots of discovery." },
    { icon: Globe, title: "Global Innovation", desc: "Connecting minds across borders." },
    { icon: Zap, title: "Future Tech", desc: "Quantum computing & AI solutions." },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <GlassCard key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors duration-500">
                <f.icon className="text-brand-blue group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts: React.FC = () => {
  const { products } = useApp();
  const featured = products.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-brand-crimson/10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Latest Innovations" subtitle="Curated from our labs" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id} className="block group">
              <GlassCard className="h-full relative overflow-hidden p-0">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-sm font-bold border border-white/20">
                    ${product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-brand-blue uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{product.name}</h3>
                  <div className="flex items-center text-brand-red gap-2 text-sm font-medium">
                    View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Features />
    <FeaturedProducts />
  </>
);

export default HomePage;
