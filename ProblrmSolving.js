function countVowels(str){
    let count = 0
    for(let i = 0; i < str.length; i++ ){
        let vo = "aioueAIOUE"
        if(vo.includes(str[i])){
            count++
        }
    }
    return count
}
console.log( countVowels("hello"))
console.log( countVowels("xyz"))
console.log( countVowels("AaEeIiOoUu"))