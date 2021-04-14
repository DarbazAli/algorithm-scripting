// Tornament Winner

const HOME_TEAM_WON = 1

const updateScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0
  scores[team] += points
}

// O(n) Time | O(K) Space
const tornamentWinner = (competitions, results) => {
  let bestTeam = ''
  let scores = { [bestTeam]: 0 }

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i]
    const [homeTeam, awayTeam] = competitions[i]

    const winnerTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam
    updateScores(winnerTeam, 3, scores)

    if (scores[winnerTeam] > scores[bestTeam]) {
      bestTeam = winnerTeam
    }
  }

  return bestTeam
}

const comp = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
]

const result = [0, 0, 1]

console.log(tornamentWinner(comp, result))
