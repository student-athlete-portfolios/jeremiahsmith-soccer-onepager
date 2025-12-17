export interface Team {
  id: string;
  name: string;
  logo: string;
  wins: number;
  losses: number;
  draws: number;
  points: number;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  stadium: string;
  status: 'UPCOMING' | 'LIVE' | 'FINISHED';
  homeScore?: number;
  awayScore?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface Player {
  id: string;
  name: string;
  role: string;
  image: string;
  number: number;
}
