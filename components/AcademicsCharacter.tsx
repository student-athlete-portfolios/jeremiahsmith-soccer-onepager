import React from 'react';
import { GraduationCap, Users, Check, Award, FileText, Building, CreditCard, Star, Wrench, Package, Briefcase } from 'lucide-react';

interface AcademicItem {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface LeadershipItem {
  id: string;
  icon: React.ReactNode;
  text: string;
}

const AcademicsCharacter: React.FC = () => {
  const academicItems: AcademicItem[] = [
    { id: '1', icon: <Check size={20} />, text: 'GPA: 3.9 Unweighted / 4.2 Weighted' },
    { id: '2', icon: <Award size={20} />, text: 'National Honor Society Member' },
    { id: '3', icon: <FileText size={20} />, text: 'AP Scholar with Distinction' },
    { id: '4', icon: <Building size={20} />, text: 'Intended Major: Business / Econ' },
    { id: '5', icon: <CreditCard size={20} />, text: 'NCAA ID: #123456789' },
  ];

  const leadershipItems: LeadershipItem[] = [
    { id: '1', icon: <Star size={20} />, text: 'Varsity Team Captain (2024-2025)' },
    { id: '2', icon: <Wrench size={20} />, text: 'Student Government Treasurer' },
    { id: '3', icon: <Package size={20} />, text: 'Volunteer: Local Food Bank (50+ Hours)' },
    { id: '4', icon: <Briefcase size={20} />, text: 'Part-time Youth Soccer Referee' },
  ];

  return (
    <section id="academics" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-plaon-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Profile</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Academics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">Character</span></h2>
            <div className="w-24 h-1 bg-plaon-pink mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Academic Snapshot Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
            <div className="relative bg-[#131b2c] border border-white/5 p-8 group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
              {/* Decorative skewed element */}
              <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <GraduationCap size={24} className="text-white" />
                <h3 className="text-2xl font-display font-bold uppercase text-white">Academic Snapshot</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {academicItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 text-gray-300">
                    <span className="text-plaon-pink flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Leadership & Extracurriculars Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
            <div className="relative bg-[#131b2c] border border-white/5 p-8 group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
              {/* Decorative skewed element */}
              <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Users size={24} className="text-white" />
                <h3 className="text-2xl font-display font-bold uppercase text-white">Leadership & Extracurriculars</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {leadershipItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 text-gray-300">
                    <span className="text-plaon-pink flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsCharacter;