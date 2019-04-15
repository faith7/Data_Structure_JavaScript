function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j], arr);
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


console.log(bubble([1, 2, 3, 4, 6, 5]));
console.log(bubble([1, 5, 3, 7, 9]));
console.log(bubble([9, 6, 3, 2, 15])); 