function binarySearch(arr, target) {
  let start = 0
  let end = arr.length -1

  while (start <= end) {
    let mid = Math.floor((start + end)/2)

    if (arr[mid] == target) {
      return "Target found at position "+mid
    }else if(arr[mid] < target) {
      start = mid + 1
    }else{
      end = mid -1
    }
  }
  return -1
}

arr = [2, 15, 6, 7, 9, 5, 22, 36, 14]
target = 22
const result = binarySearch(arr, target)
console.log(result);
