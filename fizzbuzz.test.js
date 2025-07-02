const fb = require('./fizzbuzz');

describe('FizzBuzz test for \'Fizz\'', () => {
    it('Checks if FizzBuzz gives the correct output for input \'3\'', () => {
        const expectedOutput = 'Fizz';
        expect(fb.fizzbuzz(3, ['3'])).toEqual(expectedOutput);
    });
});

describe('FizzBuzz test for \'FizzBang\'', () => {
    it('Checks if FizzBuzz gives the correct output for input \'21\'', () => {
        const expectedOutput = 'FizzBang';
        expect(fb.fizzbuzz(3*7, ['3', '5', '7'])).toEqual(expectedOutput);
    });
});