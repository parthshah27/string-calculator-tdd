class StringCalculator {
    add(numbers) {
        if (!numbers) return 0; // Return 0 if input is empty

        let delimiterRegex = /,|\n/; // Default delimiters: comma or newline

        // Check for custom delimiters
        if (numbers.startsWith("//")) {
            const customDelimiterMatch = numbers.match(/^\/\/(\[.*?\]|.)\n(.*)$/s);
            if (customDelimiterMatch) {
                const rawDelimiters = customDelimiterMatch[1];
                numbers = customDelimiterMatch[2];

                // Handle single or multiple custom delimiters
                if (rawDelimiters.startsWith("[")) {
                    const delimiters = rawDelimiters
                        .match(/\[(.+?)\]/g)
                        .map((d) => d.slice(1, -1)); // Extract delimiters from brackets
                    delimiterRegex = new RegExp(`${delimiters.map(this.escapeRegex).join("|")}`);
                } else {
                    delimiterRegex = new RegExp(this.escapeRegex(rawDelimiters));
                }
            }
        }

        const numberList = numbers
                            .split(delimiterRegex)
                            .map((num) => parseInt(num, 10))
                            .filter((num) => !isNaN(num) && num <= 1000); // Ignore NaN and numbers > 1000

        const negatives = numberList.filter((num) => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return numberList.reduce((sum, num) => sum + num, 0); // Return the sum
    }

    // Helper to escape special characters in regex
    escapeRegex(string) {
        return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
}

module.exports = StringCalculator;
