function longestWord(array) {
    return array.reduce((longest, word)=>word.length>longest.length ? word:longest, "");    
}

console.log(longestWord(["hello", "world", "Javascript", "is", "awesome"]));