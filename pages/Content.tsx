import React from 'react';
import { useApp } from '../store';
import { GlassCard, SectionTitle, Button } from '../components/UI';
import { Play, Clock, Calendar, User, Share2 } from 'lucide-react';

export const Videos: React.FC = () => {
  const { videos } = useApp();

  return (
    <div className="min-h-screen bg-black pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Stream Innovation" subtitle="Watch the future unfold" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <GlassCard key={video.id} className="p-0 group cursor-pointer">
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white shadow-[0_0_20px_#FF0033]">
                    <Play fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded">{video.duration}</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 group-hover:text-brand-blue transition-colors">{video.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{video.channel}</p>
                <div className="flex items-center text-gray-500 text-xs gap-4">
                  <span>{video.views.toLocaleString()} views</span>
                  <span>{video.category}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Blog: React.FC = () => {
  const { blogs } = useApp();

  return (
    <div className="min-h-screen bg-black pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Journal" subtitle="Insights & Discoveries" />
        
        <div className="space-y-12">
          {blogs.map(post => (
            <GlassCard key={post.id} className="overflow-hidden">
              <div className="md:flex gap-8">
                <div className="md:w-1/3 aspect-video md:aspect-auto">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="md:w-2/3 mt-4 md:mt-0 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-brand-red uppercase tracking-wider mb-2">
                    <span>{post.category}</span>
                    <span className="text-gray-500 flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-brand-blue transition-colors cursor-pointer">{post.title}</h2>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><User size={14}/></div>
                      {post.author}
                    </div>
                    <Button variant="secondary" className="!py-1 !px-4 !text-xs">Read More</Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
