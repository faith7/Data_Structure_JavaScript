function collectOddNumbers(arr) {

    let odds = [];
    function helper(helperInput) {
        if (helperInput.length === 0)
            return;
        if (helperInput[0] % 2 !== 0) {
            odds.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }

    helper(arr);
    return odds;

}


console.log(collectOddNumbers([1, 2, 5, 5, 6, 7, 9]));
console.log(collectOddNumbers([1, 2, 3, 5, 6, 7, 9]));


