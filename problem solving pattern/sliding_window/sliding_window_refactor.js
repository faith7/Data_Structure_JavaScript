//write a function called maxSubarraySum which accepts an array of integers and number called n. 
// The function should calculate an maximum sum of n consecutive elemeents in an array
//example> maxSubarraySum([1,2,5,2,8,2,5],2) returns 10 
function maxSubarraySum(arr, num) {
    let max = 0;
    let temp = 0;
    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }
    max = temp;
    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        max = Math.max(max, temp);
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 2, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17 
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6 