
const _ = require('lodash');

function convertToFraction(n) {

    // Get decimal length
    const split = n.toString().split(".")[1]
    let multiplier = 0;
    if (split) {
        multiplier = (10 ** split.length)
    } else {
        multiplier = 1;
    }

    return {
        "numerator": n * multiplier,
        "denominator": multiplier
    }


}

function runProbability(n) {
    frac = convertToFraction(n);

    //console.log(frac)

    gen = _.random(1, frac.denominator)

    if (gen <= frac.numerator) {
        return true;
    } else {
        return false;
    }
}


function multiRun(trials, prob) {
    let winCount = 0;
    for (i = 0; i < trials; i++) {
        res = runProbability(prob)
        if (res) {
            winCount++
        }
    }

    return `You won ${winCount}/${trials} games!`
}

// Analytical Solutions

// d is desired probability after N runs
// l is probability of loss after 1 run
function trialsToN(d, l) {
    return Math.log(1 - d) / Math.log(l)
}


// * Prob of winning A game after n trials
// n trials
// p_l probability of losing a game
function probOfWinningAfterN(n, p_l) {
    return 1 - (p_l ** n)
}

myProb = 0.000005;
myTrials = 1000;

console.log(probOfWinningAfterN(myTrials, 1 - myProb))
console.log(multiRun(myTrials, myProb))