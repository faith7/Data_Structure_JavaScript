function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let value of arr1) {
        let index = arr2.indexOf(value ** 2);
        if (index == -1) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
}

let result = same([1, 2, 8, 5], [1, 4, 25, 100]);
console.log(result);