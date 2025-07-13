// JavaScript Function: Get First Element(s) of an Array

function first(arr, n) {
  if (arr == null) return [];         // If array is null or undefined, return empty array
  if (n == null) return arr[0];       // If n is not provided, return the first element
  if (n < 0) return [];               // If n is negative, return empty array
  return arr.slice(0, n);             // Return the first n elements
}

// Test Data
console.log(first([7, 9, 0, -2]));        // Output: 7
console.log(first([], 3));               // Output: []
console.log(first([7, 9, 0, -2], 3));     // Output: [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));     // Output: [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));    // Output: []
