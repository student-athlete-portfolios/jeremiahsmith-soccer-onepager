import React from 'react';
import { Play, ArrowRight, Phone, Mail } from 'lucide-react';
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-plaon-pink/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-plaon-accent/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 z-10 relative grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 transform -skew-x-12">
            <span className="text-plaon-pink font-bold uppercase tracking-wider text-sm transform skew-x-12">5'10" | 165 lbs | Right Footed | Schaumburg, IL</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Jeremiah Smith</span>
            <span className="block text-outline">Defender #7</span>
          </h1>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-plaon-pink overflow-hidden font-bold font-display tracking-widest text-xl uppercase transition-all hover:bg-white hover:text-plaon-dark">
                <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />  EMAIL ATHLETE
                </span>
            </button>
            <button className="group relative px-8 py-4 border-2 border-white text-white overflow-hidden font-bold font-display tracking-widest text-xl uppercase transition-all hover:bg-white hover:text-black">
                <span className="relative z-10 flex items-center gap-2">
                <Phone size={20} />  CALL NOW
                </span>
            </button>
          </div>
        </div>

        {/* Video/Image Section */}
        <div className="relative">
          <div className="relative aspect-video bg-gradient-to-br from-plaon-pink/20 to-plaon-accent/20 rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={32} className="text-black ml-1" fill="black" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="flex items-center gap-2 text-white text-sm font-bold uppercase">
                <span>Watch Highlights</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

