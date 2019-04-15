function sumRange(num) {

    if (num <= 0)
        return "Your input should be greter than 0";

    if (num === 1) {
        return 1;
    }

    return num + sumRange(num - 1);
}

console.log(sumRange(3));
console.log(sumRange(5));
console.log(sumRange(-5));