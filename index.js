const _ = require('lodash');

// const TOTAL_RUNS = 100;


// // Initialize Array
// let resArray = [];
// for (i = 0; i < 10; i++) {
//     resArray[i] = 0;
// }

// // Uniform Distribution Simulation
// for (i = 0; i < TOTAL_RUNS; i++) {
//     const gen = _.random(0, 9);
//     resArray[gen] = resArray[gen] + 1;
// }

// // Initialize Array
// let resArrayN = [];
// for (i = 0; i < 11; i++) {
//     resArrayN[i] = 0;
// }

// // Normal Distribution Simulation
// for (i = 0; i < TOTAL_RUNS; i++) {
//     const gen1 = _.random(1, 6);
//     const gen2 = _.random(1, 6);
//     const index = (gen1 + gen2) - 2
//     resArrayN[index] = resArrayN[index] + 1;
// }

// // Probability Tester
// let winCount = 0;
// let totalGames = 0;

// for (i = 0; i < TOTAL_RUNS; i++) {
//     const gen = _.random(1, 100)
//     if (gen == 2) {
//         winCount += 1;
//     }
//     totalGames += 1;
// }

// Two Heads In A Row
const totalGames = 100
const coinFlips = 3
let wonGames = 0;

for (i = 0; i < totalGames; i++) {
    let inARowCount = 0;
    let winCondition = 0;

    for (j = 0; j < coinFlips; j++) {

        const gen = _.random(1, 2);

        // Heads (Win)
        if (gen == 1) {
            if (inARowCount == 0) {
                inARowCount += 1;
            }
            else if (inARowCount >= 1) {
                // console.log('WINNER')
                // console.log(inARowCount)
                winCondition = 1;
            }
        }

        // Tails
        if (gen == 2) {
            if (inARowCount == 0) {
                // Do Nothing
            }
            if (inARowCount >= 1) {
                inARowCount = 0;
            }
        }
    }

    // Check Win
    if (winCondition == 1) {
        wonGames += 1;
    }
}

console.log(`You won ${wonGames}/${totalGames} games! (Ratio of ${wonGames / totalGames})`)

//console.log(`You won ${winCount}/${totalGames} games! (Ratio of ${winCount / totalGames})`)

// console.log(resArray)
// console.log(resArrayN)

