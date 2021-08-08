interface Team {
  name: string;
  initials: string;
  score: number;
}

const scoreboard: { [key: string]: Team } = {};

function addTeam(name: string, initials: string) {
  scoreboard[name] = {
    name,
    initials,
    score: 0,
  };
}

function addScore(teamName: string) {
  scoreboard[teamName].score += 1;
}

function removeScore(teamName: string) {
  scoreboard[teamName].score -= 1;
}

addTeam("Brasil", "BRA");
addTeam("Espanha", "ESP");

addScore("Brasil");
removeScore("Brasil");

console.table(scoreboard);
