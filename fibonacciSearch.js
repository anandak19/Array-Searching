function fibonacciSearch(arr, target) {
    // Get the length of the array
    let n = arr.length;

    // Initialize Fibonacci numbers (fibM2 is (m-2)'th Fibonacci number, fibM1 is (m-1)'th Fibonacci number)
    let fibM2 = 0; // Fibonacci number F(m-2)
    let fibM1 = 1; // Fibonacci number F(m-1)
    let fibM = fibM2 + fibM1; // Fibonacci number F(m)

    // Find the smallest Fibonacci number greater than or equal to n (array length)
    while (fibM <= n) {
        fibM2 = fibM1;  // Shift Fibonacci numbers down (F(m-2) becomes F(m-1))
        fibM1 = fibM;   // F(m-1) becomes F(m)
        fibM = fibM2 + fibM1; // Calculate new Fibonacci number F(m)
    }

    // Marks the eliminated range from the front of the array
    let offset = -1;

    // While we have more than 1 element to inspect
    while (fibM > 1) {
        // Check if fibM2 is a valid location (within array bounds)
        let i = Math.min(offset + fibM2, n - 1);

        // If target is greater than the value at index i, cut the subarray from offset to i
        if (arr[i] < target) {
            fibM = fibM1;        // Move the Fibonacci window down
            fibM1 = fibM2;       // Shift F(m-1) to F(m-2)
            fibM2 = fibM - fibM1; // Recalculate F(m-2)
            offset = i;          // Update offset to i
        }
        // If target is smaller, cut the subarray after i
        else if (arr[i] > target) {
            fibM = fibM2;        // Move the Fibonacci window down
            fibM1 = fibM1 - fibM2; // Shift F(m-1) down
            fibM2 = fibM - fibM1;  // Recalculate F(m-2)
        }
        // Target found, return the index
        else {
            return i;
        }
    }

    // If the last element is the target
    if (fibM1 && arr[offset + 1] === target) {
        return offset + 1;
    }

    // Target not found, return -1
    return -1;
}



let arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100];
let target = 22;
let result = fibonacciSearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found.");
}