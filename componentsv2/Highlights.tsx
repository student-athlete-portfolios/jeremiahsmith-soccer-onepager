import React from 'react';
import { Calendar } from 'lucide-react';

interface Highlight {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  match: string;
}

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section id="highlights" className="py-24 bg-[#0b0f19]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Highlights</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">In-game <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">Highlights</span></h2>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="group bg-[#131b2c] rounded-sm overflow-hidden border border-white/5 hover:border-plaon-pink/30 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={highlight.image} 
                    alt={highlight.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-plaon-pink text-white text-xs font-bold uppercase px-3 py-1">
                    {highlight.match}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-plaon-accent" />
                        <span>{highlight.date}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-display font-bold uppercase leading-tight mb-3 group-hover:text-plaon-pink transition-colors line-clamp-2">
                    {highlight.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

