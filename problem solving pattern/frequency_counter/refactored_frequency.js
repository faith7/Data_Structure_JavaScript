function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    counter1 = {};
    counter2 = {};

    for (let i of arr1) {
        counter1[i] = (counter1[i] || 0) + 1;
    }
    for (let i of arr2) {
        counter2[i] = (counter2[i] || 0) + 1;
    }
    console.log(counter1, counter2);

    for (let value in counter1) {
        if (!(value ** 2 in counter2)) {
            return false;
        }
        if (counter1[value] !== counter2[value ** 2]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 2, 3], [1, 4, 4, 25]));

