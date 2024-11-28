# String Calculator TDD

A simple implementation of a **String Calculator** using Test-Driven Development (TDD) principles. This calculator parses a string of numbers separated by custom or default delimiters and returns their sum.

---

## Features

- Handles an empty string as input and returns `0`.
- Accepts single or multiple numbers separated by commas or newlines.
- Supports custom delimiters, defined at the start of the string (e.g., `//;
1;2;3`).
- Throws an error if negative numbers are included, listing all negatives in the exception message.

---

## Folder Structure

```
string-calculator-tdd/
├── src/
│   ├── StringCalculator.js    # Core implementation of String Calculator
│   └── __tests__/             # Contains test files
│       └── StringCalculator.test.js
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

---

## Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

---

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/string-calculator-tdd.git
   ```

2. Navigate to the project directory:
   ```bash
   cd string-calculator-tdd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Run Tests

To run the test suite:

```bash
npm test
```

---

## Example Usage

You can integrate the `StringCalculator` class into your own projects. Here's a quick example:

```javascript
const StringCalculator = require('./src/StringCalculator');

const calculator = new StringCalculator();

console.log(calculator.add("1,2,3"));        // Outputs: 6
console.log(calculator.add("//;
4;5;6"));  // Outputs: 15

try {
    console.log(calculator.add("-1,2,-3")); // Throws an error: "Negative numbers not allowed: -1, -3"
} catch (error) {
    console.error(error.message);
}
```

---

## Project Details

- **Language**: Node.js (JavaScript)
- **Testing Framework**: Jest
- **Author**: Parth Shah
- **License**: MIT

---

## Contributions

Feel free to fork this project, submit issues, or open pull requests to contribute.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
