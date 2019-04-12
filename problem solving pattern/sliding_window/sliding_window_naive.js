//write a function called maxSubarraySum which accepts an array of integers and number called n. 
// The function should calculate an maximum sum of n consecutive elemeents in an array
//example> maxSubarraySum([1,2,5,2,8,2,5],2) returns 10 

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}


console.log(maxSubarraySum([1, 2, 5, 2, 8, 2, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17 
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6 