// Create an array
let numbers = [5, 3, 8, 1, 2, 7, 4];

// 1. Using find() to find a specific value
let found = numbers.find(num => num > 4);  // Find the first number greater than 4
console.log("Found:", found);  // Output: Found: 5

// 2. Using includes() to check if a value exists in the array
let includesFive = numbers.includes(5);  // Check if 5 is in the array
console.log("Includes 5:", includesFive);  // Output: Includes 5: true

// 3. Using sort() to sort the array in ascending order
let sortedNumbers = numbers.sort((a, b) => a - b);  // Sorting numbers in ascending order
console.log("Sorted:", sortedNumbers);  // Output: Sorted: [1, 2, 3, 4, 5, 7, 8]

// 4. Using concat() to merge with another array
let moreNumbers = [10, 11, 12];
let mergedArray = numbers.concat(moreNumbers);  // Merge numbers with moreNumbers
console.log("Merged:", mergedArray);  // Output: Merged: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12]

// 5. Using reverse() to reverse the array
let reversedArray = mergedArray.reverse();  // Reversing the array
console.log("Reversed:", reversedArray);  // Output: Reversed: [12, 11, 10, 8, 7, 5, 4, 3, 2, 1]

// 6. Using reduce() to sum up all the elements
let sum = mergedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // Summing up the array
console.log("Sum:", sum);  // Output: Sum: 63
