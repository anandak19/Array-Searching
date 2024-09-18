
function exponentialSearch(arr, target) {
    if(arr[0] === target) return 0

    let i = 1
    while(arr[i] < target && i < arr.length){
        i *= 2
    }

    let start = i/2
    let end = Math.min(i, arr.length -1)
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return mid
        }else if(arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return -1
}


const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11];
const target = 11;
const index = exponentialSearch(arr, target);

if (index !== -1) {
  console.log(`Element found at index: ${index}`);
} else {
  console.log("Element not found");
}