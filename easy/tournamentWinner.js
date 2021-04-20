// function tournamentWinner(competitions, results) {

//     let teamsWithPoints = {};

//     for (let i = 0; i < competitions.length; i++) {
//         if (results[i] === 0) {
//             if (teamsWithPoints[competitions[i][1]]) {
//                 teamsWithPoints[competitions[i][1]] += 3
//             } else {
//                 teamsWithPoints[competitions[i][1]] = 3
//             }
//         } else {
//             if (teamsWithPoints[competitions[i][0]]) {
//                 teamsWithPoints[competitions[i][0]] += 3
//             } else {
//                 teamsWithPoints[competitions[i][0]] = 3
//             }
//         }
        
//     }

//     return Object.keys(teamsWithPoints).reduce(function(a, b){ return teamsWithPoints[a] > teamsWithPoints[b] ? a : b });

// }

function tournamentWinner(competitions, results) {
    let scores = {}
    let leadingTeam = {name: '', score: 0}
    for (let i = 0; i < competitions.length; i++) {
        let winningTeam = results[i] === 0 ? competitions[i][1] : competitions[i][0]

        if (leadingTeam.name === winningTeam) {
            leadingTeam.score += 3
        } else {
            if (leadingTeam.name === '') {
                leadingTeam.name = winningTeam
                leadingTeam.score = 3
            }
            if (scores[winningTeam]) {
                if (scores[winningTeam] + 3 > leadingTeam.score) {
                    leadingTeam.name = winningTeam
                    leadingTeam.score = scores[winningTeam] + 3
                } else {
                    scores[winningTeam] += 3 
                }
            } else {
                scores[winningTeam] = 3
            }
        }
    }
    return leadingTeam.name
}

const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
]

const results = [0, 1, 1, 1, 0, 1]

console.log(tournamentWinner(competitions, results))