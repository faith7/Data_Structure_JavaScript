function factorial(num) {

    if(num === 1) return 1; 
    return num*factorial(num-1); 
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));

// assumption: num is natural number

// function factorial(num) {

//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     console.log(total)
// }
// factorial(3);
// factorial(5);
// factorial(10);