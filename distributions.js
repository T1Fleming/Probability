const TOTAL_RUNS = 100;
const _ = require('lodash');

// Initialize Array
let resArray = [];
for (i = 0; i < 10; i++) {
    resArray[i] = 0;
}

// Uniform Distribution Simulation
for (i = 0; i < TOTAL_RUNS; i++) {
    const gen = _.random(0, 9);
    resArray[gen] = resArray[gen] + 1;
}

// Initialize Array
let resArrayN = [];
for (i = 0; i < 11; i++) {
    resArrayN[i] = 0;
}

// Normal Distribution Simulation
for (i = 0; i < TOTAL_RUNS; i++) {
    const gen1 = _.random(1, 6);
    const gen2 = _.random(1, 6);
    const index = (gen1 + gen2) - 2
    resArrayN[index] = resArrayN[index] + 1;
}
