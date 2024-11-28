class StringCalculator {
    add(numbers) {
        if (!numbers) return 0; // Return 0 if input is empty
    
        if (numbers.startsWith("//")) {
            const delimiter = numbers[2]; // Custom delimiter
            numbers = numbers.slice(4); // Remove the custom delimiter line
            const delimiterRegex = new RegExp(`[${delimiter}\n]`); // Include new line
            const numberList = numbers.split(delimiterRegex).map((num) => parseInt(num, 10));
            return numberList.reduce((sum, num) => sum + num, 0);
        }
        
        // Split by default comma delimiter
        const delimiterRegex = /[,\n]/; // Regex for comma or new line
        // Split by default comma delimiter
        const numberList = numbers.split(delimiterRegex).map((num) => parseInt(num, 10));
        return numberList.reduce((sum, num) => sum + num, 0); // Sum all numbers
        

    
    }
}

module.exports = StringCalculator;
