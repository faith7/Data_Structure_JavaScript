function bubble(arr) {

    let swap;
    for (let i = 0; i < arr.length; i++) {
        swap = false;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j], arr);
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}


console.log(bubble([1, 2, 3, 4, 6, 5]));
console.log(bubble([1, 5, 3, 7, 9]));
console.log(bubble([9, 6, 3, 2, 15]));
console.log(bubble([10, 9, 8, 7, 15, 6])); 