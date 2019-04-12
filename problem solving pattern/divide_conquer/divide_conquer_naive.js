// Given a sorted array of integers, write a function called search that accepts a value and returns the index
//example> search([1,2,3,4,5,6], 4) //3
//search ([1,2,3,4,5],11) //-1 
function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5], 11));
