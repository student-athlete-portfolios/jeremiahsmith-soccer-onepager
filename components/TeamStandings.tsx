import React from 'react';
import { Team } from '../types';

interface TeamStandingsProps {
  teams: Team[];
}

const TeamStandings: React.FC<TeamStandingsProps> = ({ teams }) => {
  return (
    <section id="standings" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-plaon-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Leaderboard</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Team <span className="text-outline">Standings</span></h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1e293b] text-white font-display uppercase tracking-wider text-lg">
                <th className="p-4 rounded-tl-lg">Pos</th>
                <th className="p-4">Team</th>
                <th className="p-4 text-center">W</th>
                <th className="p-4 text-center">L</th>
                <th className="p-4 text-center">D</th>
                <th className="p-4 text-center rounded-tr-lg">PTS</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 font-sans font-medium">
              {teams.sort((a, b) => b.points - a.points).map((team, index) => (
                <tr key={team.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <span className={`flex items-center justify-center w-8 h-8 rounded font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' : 
                        index === 1 ? 'bg-gray-400 text-black' : 
                        index === 2 ? 'bg-orange-700 text-white' : 'bg-white/10'
                    }`}>
                        {index + 1}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img src={team.logo} alt={team.name} className="w-10 h-10 object-contain" />
                      <span className="font-bold text-white group-hover:text-plaon-pink transition-colors text-lg uppercase font-display tracking-wide">{team.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-white">{team.wins}</td>
                  <td className="p-4 text-center">{team.losses}</td>
                  <td className="p-4 text-center">{team.draws}</td>
                  <td className="p-4 text-center font-bold text-white text-lg">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TeamStandings;
