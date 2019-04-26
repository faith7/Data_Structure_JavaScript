function pivot(arr, start = 0, end = arr.length - 1) {
    let swap = (arr, index1, index2) => { [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; };
    let pivot = arr[start];
    let index = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            index++;
            swap(arr, index, i);
        }
    }
    swap(arr, start, index);
    return index;
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([7, 3, 1, 5, 10, 8]));
console.log(quickSort([1, 5, 3, 7, 10]));