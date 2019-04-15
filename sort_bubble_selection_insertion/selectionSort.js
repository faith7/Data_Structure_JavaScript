// function selection(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//             if (arr[i] !== min) {
//                 let temp = arr[i];
//                 arr[i] = arr[min];
//                 arr[min] = temp;
//             }
//         }
//     }
//     return arr;
// }

function selection(arr) {

    let swap = (i, j, arr) =>([arr[i], arr[j]] = [arr[j], arr[i]]);

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (arr[i] !== min) {
            swap(i,min,arr);
        }
    }
    return arr;
}

console.log(selection([1, 2, 3, 4, 6, 5]));
console.log(selection([1, 5, 3, 7, 9]));
console.log(selection([9, 6, 3, 2, 15]));
console.log(selection([10, 9, 8, 7, 15, 6])); 