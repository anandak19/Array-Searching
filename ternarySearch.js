function ternarySearch(arr, left, right, target) {
  // Base condition: check if the search range is valid
  if (left <= right) {
    // Calculate the first middle index (mid1)
    let mid1 = left + Math.floor((right - left) / 3);
    // Calculate the second middle index (mid2)
    let mid2 = right - Math.floor((right - left) / 3);

    // Check if the target is found at mid1
    if (arr[mid1] === target) {
      return mid1;
    }
    // Check if the target is found at mid2
    if (arr[mid2] === target) {
      return mid2;
    }

    // If target is smaller than arr[mid1], search in the left third (from left to mid1-1)
    if (target < arr[mid1]) {
      return ternarySearch(arr, left, mid1 - 1, target);
    }
    // If target is larger than arr[mid2], search in the right third (from mid2+1 to right)
    else if (target > arr[mid2]) {
      return ternarySearch(arr, mid2 + 1, right, target);
    }
    // Otherwise, target must be in the middle third (between mid1+1 and mid2-1)
    else {
      return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
    }
  }
  // If the range becomes invalid (left > right), return -1 (target not found)
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;
let result = ternarySearch(arr, 0, arr.length - 1, target);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found.");
}
