// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        // Multiple of 3
        if (i % 3 == 0) {
            output = output + "Fizz";
        }
        // Multiple of 5
        if (i % 5 == 0) {
            output = output + "Buzz";
        }
        // Log the number if the output string is empty,
        // otherwise log the output
        console.log(output == "" ? i : output);
    }

}

// Now, we run the main function:
fizzbuzz();

