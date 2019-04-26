function getDigit(num, k) {
    return Math.floor(Math.abs(num) / Math.pow(10, k)) % 10;
}

function countDigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, countDigit(arr[i]));
    }
    return max;
}

function radixSort(arr) {
    let max = maxDigit(arr);
    for (let k = 0; k < max; k++) {
        let bucket = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            bucket[digit].push(arr[i]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}
console.log(radixSort([23, 345, 5367, 12, 2345, 9852, 12345]));