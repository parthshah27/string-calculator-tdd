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
    
    
});
