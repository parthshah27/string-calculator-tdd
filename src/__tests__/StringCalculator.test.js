const StringCalculator = require('../StringCalculator'); // Import the StringCalculator class

// Group related tests under a describe block
describe("StringCalculator", () => {
    let calculator;

    // Create a new instance of StringCalculator before each test
    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test("should return 0 for an empty string", () => {
        expect(calculator.add("")).toBe(0); // Input is empty, output should be 0
    });

    test("should return the number itself for a single number", () => {
        expect(calculator.add("1")).toBe(1); // Single number 1
        expect(calculator.add("5")).toBe(5); // Single number 5
    });

    test("should return the sum of two numbers", () => {
        expect(calculator.add("1,2")).toBe(3); // Sum of 1 and 2
    });

    test("should return the sum of multiple numbers", () => {
        expect(calculator.add("1,2,3,4")).toBe(10); // Sum of 1, 2, 3, and 4
    });

    test("should handle newlines as delimiters", () => {
        expect(calculator.add("1\n2,3")).toBe(6); // Newline between numbers
    });

    test("should support custom delimiters", () => {
        expect(calculator.add("//;\n1;2;3")).toBe(6); // Custom delimiter ";"
        expect(calculator.add("//|\n4|5|6")).toBe(15); // Custom delimiter "|"
    });

    test("should throw an exception for negative numbers", () => {
        expect(() => calculator.add("-1,2,-3")).toThrow(
            "Negative numbers not allowed: -1, -3"
        ); // Throws error for -1 and -3
    });

    test("should return the sum even with different delimiters and newlines", () => {
        expect(calculator.add("//;\n1;2\n3")).toBe(6); // Mixed delimiters and newlines
    });

    test("should ignore numbers greater than 1000", () => {
        expect(calculator.add("2,1001")).toBe(2); // 1001 is ignored
        expect(calculator.add("2,1000")).toBe(1002); // 1000 is included
    });
    
    test("should handle delimiters of any length", () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6); // Delimiter is ***
    });
    
    test("should handle multiple delimiters", () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toBe(6); // Delimiters are * and %
    });
    
    test("should handle multiple delimiters with any length", () => {
        expect(calculator.add("//[***][%%%]\n1***2%%%3")).toBe(6); // Delimiters are *** and %%%
    });
    
});
