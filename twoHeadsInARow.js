// Two Heads In A Row
const totalGames = 100
const coinFlips = 3
let wonGames = 0;
const _ = require('lodash');

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
