// Understanding the Problem
// A monotonic array is an array that is either:

// Monotone Increasing: Every next element is greater than or equal to the previous one.
// Example: [1, 2, 2, 3, 4, 5] ✅ (Non-decreasing)
// Monotone Decreasing: Every next element is less than or equal to the previous one.
// Example: [9, 7, 5, 3, 3, 1] ✅ (Non-increasing)
// If the array follows either of these conditions, return true, otherwise return false.

function isMonotonic(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            decreasing = false; // Not decreasing if we find an increasing pair
        }
        if (arr[i] < arr[i - 1]) {
            increasing = false; // Not increasing if we find a decreasing pair
        }
    }

    return increasing || decreasing;
}

// Test Cases
console.log(isMonotonic([1, 2, 2, 3, 4])); // true (Increasing)
console.log(isMonotonic([9, 7, 5, 3, 2])); // true (Decreasing)
console.log(isMonotonic([1, 3, 2, 4]));    // false (Not Monotonic)
console.log(isMonotonic([5, 5, 5, 5]));    // true (Constant is also Monotonic)
