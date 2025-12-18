import React from 'react';
import { Check } from 'lucide-react';

interface PerformanceStat {
  id: string;
  value: string;
  label: string;
}

const PerformanceStats: React.FC = () => {
  const performanceStats: PerformanceStat[] = [
    { id: '1', value: '22', label: 'GAMES PLAYED' },
    { id: '2', value: '14', label: 'GOALS' },
    { id: '3', value: '18', label: 'ASSISTS' },
    { id: '4', value: '46', label: 'POINTS' },
    { id: '5', value: '1.45', label: 'G/A PER MATCH' },
    { id: '6', value: '28', label: 'SHOTS ON GOAL' },
  ];

  const midfieldMetrics: PerformanceStat[] = [
    { id: '6', value: '88%', label: 'PASS ACCURACY' },
    { id: '7', value: '4.2', label: 'TACKLES / GAME' },
    { id: '8', value: '1,650', label: 'MINUTES PLAYED' },
  ];

  return (
    <section id="performance" className="py-24 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
                <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Tournament Schedule</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">Stats</span></h2>
                <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
                  <Check size={16} className="text-plaon-pink" />
                  <span>DATA VERIFIED VIA MAXPREPS</span>
                </div>
            </div>
            <a href="#" className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all font-display font-bold uppercase tracking-wider">
                View All Matches
            </a>
        </div>

        {/* Performance Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {performanceStats.map((stat) => (
            <div key={stat.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
              <div className="relative bg-[#131b2c] border border-white/5 p-6 md:p-8 flex flex-col items-center justify-center text-center group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
                {/* Decorative skewed element */}
                <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                
                <div className="text-4xl md:text-5xl font-display font-bold text-plaon-pink mb-2 relative z-10">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Midfield Metrics Section */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase text-white mb-6">Midfield Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {midfieldMetrics.map((metric) => (
              <div key={metric.id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                <div className="relative bg-[#131b2c] border border-white/5 p-6 md:p-8 flex flex-col items-center justify-center text-center group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
                  {/* Decorative skewed element */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                  
                  <div className="text-4xl md:text-5xl font-display font-bold text-plaon-pink mb-2 relative z-10">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-white uppercase tracking-wider relative z-10">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;