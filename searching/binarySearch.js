function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== num && start <= end) {
        if (num > arr[mid]) {
            start = mid + 1 ;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    if (arr[mid] === num) {
        return mid;
    } else{
        return -1;
    } 
}
console.log(binarySearch([2, 5, 7, 10, 20, 35, 50], 5));
console.log(binarySearch([2, 5, 7, 10, 20, 35, 50,200,1700], 200));