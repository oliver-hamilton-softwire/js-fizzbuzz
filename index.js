const readline = require('readline');
const fb = require('./fizzbuzz');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What number would you like to print up to? ', (numString) => {
    // Now, we run the main function, using the command-line arguments
    // to determine which rules are applied.
    // Each rule is specified as a separate command-line argument
    let rules = [...process.argv];
    rules.splice(0, 2);
    fizzbuzzRepeat(parseInt(numString), rules);
    rl.close();
})

// This is our main function
function fizzbuzzRepeat(maxNum, rules) {
    for (let i = 1; i <= maxNum; i++) {
        console.log(fb.fizzbuzz(i, rules));
    }
}