function insertion(arr) {

    let swap = (i, j, arr) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertion([1, 2, 3, 4, 6, 5]));
console.log(insertion([1, 5, 3, 7, 9]));
console.log(insertion([9, 6, 3, 2, 15]));
console.log(insertion([10, 9, 8, 7, 15, 6, 12])); 