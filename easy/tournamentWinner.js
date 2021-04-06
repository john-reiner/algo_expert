function tournamentWinner(competitions, results) {

    let teamsWithPoints = {};

    for (let i = 0; i < competitions.length; i++) {
        if (results[i] === 0) {
            if (teamsWithPoints[competitions[i][1]]) {
                teamsWithPoints[competitions[i][1]] += 3
            } else {
                teamsWithPoints[competitions[i][1]] = 3
            }
        } else {
            if (teamsWithPoints[competitions[i][0]]) {
                teamsWithPoints[competitions[i][0]] += 3
            } else {
                teamsWithPoints[competitions[i][0]] = 3
            }
        }
        
    }

    return Object.keys(teamsWithPoints).reduce(function(a, b){ return teamsWithPoints[a] > teamsWithPoints[b] ? a : b });

}

const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))