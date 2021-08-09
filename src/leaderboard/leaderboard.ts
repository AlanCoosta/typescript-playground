import {
  DrawProps,
  MatchProps,
  TeamProps,
  WinnerAndLoserProps,
} from "./leaderboard.types";

const teams: TeamProps[] = [
  {
    name: "Flamengo",
    matchesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalsDifference: 0,
    points: 0,
  },
  {
    name: "Vasco",
    matchesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalsDifference: 0,
    points: 0,
  },
  {
    name: "Palmeiras",
    matchesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalsDifference: 0,
    points: 0,
  },
  {
    name: "Bragantino",
    matchesPlayed: 0,
    win: 0,
    draw: 0,
    loss: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalsDifference: 0,
    points: 0,
  },
];

function matchResult({ homeTeam, visitingTeam }: MatchProps) {
  addStatisticsMatch({ homeTeam, visitingTeam });
}

function addStatisticsMatch({ homeTeam, visitingTeam }: MatchProps) {
  isTheSameTeam(homeTeam.name, visitingTeam.name);
  resultMatch({ homeTeam, visitingTeam });
}

function isTheSameTeam(homeTeamName: string, visitingTeamName: string) {
  if (homeTeamName === visitingTeamName)
    throw new Error("The team cannot against itself");
}

function resultMatch({ homeTeam, visitingTeam }: MatchProps) {
  if (homeTeam.goalsFor > visitingTeam.goalsFor) {
    addStatisticsWinnerAndLoser({
      winner: homeTeam,
      loser: visitingTeam,
    });
  } else if (homeTeam.goalsFor === visitingTeam.goalsFor) {
    addStatisticsDraw({
      drawTeamA: homeTeam,
      drawTeamB: visitingTeam,
    });
  } else if (homeTeam.goalsFor < visitingTeam.goalsFor) {
    addStatisticsWinnerAndLoser({
      winner: visitingTeam,
      loser: homeTeam,
    });
  }
}

function addStatisticsWinnerAndLoser({ winner, loser }: WinnerAndLoserProps) {
  const winnerTeamIndex = teams.findIndex(
    (team) => team.name.toLocaleLowerCase() === winner.name.toLocaleLowerCase()
  );
  const loserTeamIndex = teams.findIndex(
    (team) => team.name.toLocaleLowerCase() === loser.name.toLocaleLowerCase()
  );

  const winnerTeam = teams[winnerTeamIndex];
  const loserTeam = teams[loserTeamIndex];

  winnerTeam.matchesPlayed += 1;
  winnerTeam.win += 1;
  winnerTeam.points += 3;
  winnerTeam.goalsFor += winner.goalsFor;
  winnerTeam.goalsAgainst += loser.goalsFor;
  winnerTeam.goalsDifference = winnerTeam.goalsFor - winnerTeam.goalsAgainst;

  loserTeam.matchesPlayed += 1;
  loserTeam.loss += 1;
  loserTeam.points += 0;
  loserTeam.goalsFor += loser.goalsFor;
  loserTeam.goalsAgainst += winner.goalsFor;
  loserTeam.goalsDifference = loserTeam.goalsFor - loserTeam.goalsAgainst;
}

function addStatisticsDraw({ drawTeamA, drawTeamB }: DrawProps) {
  const drawTeamAIndex = teams.findIndex(
    (team) =>
      team.name.toLocaleLowerCase() === drawTeamA.name.toLocaleLowerCase()
  );
  const drawTeamBIndex = teams.findIndex(
    (team) =>
      team.name.toLocaleLowerCase() === drawTeamB.name.toLocaleLowerCase()
  );

  const teamA = teams[drawTeamAIndex];
  const teamB = teams[drawTeamBIndex];

  teamA.matchesPlayed += 1;
  teamA.draw += 1;
  teamA.points += 1;
  teamA.goalsFor += drawTeamA.goalsFor;
  teamA.goalsAgainst += drawTeamB.goalsFor;
  teamA.goalsDifference = teamA.goalsFor - teamA.goalsAgainst;

  teamB.matchesPlayed += 1;
  teamB.draw += 1;
  teamB.points += 1;
  teamB.goalsFor += drawTeamB.goalsFor;
  teamB.goalsAgainst += drawTeamA.goalsFor;
  teamB.goalsDifference = teamB.goalsFor - teamB.goalsAgainst;
}

matchResult({
  homeTeam: {
    name: "flamengo",
    goalsFor: 3,
  },
  visitingTeam: {
    name: "vasco",
    goalsFor: 1,
  },
});

console.log(teams);
