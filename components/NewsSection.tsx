import React from 'react';
import { NewsItem } from '../types';
import { ArrowRight, User, Calendar } from 'lucide-react';

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
    <section id="news" className="py-24 bg-[#0b0f19]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Our Blog</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">News</span></h2>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group bg-[#131b2c] rounded-sm overflow-hidden border border-white/5 hover:border-plaon-pink/30 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-plaon-pink text-white text-xs font-bold uppercase px-3 py-1">
                    {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                        <User size={12} className="text-plaon-accent" />
                        <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-plaon-accent" />
                        <span>{item.date}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-display font-bold uppercase leading-tight mb-4 group-hover:text-plaon-pink transition-colors line-clamp-2">
                    {item.title}
                </h3>
                
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white group/link">
                    Read More 
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
