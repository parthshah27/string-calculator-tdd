class StringCalculator {
    add(numbers) {
        if (!numbers) return 0; // Return 0 if input is empty
    
        // Split by default comma delimiter
        const numberList = numbers.split(",").map((num) => parseInt(num, 10));
    
        return numberList.reduce((sum, num) => sum + num, 0); // Sum all numbers
    }
}

module.exports = StringCalculator;
