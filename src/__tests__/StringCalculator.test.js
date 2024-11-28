const StringCalculator = require("../StringCalculator");

describe("StringCalculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test("should return 0 for empty string input", () => {
        expect(calculator.add("")).toBe(0);
    });

    test("should return the number itself for single number input", () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("5")).toBe(5);
    });

    test("should return the sum of multiple numbers separated by commas", () => {
        expect(calculator.add("1,2")).toBe(3);
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

    test("should handle new lines as delimiters", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
        expect(calculator.add("1\n2\n3")).toBe(6);
    });

    test("should handle custom single-character delimiters", () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
        expect(calculator.add("//|\n1|2|3")).toBe(6);
    });    
    
    
});
