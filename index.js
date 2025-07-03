const readline = require('readline');
const fb = require('./fizzbuzz');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const customRules = [];

// const createRule = (rl) => {
//
// }

rl.question('What number would you like to print up to? ', (numString) => {
    if (process.argv.length <= 2) {
        rl.question('You didn\'t enter any command-line arguments. Would you like to specify your own rule (Y/N)? ', (answer) => {
            if (answer === 'Y') {
                rl.question("You want to perform an action when the number is a multiple of what? ", (multiple) => {
                    rl.question(`Do you want to
                            1) Add a new word to the end of the output
                            2) Reverse the output
                            `, (actionNum) => {
                        switch (actionNum) {
                            case '1':
                                rl.question('What word would you like to add? ', (actionWord) => {
                                    customRules.push([
                                        (i) => (i % parseInt(multiple)) == 0,
                                        (output) => output.concat([actionWord])
                                    ]);
                                    fizzbuzzRepeat(parseInt(numString), [], customRules);
                                    rl.close();
                                });
                                break;

                            case '2':
                                customRules.push([
                                    (i) => (i % parseInt(multiple)) == 0,
                                    (output) => output.reverse(),
                                ]);
                                fizzbuzzRepeat(parseInt(numString), [], customRules);
                                rl.close();
                        }

                    });
                });
            } else {
                fizzbuzzRepeat(parseInt(numString), [], customRules);
                rl.close();
            }
        });
    }
    else {
        // Now, we run the main function, using the command-line arguments
        // to determine which rules are applied.
        // Each rule is specified as a separate command-line argument
        let rules = [...process.argv];
        rules.splice(0, 2);
        fizzbuzzRepeat(parseInt(numString), rules);
        rl.close();
    }
});



// This is our main function
function fizzbuzzRepeat(maxNum, rules, customRules) {
    for (let i = 1; i <= maxNum; i++) {
        console.log(fb.fizzbuzz(i, rules, customRules));
    }
}