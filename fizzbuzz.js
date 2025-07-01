// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = [];
        let savedOutput = "";
        // Multiple of 3
        if (i % 3 == 0) {
            output.push("Fizz");
        }
        if (i % 13 == 0) {
            savedOutput = "Fezz";
            output.push(savedOutput);
        }

        // Multiple of 5
        if (i % 5 == 0) {
            output.push("Buzz");
        }
        if (i % 7 == 0) {
            output.push("Bang");
        }
        if (i % 11 == 0) {
            output = [savedOutput, "Bong"];
        }
        // Reverse the output if necessary
        if (i % 17 == 0) {
            output.reverse();
        }
        // Log the number if the output array is empty,
        // otherwise log the output
        console.log(output.length == 0 ? i : output.join(''));
    }

}

// Now, we run the main function:
fizzbuzz();

