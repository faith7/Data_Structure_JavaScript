function validAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let anagram = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        anagram[letter] ? anagram[letter]++ : anagram[letter] = 1;
    }

    console.log(anagram);

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!anagram[letter]) {
            return false;
        } else {
            anagram[letter]--;
        }
    }
    return true;
}

console.log(validAnagram('hello', 'ohlle'));
