function jumpSearch(arr, target) {
  // Get the length of the array
  const n = arr.length;

  // Initialize the size of the block to jump (using the square root of array length)
  let jump = Math.floor(Math.sqrt(n));

  // Initialize the previous index (start of the current block) as 0
  let prev = 0;

  // Perform the initial jumps to find the block where the target could be
  // Continue jumping until the current element is greater than or equal to the target
  while (arr[Math.min(jump, n) - 1] < target) {
    // Move previous index to the current jump position
    prev = jump;

    // Increase the jump to the next block
    jump += Math.floor(Math.sqrt(n));

    // If prev is greater than or equal to the length of the array, the target is not present
    if (prev >= n) {
      return -1;  // Target not found
    }
  }

  // Perform a linear search within the block between `prev` and `jump`
  for (let i = prev; i < Math.min(jump, n); i++) {
    // If the target is found, return its index
    if (arr[i] === target) {
      return i;
    }
  }

  // If the target is not found after searching the block, return -1
  return -1;
}

// Example usage:
let arr = [0, 1, 3, 4, 5, 9, 12, 18, 21, 23, 29];
let target = 18;
let index = jumpSearch(arr, target);

if (index !== -1) {
  console.log(`Element found at index: ${index}`);
} else {
  console.log("Element not found in array.");
}
