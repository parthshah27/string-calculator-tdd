class StringCalculator {
    add(numbers) {
        if (!numbers) return 0; // Return 0 if input is empty
    
        // Split by default comma delimiter
        const numberList = numbers.split(",").map((num) => parseInt(num, 10));
    
        return numberList[0] || 0; // Return the single number or 0 if input is empty
    }
}

module.exports = StringCalculator;
