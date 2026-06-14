function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("hello"));
console.log(countVowels("HELLO"));
console.log(countVowels("xyz"));
console.log(countVowels(""));
console.log(countVowels("AaEeIiOoUu")); 