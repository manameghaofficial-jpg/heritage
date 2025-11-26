import React from 'react';
import { GlassCard, SectionTitle, Button } from '../components/UI';
import { Brain, Rocket, Shield, Mail, MapPin, Phone } from 'lucide-react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-black py-20">
    <div className="max-w-4xl mx-auto px-4">
      <SectionTitle title="Our Heritage" subtitle="The Sharshi Vision" />
      <div className="prose prose-invert prose-lg mx-auto text-gray-300">
        <p className="lead text-xl text-white">
          Sharshi Science Heritage was founded on a simple yet profound belief: The technologies of tomorrow are deeply rooted in the wisdom of yesterday.
        </p>
        <p>
          We are not just a store, nor just a media company. We are a collective of scientists, historians, and futurists working together to curate products and content that elevate human potential.
        </p>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl font-display font-bold text-center mb-10">The Timeline</h3>
        <div className="border-l-2 border-brand-red/30 pl-8 ml-4 space-y-12">
          {[
            { year: '2010', title: 'Foundation', desc: 'Started as a small research lab.' },
            { year: '2018', title: 'Global Expansion', desc: 'Opened offices in Tokyo and London.' },
            { year: '2024', title: 'The Quantum Leap', desc: 'Launched the Heritage AI streaming platform.' }
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-red border-4 border-black"></span>
              <div className="text-brand-blue font-bold mb-1">{item.year}</div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Hope: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0010] to-black py-20">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h1 className="text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8 animate-pulse-slow">
        HOPE
      </h1>
      <p className="text-2xl text-gray-300 mb-16 max-w-2xl mx-auto">
        A vision for a unified planetary civilization.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <GlassCard className="bg-purple-900/10 border-purple-500/20">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Technological Harmony</h2>
          <p>We envision a future where technology restores nature rather than consuming it. Our "Green Quantum" initiative is leading this charge.</p>
        </GlassCard>
        <GlassCard className="bg-blue-900/10 border-blue-500/20">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Universal Knowledge</h2>
          <p>Democratizing access to advanced scientific education through our global streaming network.</p>
        </GlassCard>
      </div>
    </div>
  </div>
);

export const Services: React.FC = () => (
  <div className="min-h-screen bg-black py-20">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Services" subtitle="Enterprise & Personal Solutions" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Brain, title: "AI Consulting", desc: "Implementing generative AI for heritage preservation." },
          { icon: Rocket, title: "R&D Labs", desc: "Prototype development for futuristic hardware." },
          { icon: Shield, title: "Cyber-Security", desc: "Quantum-resistant encryption services." }
        ].map((s, i) => (
          <GlassCard key={i} className="text-center py-10">
            <s.icon size={48} className="mx-auto text-brand-red mb-6" />
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-400 mb-6">{s.desc}</p>
            <Button variant="secondary">Learn More</Button>
          </GlassCard>
        ))}
      </div>
    </div>
  </div>
);

export const Contact: React.FC = () => (
  <div className="min-h-screen bg-black py-20">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Contact Us" subtitle="Get in touch" />
      <div className="grid md:grid-cols-2 gap-12">
        <div>
           <GlassCard>
             <h3 className="text-xl font-bold mb-6">Send a Transmission</h3>
             <form className="space-y-4">
               <div>
                 <label className="block text-xs uppercase text-gray-500 mb-1">Name</label>
                 <input type="text" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-brand-red outline-none transition-colors" placeholder="Dr. Freeman" />
               </div>
               <div>
                 <label className="block text-xs uppercase text-gray-500 mb-1">Email</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-brand-red outline-none transition-colors" placeholder="email@lab.com" />
               </div>
               <div>
                 <label className="block text-xs uppercase text-gray-500 mb-1">Message</label>
                 <textarea className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-brand-red outline-none transition-colors h-32" placeholder="Your query..."></textarea>
               </div>
               <Button type="button" className="w-full">Transmit</Button>
             </form>
           </GlassCard>
        </div>
        <div className="space-y-8">
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red"><MapPin /></div>
             <div>
               <h4 className="font-bold text-lg">Global HQ</h4>
               <p className="text-gray-400">101 Quantum Blvd, Neo-Tokyo, Sector 7</p>
             </div>
           </div>
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red"><Mail /></div>
             <div>
               <h4 className="font-bold text-lg">Email</h4>
               <p className="text-gray-400">contact@sharshi.com</p>
             </div>
           </div>
           <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red"><Phone /></div>
             <div>
               <h4 className="font-bold text-lg">Phone</h4>
               <p className="text-gray-400">+1 (800) FUTURE-NOW</p>
             </div>
           </div>
           
           <div className="h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828797624282!2d139.7671248152588!3d35.68116728019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f7007%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1625628424263!5m2!1sen!2sjp" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy"
               title="map"
             ></iframe>
           </div>
        </div>
      </div>
    </div>
  </div>
);
