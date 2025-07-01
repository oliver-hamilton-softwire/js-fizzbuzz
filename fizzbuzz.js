// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    for (let i = 1; i <= 100; i++) {
        // Multiple of 3 and 5
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        // Multiple of 5
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        // Multiple of 3
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        // Neither a multiple of 3 nor 5
        else {
            console.log(i);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

