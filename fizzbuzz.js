const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What number would you like to print up to? ', (numString) => {
    // Now, we run the main function:
    let rules = [...process.argv];
    rules.splice(0, 2);
    fizzbuzz(parseInt(numString), rules);
    rl.close();
})

// This is our main function
function fizzbuzz(maxNum, rules) {
    for (let i = 1; i <= maxNum; i++) {
        let output = [];
        if (rules.includes('3')) {
            output = addTest(i, 
                output, 
                (i) => i % 3 == 0 ,
                (output) => output.concat(["Fizz"])
            );
        }
        if (rules.includes('5')) {
            output = addTest(i, 
                output, 
                (i) => i % 5 == 0 ,
                (output) => output.concat(["Buzz"])
            );
        }
        
        if (rules.includes('7')) {
            output = addTest(i, 
                output, 
                (i) => i % 7 == 0 ,
                (output) => output.concat(["Bang"])
            );
        }

        if (rules.includes('11')) {
            // Adds 'Bong', but ignores any output up to this point
            output = addTest(i, 
                output, 
                (i) => i % 11 == 0 ,
                _ => ["Bong"]
            );
        }

        // Add 'Fezz' immediately before the first item beginning with B
        // If there is no such item, just append 'Fezz' to the end
        if (rules.includes('13')) {
            output = addTest(i, 
                output, 
                (i) => i % 13 == 0,
                (output) => {
                    const idx = output.findIndex(s => s.length > 0 && s[0] == 'B');
                    if (idx == -1) {
                        return output.concat(["Fezz"]);
                    }
                    output.splice(idx, 0, "Fezz");
                    return output;
                }
            );
        }

        if (rules.includes('17')) {
            output = addTest(i, 
                output, 
                (i) => i % 17 == 0 ,
                (output) => output.reverse()
            );
        }

        // Log the number if the output array is empty,
        // otherwise log the output
        console.log(output.length == 0 ? i : output.join(''));
    }
}

function addTest(i, output, testFunc, actionFunc) {
    /* If testFunc(i) returns true, then output the result
    of performing actionFunc on output. Otherwise, return
    the original output
    */
    if (testFunc(i)) {
        return actionFunc(output);
    }
    else {
        return output;
    }
    
}

