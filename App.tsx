import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PerformanceStats from './components/PerformanceStats';
import AcademicsCharacter from './components/AcademicsCharacter';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Appraisals from './components/Appraisals';
import { Match, Team } from './types';

// --- MOCK DATA ---

const MOCK_TEAMS: Team[] = [
  { id: '1', name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png', wins: 15, losses: 2, draws: 3, points: 48 },
  { id: '2', name: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png', wins: 14, losses: 3, draws: 3, points: 45 },
  { id: '3', name: 'Man City', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', wins: 13, losses: 2, draws: 5, points: 44 },
  { id: '4', name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png', wins: 12, losses: 4, draws: 4, points: 40 },
  { id: '5', name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png', wins: 11, losses: 5, draws: 4, points: 37 },
];

const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    homeTeam: MOCK_TEAMS[0],
    awayTeam: MOCK_TEAMS[1],
    date: 'Oct 28, 2024',
    time: '20:00 GMT',
    stadium: 'Santiago Bernabéu',
    status: 'UPCOMING'
  },
  {
    id: 'm2',
    homeTeam: MOCK_TEAMS[2],
    awayTeam: MOCK_TEAMS[3],
    date: 'Oct 29, 2024',
    time: '18:30 GMT',
    stadium: 'Etihad Stadium',
    status: 'UPCOMING'
  },
  {
    id: 'm3',
    homeTeam: MOCK_TEAMS[4],
    awayTeam: MOCK_TEAMS[0],
    date: 'Nov 02, 2024',
    time: '19:45 GMT',
    stadium: 'Emirates Stadium',
    status: 'UPCOMING'
  }
];

const MOCK_HIGHLIGHTS = [
  {
    id: 'n1',
    title: 'Game-Winning Goal in Overtime',
    description: 'Scored the decisive goal in the 95th minute with a powerful strike from outside the box, securing a 3-2 victory in the regional championship quarterfinals.',
    date: 'October 25, 2024',
    match: 'vs. Central High',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'n2',
    title: 'Perfect Through Ball Assist',
    description: 'Delivered a pinpoint 40-yard through ball that split the defense, setting up the winning goal in the state semifinals. The pass showcased exceptional vision and technical precision.',
    date: 'October 24, 2024',
    match: 'vs. Westfield Academy',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'n3',
    title: 'Defensive Interception & Counter Attack',
    description: 'Intercepted a pass in the midfield, dribbled past three defenders, and assisted the opening goal within 12 seconds. A textbook example of turning defense into offense.',
    date: 'October 22, 2024',
    match: 'vs. Riverside Prep',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop'
  }
];

const App: React.FC = () => {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PerformanceStats />
        <AcademicsCharacter />
        <Highlights highlights={MOCK_HIGHLIGHTS} />
        <Appraisals />
      </main>
      <Footer />
    </div>
  );
};

export default App;
