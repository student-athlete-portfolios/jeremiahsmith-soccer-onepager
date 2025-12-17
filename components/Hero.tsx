import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-plaon-pink/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-plaon-accent/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 z-10 relative grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 transform -skew-x-12">
            <span className="text-plaon-pink font-bold uppercase tracking-wider text-sm transform skew-x-12">World Football 2024</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">World Cup</span>
            <span className="block text-outline">Championship</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-lg font-sans leading-relaxed">
            Experience the thrill of the ultimate football showdown. Join millions of fans worldwide for the biggest sporting event of the year.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-plaon-pink overflow-hidden font-bold font-display tracking-widest text-xl uppercase transition-all hover:bg-white hover:text-plaon-dark">
                <span className="relative z-10 flex items-center gap-2">
                    Join Now <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform group-hover:translate-x-0 duration-300"></div>
            </button>
            
            <button className="flex items-center gap-4 px-8 py-4 border border-white/30 hover:border-plaon-pink hover:bg-plaon-pink/10 transition-all uppercase font-display font-bold tracking-wider text-xl">
               <Play size={20} className="fill-current" /> Watch Highlights
            </button>
          </div>
        </div>

        {/* Hero Image / Player */}
        <div className="relative hidden lg:block">
           <img 
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop" 
            alt="Football Player"
            className="w-full h-auto object-contain drop-shadow-2xl mask-image-gradient transform hover:scale-105 transition-transform duration-700"
            style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
           />
           
           {/* Floating Badge */}
           <div className="absolute bottom-20 -left-10 bg-white/10 backdrop-blur-md p-6 border-l-4 border-plaon-pink max-w-xs">
              <p className="text-sm text-gray-300 uppercase tracking-widest mb-1">Top Scorer</p>
              <h3 className="text-2xl font-display font-bold">Cristiano Ronaldo</h3>
              <p className="text-plaon-pink font-bold">24 Goals This Season</p>
           </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
