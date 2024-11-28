class StringCalculator {
    /**
     * Main method to add numbers from a string.
     * @param {string} numbers - Input string containing numbers separated by delimiters.
     * @returns {number} - The sum of the numbers.
     */
    add(numbers) {
        if (!numbers) return 0; // Return 0 if input is empty

        const { delimiters, numberString } = this.extractDelimiters(numbers);

        // Create a regex pattern for all delimiters
        const delimiterRegex = new RegExp(`[${delimiters.join("")}\n]`);

        // Split the number string using the regex and parse to integers
        const numberList = numberString
            .split(delimiterRegex)
            .map((num) => parseInt(num, 10))
            .filter((num) => !isNaN(num) && num <= 1000); // Ignore numbers greater than 1000

        // Find all negative numbers
        const negatives = numberList.filter((num) => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        // Sum all the valid numbers and return the result
        return numberList.reduce((sum, num) => sum + num, 0);
    }

    /**
     * Extracts the custom delimiters and the number string from the input.
     * Handles single/multiple delimiters of any length.
     * @param {string} input - Input string, which may include custom delimiter definitions.
     * @returns {Object} - An object containing an array of delimiters and the actual number string.
     */
    extractDelimiters(input) {
        if (input.startsWith("//")) {
            const delimiterMatch = input.match(/^\/\/(\[.*\]|.)\n(.*)$/s);
            if (delimiterMatch) {
                const rawDelimiters = delimiterMatch[1];
                const numberString = delimiterMatch[2];

                // Handle multiple delimiters defined with square brackets
                const delimiters = rawDelimiters.startsWith("[")
                    ? rawDelimiters.match(/\[(.+?)\]/g).map((d) => d.slice(1, -1)) // Extract values inside []
                    : [rawDelimiters]; // Single character delimiter

                return { delimiters, numberString };
            }
        }

        // Default case: delimiter is a comma
        return { delimiters: [","], numberString: input };
    }
}

// Export the class for use in other files
module.exports = StringCalculator;