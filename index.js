const _ = require('lodash');

// Probability Tester
let winCount = 0;
let totalGames = 0;

for (i = 0; i < TOTAL_RUNS; i++) {
    const gen = _.random(1, 100)
    if (gen == 2) {
        winCount += 1;
    }
    totalGames += 1;
}


//console.log(`You won ${winCount}/${totalGames} games! (Ratio of ${winCount / totalGames})`)

// console.log(resArray)
// console.log(resArrayN)

