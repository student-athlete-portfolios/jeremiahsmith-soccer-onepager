import React, { useState } from 'react';
import { Match } from '../types';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { getMatchPrediction } from '../services/geminiService';

interface MatchScheduleProps {
  matches: Match[];
}

const MatchSchedule: React.FC<MatchScheduleProps> = ({ matches }) => {
  const [loadingPrediction, setLoadingPrediction] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<{ id: string; text: string } | null>(null);

  const handlePredict = async (match: Match) => {
    setLoadingPrediction(match.id);
    const text = await getMatchPrediction(match);
    setPrediction({ id: match.id, text });
    setLoadingPrediction(null);
  };

  return (
    <section id="matches" className="py-24 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Tournament Schedule</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">Matches</span></h2>
            </div>
            <a href="#" className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all font-display font-bold uppercase tracking-wider">
                View All Matches
            </a>
        </div>

        <div className="grid gap-6">
          {matches.map((match) => (
            <div key={match.id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                <div className="relative bg-[#131b2c] border border-white/5 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
                    
                    {/* Decorative skewed element */}
                    <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>

                    {/* Match Info */}
                    <div className="flex flex-col lg:flex-row items-center flex-1 gap-8 w-full">
                        {/* Team 1 */}
                        <div className="flex items-center gap-4 flex-1 justify-end">
                            <h3 className="text-xl md:text-2xl font-display font-bold uppercase text-right">{match.homeTeam.name}</h3>
                            <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center p-2 border border-white/10">
                                <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* VS / Score */}
                        <div className="flex flex-col items-center justify-center px-4 min-w-[120px]">
                            <span className="text-3xl font-display font-bold text-plaon-pink">VS</span>
                            <span className="text-sm text-gray-400 mt-1 bg-black/30 px-3 py-1 rounded-full">{match.time}</span>
                        </div>

                        {/* Team 2 */}
                        <div className="flex items-center gap-4 flex-1 justify-start">
                            <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center p-2 border border-white/10">
                                <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-bold uppercase text-left">{match.awayTeam.name}</h3>
                        </div>
                    </div>

                    {/* Details & Actions */}
                    <div className="flex flex-col md:flex-row items-center gap-6 lg:border-l border-white/10 lg:pl-8 lg:w-1/3 justify-center lg:justify-start">
                        <div className="space-y-2 text-center md:text-left">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Calendar size={14} className="text-plaon-pink" />
                                <span>{match.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin size={14} className="text-plaon-pink" />
                                <span>{match.stadium}</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                             <button 
                                onClick={() => handlePredict(match)}
                                disabled={loadingPrediction === match.id}
                                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded text-white shadow-lg transition-all"
                                title="Ask AI Analyst"
                             >
                                {loadingPrediction === match.id ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <Sparkles size={20} />
                                )}
                             </button>
                             <button className="px-6 py-3 bg-white text-black font-display font-bold uppercase hover:bg-plaon-pink hover:text-white transition-colors skew-x-[-10deg]">
                                <span className="block skew-x-[10deg]">Buy Ticket</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* AI Prediction Result */}
                {prediction?.id === match.id && (
                    <div className="mt-2 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 p-4 border-l-4 border-plaon-accent animate-fade-in text-sm text-gray-200">
                        <strong className="text-plaon-pink block mb-1 flex items-center gap-2">
                            <Sparkles size={14} /> AI Analyst Prediction:
                        </strong>
                        {prediction.text}
                    </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchSchedule;
