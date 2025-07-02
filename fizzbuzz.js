// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 3*5*17; i++) {
        let output = [];
        output = addTest(i, 
            output, 
            (i) => i % 3 == 0 ,
            (output) => output.concat(["Fizz"])
        );

        output = addTest(i, 
            output, 
            (i) => i % 5 == 0 ,
            (output) => output.concat(["Buzz"])
        );

        output = addTest(i, 
            output, 
            (i) => i % 7 == 0 ,
            (output) => output.concat(["Bang"])
        );

        // Adds 'Bong', but ignores any output up to this point
        output = addTest(i, 
            output, 
            (i) => i % 11 == 0 ,
            _ => ["Bong"]
        );

        // Add 'Fezz' immediately before the first item beginning with B
        // If there is no such item, just append 'Fezz' to the end
        output = addTest(i, 
            output, 
            (i) => i % 13 == 0,
            (output) => {
                const idx = output.findIndex(s => s.length > 0 && s[0] == 'B');
                if (idx == -1) {
                    return output.concat(["Fezz"]);
                }
                return output.toSpliced(idx, 0, "Fezz");
            }
        );

        output = addTest(i, 
            output, 
            (i) => i % 17 == 0 ,
            (output) => output.toReversed()
        );

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

// Now, we run the main function:
fizzbuzz();

