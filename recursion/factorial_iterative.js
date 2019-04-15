function factorial(num) {

    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    console.log(total)
}
factorial(3);
factorial(5);
factorial(10);