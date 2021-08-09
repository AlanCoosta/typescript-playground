export interface TeamProps {
  name: string;
  matchesPlayed: number;
  win: number;
  draw: number;
  loss: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDifference: number;
  points: number;
}

export interface GameStats {
  name: string;
  goalsFor: number;
}

export interface MatchProps {
  homeTeam: GameStats;
  visitingTeam: GameStats;
}

export interface WinnerAndLoserProps {
  winner: GameStats;
  loser: GameStats;
}

export interface DrawProps {
  drawTeamA: GameStats;
  drawTeamB: GameStats;
}
