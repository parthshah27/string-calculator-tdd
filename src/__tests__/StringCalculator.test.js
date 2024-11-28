const StringCalculator = require("../StringCalculator");

describe("StringCalculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test("should return 0 for empty string input", () => {
        expect(calculator.add("")).toBe(0);
    });
});
