function countVowels(str){
    let count = 0
    const vo = new Set([
        'a','e','i','o','u','A','E','I','O','U'])
    for(let char of str ){
        if (vo.has(char)){
            count++
        }
    }
    return count
}

console.log(countVowels("hello"));
console.log(countVowels("HELLO"));
console.log(countVowels("xyz"));
console.log(countVowels(""));
console.log(countVowels("AaEeIiOoUu")); 