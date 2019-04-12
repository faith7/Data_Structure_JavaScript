// finding sumzero in sorted array => [-3,-2,-1,0,1,2,3] 

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return "sumZero does not exist!";
}

console.log(sumZero([-5, -4, -3, -2, -1, 0, 11, 20])); 