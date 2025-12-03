function inline(numbers) {
    return numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

// Example usage:
const input = [-1, 2, -3, 4, 5];
console.log(inline(input));
