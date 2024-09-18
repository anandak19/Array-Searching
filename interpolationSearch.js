function interpolationSearch(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi && target >= arr[lo] && target <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (target - arr[lo]));
    if (arr[pos] === target) {
      return pos;
    }
    if (arr[pos] < target) {
      lo = pos + 1;
    } else {
      hi = pos - 1;
    }
  }
  return -1;
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
let x = 35;
let index = interpolationSearch(arr, x);

if (index != -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}
